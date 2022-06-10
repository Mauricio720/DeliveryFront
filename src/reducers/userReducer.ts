import { ReducerActionType } from "../types/ReducerActionType";
import { Address } from "../types/Address";

export type UserType={
    id:number,
    name:string,
    email:string,
    profileImg:string,
    token:string,
    address:Address[],
    selectedAddressId:number,
}

export const userInitialState:UserType={
    id:0,
    name:'',
    email:'',
    profileImg:'',
    token:'',
    address:[],
    selectedAddressId:0, 
};

export const userReducer=(state:UserType,action:ReducerActionType)=>{
    let address=[...state.address];

    switch (action.type) {
        case 'SET_USER':
            let newstate={...state};
            let user=action.payload.user;
            
            newstate.id=user.id;
            newstate.name=user.name;
            newstate.email=user.email;
            newstate.profileImg=user.profileImg;
            
            localStorage.setItem('user',JSON.stringify(user));
            return newstate;
        
        case 'SET_TOKEN':
            localStorage.setItem('token_deliveryApp',action.payload.token);
            return {...state,token: action.payload.token};
        
        case 'SET_ADDRESS':
            localStorage.setItem('address',JSON.stringify(action.payload.address));
            return {...state,address: action.payload.address, selectedAddressId:action.payload.address[0].id};

        case 'SET_NEW_ADDRESS':
            address.push(action.payload.newAddress);
            return {...state,address};
        
        case 'SET_SELECTED_ADDRESS':
            return {...state,selectedAddressId:action.payload.idSelectedAddress}
        default:
            break;
    }
    
    return state;
}

