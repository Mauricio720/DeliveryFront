import { useState } from 'react';
import * as Style  from './style';
import { useNavigate } from "react-router-dom";

type Props={
    show:boolean;
    setProfileShow:(visible:boolean)=>void
};

export default ({show,setProfileShow}:Props)=>{
    const navigate = useNavigate();
    
    const logout=()=>{
        localStorage.setItem('token_deliveryApp','');
        navigate('/login');
    };

    const changeScreen=()=>{
        setProfileShow(false);
        navigate('/meu_perfil');
    }

    return (
        <Style.Container>
           <Style.ProfileContainer show={show}>
                <Style.ProfilePicture width="60px"></Style.ProfilePicture>
                <Style.ProfileName color="black">Mauricio Ferreira</Style.ProfileName>
                <Style.MyProfileBtn onClick={changeScreen}>Meu Perfil</Style.MyProfileBtn>
                <Style.LogoutBtn onClick={logout}>Sair</Style.LogoutBtn>
                <Style.ProfileClose onClick={()=>{setProfileShow(false);}}>X</Style.ProfileClose>
            </Style.ProfileContainer>
        </Style.Container>
    )
}