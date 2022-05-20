import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const ContainerProductInfo=styled.div`
    display: flex;
    width: 100%;
    overflow-x: hidden;
`

export const FilterArea=styled.div`
    height: 60px;
    display: flex;
    align-items: center;
`;

export const FilterInput=styled.input`
    width: 350px;
    height: 40px;
    border: 1px solid #ccc;
    margin-left: 25px;
    border-radius: 25px;
    padding: 5px;
    padding-left: 10px;
    font-size: 16px;
    box-shadow: 0 0 0 0;
    outline: 0;
`;

export const ProductArea=styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 90%;
    margin: auto;
    margin-top: 30px;
`;

