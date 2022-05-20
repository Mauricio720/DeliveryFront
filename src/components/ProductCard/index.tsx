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
            <Style.ProductImage src={item.img}/>
            <Style.ProductTitle>{item.name}</Style.ProductTitle>
            <Style.ProductPrice>{`R$ ${item.full_price.toFixed(2).replace('.',',')}`}</Style.ProductPrice>
            <Style.ProductDescription>{item.description}</Style.ProductDescription>
        </Style.Container>
    )
}