import React from "react";
import'./simplModal.css';


interface IModalProps{
    active:boolean;
    setActive(str:boolean):void;
    children:JSX.Element[];
}

export const SimpleModal:React.FC<IModalProps >=({active,setActive,children})=>{
    return(
        <>{active&&

        
        (<div className="modal">
            <div className="modal-wrapper">
                <div className="modal-content">
                   <button className="modal-close-btn"
                   onClick={()=>setActive(false)}
                   >&times;</button>
                   {children}
                </div>

            </div>
          </div>)
           }
        </>
    )
}