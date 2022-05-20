import {Routes, Route} from 'react-router-dom';
import { ContextProvider } from './contexts/Context';
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import RegisterUser from './pages/User/RegisterUser';

export default () => {
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