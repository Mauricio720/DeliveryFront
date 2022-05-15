import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    border: 1px solid #ccc;
    border-radius: 25px;
    padding: 5px;
`;

export const Img=styled.img`
    width: 60px;
    height: 60px;
    border-radius: 60px;
`;

export const Title=styled.div`
    font-size: 20px;
    flex: 1;
    margin-left: 10px;
`;

export const ActionArea=styled.div`
    display: flex;
    border-radius: 10px;
    width: 60px;
    padding: 4px;
    border: 1px solid #ccc;
`;

export const QuantityButton=styled.div`
    flex: 1;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    transition: all linear .4s;
    
    :hover{
        background-color: #ccc;
    }
`;

export const QuantityLabel=styled.div`
    flex: 1;
    text-align: center;
    font-size: 16px;
`