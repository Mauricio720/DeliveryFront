import * as Style from './style';
import {ProductCartItem} from '../../../types/ProductCartItem'

type Props={
    item:ProductCartItem
}

export default ({item}:Props)=>{
    return (
        <Style.Container>
            <Style.Img src={item.img}/>
            <Style.Title>{item.name}</Style.Title>
            <Style.Price>{`R$ ${item.unity_price.toString().replace('.',',')}`}</Style.Price>
            <Style.Price>{`R$ ${item.total_price.toString().replace('.',',')}`}</Style.Price>
            <Style.ActionArea>
                    <Style.QuantityLabel>{item.quantity}</Style.QuantityLabel>
            </Style.ActionArea>
        </Style.Container>
    )

}