import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 15px;
    margin: 10px;
`;

export const TitleAddress=styled.h2`
    font-size: 20px;
    margin-top: 15px;
    text-align: center;
`;

export const BtnAddAddress=styled.button`
    width: 45px;
    height: 45px;
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: green;
    border-radius: 25px;
    font-size: 18px;
    color: white;
    cursor: pointer;
`;

export const FormGroup=styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    border: 1px solid #ccc;
    border-radius: 15px;
    position: relative;
    margin: 25px;

    input{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        font-size: 16px;
        padding: 10px;
    }
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

export const Footer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button=styled.button`
    width: 150px;
    height: 50px;
    background-color: blue;
    color: white;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    margin: 5px;
`;
