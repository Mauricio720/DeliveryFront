import React from 'react';
import * as Style from './style';

type Props={
    setVisible:(visible:boolean)=>void;
    visible:boolean;
    children:JSX.Element;

}
export default ({visible,setVisible,children}:Props)=>{
    
    
    return (
        <>
        {visible &&
            <Style.ModalContainer onClick={()=>{setVisible(false)}}>
                <Style.ModalContent>
                    <Style.ModalClose onClick={()=>{setVisible(false)}}>X</Style.ModalClose>
                    {children}
                </Style.ModalContent>
            </Style.ModalContainer>
        }
        </>
    )
}

