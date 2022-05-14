import { Navigate } from "react-router-dom"

type Props={
    children:JSX.Element;
}

export default ({children}:Props)=>{
    let isLogged=true;

    if(!isLogged){
        return <Navigate to="/login"/>
    }

    return children;
}