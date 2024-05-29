 import { NavLink } from "react-router-dom"
 import { SimpleModal } from "../modal/simplModal"
 import { useState } from "react"

 const Root:React.FC=()=>{

    const[activeModal, setActivModal]=useState(false)

    return(
        
       <>
        <main className="main" >
            <section className="section">
            <h1 className="text-3xl font-bold underline text-zinc-500">
      Hello world!
    </h1>

                <button className="modal-show-btn" 
                onClick={()=>setActivModal(true)}
                >Open modal window</button>

             <SimpleModal active={activeModal} 
             setActive={setActivModal}>
                <h2>Modal Info</h2>
                <p className={'bg-slate-500'}>dadadaddaddadaddd</p>
             </SimpleModal>
             
         </section>
    </main>
    
 
        </>
    )
}
export default Root