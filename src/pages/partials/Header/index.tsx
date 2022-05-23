import React,{useContext, useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import * as Style from './style';
import { FaCartPlus} from "react-icons/fa";
import ProfileItem from "../ProfileItem";
import { Context } from "../../../contexts/Context";

export default ()=>{
    const {state,dispatch}=useContext(Context);

    const [profileShow,setProfileShow]=useState(false);
    return (
        <Style.Container>
            <nav>
                <Style.Menu>
                    <Link to="">
                       <Style.MenuItem>Home</Style.MenuItem>
                    </Link>

                    <Link to="/meus_pedidos">
                       <Style.MenuItem>Meus Pedidos</Style.MenuItem>
                    </Link>
                </Style.Menu>

                <Style.CartRightArea>
                    <Style.ProfileArea onClick={()=>{setProfileShow(true);}}>
                        <Style.ProfilePicture width="40px"></Style.ProfilePicture>
                        <Style.ProfileName>{state.user.name}</Style.ProfileName>
                    </Style.ProfileArea>

                    <ProfileItem show={profileShow} setProfileShow={setProfileShow}/>
                    
                    <Style.CartItem>
                        <FaCartPlus width={60} color="white"/>
                        <Style.CartNumber>
                            {state.itemsCart.length}
                        </Style.CartNumber>
                    </Style.CartItem>
                </Style.CartRightArea>
            </nav>
        </Style.Container>
    )
}