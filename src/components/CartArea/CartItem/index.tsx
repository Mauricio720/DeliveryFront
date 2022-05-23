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
        if(quantity===0){
            dispatch({
                type:'DELETE_CART_ITEM',
                payload:{
                    idProduct:item.idProduct
                }
            })
        }else{
            dispatch({
                type:'UPDATE_CART',
                payload:{
                    idProduct:item.idProduct,
                    quantity,
                }
            })
        }
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