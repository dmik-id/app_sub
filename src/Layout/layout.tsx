import { Outlet,NavLink } from "react-router-dom";
import { useState } from "react";
import { SimpleModal } from "../modal/simplModal";



export const Layout=()=>{

const[activeModal, setActivModal]=useState(false)
return(
    <div className={' layout h-dvh w-dvw  grid grid-rows-12'}>


    
   <div className={'row-span-10'}> 
   
   <Outlet></Outlet>
   <button 
                onClick={()=>setActivModal(true)}
                ><div >{!activeModal?'OPEN':''}</div></button>
                <p>hfhgoldsjfhgpoldfjhpofdjh</p>
                 <p>dhigfihygirhygtriogtirorioutyg</p>
                 <p>odljfgodrfsgtujhdortfhujotih</p>
             <SimpleModal active={activeModal} 
             setActive={setActivModal}>

                {/* <h2 className={'block-modal card'}>Modal Info</h2>
                <p className={'bg-slate-500'}>dadadaddaddadaddd</p> */}
             </SimpleModal>

   </div>
   
    <footer className={'row-span-2'}>
     <NavLink to={'./'} className={'text-black  block'} >HOME</NavLink>
     <br></br>
     
     <NavLink to='/tomovies' className={'text-black block '}>TO MOVIES</NavLink>
     </footer>
    </div>
)

}