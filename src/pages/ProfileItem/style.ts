import styled from "styled-components";

export const Container=styled.div`
`;

export const ProfilePicture=styled.img<{width:string}>`
    width: ${props=>props.width};
    height: ${props=>props.width};
    border-radius: 30px;
    background-color: blue;
    object-fit: cover;

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


export const ProfileClose=styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
    color: black;
    cursor: pointer;
`;

export const MyProfileBtn=styled.div`
    color: black;
    font-size: 16px;
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
`;

export const LogoutBtn=styled.div`
    color: black;
    font-size: 18px;
    cursor: pointer;
`;