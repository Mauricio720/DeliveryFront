import styled from "styled-components";

export const Container=styled.div`
    padding: 15px;
`;

export const SubContainer=styled.div`
    display: flex;
`;

export const ItemsCartArea=styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 400px;
    border-right: 1px solid #ccc;
    overflow-y: auto;
    padding-right: 15px;
`;

export const Title=styled.h2`
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding: 10px;
`;

export const ResumeAreaValues=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 25px;
    position: relative;
`;

export const PriceArea=styled.div`
    margin-top: 35px;
    display: flex;
    flex-direction: column;
`;

export const PriceItem=styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
`;

export const PriceLabel=styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const PriceValue=styled.div`
    font-size: 22px;
    font-weight: bold;
`;

export const Observation=styled.textarea`
    height: 150px;
    background-color: #ccc;
    border: 1px solid #ccc;
    border-radius: 15px;
    font-size: 15px;
    padding: 15px;
    margin-top: 10px;
`

export const Footer=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
`;

export const Button=styled.button`
    width: 150px;
    height: 40px;
    background-color: green;
    color: white;
    border-color: none;
    border-radius: 10px;

`