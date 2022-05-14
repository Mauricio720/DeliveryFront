import Reactk,{useEffect, useState} from "react";
import * as Style from './style';
import ProductCard from "../../components/ProductCard";
import CartArea from "../../components/CartArea";
import { ProductItem } from "../../types/ProductItem";
import { itemsProduct } from "./items";

export default ()=>{
    const [showCart,setShowCart]=useState<boolean>(false);
    const [items,setItems]=useState<ProductItem[]>([]);
    

    useEffect(()=>{
        fillItems();
    },[]);

    const fillItems=()=>{
        setItems(itemsProduct);
    }
    
    return (
        <Style.Container>
            <Style.FilterArea></Style.FilterArea>
            <Style.ProductArea>
                {items.map((item)=>(
                    <ProductCard key={item.id} item={item}/>

                ))}
            </Style.ProductArea>
            <CartArea 
                show={showCart}
                setShowCart={setShowCart}
            />

            
        </Style.Container>
    )
}