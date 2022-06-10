import { useContext, useEffect,useState } from 'react';
import { Context } from "../../contexts/Context";
import { Sale } from '../../types/Sales';
import Api from '../../services/Api';
import * as Style from './style'; 
import OrderItem from './OrderItem';

export default ()=>{
    const {state,dispatch}=useContext(Context);
    const [allSales,setSales]=useState<Sale[]>([]);

    useEffect(()=>{
        getSales();
    },[state.user]);
    
    const getSales=async ()=>{
        let response=await Api.getSales(state.user.id);
        setSales(response.sales);
    }

    return (
        <Style.Container>
            <Style.Title>Meus Pedidos</Style.Title>
            <Style.ListOrder>
                {allSales.map((saleItem)=>(
                    <OrderItem 
                        key={saleItem.id}
                        order={saleItem}
                    />    
                ))}
            </Style.ListOrder>
        </Style.Container>
    )
}