import { ReducerActionType } from "../types/ReducerActionType";

export type UserType={
    id:number,
    name:string,
    email:string,
    profileImg:string,
    token:string
}

export const userInitialState:UserType={
    id:0,
    name:'',
    email:'',
    profileImg:'',
    token:''   
};

export const userReducer=(state:UserType,action:ReducerActionType)=>{
    switch (action.type) {
        case 'SET_USER':
            let newState={...state};
            newState=action.payload.user;
            return newState;
        break;
        
        case 'SET_TOKEN':
            localStorage.setItem('token_deliveryApp',action.payload.token);
            return {...state,token: action.payload.token}
        break;
    }

    return state;
}