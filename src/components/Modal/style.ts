import styled from 'styled-components';

export const ModalContainer=styled.div`
    position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color:rgba(2, 2, 2, 0.5);
	display:flex;
    justify-content: center;
	align-items: center;
	transition: all ease .5s;
	overflow-y: auto;
    z-index:2000;
`;

export const ModalContent=styled.div`
	position:relative;
	background-color:white;
	
`;

export const ModalClose=styled.div`
	position:absolute;
	top:0px;
	right:15px;
	width:15px;
	height:15px;
	color:black;
	font-weight:bold;
	font-size:30px;
	cursor: pointer;
	z-index: 100000000;
`