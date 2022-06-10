export const getCartActionIdUser=()=>{
    return parseInt(localStorage.getItem('idUserCart') as string);
}