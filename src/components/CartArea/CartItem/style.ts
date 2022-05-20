import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    border: 1px solid #ccc;
    border-radius: 30px;
    padding: 5px;
    margin-top: 10px;
    box-shadow: 1px 1px 5px #ccc;
`;

export const Img=styled.img`
    width: 60px;
    height: 60px;
    border-radius: 60px;
`;

export const Title=styled.div`
    font-size: 18px;
    margin-left: 10px;
    padding: 5px;
    text-align: center;
`;

export const UnityPrice=styled.div`
    font-size: 16px;
    margin-right: 10px;
`

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