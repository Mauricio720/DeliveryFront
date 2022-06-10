import styled from "styled-components";

export const Container=styled.div<{right:string}>`
    margin-right: ${props=>props.right};
    margin-top: 40px;
    width: 550px;
    height: 620px;
    transition: all ease .4s;
    box-shadow:1px 1px 5px #ccc;
    border: 1px solid #ccc;
    border-radius: 10px;
    position: relative;
    padding: 15px;
    overflow: hidden;

    @media(max-width:700px){
        position: absolute;
        max-width: 90%;
        z-index: 10000;
        background-color: white;
        margin-top: 40px;
        
        height: auto;
        display: ${props=>props.right==='-585px'?'none':'block'};
    }
`;


export const CloseCart=styled.div`
    position: absolute;
    top: 0px;
    left: 5px;
    width: 40px;
    height: 40px;
    color: #ccc;
    font-weight: bold;
    cursor: pointer;
    margin: 5px;
`;

export const CartTitle=styled.div`
    text-align: center;
    font-size: 20px;
    margin-top: 15px;
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
    flex-wrap: wrap;
`;

export const PriceLabel=styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const PriceValue=styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const CartListArea=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    height: 350px;
    margin-bottom: 15px;
    overflow-y: auto;
`;

export const CartFooter=styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(max-width:700px){
        justify-content: center;
    }
`;

export const BtnCart=styled.button<{background:string}>`
    width: 150px;
    height: 40px;
    background-color: ${props=>props.background};
    color: white;
    border-color: none;
    border-radius: 10px;
    
    @media(max-width:700px){
        margin: 5px;
    }
`

