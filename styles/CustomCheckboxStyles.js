import styled from "styled-components";

const CustomCheckBox = styled.div`
display: inline-flex;
cursor: pointer;
position: relative;

input[type="checkbox"] {
  height: 25px;
  width: 25px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid #D0D5DD;
  border-radius: 20px;
  outline: none;
  transition-duration: 0.3s;
  background-color: #FFFFFF;
  cursor: pointer;
}

input:checked {
  border: 1px solid #7F56D9;
  background: linear-gradient(#57ddff, #c058f3);
}

input:checked ~ label{
  position: absolute;
  display: block;
  left: 7px;
  top: 7px;
  height: 0px;
}

label {
    display: none;
}

span{
  padding-top: 5px;
}

form {
  position: absolute;
  display: flex;
  top: -15px;
}

input[type="text"] {
  height: 30px;
  margin-bottom: 20px;
}

`;

export default CustomCheckBox;