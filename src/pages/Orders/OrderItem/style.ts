import styled from "styled-components";

export const Container=styled.div`
    width: 650px;
    min-height: 150px;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: 1px 1px 10px #ccc;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px;
`;

export const OrderSlot=styled.div`
    display: flex;
    margin: 10px;
    border-bottom: 1px solid #ccc;
    padding: 2px;
    flex-wrap: wrap;
`;

export const Label=styled.div`
    font-size: 17px;
    margin-right: 15px;
`;

export const OrderValue=styled.div`
    font-size: 17px;
`;

export const Button=styled.button`
    width: 125px;
    height: 25px;
    background-color: blue;
    color: white;
    border-radius: 15px;
    cursor: pointer;
`