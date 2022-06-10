import React,{useState,useEffect,useRef} from 'react';
import * as Style from './style';
import {Link, useNavigate} from 'react-router-dom';
import Api from '../../../services/Api';
import {Context} from '../../../contexts/Context';
import { useContext } from "react";
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';

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
    const [profileImg,setProfileImg]=useState(()=>{return require('../../../images/user/default.jpg')});
    const [profileFile,setProfileFile]=useState<any>();

    const fileInputRef=useRef<HTMLInputElement>(null);
    const navigate=useNavigate();

    useEffect(()=>{
        getCep();
    },[cep]);

    const getCep=async ()=>{
        let newCep=cep.replace('-','').replace('_','');
        
        if(newCep.length===8){
            let address=await Api.getCep(newCep);
            setStreet(address.logradouro);
            setNeighborhood(address.bairro);
            setCity(address.localidade);
        }
    }
    
    const addUser=async ()=>{
        
        let response=await Api.addUser(name,email,password,profileFile);
        if(response.error===''){
            let token=response.token;
            let user=response.user;
            
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

            response=await Api.addAddress(street,number,neighborhood,city,stateCountry,cep,user.id);
            if(response.error===''){
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
                text: response.error,
                icon: 'error',
                confirmButtonText: 'ok',
                confirmButtonColor: 'red',
            });
        }
    }
    

    const profileImgPreview=(e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            let img = e.target.files[0];

            const fileReader:FileReader = new FileReader(); 
            fileReader.readAsDataURL(img);

            fileReader.onload = (event:Event)=>{
                var fileUrl = (event.target as FileReader).result as string;
                setProfileImg(fileUrl);
            }
            setProfileFile(img);
        }
    }

    const profilePictureChange=()=>{
        if(fileInputRef.current){
            fileInputRef.current.click();
        }
    }


    return (
        <Style.Container>
            <Style.Title>Cadastre seu usuário</Style.Title>
            
            <Link to="/login">
                <Style.BackButton>
                    X
                </Style.BackButton>
            </Link>
            
            <Style.SubContainer>
                <Style.ProfileImg 
                    onClick={profilePictureChange}
                    src={profileImg}
                />
                
                <Style.Input
                    type="file" 
                    style={{display:"none"}} 
                    ref={fileInputRef}
                    onChange={(event)=>{profileImgPreview(event)}}
                />

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
                    <Style.TitleAddress>Adicione seu endereço</Style.TitleAddress>

                    <Style.FormGroup>
                        <Style.Label>Cep</Style.Label>
                        <InputMask   
                            mask="99999-999" 
                            value={cep}
                            onChange={(e)=>{
                                setCep(e.currentTarget.value);
                            }}
                        />
                    </Style.FormGroup>

                    <Style.FormGroup>
                        <Style.Label>Rua</Style.Label>
                        <Style.Input 
                            onChange={(e)=>setStreet(e.currentTarget.value)}
                            value={street}
                        />
                    </Style.FormGroup>

                    <Style.FormGroup>
                        <Style.Label>Numero</Style.Label>
                        <Style.Input onChange={(e)=>setNumber(e.currentTarget.value)}/>
                    </Style.FormGroup>

                    <Style.FormGroup>
                        <Style.Label>Bairro</Style.Label>
                        <Style.Input 
                            onChange={(e)=>setNeighborhood(e.currentTarget.value)}
                            value={neighborhood}
                        />
                    </Style.FormGroup>

                    <Style.FormGroup>
                        <Style.Label>Cidade</Style.Label>
                        <Style.Input 
                            onChange={(e)=>setCity(e.currentTarget.value)}
                            value={city}
                        />
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