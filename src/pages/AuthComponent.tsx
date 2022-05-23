import { Navigate } from "react-router-dom"
import { isLogged,getToken,getUser, getAddress } from "../helpers/UserHelper";
import {Context} from '../contexts/Context';
import { useContext, useEffect } from "react";

type Props={
    children:JSX.Element;
}

export default ({children}:Props)=>{
    const {state,dispatch}=useContext(Context);
    
    useEffect(()=>{
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
    },[])

    if(!isLogged()){
        return <Navigate to="/login"/>
    }
    
    return children;
}

