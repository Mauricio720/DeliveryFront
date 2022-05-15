import React,{useEffect, useState} from "react";
import * as Style from './style';
import {ProductItem} from '../../types/ProductItem';


type Props={
    item:ProductItem;
    setVisibleModal:(isVisible:boolean)=>void;
    setSelectedItem:(id:ProductItem)=>void;
}

export default ({item,setVisibleModal,setSelectedItem}:Props)=>{
    
    const setInfoAndModal=()=>{
        setSelectedItem(item);
        setVisibleModal(true);
    }

    return (
        <Style.Container onClick={setInfoAndModal}>
            <Style.ProductImage src={require('../../images/pizza.png')}/>
            <Style.ProductTitle>{item.name}</Style.ProductTitle>
            <Style.ProductPrice>{item.full_price}</Style.ProductPrice>
            <Style.ProductDescription>{item.description}</Style.ProductDescription>

            
        </Style.Container>
    )
}