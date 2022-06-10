import { Address } from '../../../../types/Address';
import * as Style from './style';
import { Context } from "../../../../contexts/Context";
import { useContext } from 'react';

type Props={
    address:Address
}

export default ({address}:Props)=>{
    const {state,dispatch}=useContext(Context);

    const changeSelectedAddress=()=>{
        dispatch({
            type:'SET_SELECTED_ADDRESS',
            payload:{
                idSelectedAddress:address.id
            }
        })
    }

    return (
        <Style.Container>
           <Style.AddressAreaSelected>
               <Style.SelectedRadio 
                    type="radio" 
                    name='address'
                    onChange={changeSelectedAddress}
                    checked={(address.id===state.user.selectedAddressId)?true:false}
                />
            </Style.AddressAreaSelected>
            <Style.AddressInfoArea>
                {`Rua: ${address.street}, ${address.number} - ${address.neighborhood} - ${address.city}`}
            </Style.AddressInfoArea>
        </Style.Container>
    )
}