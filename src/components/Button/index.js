import styled from "styled-components"

const Button = styled.button`
    color: var(--black);
    border: 1px solid var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 40px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    margin: 5px;


    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default Button