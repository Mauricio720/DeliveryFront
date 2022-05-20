import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import * as Style from './style';
import { FaCartPlus} from "react-icons/fa";
import ProfileItem from "../ProfileItem";

export default ()=>{
    const [profileShow,setProfileShow]=useState(false);
    return (
        <Style.Container>
            <nav>
                <Style.Menu>
                    <Link to="">
                       <Style.MenuItem>Home</Style.MenuItem>
                    </Link>
                </Style.Menu>

                <Style.CartRightArea>
                    <Style.ProfileArea onClick={()=>{setProfileShow(true);}}>
                        <Style.ProfilePicture width="40px"></Style.ProfilePicture>
                        <Style.ProfileName>Mauricio Ferreira</Style.ProfileName>
                    </Style.ProfileArea>

                    <ProfileItem show={profileShow} setProfileShow={setProfileShow}/>
                    
                    <Style.CartItem>
                        <FaCartPlus width={60} color="white"/>
                    </Style.CartItem>
                </Style.CartRightArea>
            </nav>
        </Style.Container>
    )
}