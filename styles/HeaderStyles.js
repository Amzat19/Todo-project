import styled from "styled-components";

const HeaderStyles = styled.header`
background-image: url('/images/bg-mobile-light.jpg');
height: 200px;

.top-header {
  position: relative;
  width: 80vw;
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

    input[type="text"] {
      border: none;
      font-weight: 400;
      padding-left: 10px;
    }

    input[type="text"]:focus {
      border: white;
    }
    
  }

`;

export default HeaderStyles;