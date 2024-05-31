 import { NavLink } from "react-router-dom"
 import { SimpleModal } from "../modal/simplModal"
 import { useState } from "react"

 const Root:React.FC=()=>{

    const[activeModal, setActivModal]=useState(false)

    return(
        
       
        <div  >
            {/* <h1 className="text-3xl font-bold underline text-zinc-500">
      Hello world!
    </h1> */}
             
             <button className='open-modal-btn'
                onClick={()=>setActivModal(true)}
                ><div >{!activeModal?'OPEN':''}</div></button>

             <SimpleModal active={activeModal} 
             setActive={setActivModal}>

                {/* <h2 className={'block-modal card'}>Modal Info</h2>
                <p className={'bg-slate-500'}>dadadaddaddadaddd</p> */}
             </SimpleModal>


    </div>
    
 
        
    )
}
export default Root