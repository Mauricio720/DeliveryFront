import React from "react";
import {Routes, Route, Router} from 'react-router-dom';
import AuthComponent from "./pages/AuthComponent";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

export default () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/*" element={<Main/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )

}