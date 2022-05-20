import { Navigate } from "react-router-dom"
import { isLogged,getToken } from "../helpers/UserHelper";
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
    },[])

    if(!isLogged()){
        return <Navigate to="/login"/>
    }
    
    return children;
}

