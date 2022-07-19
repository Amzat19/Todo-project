import styled from "styled-components";

const TodoSectionStyles = styled.section`
article {
  background-color: white;
  width: 83vw;
  height: max-content;
  position: relative;
  top: -30px;
  left: 9%;
  border-radius: 5px;
  box-shadow: 0px 5px 8px 1px rgb(0 0 0 / 0.1);

  .single-todo {
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      padding-left: 10px;
      border-bottom: 1px solid var(--dark-grayish-blue);
      font-size: 13px;
      color: var(--very-dark-grayish-blue);
      font-weight: 400;

      span {
        padding-left: 10px;
        width: 55vw;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 15px;
        padding-right: 15px;
      }

    }
    
  }

  .todo-info {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--dark-grayish-blue);

    span {
      padding-left: 10px;
      font-size: 14px;
    }

    button {
      margin-right: 15px;
      background-color: white;
      border: none;
      color: var(--dark-grayish-blue);
    }
  }
}
`;

export default TodoSectionStyles;