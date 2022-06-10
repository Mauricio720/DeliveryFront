import { useContext, useState } from 'react';
import * as Style  from './style';
import { useNavigate } from "react-router-dom";
import { Context } from '../../contexts/Context';
import { logout } from '../../helpers/UserHelper';

type Props={
    show:boolean;
    setProfileShow:(visible:boolean)=>void
};

export default ({show,setProfileShow}:Props)=>{
    const navigate = useNavigate();
    const {state,dispatch}=useContext(Context);

    
    const doLogout=()=>{
        logout();
        navigate('/login');
    };

    const changeScreen=()=>{
        setProfileShow(false);
        navigate('/meu_perfil');
    }

    return (
        <Style.Container>
           <Style.ProfileContainer show={show}>
                <Style.ProfilePicture 
                    width="60px"
                    src={state.user.profileImg}
                />
                <Style.ProfileName color="black">{state.user.name}</Style.ProfileName>
                <Style.MyProfileBtn onClick={changeScreen}>Meu Perfil</Style.MyProfileBtn>
                <Style.LogoutBtn onClick={doLogout}>Sair</Style.LogoutBtn>
                <Style.ProfileClose onClick={()=>{setProfileShow(false);}}>X</Style.ProfileClose>
            </Style.ProfileContainer>
        </Style.Container>
    )
}