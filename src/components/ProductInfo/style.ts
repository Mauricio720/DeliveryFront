import styled from "styled-components";

export const Container=styled.div`
    height: 400px;
    box-shadow: 1px 1px 5px #ccc;
    border-radius: 5px;
    display: flex;
    padding: 20px;
    border-radius: 20px;
    background-color: white;
`;

export const ImgArea=styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 15px;
`;

export const ImgProduct=styled.img`
    width: 350px;
    height: 350px;
    border-radius: 80%;
    object-fit: cover;
`;

export const InfoArea=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const InfoTitle=styled.div`
    font-size: 40px;
    color: black;
    text-align: center;
    margin-top: 25px;
`;

export const InfoDescription=styled.div`
    font-size: 20px;
    color: black;
    text-align: center;
    margin-bottom: 20px;
    max-height: 60px;
    border-bottom: 1px solid #ccc;
    padding: 5px;
`;

export const SlotArea=styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`;

export const Label=styled.div`
    font-size: 22px;
    font-weight: bold;
`;

export const Price=styled.div`
    font-size: 25px;
    color: black;
`;

export const Footer=styled.div`
    display: flex;
    margin-top: 35px;
`;

export const AddCartButton=styled.button`
    width: 150px;
    height: 40px;
    text-align: center;
    background-color: green;
    color: white;
    margin: 10px;
    border-radius: 15px;
    cursor: pointer;
`;

export const CancelCartButton=styled.button`
    width: 150px;
    height: 40px;
    text-align: center;
    background-color: red;
    color: white;
    margin: 10px;
    border-radius: 15px;
    cursor: pointer;
`;

export const QuantityArea=styled.div`
    display: flex;
    background-color: black;
    border-radius: 25px;
`;

export const QuantityButton=styled.div`
    width: 35px;
    height: 35px;
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 22px;
    cursor: pointer;
`;

export const QuantityLabel=styled.div`
    font-size: 20px;
    color: black;
    font-weight: bold;
`;