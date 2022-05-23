import React,{useContext, useState, useEffect} from "react";
import * as Style from "./style";
import { Context } from "../../../contexts/Context";
import AddressItem from "../AddressItem";

export default ()=>{
    const {state,dispatch}=useContext(Context);
    const [name,setName]=useState(state.user.name);
    const [email,setEmail]=useState(state.user.email);
    const [password,setPassword]=useState('');
    const [addAddress,setAddress]=useState(false);

    return (
        <Style.Container>
            <Style.ProfilePicture src='./'/>

            <Style.FormGroup>
                <Style.Label>Nome</Style.Label>
                <Style.Input disabled={true} value={state.user.name} onChange={(e)=>setName(e.currentTarget.value)}/>
            </Style.FormGroup>

            <Style.FormGroup>
                <Style.Label>Email</Style.Label>
                <Style.Input disabled={true} value={state.user.email} onChange={(e)=>setEmail(e.currentTarget.value)}/>
            </Style.FormGroup>

            <Style.FormGroup>
                <Style.Label>Senha</Style.Label>
                <Style.Input 
                    type='password' 
                    disabled={true} 
                    value="***********************" 
                    onChange={(e)=>setEmail(e.currentTarget.value)}
                />
            </Style.FormGroup>

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
                <Style.BtnAddAddress>x</Style.BtnAddAddress>
                <AddressItem setAddress={setAddress}/>
            </Style.ContainerAddress>
            }
        </Style.Container>
    )
}