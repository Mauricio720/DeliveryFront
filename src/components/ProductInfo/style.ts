import styled, { StyledComponent } from "styled-components";

export const Container=styled.div`
    height: 450px;
    box-shadow: 1px 1px 5px #ccc;
    border-radius: 5px;
    display: flex;
`;

export const ImgArea=styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 15px;
`;

export const ImgProduct=styled.img`
    max-width: 80%;
    border-radius: 60%;
    object-fit: fill;

`;

export const InfoArea=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const InfoTitle=styled.div`
    font-size: 16px;
    color: black;
`;

export const AddCartButton=styled.button`
    width: 150px;
    height: 60px;
    text-align: center;
    background-color: blue;
    color: white;
`;

export const QuantityArea=styled.div`
    display: flex;
`;

export const QuantityButton=styled.div`
    width: 40px;
    height: 40px;
    background-color: black;
    color: white;
    font-weight: bold;
`;

export const QuantityLabel=styled.div`
    font-size: 18px;
    color: black;
    font-weight: bold;
`