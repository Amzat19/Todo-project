import CustomCheckBox from '../styles/CustomCheckboxStyles'
import Image from 'next/image'
import { useState } from 'react'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ACTIONS } from '../lib/action'
import { faX } from '@fortawesome/free-solid-svg-icons'

const Todos = ({ todo, dispatch }) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id, title: e.target.edit.value}})
        setEdit(!edit);
    }

    const checkTodo = () => {
        dispatch({ type: ACTIONS.CHECK_TODO, payload: { id: todo.id, completed: todo.completed}})
    }

    const deleteTodo = () => {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})
    }

    return (
        <div className="single-todo">
            {
                edit ? (
                        <form onSubmit={handleEditSubmit}>
                            <input placeholder="Update todo" name="edit" defaultValue={todo.title} />
                            <button type='submit' onSubmit={handleEditSubmit}>Edit Todo</button>
                        </form>
                ) : (
                    <div>
                        <CustomCheckBox>
                            <input type='checkbox' name='completed-todo' id='completed-todo' checked={todo.completed} onChange={checkTodo}/>
                            <label htmlFor='create-todo' onClick={checkTodo}><Image src='/images/icon-check.svg' width='10px' height="10px" alt="Tick logo"/></label>
                            <span className={`${todo.completed ? "cancel" : ""}`}>{todo.title}</span>
                        </CustomCheckBox>
                        <div className='actions'>
                            <FontAwesomeIcon icon={faPencil} onClick={handleEdit} className="edit"/>
                            <FontAwesomeIcon icon={faX} className='delete' onClick={deleteTodo}/>
                    </div>
                    </div>    
                )
            }
        </div>
    )
}

export default Todos;