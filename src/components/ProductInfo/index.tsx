import React, { useEffect, useState } from "react";
import { ProductItem } from "../../types/ProductItem";
import { ProductCartItem } from "../../types/ProductCartItem";
import * as Style from "./style";

type Props={
    selectedProduct:ProductItem;
    setItemsCart:(itemCart:ProductCartItem)=>void;
    itemsCart:ProductCartItem[];
    addExistingCartItem:(index:number)=>void;
}

export default ({selectedProduct,setItemsCart,itemsCart,addExistingCartItem}:Props)=>{
    const [selectedProductInfo,setSelectedProductInfo]=useState<ProductItem>(selectedProduct);
    const [quantity,setQuantity]=useState<number>(1);

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
                id:itemsCart.length+1,
                idProduct:selectedProductInfo.id,
                name:selectedProductInfo.name,
                quantity:quantity,
                unity_price:selectedProductInfo.full_price,
                total_price:selectedProductInfo.full_price*quantity,
                img:selectedProductInfo.img
            };    
            setItemsCart(productCart);
        }else{
            addExistingCartItem(index);
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