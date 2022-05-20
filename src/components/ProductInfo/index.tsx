import React, { useEffect, useState } from "react";
import { ProductItem } from "../../types/ProductItem";
import { ProductCartItem } from "../../types/ProductCartItem";
import * as Style from "./style";
import {Context} from '../../contexts/Context';
import { useContext } from "react";
import {v4} from 'uuid';

type Props={
    selectedProduct:ProductItem;
    setVisibleModal:(show:boolean)=>void;
}

export default ({selectedProduct,setVisibleModal}:Props)=>{
    const [selectedProductInfo,setSelectedProductInfo]=useState<ProductItem>(selectedProduct);
    const [quantity,setQuantity]=useState<number>(1);
    const {state,dispatch}=useContext(Context);
    var itemsCart=state.itemsCart;
    
    useEffect(()=>{
        setSelectedProductInfo(selectedProduct);
    },[]);

    const changeQuantity=(status :'ingrease' | 'decrease')=>{
        if(status==='ingrease'){
            let totalQuantity=quantity+1;
            setQuantity(totalQuantity);
        }else{
            let totalQuantity=quantity-1;
            if(totalQuantity>0){
                setQuantity(totalQuantity);
            }
        }
    }
    
    const addProductCart=()=>{
        let index=findProductInCart(selectedProductInfo.id);
        let productCart:ProductCartItem;
        
        if(index === -1){
            
            productCart={
                id:v4(),
                idProduct:selectedProductInfo.id,
                name:selectedProductInfo.name,
                quantity:quantity,
                unity_price:selectedProductInfo.full_price,
                total_price:selectedProductInfo.full_price*quantity,
                img:selectedProductInfo.img
            };
            
            dispatch({
                type:'ADD_CART_ITEM',
                payload:{
                    itemCart:productCart,
                    index
                }
            });

            setVisibleModal(false);
        }else{
            dispatch({
                type:'ADD_CART_ITEM',
                payload:{
                    index
                }
            });

            setVisibleModal(false);
        }
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
            <Style.ImgArea></Style.ImgArea>
            <Style.InfoArea>
                <Style.InfoTitle>{selectedProductInfo.name}</Style.InfoTitle>
                
                <Style.QuantityArea>
                    <Style.QuantityButton onClick={()=>{changeQuantity('ingrease')}}>+</Style.QuantityButton>
                    <Style.QuantityLabel>{quantity}</Style.QuantityLabel>
                    <Style.QuantityButton onClick={()=>{changeQuantity('decrease')}}>-</Style.QuantityButton>
                </Style.QuantityArea>

                <Style.AddCartButton onClick={addProductCart}>Adicionar</Style.AddCartButton>
            </Style.InfoArea>
        </Style.Container>
    )
}