import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title=styled.h3`
    font-size: 20px;
    text-align: center;
`;

export const ContainerSaleInfo=styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    @media(max-width:1010px){
        flex-direction: column;
        align-items: center;
    }
`;

export const SaleArea=styled.div`
    width: 450px;
    border: 1px solid #ccc;
    border-radius: 15px;
    margin-top: 15px;
    box-shadow: 1px 1px 5px #ccc;
    margin: 25px;

    @media(max-width:500px){
        width: 90%;
    }
`;

export const InfoSale=styled.div`
    padding: 5px;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
    margin: 15px;
`;

export const ItemsContainer=styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 10px;
    box-shadow: 1px 1px 5px #ccc;
    padding-bottom: 25px;

    @media(max-width:500px){
        width: 90%;
    }
`;

export const ContainerAddress=styled.div`
    min-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width:480px){
        min-width: auto;
        width: 90%;
    }
`;