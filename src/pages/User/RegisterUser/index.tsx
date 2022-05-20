import React,{useState} from 'react';
import * as Style from './style';
import {Link, useNavigate} from 'react-router-dom';
import Api from '../../../services/Api';
import {Context} from '../../../contexts/Context';
import { useContext } from "react";

export default ()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cep,setCep]=useState('');
    const [street,setStreet]=useState('');
    const [number,setNumber]=useState('');
    const [neighborhood,setNeighborhood]=useState('');
    const [city,setCity]=useState('');
    const [stateCountry,setState]=useState('');
    const {state,dispatch}=useContext(Context);

    const navigate=useNavigate();
    
    const addUser=async ()=>{
        if(name && email && password && cep && street && number && neighborhood && city && state){
            let response=await Api.addUser(name,email,password);
            if(response.error===''){
                let token=response.token;
                dispatch({
                    type:'SET_TOKEN',
                    payload:{
                        token:token
                    }
                });
                response=await Api.addAddress(street,number,neighborhood,city,stateCountry,cep,1);
                if(response.error===''){
                    navigate('/');
                }else{
                    alert(response.error);
                }
            }else{
                alert(response.error);
            }
        }
    }

    return (
        <Style.Container>
            <Style.Title>Cadastre seu usuário</Style.Title>
            
            <Link to="/login">
                <Style.BackButton>
                    Voltar
                </Style.BackButton>
            </Link>
            
            <Style.SubContainer>
                <Style.ProfileImg src='./'/>
                
                <Style.FormGroup>
                    <Style.Label>Nome</Style.Label>
                    <Style.Input onChange={(e)=>setName(e.currentTarget.value)}/>
                </Style.FormGroup>

                <Style.FormGroup>
                    <Style.Label>Email</Style.Label>
                    <Style.Input onChange={(e)=>setEmail(e.currentTarget.value)}/>
                </Style.FormGroup>

                <Style.FormGroup>
                    <Style.Label>Senha</Style.Label>
                    <Style.Input type='password' onChange={(e)=>setPassword(e.currentTarget.value)}/>
                </Style.FormGroup>

                <Style.AddressContainer>
                    <Style.TitleAddress>Adicione seu/s endereços</Style.TitleAddress>
                    <Style.BtnAddAddress>+</Style.BtnAddAddress>

                    <Style.FormGroup>
                        <Style.Label>Cep</Style.Label>
                        <Style.Input onChange={(e)=>setCep(e.currentTarget.value)}/>
                    </Style.FormGroup>

                    <Style.FormGroup>
                        <Style.Label>Rua</Style.Label>
                        <Style.Input onChange={(e)=>setStreet(e.currentTarget.value)}/>
                    </Style.FormGroup>

                    <Style.FormGroup>
                        <Style.Label>Numero</Style.Label>
                        <Style.Input onChange={(e)=>setNumber(e.currentTarget.value)}/>
                    </Style.FormGroup>

                    <Style.FormGroup>
                        <Style.Label>Bairro</Style.Label>
                        <Style.Input onChange={(e)=>setNeighborhood(e.currentTarget.value)}/>
                    </Style.FormGroup>

                    <Style.FormGroup>
                        <Style.Label>Cidade</Style.Label>
                        <Style.Input onChange={(e)=>setCity(e.currentTarget.value)}/>
                    </Style.FormGroup>

                    <Style.FormGroup>
                        <Style.Label>Estado</Style.Label>
                        <Style.Input onChange={(e)=>setState(e.currentTarget.value)}/>
                    </Style.FormGroup>
                </Style.AddressContainer>
            </Style.SubContainer>

            <Style.FooterUser>
                  <Style.RegisterBtn onClick={addUser}>Cadastrar</Style.RegisterBtn>
            </Style.FooterUser>
        </Style.Container>
    )
}