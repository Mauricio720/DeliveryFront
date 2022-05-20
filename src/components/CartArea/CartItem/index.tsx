import React,{useState} from 'react'
import { ProductCartItem } from '../../../types/ProductCartItem';
import * as Style from './style';
import {Context} from '../../../contexts/Context';
import { useContext } from "react";

type Props={
    item:ProductCartItem;
}

export default ({item}:Props)=>{
    const [quantity,setQuantity]=useState<number>(item.quantity);
    const {state,dispatch}=useContext(Context);
    var itemsCart=state.itemsCart;

    const changeQuantity=(status :'ingrease' | 'decrease')=>{
        let totalQuantity=item.quantity;
        if(status==='ingrease'){
            totalQuantity=quantity+1;
            setQuantity(totalQuantity);
            item.quantity=totalQuantity;
        }else{
            totalQuantity=quantity-1;
            if(totalQuantity>0){
                setQuantity(totalQuantity);
            }
        }

        updatePriceAndQuantity(totalQuantity);
    }

    const updatePriceAndQuantity=(quantity:number)=>{
        let newItemsCart=[...itemsCart];
        if(quantity===0){
            newItemsCart.splice(findProductInCart(item.idProduct),1);
        }else{
            let itemSelected=newItemsCart[findProductInCart(item.idProduct)];
            itemSelected.quantity=quantity;
            itemSelected.total_price=item.unity_price*quantity;
        }
        
        dispatch({
            type:'UPDATE_CART',
            payload:{
                items:newItemsCart
            }
            
        })
    }

    const findProductInCart=(id:number)=>{
        let index=itemsCart.findIndex((item)=>{
            if(item.idProduct===id){
                return true;
            }
        });

        return index;
    }

    
    
    return (
        <Style.Container>
            <Style.Img src={item.img}/>
            <Style.Title>{item.name}</Style.Title>
            <Style.UnityPrice>{`R$ ${item.total_price.toFixed(2).replace('.',',')}`}</Style.UnityPrice>
            <Style.ActionArea>
                    <Style.QuantityButton onClick={()=>{changeQuantity('ingrease')}}>+</Style.QuantityButton>
                    <Style.QuantityLabel>{item.quantity}</Style.QuantityLabel>
                    <Style.QuantityButton onClick={()=>{changeQuantity('decrease')}}>-</Style.QuantityButton>
            </Style.ActionArea>
        </Style.Container>
    )
}