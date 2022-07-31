import styled from "styled-components";

const TodoSectionStyles = styled.section`
article {
  background-color: ${({ theme }) => theme.cardColor};
  width: 83vw;
  height: max-content;
  position: relative;
  top: -30px;
  left: 8.5%;  
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

      input[type="checkbox"]:hover {
        border-width: 1.5px;
        border-color: linear-gradient(#57ddff, #c058f3);
        cursor: pointer;
      }

      span {
        color: ${({ theme }) => theme.inputPlaceholderColor};
        padding-left: 10px;
        width: 55vw;
      }

      .cancel {
        text-decoration: line-through;
        color: ${({ theme }) => theme.checkedTodo};
      }

      span:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.inputColor};
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 15px;
        padding-right: 15px;
        visibility: hidden;
      }

      .actions{
        .delete, .edit {
          path {
            fill: white;
          }
        }
        .delete:hover, .edit:hover {
          cursor: pointer;
        }
      }

    }

    form {
      width: 90%;
      height: 60px;
      display: flex;

      input {
        width: 70%;
        height: 40px;
        margin: 10px auto auto 10vw;
        padding-left: 20px;
        border-radius: 20px;
      }

      button {
        background: linear-gradient(#57ddff, #c058f3);
        border: none;
        border-radius: 10px;
        font-size: 10px;
        height: 30px;
        margin-top: 15px;
        padding: 0px 5px 0px 5px;
      }
    }
    
  }

  .single-todo:hover{
    .actions {
      visibility: visible;
    }
  }

  .todo-info {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--dark-grayish-blue);

    div{
      display: none;
    }

    span {
      padding-left: 10px;
      font-size: 14px;
    }

    button {
      margin-right: 15px;
      background-color: ${({ theme }) => theme.cardColor};
      border: none;
      color: var(--dark-grayish-blue);
    }

    button:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.inputColor};
    }
  }
}

p {
  display: none;
}

@media(min-width: 768px){
  width: 100vw;

  article {
    width: 450px;
    left: 0%;
    margin: auto;

    .single-todo {
      div {
        span {
          max-width: 250px;
        }
      }
    }

    .todo-info {
      div {
      display: flex;

      button[type="button"] {
        font-weight: 700;
      }

      button[type="button"]:hover {
        color: ${({ theme }) => theme.inputColor};
        cursor: pointer;
      }

      .all-active, .active-active, .completed-active {
        color: blue;
      }
      }
    }
  }

  p {
    margin-top: 30px;
    color: var(--dark-grayish-blue);
    display: flex;
    justify-content: center;
  }
}
`;

export default TodoSectionStyles;