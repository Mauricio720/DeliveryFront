import { Route,Routes } from "react-router-dom";
import Home from '../pages/Home';
import User from '../pages/User';
import AuthComponent from "./AuthComponent";

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
        </Routes>
    )
}