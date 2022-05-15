import React,{useState} from 'react'
import { ProductCartItem } from '../../../types/ProductCartItem';
import * as Style from './style';

type Props={
    item:ProductCartItem;
    itemsCart:ProductCartItem[];
    setItemsCart:(itemCart:ProductCartItem[])=>void;
}

export default ({item,itemsCart,setItemsCart}:Props)=>{

    const [quantity,setQuantity]=useState<number>(item.quantity);

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
        let itemSelected=newItemsCart[findProductInCart(item.idProduct)];
        itemSelected.quantity=quantity;
        itemSelected.total_price=item.unity_price*quantity;
        setItemsCart(newItemsCart);
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
            <Style.Img src={require('../../../images/pizza.png')}/>
            <Style.Title>{item.name}</Style.Title>
            <Style.ActionArea>
                    <Style.QuantityButton onClick={()=>{changeQuantity('ingrease')}}>+</Style.QuantityButton>
                    <Style.QuantityLabel>{item.quantity}</Style.QuantityLabel>
                    <Style.QuantityButton onClick={()=>{changeQuantity('decrease')}}>-</Style.QuantityButton>
            </Style.ActionArea>
        </Style.Container>
    )
}