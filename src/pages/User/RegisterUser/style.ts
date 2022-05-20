import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title=styled.h1`
    width: 350px;
    font-size:25px;
    text-align: center;
    border-bottom: 2px solid blue;
    color: blue;
`;

export const SubContainer=styled.div`
    margin: auto;
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
`;

export const ProfileImg=styled.img`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-color: blue;
    cursor: pointer;
`;

export const FormGroup=styled.div`
    display: flex;
    width: 80%;
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

export const AddressContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
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

export const BackButton=styled.button`
    background-color: blue;;
    color: white;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 80px;
    height: 40px;
    font-size: 16px;
    border-radius: 15px;
    cursor: pointer;
`;

export const FooterUser=styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

export const RegisterBtn=styled.button`
    width: 150px;
    height: 50px;
    background-color: blue;
    color: white;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
`