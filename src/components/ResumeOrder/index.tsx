import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";
import Api from "../../services/Api";
import CartItem from "../CartArea/CartItem";
import AddressAreaSelected from "./AddressAreaSelected";
import * as Style from './style';

type Props={
    total:string;
    setVisible:(visible:boolean)=>void;
}

export default ({total,setVisible}:Props)=>{
    const {state,dispatch}=useContext(Context);
    const [observation,setObservation]=useState('');
    const [addressSelected,setAddressSelected]=useState(0);

    useEffect(()=>{
        verifyItemsCart();
    },[state.itemsCart]);

    const verifyItemsCart=()=>{
        if(state.itemsCart.length > 0){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }

    const addSale=async ()=>{
        let response=await Api.addSale(parseFloat(total),parseFloat(total),state.user.id,state.user.selectedAddressId,observation);
        if(response.error===""){
            let idSale=response.idSale;
            response=await Api.addItemsSale(state.itemsCart,idSale);
        }

        dispatch({
            type:'CLEAR_CART',
            payload:{
                idProduct:undefined
            }
        });

        setVisible(false);
    }

    return (
        <Style.Container>
            <Style.Title>Resumo do Pedido</Style.Title>
            <Style.SubContainer>
                <Style.ItemsCartArea>
                    {state.itemsCart.map((item)=>(
                        <CartItem key={item.id} item={item}/>
                    ))}
                </Style.ItemsCartArea>
                
                <Style.ResumeAreaValues>
                    <Style.PriceItem>
                        <Style.PriceLabel>SubTotal</Style.PriceLabel>
                        <Style.PriceValue>R$ {total}</Style.PriceValue>
                    </Style.PriceItem>

                    <Style.PriceItem>
                        <Style.PriceLabel>Total</Style.PriceLabel>
                        <Style.PriceValue>R$ {total}</Style.PriceValue>
                    </Style.PriceItem>

                    <Style.Observation 
                        placeholder="Digite alguma observação sobre o pedido"
                        value={observation}
                        onChange={(e)=>{setObservation(e.currentTarget.value)}}
                    />

                    <Style.AddressSelectedArea>
                        <Style.TitleSelectedAddress>Selecione o endereço</Style.TitleSelectedAddress>
                        <Style.AddressSelectedContainer>
                            <AddressAreaSelected/>
                        </Style.AddressSelectedContainer>
                    </Style.AddressSelectedArea>

                    <Style.Footer>
                        <Style.Button onClick={addSale}>Finalizar</Style.Button>
                    </Style.Footer>
                </Style.ResumeAreaValues>
            </Style.SubContainer>
        </Style.Container>
    )
}