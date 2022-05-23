import { useContext, useEffect,useState } from 'react';
import { Context } from '../../contexts/Context';
import * as Style from './style'; 
import { Sale } from '../../types/Sales';
import Api from '../../services/Api';

export default ()=>{
    const {state,dispatch}=useContext(Context);
    const [allSales,setSales]=useState<Sale[]>([]);

    useEffect(()=>{
        getSales();
    },[]);
    
    const getSales=async ()=>{
        
        let allSales=await Api.getSales(state.user.id);
        console.log(allSales);
        
        
        setSales(allSales);
    }

    return (
        <Style.Container>
            <h1>Pedidos</h1>
        </Style.Container>
    )
}