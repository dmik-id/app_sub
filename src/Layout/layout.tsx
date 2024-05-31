import { Outlet,NavLink } from "react-router-dom";
import { useState } from "react";
import { SimpleModal } from "../modal/simplModal";



export const Layout=()=>{

const[activeModal, setActivModal]=useState(false)
return(
    <div className={' layout h-dvh w-dvw '}>


    
   <div className={''}> 
   
   <div className={''}><Outlet></Outlet></div>

        <div> <button 
                onClick={()=>setActivModal(true)}
                ><div >{!activeModal?'OPEN':''}</div>
            </button>
                <p>hfhgoldsjfhgpoldfjhpofdjh</p>
                 <p>dhigfihygirhygtriogtirorioutyg</p>
                 <p>odljfgodrfsgtujhdortfhujotih</p>
             <SimpleModal active={activeModal} 
             setActive={setActivModal}>

                <h2 className={'block-modal card'}>Modal Info</h2>
                <p className={'bg-slate-500'}>dadadaddaddadaddd</p>
             </SimpleModal>
        </div>

   </div>
   
    <footer className={''}>
     <NavLink to={'./'} className={'text-black block'} >HOME</NavLink>
     <br></br>
     
     <NavLink to='/tomovies' className={'text-black block '}>TO MOVIES</NavLink>
     </footer>
    </div>
)

}