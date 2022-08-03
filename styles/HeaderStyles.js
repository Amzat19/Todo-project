import styled from "styled-components";

const HeaderStyles = styled.header`
background-image: url(${( props ) => props.mobileBg });
height: 200px;

.top-header {
  position: relative;
  width: 80vw;
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img:hover {
    cursor: pointer;
  }

  .todo {
    color: white;
    letter-spacing: 10px;
    font-weight: 400;
  }
}

.create-todo-box {
    width: 80vw;
    margin: auto;
    padding: 15px 0px 10px 10px;
    background-color: white;
    height: 50px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.cardColor};

    form {
      width: 60vw;

      input[type="text"] {
        border: none;
        font-weight: 400;
        padding-left: 10px;
        width: 70%;
        max-width: 400px;
        color: ${({ theme }) => theme.inputColor};
        caret-color: blue;
        background-color: ${({ theme }) => theme.cardColor};
      }

      input::placeholder {
        color: ${({ theme }) => theme.checkedTodo}
      }

      input[type="text"]:focus {
        border: white;
      }

    }
    
  }

  @media(min-width: 768px){
    background-image: url(${( props ) => props.desktopBg});
    width: 100vw;
    
    .top-header {
      width: 450px;
    }

    .create-todo-box {
      width: 450px;
    }
  }
`;

export default HeaderStyles;