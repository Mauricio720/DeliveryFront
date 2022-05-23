import { Route,Routes } from "react-router-dom";
import Home from '../pages/Home';
import User from './User/MyProfile';
import AuthComponent from "./AuthComponent";
import Orders from "../pages/Orders";

export default ()=>{
    return (
        <Routes>
            <Route path="/" element={
                <AuthComponent>
                    <Home/>
                </AuthComponent>
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
        </Routes>
    )
}