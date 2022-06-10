import styled from "styled-components";

export const Container=styled.div`
    min-height: 80px;
    display: flex;
    align-items: center;
    background-color: black;
    overflow: auto;

    nav{
        margin: auto;
        width: 100%;
        max-width: 1200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap:wrap;
    }
`;

export const MenuMobileArea=styled.ul<{show:boolean}>`
    list-style: none;
    padding: 5px;
    margin: 0px;
    position: absolute;
    top: 0px;
    left: 0px;
    display: ${props=>props.show?'flex':'none'};
    flex-direction: column;
    background-color: black;
    width: 100%;
    z-index: 500000000;
    min-height: 150px;
`;

export const CloseMobileMenu=styled.div`
    position:absolute;
	top:0px;
    right: 15px;
	width:15px;
	height:15px;
	color:white;
	font-weight:bold;
	font-size:20px;
	cursor: pointer;
	z-index: 100000000;
`;

export const Menu=styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    margin-left: 15px;

    @media(max-width:410px){
        display: none;
    }
`;

export const MenuItem=styled.li<{selectedMenu?:boolean}>`
    color: ${props=>props.selectedMenu?'black':'white'};
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    background-color: ${props=>props.selectedMenu?'white':''};
`;

export const CartRightArea=styled.div`
    border: 2px solid white ;
    display: flex;
    align-items: center;
    margin-right: 35px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 25px;
    height: 50px;

    @media(max-width:410px){
        margin-right: 15px;
    }
`;

export const CartItem=styled.div`
    position:relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 25px;
`;

export const CartNumber=styled.div`
    width: 25px;
    height: 25px;
    border-radius: 15px;
    border: 1px solid #ccc;
    text-align: center;
    color:#ccc;
    font-weight: bold;
    background-color: white;
    position: absolute;
    bottom: 0px;
    right: -15px;
`;

export const ProfileArea=styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ProfilePicture=styled.img<{width:string}>`
    width: ${props=>props.width};
    height: ${props=>props.width};
    border-radius: 30px;
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

export const MenuMobile=styled.div`
    width: 30px;
    height: 30px;
    display: none;
    flex-direction: column;
    margin-left: 5px;

    @media(max-width:410px){
        display: flex;
    }
`;

export const MenuMobileLine=styled.div`
   height: 2px;
   background-color: white;
   margin: 2px;
`;

export const ProfileName=styled.div<{color?:string}>`
    color: ${props=>props.color?props.color:'white'};
    font-size: 16px;
    margin-left: 15px;
    margin-right: 15px;
    font-weight: bold;
`;
