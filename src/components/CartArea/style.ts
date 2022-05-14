import styled from "styled-components";

export const Container=styled.div<{right:string}>`
    position:fixed;
    top: 10vh;
    right: ${props=>props.right};
    width: 400px;
    height: 90vh;
    background-color: gray;
    transition: all ease .4s;
`;

export const CloseCart=styled.div`
    width: 40px;
    height: 40px;
    background-color: red;
`