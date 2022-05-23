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
    let newItemsCart=[...state];
    let idProduct=action.payload.idProduct;   
    let index=findProductInCart(idProduct,[...state]);
    let newQuantity=action.payload.quantity

    switch (action.type) {
        case 'ADD_CART_ITEM':
            if(idProduct===undefined){
                newItemsCart.push(action.payload.itemCart);
            }else{
                newQuantity+=newQuantity;
                newItemsCart=updateQuantity(newItemsCart,index,newQuantity);
            }
            
            localStorage.setItem('cartItems',JSON.stringify(newItemsCart));
            return newItemsCart;
        
        case 'UPDATE_CART':
            newItemsCart=updateQuantity(newItemsCart,index,newQuantity);
            localStorage.setItem('cartItems',JSON.stringify(newItemsCart)); 
            return newItemsCart;

        case 'DELETE_CART_ITEM':
            newItemsCart.splice(findProductInCart(idProduct,newItemsCart),1);
            localStorage.setItem('cartItems',JSON.stringify(newItemsCart)); 
            return newItemsCart;
        
        case 'CLEAR_CART':
            localStorage.setItem('cartItems',JSON.stringify([]));
            return [];
        
        default:
            break;
    }

    return state;
}

const updateQuantity=(newItemsCart:ProductCartItemType[],index:number,quantitySelected:number)=>{
    newItemsCart[index].quantity=quantitySelected;
    let unity_price=newItemsCart[index].unity_price;
    newItemsCart[index].total_price=unity_price*quantitySelected;
    return newItemsCart;
}


const findProductInCart=(id:number,itemsCart:ProductCartItemType[])=>{
    let index=itemsCart.findIndex((item)=>{
        if(item.idProduct===id){
            return true;
        }
    });

    return index;
}
