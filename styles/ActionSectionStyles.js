import styled from "styled-components";

const ActionSectionStyles = styled.section`
width: 80vw;
height: 50px;
background-color: ${({ theme }) => theme.cardColor};
margin: auto;
box-shadow: 0px 10px 50px 8px rgb(0 0 0 / 0.1);
border-radius: 5px;

div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    padding-bottom: 20px;

    .all-active, .active-active, .completed-active {
        color: blue;
    }

    button {
        background-color: ${({ theme }) => theme.cardColor};
        border: none;
        font-weight: 700;
        font-size: 13px;
        color: var(--dark-grayish-blue);
    }

    button:hover {
        color: ${({ theme}) => theme.inputColor}
    }
}    

p {
    margin-top: 40px;
    color: var(--dark-grayish-blue);
    display: flex;
    justify-content: center;
}

@media(min-width: 768px){
    display: none;
}
`;

export default ActionSectionStyles;