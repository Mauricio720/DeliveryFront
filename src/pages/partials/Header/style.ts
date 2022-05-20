import styled from "styled-components";

export const Container=styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    background-color: black;
    
    nav{
        margin: auto;
        width: 100%;
        max-width: 1200px;
        display: flex;
        align-items: center;
        justify-content: space-between
    }
`;

export const Menu=styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
`;

export const MenuItem=styled.li`
    color: white;
`;

export const CartRightArea=styled.div`
    background-color: red;
    display: flex;
`;

export const CartItem=styled.div`
    width: 60px;
    height: 60px;
    background-color: blue;
    cursor: pointer;
`;


export const ProfileArea=styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ProfilePicture=styled.div<{width:string}>`
    width: ${props=>props.width};
    height: ${props=>props.width};
    border-radius: 30px;
    background-color: blue;
`;

export const ProfileContainer=styled.div<{show:boolean}>`
    position: fixed;
    top: 60px;
    right: 5px;
    width: 240px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 5px #ccc;
    padding: 15px;
    border-radius: 15px;
    display: ${props=>props.show?'flex':'none'};
    flex-direction: column;
    align-items: center;
    background-color: white;
    z-index: 2000000;
`;


export const ProfileName=styled.div<{color?:string}>`
    color: ${props=>props.color?props.color:'white'};
    font-size: 16px;
    margin-left: 15px;
    margin-right: 15px;
`;
