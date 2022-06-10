import { useEffect,useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import { Context, ContextProvider } from './contexts/Context';
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import RegisterUser from './pages/User/RegisterUser';
import { getToken,getUser, getAddress } from "./helpers/UserHelper";
import { getCartActionIdUser } from './helpers/CartItem';

export default () => {
    const {state,dispatch}=useContext(Context);
    
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
        
        dispatch({
            type:'SET_ID_USER_CART',
            payload:{
                idUserCart:getCartActionIdUser()
            }
        });
    }  

    return (
        <ContextProvider>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastrar_usuario" element={<RegisterUser/>}/>
                <Route path="/*" element={<Main/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </ContextProvider>
    )

}