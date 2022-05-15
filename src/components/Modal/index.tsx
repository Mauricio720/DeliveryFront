import React, { useEffect } from 'react';
import * as Style from './style';

type Props={
    setVisible:(isVisible:boolean)=>void;
    visible:boolean;
    children:JSX.Element;
}

export default ({visible,setVisible,children}:Props)=>{
    
    return (
        <>
        {visible &&
            <Style.ModalContainer>
                <Style.ModalContent>
                    <Style.ModalClose onClick={()=>{setVisible(false)}}>X</Style.ModalClose>
                    {children}
                </Style.ModalContent>
            </Style.ModalContainer>
        }
        </>
    )
}

