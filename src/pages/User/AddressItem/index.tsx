import React,{useContext, useEffect, useState} from "react";
import * as Style from './style';
import { Address } from "../../../types/Address";
import Api from "../../../services/Api";
import { Context } from "../../../contexts/Context";
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';

type Props={
    address?:Address;
    setAddress?:(visible:boolean)=>void;
    footer?:boolean;
}

export default ({address,footer,setAddress}:Props)=>{
    const [disabled,setDisabled]=useState(address?true:false);
    const [id,setID]=useState(address?address.id:0);
    const [cep,setCep]=useState(address?address.cep:'');
    const [street,setStreet]=useState(address?address.street:'');
    const [number,setNumber]=useState(address?address.number:'');
    const [neighborhood,setNeighborhood]=useState(address?address.neighborhood:'');
    const [city,setCity]=useState(address?address.city:'');
    const [stateAddress,setAddressState]=useState(address?address.state:'');
    const [complement,setComplement]=useState(address?address.complement:'');
    const {state,dispatch}=useContext(Context);

    useEffect(()=>{
        getCep();
    },[cep]);

    useEffect(()=>{
        fillInfo();
    },[address]);
    
    const fillInfo=()=>{
        setID(address?address.id:0);
        setCep(address?address.cep:'');
        setStreet(address?address.street:'');
        setNumber(address?address.number:'');
        setNeighborhood(address?address.neighborhood:'');
        setCity(address?address.city:'');
        setAddressState(address?address.state:'');
        setComplement(address?address.complement:'');
    }

    const getCep=async ()=>{
        let newCep=cep.replace('-','').replace('_','');
        
        if(newCep.length===8 && !address){
            let address=await Api.getCep(newCep);
            setStreet(address.logradouro);
            setNeighborhood(address.bairro);
            setCity(address.localidade);
        }
    }

    const updateAddress=async ()=>{
        let response=await Api.updateAddress(id,street,number,neighborhood,city,stateAddress,cep,complement)
        
        if(response.error===""){
            dispatch({
                type:'SET_ADDRESS',
                payload:{
                    address:response.address
                }
            });

            Swal.fire({
                text: "Atualizado com sucesso!!!",
                icon: "success",
            })
        }else{
            Swal.fire({
                text: response.error,
                icon: 'error',
                confirmButtonText: 'ok',
                confirmButtonColor: 'red',
            });
        }
    }

    const addAddress=async ()=>{
        if(cep && street && number && neighborhood && city && stateAddress){
            let response=await Api.addAddress(street,number,neighborhood,city,stateAddress,cep,state.user.id);
            
            if(response.error===''){
                let newAddress:Address={
                    id:state.user.address.length+1,
                    street,
                    number,
                    neighborhood,
                    city,
                    state:stateAddress,
                    cep,
                    idUser:state.user.id
                }

                dispatch({
                    type:'SET_NEW_ADDRESS',
                    payload:{
                        newAddress
                    }
                });
                
                if(setAddress){
                    setAddress(false);
                }
            }
        }
    }
    
    return (
        <Style.Container>
            <Style.FormGroup>
                <Style.Label>Cep</Style.Label>
                <InputMask   
                    mask="99999-999" 
                    disabled={disabled} 
                    value={cep}
                    onChange={(e)=>{
                        setCep(e.currentTarget.value);
                    }}
                />
            </Style.FormGroup>
           
            <Style.FormGroup>
                <Style.Label>Rua</Style.Label>
                <Style.Input 
                    disabled={disabled} 
                    value={street}
                    onChange={(e)=>{
                        setStreet(e.currentTarget.value);
                    }}
                />
            </Style.FormGroup>

            <Style.FormGroup>
                <Style.Label>Numero</Style.Label>
                <Style.Input 
                    disabled={disabled} 
                    value={number}
                    onChange={(e)=>{
                        setNumber(e.currentTarget.value);
                    }}
                />
            </Style.FormGroup>

            <Style.FormGroup>
                <Style.Label>Bairro</Style.Label>
                <Style.Input 
                    disabled={disabled} 
                    value={neighborhood}
                    onChange={(e)=>{
                        setNeighborhood(e.currentTarget.value);
                    }}
                />
            </Style.FormGroup>

            <Style.FormGroup>
                <Style.Label>Cidade</Style.Label>
                <Style.Input 
                    disabled={disabled} 
                    value={city}
                    onChange={(e)=>{
                        setCity(e.currentTarget.value);
                    }}
                />
            </Style.FormGroup>

            <Style.FormGroup>
                <Style.Label>Estado</Style.Label>
                <Style.Input 
                    disabled={disabled} 
                    value={stateAddress}
                    onChange={(e)=>{
                        setAddressState(e.currentTarget.value);
                    }}/>
            </Style.FormGroup>

            {footer &&
                <Style.Footer>
                    {disabled &&
                        <Style.Button onClick={()=>{setDisabled(false)}}>Editar</Style.Button>
                    }

                    {!disabled && address &&
                        <Style.Button onClick={()=>{setDisabled(true)}}>Cancelar Edição</Style.Button>
                    }

                    {!disabled && address &&
                        <Style.Button onClick={updateAddress}>Salvar</Style.Button>
                    }

                    {!address &&
                        <Style.Button onClick={addAddress}>Cadastrar</Style.Button>
                    }
                </Style.Footer>
            }
        </Style.Container>
    )
}