import React,{useState,useEffect} from "react";
import * as Style from './style';
import CartItem from './CartItem';
import {Context} from '../../contexts/Context';
import { useContext } from "react";
import Modal from "../Modal";
import ResumeOrder from "../ResumeOrder";
import {isLogged} from '../../helpers/UserHelper';
import { Link } from "react-router-dom";

type Props={
    show?:boolean;
    setShowCart:(visible:boolean)=>void;
}

export default ({show,setShowCart}:Props)=>{
    const [total,setTotal]=useState('');
    const {state,dispatch}=useContext(Context);
    const [visibleModal,setVisibleModal]=useState(false);

    var itemsCart=state.itemsCart;
    
    useEffect(()=>{
        calcTotal();
    },[itemsCart]);

    const calcTotal=()=>{
        let total= 0;
        itemsCart.forEach((item)=>{
            total+=item.total_price 
        });
        let totalConvert=total.toFixed(2).replace('.',',');
        setTotal(totalConvert);
    }

    const closeCart=()=>{
        setShowCart(false);
        dispatch({
            type:'OPEN_CLOSE_CART',
            payload:{
                isOpen:false
            }
        })
    }

    const clearItemsCart=()=>{
        dispatch({
            type:'CLEAR_CART',
            payload:{
                idProduct:undefined
            }
        });
    }

    return (
        <Style.Container right={show?'5px':'-585px'}>
            <Style.CloseCart onClick={()=>{closeCart()}}>X</Style.CloseCart>
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
                    />
                ))}
            </Style.CartListArea>
            
            {isLogged() && 
                <Modal visible={visibleModal} setVisible={setVisibleModal}>
                    <ResumeOrder total={total} setVisible={setVisibleModal}/>
                </Modal>
             }

            {!isLogged() && 
                <Modal visible={visibleModal} setVisible={setVisibleModal}>
                    <>
                        <h4>Para finalizar o pedido, você precisa estar logado.</h4>
                        <Link to="/login">
                            Fazer Login
                        </Link>
                    </>
                </Modal>
             }

            <Style.CartFooter>
                <Style.BtnCart background="red" onClick={clearItemsCart}>Limpar</Style.BtnCart>
                <Style.BtnCart background="green" onClick={()=>{setVisibleModal(true)}}>Finalizar</Style.BtnCart>
            </Style.CartFooter>
        </Style.Container>
    )
}