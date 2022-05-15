import React,{useEffect, useState} from "react";
import * as Style from './style';
import ProductCard from "../../components/ProductCard";
import CartArea from "../../components/CartArea";
import { ProductItem } from "../../types/ProductItem";
import { ProductCartItem } from "../../types/ProductCartItem";
import { itemsProduct } from "./items";
import Modal from "../../components/Modal";
import ProductInfo from "../../components/ProductInfo";


export default ()=>{
    const [showCart,setShowCart]=useState<boolean>(false);
    const [items,setItems]=useState<ProductItem[]>([]);
    const [itemsCart,setItemsCart]=useState<ProductCartItem[]>([]);
    const [visibleModal,setVisibleModal]=useState(false);
    const [selectedProductItem,setSelectedProductItem]=useState<ProductItem | null>(null);

    useEffect(()=>{
        fillItems();
    },[]);

    const fillItems=()=>{
        setItems(itemsProduct);
    }

    useEffect(()=>{
        fillProductItem();
    },[visibleModal]);

    const fillProductItem=()=>{
        setSelectedProductItem(selectedProductItem);
    }

    useEffect(()=>{
        verifyItemsCart();
    },[itemsCart]);
    
    const verifyItemsCart=()=>{
        if(itemsCart.length > 0){
            setShowCart(true);
        }
    }

    const addCartItem=(item:ProductCartItem)=>{
        let cartList:ProductCartItem[]=[...itemsCart];
        cartList.push(item);
        setItemsCart(cartList);
        setVisibleModal(false);
    }
    
    const addExistingCartItem=(index:number)=>{
        let newItemsCart=[...itemsCart];
        let itemSelected=newItemsCart[index];
        itemSelected.quantity=itemSelected.quantity+1;
        itemSelected.total_price=itemSelected.unity_price*itemSelected.quantity;
        setItemsCart(newItemsCart);
        setVisibleModal(false);
    }

    return (
        <Style.Container>
            <Style.FilterArea></Style.FilterArea>
            
            <Style.ContainerProductInfo>
                <Style.ProductArea>
                    {items.map((item)=>(
                        <ProductCard 
                            key={item.id} 
                            setVisibleModal={setVisibleModal} 
                            setSelectedItem={setSelectedProductItem}
                            item={item}
                        />
                    ))}
                </Style.ProductArea>
                
                <CartArea 
                    show={showCart}
                    setShowCart={setShowCart}
                    itemsCart={itemsCart}
                    setItemsCart={setItemsCart}
                />
            </Style.ContainerProductInfo>

            <Modal visible={visibleModal} setVisible={setVisibleModal}>
                <ProductInfo 
                    selectedProduct={selectedProductItem as ProductItem}
                    setItemsCart={addCartItem}
                    itemsCart={itemsCart}
                    addExistingCartItem={addExistingCartItem}
                />
            </Modal>
        </Style.Container>
    )
}