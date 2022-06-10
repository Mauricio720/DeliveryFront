import { Navigate } from "react-router-dom"
import { isLogged } from "../helpers/UserHelper";


type Props={
    children:JSX.Element;
}

export default ({children}:Props)=>{
     if(!isLogged()){
        return <Navigate to="/login"/>
    }
    
    return children;
}

