import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ;
`;

export const ProfilePicture=styled.img`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-color: blue;
    margin: 10px;
`;

export const FormGroup=styled.div`
    display: flex;
    width: 60%;
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
    padding-left: 25px;
    padding-right: 25px;
    width: 100%;
`;


export const ContainerAddress=styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    position: relative;
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

