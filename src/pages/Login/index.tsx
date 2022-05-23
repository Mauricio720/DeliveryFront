import { Link, useNavigate } from "react-router-dom";
import * as Style from './style'
import React,{useState} from 'react';
import Api from "../../services/Api";
import {Context} from '../../contexts/Context';
import { useContext } from "react";

export default ()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {state,dispatch}=useContext(Context);
    
    const doLogin=async ()=>{
        if(email && password){
            let response= await Api.login(email,password);
            if(response.error===""){
                let token=response.token;
                let user=response.user;
                
                let address=response.address;
                
                dispatch({
                    type:'SET_TOKEN',
                    payload:{
                        token:token
                    }
                });

                dispatch({
                    type:'SET_USER',
                    payload:{
                        user
                    }
                });
                
                dispatch({
                    type:'SET_ADDRESS',
                    payload:{
                        address
                    }
                });

                
                navigate('/');
            }else{
                alert(response.error);
            }
        }else{
            alert('Preencha os campos obrigatorios')
        }
    }

    return (
        <Style.Container>
            
            <Style.ContainerLogin>
                <Style.HeaderLogin></Style.HeaderLogin>
                
                <Style.ContentLogin>
                    <Style.FormGroup>
                        <Style.Label>Email</Style.Label>
                        <Style.Input onChange={(e)=>setEmail(e.target.value)} type="email"/>
                    </Style.FormGroup>

                    <Style.FormGroup>
                        <Style.Label>Senha</Style.Label>
                        <Style.Input onChange={(e)=>setPassword(e.target.value)} type='password'/>
                    </Style.FormGroup>
                </Style.ContentLogin>

                <Style.FooterLogin>
                    <Link to="/cadastrar_usuario">
                        <Style.LoginBtn>
                            Cadastrar
                        </Style.LoginBtn>
                    </Link>
                    <Style.LoginBtn onClick={doLogin}>Entrar</Style.LoginBtn>
                </Style.FooterLogin>

                <Link to="/esqueci_a_senha">Esqueci a senha</Link>
            </Style.ContainerLogin>
        </Style.Container>
    )
}