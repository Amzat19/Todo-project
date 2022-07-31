import Image from 'next/image';
import CustomCheckBox from '../styles/CustomCheckboxStyles';
import HeaderStyles from "../styles/HeaderStyles";
import { ACTIONS } from '../lib/action';
import { useState } from 'react';

const Header = ({ theme, toggleTheme, dispatch }) => {
  const [newTodoValue, setNewTodoValue] = useState('')

  const targetNewTodoValue = (e) => {
    setNewTodoValue(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload: { title: newTodoValue }});
    setNewTodoValue('')
  }

  const bg = theme === 'light' ? '/images/bg-mobile-light.jpg' :'/images/bg-mobile-dark.jpg';
    return (
        <HeaderStyles bg={bg}>
          <div className='top-header'>
            <h1 className='todo'>TODO</h1>
            { theme === 'light' ? (
            <Image src='/images/icon-moon.svg' width='30px' height='30px' alt='Light theme logo' onClick={toggleTheme}/>
            ) : (
            <Image src='/images/icon-sun.svg' width='30px' height='30px' alt='Dark theme logo' onClick={toggleTheme}/>
            )} 
          </div>
          <div className='create-todo-box'>
            <CustomCheckBox>
              <form onSubmit={addTodo}>
                <input name='todo-checkbox' type='checkbox' id="todo-checkbox" checked={false} readOnly/>
                <input type='text' name="create" id='createTodo' placeholder='Create a new todo...' value={newTodoValue} onChange={targetNewTodoValue}/>
              </form>
            </CustomCheckBox>
          </div>
        </HeaderStyles>
    )
};

export default Header;