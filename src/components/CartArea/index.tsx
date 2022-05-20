import React,{useState,useEffect} from "react";
import * as Style from './style';
import CartItem from './CartItem';
import { ProductCartItem } from "../../types/ProductCartItem";
import Api from "../../services/Api";
import {Context} from '../../contexts/Context';
import { useContext } from "react";

type Props={
    show?:boolean;
    setShowCart:(visible:boolean)=>void;

}

export default ({show,setShowCart}:Props)=>{
    const [total,setTotal]=useState('');
    const {state,dispatch}=useContext(Context);
    var itemsCart=state.itemsCart;

    useEffect(()=>{
        calcTotal();
    },[itemsCart]);

    const calcTotal=()=>{
        let total= 0;
        itemsCart.forEach((item)=>{
            total+=item.total_price 
        });
        let totalConvert=total.toFixed(2).replace('.',',');
        setTotal(totalConvert);
    }

    const clearItemsCart=()=>{
        dispatch({
            type:'CLEAR_CART',
        });
    }

    const addSale=async ()=>{
        let response=await Api.addSale(parseFloat(total),parseFloat(total),1,1);
        if(response.error===""){
            let idSale=response.idSale;
            response=await Api.addItemsSale(state.itemsCart,idSale);
        }
    }

    return (
        <Style.Container right={show?'5px':'-585px'}>
            <Style.CloseCart onClick={()=>{setShowCart(false)}}>X</Style.CloseCart>
            <Style.CartTitle>Carrinho</Style.CartTitle>

            <Style.PriceArea>
                <Style.PriceItem>
                    <Style.PriceLabel>SubTotal</Style.PriceLabel>
                    <Style.PriceValue>R$ {total}</Style.PriceValue>
                </Style.PriceItem>

                <Style.PriceItem>
                    <Style.PriceLabel>Total</Style.PriceLabel>
                    <Style.PriceValue>R$ {total}</Style.PriceValue>
                </Style.PriceItem>
            </Style.PriceArea>
            
            <Style.CartListArea>
                {itemsCart.map((item)=>(
                    <CartItem 
                        key={item.id} 
                        item={item}
                    />
                ))}
            </Style.CartListArea>

            <Style.CartFooter>
                <Style.BtnCart background="red" onClick={clearItemsCart}>Limpar</Style.BtnCart>
                <Style.BtnCart background="green" onClick={addSale}>Finalizar</Style.BtnCart>
            </Style.CartFooter>
        </Style.Container>
    )
}