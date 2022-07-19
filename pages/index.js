import Head from 'next/head'
import { useEffect, useState } from 'react'
import styled from "styled-components"
import Header from "../components /Header"
import TodoSection from '../components /TodoSection';

const FooterStyles = styled.footer`
border-top: 1px solid;
height: 40px;

span {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
}

`;
export default function Home() {
  const [data, setData] = useState([]);

  const getData = async() => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(() => {
    getData()
  }, []);

  const [newTodo, setNewTodo] = useState({
    title: "",
    completed: false,
    userId: 1
  });

  const handleChangeNewTodoValue = (e) => {
    setNewTodo({...newTodo, title: e.target.value});
  };

  const postData = async() => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(newTodo)
      };

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', requestOptions);

    const postResponse = await response.json();
    
    setData([...data, postResponse]);

    } catch (error) {
      console.log(error.message)
      
    }
  }

  const deleteTodo = async(id) => {
    try {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        });
        setData(data.filter((todo) => {
            return todo.id !== id
        }));
    } catch (error) {
        console.log(error.message);
    }
  }

  const editTodo = async(id, title) => {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
        })
      }

      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, requestOptions);

      console.log(response.json);

      const updateTodo = data.map((todo) => {
        if(todo.id === id){
          todo.title = title;
        }
        return todo;
      })

      setData([...updateTodo])
      
      return response.json();


    } catch (error) {
      console.log(error.message)
    }
  }




  return (
    <div className='home'>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="A classic todo app where you can create, read, update and delete your todo list" />
        <meta name="robots" content='index, no-follow'/>
      </Head>

      <main>
        <Header newTodo={newTodo} postData={postData} handleChangeNewTodoValue={handleChangeNewTodoValue}/>
        <TodoSection data={data} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </main>
      <FooterStyles>
          <span>Coded by<strong> Amzat</strong></span>
      </FooterStyles>
    </div>
  )
}