import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title=styled.h1`
    text-align: center;
    font-size: 25px;
    border-bottom: 1px solid black;
    padding: 5px;
    width: 60%;

    @media(max-width:270px){
        width: 95%;
    }
`;

export const ListOrder=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;