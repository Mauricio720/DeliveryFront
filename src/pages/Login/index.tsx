import { Link, useNavigate } from "react-router-dom";
import * as Style from './style'
import Api from "../../services/Api";
import {useState,useContext} from 'react';
import {Context} from '../../contexts/Context';
import Swal from 'sweetalert2';

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

                verifyCartItemsUser(user.id);
                navigate('/');
            }else{
                Swal.fire({
                    text: response.error,
                    icon: 'error',
                    confirmButtonText: 'ok',
                    confirmButtonColor: 'red',
                });
            }
        }else{
            Swal.fire({
                text: 'Preencha os campos obrigatorios',
                icon: 'error',
                confirmButtonText: 'ok',
                confirmButtonColor: 'red',
            });
        }
    }

    const verifyCartItemsUser=(idUser:number)=>{
        let oldUserIdCart=state.cartAction.idUser;
     
        if(oldUserIdCart !== idUser){
            dispatch({
                type:'CLEAR_CART',
                payload:{
                    idProduct:undefined
                }
            });

            dispatch({
                type:'SET_ID_USER_CART',
                payload:{
                    idUserCart:idUser
                }
            });
        }
    }

    return (
        <Style.Container>
            
            <Style.ContainerLogin>
                <Style.HeaderLogin></Style.HeaderLogin>
                
                <Style.ContentLogin>
                    <Style.FormGroup>
                        <Style.Label>Email</Style.Label>
                        <Style.Input autoComplete="" onChange={(e)=>setEmail(e.target.value)} type="email"/>
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