import { Route,Routes } from "react-router-dom";
import Home from '../pages/Home';
import User from './User/MyProfile';
import AuthComponent from "./AuthComponent";
import Orders from "../pages/Orders";
import SeeOrderDetail from "./SeeOrderDetail";

export default ()=>{
    return (
        <Routes>
            <Route path="/" element={
                <Home/>
            }/>

            <Route path="/meu_perfil" element={
                <AuthComponent>
                    <User/>
                </AuthComponent>
             }/>

            <Route path="/meus_pedidos" element={
                <AuthComponent>
                    <Orders/>
                </AuthComponent>
             }/>

            <Route path="/ver_pedido/:order" element={
                <AuthComponent>
                    <SeeOrderDetail/>
                </AuthComponent>
             }/>
        </Routes>
    )
}