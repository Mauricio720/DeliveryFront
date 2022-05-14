import React,{useState} from "react";
import * as Style from './style';
import {ProductItem} from '../../types/ProductItem';
import Modal from "../../components/Modal";
import ProductInfo from "../../components/ProductInfo";

type Props={
    item:ProductItem;
}

export default ({item}:Props)=>{
    const [visibleModal,setVisibleModal]=useState(false);

    return (
        <Style.Container onClick={()=>{setVisibleModal(true)}}>
            <Style.ProductImage src={require('../../images/pizza.png')}/>
            <Style.ProductTitle>{item.name}</Style.ProductTitle>
            <Style.ProductPrice>{item.full_price}</Style.ProductPrice>
            <Style.ProductDescription>{item.description}</Style.ProductDescription>

            <Modal visible={visibleModal} setVisible={setVisibleModal}>
                    <ProductInfo/>
            </Modal>
        </Style.Container>
    )
}