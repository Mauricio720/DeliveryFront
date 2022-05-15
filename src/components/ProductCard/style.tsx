import styled from "styled-components";

export const Container=styled.div`
    width: 300px;
    height: 350px;
    margin: 10px;
    border-radius: 15px;
    border: 1px solid #ccc;
    box-shadow: 10px 10px 10px #ccc;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    cursor: pointer;
`;

export const ProductImage=styled.img`
    width: 150px;
    height: 150px;
    border-radius: 25px;
`;

export const ProductTitle=styled.div`
    font-size: 20px;
    color:black;
    text-align: center;
`;

export const ProductPrice=styled.div`
    margin-top: 15px;
    font-size: 20px;
    color:black;
    text-align: center;
`;

export const ProductDescription=styled.div`
    font-size: 16px;
    color:black;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 5px;
    background-color: #f6f6f6;
    width: 100%;
    flex: 1;
`;