import {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import * as Style from './style';
import { FaCartPlus} from "react-icons/fa";
import ProfileItem from "../ProfileItem";
import { Context } from "../../contexts/Context";
import { isLogged,getToken,getUser, getAddress } from "../../helpers/UserHelper";

export default ()=>{
    const {state,dispatch}=useContext(Context);
    const [profileShow,setProfileShow]=useState(false);
    const [menuMobileShow,setMenuMobile]=useState(false);
    const [menuSelected,setMenuSelected]=useState(0);

    useEffect(()=>{
        setInfos();
    },[]);

    const setInfos=()=>{
        dispatch({
            type:'SET_TOKEN',
            payload:{
                token:getToken()
            }
        });
        
        dispatch({
            type:'SET_USER',
            payload:{
                user:getUser()
            }
        });

        dispatch({
            type:'SET_ADDRESS',
            payload:{
                address:getAddress()
            }
        });
    }    
    
    const openCloseCart=()=>{
        let isOpen=!state.cartAction.isOpen;
        
        if(state.itemsCart.length === 0 ){
            isOpen=false;
        }
        
        dispatch({
            type:'OPEN_CLOSE_CART',
            payload:{
                isOpen
            }
        })
    }

    return (
        <Style.Container>
            <nav>
                <Style.MenuMobile onClick={()=>{setMenuMobile(true)}}>
                    <Style.MenuMobileLine></Style.MenuMobileLine>
                    <Style.MenuMobileLine></Style.MenuMobileLine>
                    <Style.MenuMobileLine></Style.MenuMobileLine>
                </Style.MenuMobile>
                
                <Style.Menu>
                    <Link to="">
                       <Style.MenuItem onClick={()=>{setMenuSelected(0)}} 
                            selectedMenu={menuSelected===0?true:false}>
                            Home
                        </Style.MenuItem>
                    </Link>

                    {isLogged() &&
                    <Link to="/meus_pedidos">
                       <Style.MenuItem onClick={()=>{setMenuSelected(1)}} 
                         selectedMenu={menuSelected===1?true:false}>
                           Meus Pedidos
                        </Style.MenuItem>
                    </Link>
                    }
                </Style.Menu>

                <Style.MenuMobileArea show={menuMobileShow}>
                    <Style.CloseMobileMenu onClick={()=>{setMenuMobile(false)}}>X</Style.CloseMobileMenu>
                    <Link to="" onClick={()=>{setMenuMobile(false)}}>
                       <Style.MenuItem>Home</Style.MenuItem>
                    </Link>

                    {isLogged() &&
                    <Link to="/meus_pedidos" onClick={()=>{setMenuMobile(false)}}>
                       <Style.MenuItem>Meus Pedidos</Style.MenuItem>
                    </Link>
                    }
                </Style.MenuMobileArea>

                <Style.CartRightArea>
                    {isLogged() &&
                        <>
                            <Style.ProfileArea onClick={()=>{setProfileShow(true);}}>
                                <Style.ProfilePicture 
                                    width="40px"
                                    src={state.user.profileImg}
                                />
                                <Style.ProfileName>{state.user.name}</Style.ProfileName>
                            </Style.ProfileArea>

                            <ProfileItem show={profileShow} setProfileShow={setProfileShow}/>
                        </>
                    }

                    {!isLogged() &&
                        <Link to="/login">
                            Fazer Login
                        </Link>
                    }

                    <Style.CartItem onClick={()=>{openCloseCart()}}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" className="react-icons" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" style={{color: 'black'}}><path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z" /></svg>

                        <Style.CartNumber>
                            {state.itemsCart.length}
                        </Style.CartNumber>
                    </Style.CartItem>
                </Style.CartRightArea>
            </nav>
        </Style.Container>
    )
}