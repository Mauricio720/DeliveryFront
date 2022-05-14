import React from "react";
import * as Style from './style';

type Props={
    show?:boolean;
    setShowCart:(showCart:boolean)=>void;
}

export default ({show,setShowCart}:Props)=>{
    return (
        <Style.Container right={show?'0px':'-400px'}>
            <Style.CloseCart onClick={()=>{setShowCart(false)}}>X</Style.CloseCart>
        </Style.Container>
    )
}