import { ReducerActionType } from "../types/ReducerActionType";

export type ActionCart={
    idUser:number;
    isOpen:boolean;
}

let idUserCart=parseInt(localStorage.getItem('idUserCart') as string);

export const actionCartInitialState:ActionCart={
    idUser:idUserCart,
    isOpen:false
};

export const cartActionReducer=(state:ActionCart,action:ReducerActionType)=>{
    switch (action.type) {
        case 'SET_ID_USER_CART':
            localStorage.setItem('idUserCart',action.payload.idUserCart);
            return {...state,idUser:action.payload.idUserCart};
        
        case 'OPEN_CLOSE_CART':
            return {...state,isOpen:action.payload.isOpen};
        default:
            break;
    }

    return state;

}