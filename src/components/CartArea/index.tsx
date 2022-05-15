import React,{useState,useEffect} from "react";
import * as Style from './style';
import CartItem from './CartItem';
import { ProductCartItem } from "../../types/ProductCartItem";

type Props={
    show?:boolean;
    setShowCart:(showCart:boolean)=>void;
    itemsCart:ProductCartItem[];
    setItemsCart:(itemCart:ProductCartItem[])=>void;
}

export default ({show,setShowCart,itemsCart,setItemsCart}:Props)=>{
    const [total,setTotal]=useState(0);

    useEffect(()=>{
        calcTotal();
    },[itemsCart]);

    const calcTotal=()=>{
        let total= 0;
        itemsCart.forEach((item)=>{
            total+=item.total_price 
        });

        setTotal(total);
    }

    return (
        <Style.Container right={show?'5px':'-515px'}>
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
                        itemsCart={itemsCart}
                        setItemsCart={setItemsCart}
                    />
                ))}
                
            </Style.CartListArea>
        </Style.Container>
    )
}