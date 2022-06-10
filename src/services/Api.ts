import qs from 'qs';
import { ProductCartItem } from "../types/ProductCartItem";
import { ProductItem } from "../types/ProductItem";
import {getToken,logout} from '../helpers/UserHelper';

var BASEAPI='http://localhost:80/site';
var token="";

verifyToken();

function verifyToken(){
    token=getToken() as string;
}

const apiFetchPost=async (endpoint:string,body:Object)=>{
    const res=await fetch(BASEAPI+endpoint,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify(body)
    });

    const json= await res.json();
    if(res.status===403){
        logout();
        window.location.href="/login";
        return;
    }
    
    return json;
}

const apiFetchFile=async (endpoint:string,body:FormData)=>{
    const res=await fetch(BASEAPI+endpoint,{
        method:'POST',
        headers:{
            'Authorization': `Bearer ${token}`
        },
        body
    });

    if(res.status===403){
        logout();
        window.location.href="/login";
        return;
    }

    const json= await res.json();
   
    return json;
}

const apiFetchGet=async (endpoint:string,body:Object | [])=>{
    const res=await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`,
    {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if(res.status===403){
        logout();
        window.location.href="/login";
        return;
    }

    const json= await res.json();
    return json;
}

export default {
    login: async (email:string,password:string)=>{
        let response= await apiFetchPost('/login',{email,password});
        return response;
    },

    getProducts: async (name?:string)=>{
        let response=await apiFetchGet('/products',{name}) as ProductItem[];
        return response;
    },
    
    addUser:async (name:string,email:string,password:string,profileImg?:string)=>{
        let formData=new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('password',password);
        if(profileImg){
            formData.append('profileImg',profileImg);
        }

        let response=await apiFetchFile('/add_user',formData);
        return response;
    },

    updateUser:async (id:number,name:string,email:string,password:string,profileImg?:string)=>{
        let formData=new FormData();
        formData.append('id',id.toString());
        formData.append('name',name);
        formData.append('email',email);
        
        if(password !== ""){
            formData.append('password',password);
        }
        
        if(profileImg){
            formData.append('profileImg',profileImg);
        }

        let response=await apiFetchFile('/update_user',formData)
        return response;
    },

    addAddress:async (street:string, number:string,neighborhood:string,city:string,state:string, 
        cep:string, idUser:number, complement?:string)=>{
        let response=await apiFetchPost('/add_address',{street,number,neighborhood, city, state, cep,idUser,complement});
        return response;
    },

    updateAddress:async (id:number,street?:string, number?:string,neighborhood?:string,city?:string,state?:string, 
        cep?:string, complement?:string)=>{
        let response=await apiFetchPost('/update_address',{id,street,number,neighborhood, city, state, cep,complement});
        return response;
    },

    addSale:async (subtotal:number,total:number,idUser:number, idAddress:number,observation:string)=>{
        let response=await apiFetchPost('/add_sale',{subtotal,total,idUser,idAddress,observation});
        return response;
    },

    addItemsSale: async (itemCartProducts:ProductCartItem[], idSale:number)=>{
        let itemsCart=JSON.stringify(itemCartProducts);
        let response=await apiFetchPost('/add_sale_item',{
            itemsProducts:itemsCart,
            idSale
        });

        return response;
    },

    getSales:async (idUser:number)=>{
        let allSales=await apiFetchGet(`/get_sales`,{idUser});
        return allSales;
    },

    getSale:async (idSale:number)=>{
        let sale=await apiFetchGet(`/get_sale`,{idSale});
        return sale;
    },

    getItemsSale:async (idSale:number)=>{
        let itemsSale=await apiFetchGet(`/get_items_sale`,{idSale});
        return itemsSale;
    },
    
    getCep: async (cep:string)=>{
        let oldURL=BASEAPI;
        BASEAPI='https://viacep.com.br/ws/';
        let response=apiFetchGet(`${cep}/json/`,{});
        BASEAPI=oldURL;
        return response;
    }
}

