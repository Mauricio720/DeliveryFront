import React,{useContext, useEffect, useState,useRef} from "react";
import * as Style from "./style";
import { Context } from "../../../contexts/Context";
import AddressItem from "../AddressItem";
import Api from "../../../services/Api";
import Swal from 'sweetalert2';

export default ()=>{
    const {state,dispatch}=useContext(Context);
    const [id,setId]=useState(state.user.id);
    const [profileImg,setProfileImg]=useState(state.user.profileImg);
    const [profileFile,setProfileFile]=useState<any>();
    const [name,setName]=useState(state.user.name);
    const [email,setEmail]=useState(state.user.email);
    const [password,setPassword]=useState('');
    const [addAddress,setAddress]=useState(false);
    const [editUser,setEditUser]=useState(false);
    const fileInputRef=useRef<HTMLInputElement>(null);

    useEffect(()=>{
        fillInfo();
    },[state]);

    const fillInfo=()=>{
        setId(state.user.id);
        setName(state.user.name);
        setEmail(state.user.email);
        setProfileImg(state.user.profileImg)
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
        if(editUser){
            if(fileInputRef.current){
                fileInputRef.current.click();
            }
        }
    }

    const updateUser=async ()=>{
        let response=await Api.updateUser(id,name,email,password,profileFile);
        if(response.error===""){
            dispatch({
                type:'SET_USER',
                payload:{
                    user:response.user
                }
            });
            Swal.fire({
                text: 'Atualizado com sucesso!',
                icon: 'success',
                confirmButtonText: 'ok',
                confirmButtonColor: 'green',
            });
            setEditUser(false);
        }else{
            Swal.fire({
                text: response.error,
                icon: 'error',
                confirmButtonText: 'ok',
                confirmButtonColor: 'red',
            });
        }
    }

    return (
        <Style.Container>
            <Style.ProfilePicture 
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
                <Style.Input disabled={!editUser} value={name} 
                    onChange={(e)=>setName(e.currentTarget.value)}/>
            </Style.FormGroup>

            <Style.FormGroup>
                <Style.Label>Email</Style.Label>
                <Style.Input type="email" disabled={!editUser} value={state.user.email} onChange={(e)=>setEmail(e.currentTarget.value)}/>
            </Style.FormGroup>

            <Style.FormGroup>
                <Style.Label>Senha</Style.Label>
                <Style.Input 
                    type='password' 
                    disabled={!editUser}
                    placeholder="*******************" 
                    value={password} 
                    onChange={(e)=>setPassword(e.currentTarget.value)}
                />
            </Style.FormGroup>

            <Style.ActionArea>
                {editUser===false &&
                    <Style.Button onClick={()=>{setEditUser(true)}}>Editar</Style.Button>
                }

                {editUser && 
                    <Style.Button onClick={updateUser}>Salvar</Style.Button>
                }

                {editUser &&
                    <Style.Button onClick={()=>{setEditUser(false)}}>Cancelar</Style.Button>
                }
            </Style.ActionArea>

            {addAddress===false &&
                <Style.ContainerAddress>
                    <Style.TitleAddress>Endereços</Style.TitleAddress>
                    <Style.BtnAddAddress onClick={()=>{setAddress(true)}}>+</Style.BtnAddAddress>
                    {state.user.address.map((item,index)=>(
                        <AddressItem 
                            key={index} 
                            address={item}
                            setAddress={setAddress}
                        />
                    ))}
                </Style.ContainerAddress>
            }

            {addAddress && 
                <Style.ContainerAddress>
                <Style.TitleAddress>Adicionar Endereço</Style.TitleAddress>
                <Style.BtnCancelAddress onClick={()=>{setAddress(false)}}>x</Style.BtnCancelAddress>
                <AddressItem setAddress={setAddress}/>
            </Style.ContainerAddress>
            }
        </Style.Container>
    )
}