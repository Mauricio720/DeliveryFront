import qs from 'qs';
import { ProductCartItem } from "../types/ProductCartItem";
import { ProductItem } from "../types/ProductItem";


const BASEAPI='http://localhost:80/site';

const verifyToken=async (body:FormData,fetchFile=false,token='')=>{
    if(token){
        if(fetchFile){
            body=body as FormData;
            body.append('token',token);
        }else{
            //body.token=token;
        }
    }
    return token;
}


const apiFetchFile= async (endpoint:string,body:FormData)=>{
   // let token=await AsyncStorage.getItem('token');

    //verifyToken(body,true,token);

    const res=await fetch(BASEAPI+endpoint,{
        method:'POST',
        body        
    });

    const json= await res.json();

    return json;
    
}

const apiFetchPost=async (endpoint:string,body:Object)=>{
    //let token=await AsyncStorage.getItem('token');
    
    const res=await fetch(BASEAPI+endpoint,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(body)
    });

    const json= await res.json();
    return json;
}

const apiFetchGet=async (endpoint:string,body:Object | [])=>{
    //let token=await AsyncStorage.getItem('token');

    //verifyToken(body,false,token);
    const res=await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`,
    {
        headers: {
            'Accept': 'application/json',
        }
    });

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
    
    addUser:async (name:string,email:string,password:string)=>{
        let response=await apiFetchPost('/add_user',{name,email,password});
        return response;
    },

    addAddress:async (street:string, number:string,neighborhood:string,city:string,state:string, 
        cep:string, idUser:number, complement?:string)=>{
        let response=await apiFetchPost('/add_address',{street,number,neighborhood, city, state, cep,idUser,complement});
        return response;
    },

    addSale:async (subtotal:number,total:number,idUser:number, idAddress:number)=>{
        let response=await apiFetchPost('/add_sale',{subtotal,total,idUser,idAddress});
        return response;
    },

    addItemsSale: async (itemCartProducts:ProductCartItem[], idSale:number)=>{
        let itemsCart=JSON.stringify(itemCartProducts);
        let response=await apiFetchPost('/add_sale_item',{
            itemsProducts:itemsCart,
            idSale
        });

        return response;
    }
}

