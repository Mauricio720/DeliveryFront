import { ReducerActionType } from "../types/ReducerActionType";

export type ProductCartItemType={
    id:string;
    idProduct:number;
    name:string;
    quantity:number;
    unity_price:number;
    total_price:number;
    img:string;
};

let cartItems=JSON.parse(localStorage.getItem('cartItems') as string) as ProductCartItemType[];
export const itemsCartInitialState:ProductCartItemType[]=cartItems?cartItems:[];
   
export const itemsCartReducer=(state:ProductCartItemType[],action:ReducerActionType)=>{
    switch (action.type) {
        case 'ADD_CART_ITEM':
            let newItems=[...state];
            let index=action.payload.index;
            
            newItems.push(action.payload.itemCart);
            
            localStorage.setItem('cartItems',JSON.stringify(newItems));
            return newItems;
            break;
        
        case 'UPDATE_CART':
            let items=action.payload.items;    
            return items;
            break;
        
        case 'CLEAR_CART':
            return [];
            break;
        
        default:
            break;
    }

    return state;
}