import React,{useEffect, useState} from "react";
import * as Style from './style';
import ProductCard from "../../components/ProductCard";
import CartArea from "../../components/CartArea";
import { ProductItem } from "../../types/ProductItem";
import { ProductCartItem } from "../../types/ProductCartItem";
import Modal from "../../components/Modal";
import ProductInfo from "../../components/ProductInfo";
import Api from "../../services/Api";
import {Context} from '../../contexts/Context';
import { useContext } from "react";
import LoadingSpin from "react-loading-spin";

export default ()=>{
    const {state,dispatch}=useContext(Context);
    const [showCart,setShowCart]=useState<boolean>(false);
    const [items,setItems]=useState<ProductItem[]>([]);
    const [visibleModal,setVisibleModal]=useState(false);
    const [selectedProductItem,setSelectedProductItem]=useState<ProductItem | null>(null);
    const [searchText,setSearchText]=useState('');
    const [loading,setLoading]=useState(true);
    const [firstRender,setFirstRender]=useState(true);
    
    useEffect(()=>{
        fillItems();
    },[searchText]);

    const fillItems=async ()=>{
        let products:ProductItem[]=[];
        
        if(searchText===""){
            setLoading(true);
            products=await Api.getProducts();
            setItems(products);
            setLoading(false);
        }else{
            setItems([]);
            setLoading(true);
            setTimeout(async ()=>{
                products=await Api.getProducts(searchText);
                setItems(products);
                setLoading(false);
            },1000);
        }
    }

    useEffect(()=>{
        fillProductItem();
    },[visibleModal]);

    const fillProductItem=()=>{
        setSelectedProductItem(selectedProductItem);
    }

    useEffect(()=>{
        verifyItemsCart();
    },[state.itemsCart,state.cartAction.isOpen]);
    
    const verifyItemsCart=()=>{
        if(firstRender){
            if(state.itemsCart.length > 0){
                setShowCart(true);
            }
            setFirstRender(false);
        }else{
            setShowCart(state.cartAction.isOpen);
        }
    }

    return (
        <Style.Container>
            <Style.FilterArea>
                <Style.FilterInput 
                    onChange={(e)=>setSearchText(e.target.value)}
                    placeholder="Digite o nome..."/>
            </Style.FilterArea>
            
            <Style.ContainerProductInfo>
                <Style.ProductArea>
                    {!loading &&
                        <>
                            {items.map((item)=>(
                                <ProductCard 
                                    key={item.id} 
                                    setVisibleModal={setVisibleModal} 
                                    setSelectedItem={setSelectedProductItem}
                                    item={item}
                                />
                            ))}
                        </>
                    }
                    
                    {loading &&
                        <LoadingSpin size="35px" primaryColor='blue' />
                    }
                </Style.ProductArea>
                <CartArea 
                    show={showCart}
                    setShowCart={setShowCart}
                />
            </Style.ContainerProductInfo>

            <Modal visible={visibleModal} setVisible={setVisibleModal}>
                <ProductInfo 
                    selectedProduct={selectedProductItem as ProductItem}
                    setVisibleModal={setVisibleModal} 
                />
            </Modal>
        </Style.Container>
    )
}