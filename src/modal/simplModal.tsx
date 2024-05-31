import React from "react";
import'./simplModal.css';



interface IModalProps{
    active:boolean;
    setActive(str:boolean):void;
    children?:JSX.Element[];
}

export const SimpleModal:React.FC<IModalProps >=({active,setActive,children})=>{

    return(
        <div className={!active?'modal':'modal-active'}>
        <div className={!active?'modal-content':'content-active'}>
           <button className={'block-modal'}
           onClick={()=>setActive(false)}>
            <div >
                <div className='btn'>
                    Close</div>
                </div></button>
           {children}
        </div>

    
  </div>

    )
}
    

    
        

        
