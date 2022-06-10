import * as Style from './style';
import AddressSelectedItem from './AddressSelectedItem';
import { Context } from "../../../contexts/Context";
import { useContext } from 'react';

export default ()=>{
    const {state,dispatch}=useContext(Context);

    return (
        <Style.Container>
            {state.user.address.map((address,index)=>(
                <AddressSelectedItem key={address.id} address={address}/>
            ))}
        </Style.Container>
    )
}