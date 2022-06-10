import * as Style from './style';
import {Sale} from '../../../types/Sales';
import { useNavigate } from 'react-router-dom';


type Props={
    order:Sale
}

export default ({order}:Props)=>{
    const navigate=useNavigate();
    
    const changeScreen=()=>{
        navigate(`/ver_pedido/${order.id}`);
    }

    return (
        <Style.Container>
            <Style.OrderSlot>
                <Style.Label>Data Pedido:</Style.Label>
                <Style.OrderValue>15/01/2022</Style.OrderValue>
            </Style.OrderSlot>

            <Style.OrderSlot>
                <Style.Label>Total:</Style.Label>
                <Style.OrderValue>{order.total}</Style.OrderValue>
            </Style.OrderSlot>

            <Style.OrderSlot>
                <Style.Button onClick={changeScreen}>Ver Mais Detalhes</Style.Button>
            </Style.OrderSlot>
        </Style.Container>
    )
}