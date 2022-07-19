import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomCheckBox from '../styles/CustomCheckboxStyles'
import Image from 'next/image'
import TodoSectionStyles from "../styles/TodoSectionStyles"
import { useState } from 'react'

const TodoSection = ({ data, deleteTodo, editTodo }) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    } ;
    return (
        <TodoSectionStyles>
          <article>
            {
              data && data.map((todo, index) => {
                const handleEditSubmit = (e) => {
                    e.preventDefault();
                    editTodo(todo.id, e.target.edit.value);
                    setEdit(!edit);
                }
                return (
                        <div key={index} className="single-todo">
                            {
                                edit ? (
                                    <form onSubmit={handleEditSubmit}>
                                        <input placeholder="Update todo" name="edit" defaultValue={todo.title} />
                                    </form>
                                ) : (
                                    <div>
                                        <CustomCheckBox>
                                            <input type='checkbox' name='completed-todo' id='completed-todo'/>
                                            <label htmlFor='create-todo'><Image src='/images/icon-check.svg' width='10px' height="10px" alt="Tick logo"/></label>
                                            <span>{todo.title}</span>
                                        </CustomCheckBox>
                                        <div className='actions'>
                                            <FontAwesomeIcon icon={faPencil} onClick={handleEdit}/>
                                            <Image src='/images/icon-cross.svg' width='15px' height='15px' alt="Delete buttton" className='delete' onClick={() => deleteTodo(todo.id)}/>
                                        </div>
                                    </div>    
                                )
                            }
                        </div>
                        )
            }
    ) 
}
          </article>
        </TodoSectionStyles>
    )
}

export default TodoSection;