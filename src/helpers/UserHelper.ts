

export const isLogged=()=>{
    let token=localStorage.getItem('token_deliveryApp') as string;
    return (token!=="" && token!==null)?true:false;
}

export const getToken=()=>{
    return localStorage.getItem('token_deliveryApp'); 
}