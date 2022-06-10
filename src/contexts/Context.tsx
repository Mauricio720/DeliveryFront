import {createContext,useReducer} from 'react';
import {UserType,userInitialState,userReducer} from '../reducers/userReducer';
import {ProductCartItemType ,itemsCartInitialState, itemsCartReducer} from '../reducers/itemsCartReducer';
import {actionCartInitialState,ActionCart,cartActionReducer} from '../reducers/cartActions';
import { ReducerActionType } from '../types/ReducerActionType';

type initialStateType={
    user:UserType,
    itemsCart:ProductCartItemType[],
    cartAction:ActionCart
};

type ContextType={
    state:initialStateType;
    dispatch:React.Dispatch<any>
}

const initialState={
    user:userInitialState,
    itemsCart:itemsCartInitialState,
    cartAction:actionCartInitialState
}

export const Context=createContext<ContextType>({
    state:initialState,
    dispatch:()=>null
});

const mainReducer=(state:initialStateType,action:ReducerActionType)=>({
    user:userReducer(state.user,action),
    itemsCart:itemsCartReducer(state.itemsCart,action),
    cartAction:cartActionReducer(state.cartAction,action)
});

interface ComponentWithChildrenProps {
    children: React.ReactNode
};

export const ContextProvider=({children}:ComponentWithChildrenProps)=>{
    const [state,dispatch]=useReducer(mainReducer,initialState);
    
    return (
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    );
}