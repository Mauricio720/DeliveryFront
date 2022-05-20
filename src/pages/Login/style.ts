import styled from "styled-components";

export const Container=styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderLogin=styled.div`
    height: 80px;
`;

export const ContainerLogin=styled.div`
    width: 550px;
    height: 500px;
    border-radius: 25px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 5px #ccc;
    padding: 15px;
`;

export const ContentLogin=styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormGroup=styled.div`
    display: flex;
    height: 60px;
    border: 1px solid #ccc;
    border-radius: 15px;
    position: relative;
    margin: 25px;
`;

export const Label=styled.div`
    color: black;
    position: absolute;
    top: -10px;
    left: 15px;
    height: 15px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: white;
    font-size: 18px;
    font-weight: bold;
`;

export const Input=styled.input`
    border: none;
    background-color: transparent;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    font-size: 16px;
    padding: 10px;
    width: 100%;
`;

export const FooterLogin=styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const LoginBtn=styled.button`
    width: 150px;
    height: 50px;
    background-color: blue;
    color: white;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
`;



