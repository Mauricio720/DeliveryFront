export const isLogged=()=>{
    let token=localStorage.getItem('token_deliveryApp') as string;
    return (token!=="" && token!==null)?true:false;
};

export const getToken=()=>{
    return localStorage.getItem('token_deliveryApp'); 
};

export const getUser=()=>{
    return JSON.parse(localStorage.getItem('user') as string);
}

export const getAddress=()=>{
    return JSON.parse(localStorage.getItem('address') as string);
}