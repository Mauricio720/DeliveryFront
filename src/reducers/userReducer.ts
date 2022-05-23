import { ReducerActionType } from "../types/ReducerActionType";
import { Address } from "../types/Address";

export type UserType={
    id:number,
    name:string,
    email:string,
    profileImg:string,
    token:string,
    address:Address[]
}

export const userInitialState:UserType={
    id:0,
    name:'',
    email:'',
    profileImg:'',
    token:'',
    address:[]   
};

export const userReducer=(state:UserType,action:ReducerActionType)=>{
    switch (action.type) {
        case 'SET_USER':
            let user={...state};
            user=action.payload.user;
            localStorage.setItem('user',JSON.stringify(user));
            
            return user;
        
        case 'SET_TOKEN':
            localStorage.setItem('token_deliveryApp',action.payload.token);
            return {...state,token: action.payload.token};
        
        case 'SET_ADDRESS':
            localStorage.setItem('address',JSON.stringify(action.payload.address));
            return {...state,address: action.payload.address};

        case 'SET_NEW_ADDRESS':
            let address=[...state.address];
            address.push(action.payload.newAddress);
            return {...state,address};
        
        default:
            break;
    }

    return state;
}