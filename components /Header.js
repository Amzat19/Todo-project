import Image from 'next/image';
import CustomCheckBox from '../styles/CustomCheckboxStyles';
import HeaderStyles from "../styles/HeaderStyles";

const Header = ({ newTodo, handleChangeNewTodoValue, postData}) => {

  const addTodo = (e) => {
    e.preventDefault();
    newTodo.title = '';
    postData();
  }
    return (
        <HeaderStyles>
          <div className='top-header'>
            <h1 className='todo'>TODO</h1>
            <Image src='/images/icon-moon.svg' width='30px' height='30px' alt='Dark theme logo'/>
          </div>
          <div className='create-todo-box'>
            <CustomCheckBox>
              <form onSubmit={addTodo}>
              <input name='todo-checkbox' type='checkbox' id="todo-checkbox" checked={false} readOnly/>
              <input type='text' name="create-todo" id='createTodo' placeholder='Create a new todo...' value={newTodo.title} onChange={handleChangeNewTodoValue}/>
              </form>
            </CustomCheckBox>
          </div>
        </HeaderStyles>
    )
};

export default Header;