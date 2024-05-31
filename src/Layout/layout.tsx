import { Outlet,NavLink } from "react-router-dom";
export const Layout=()=>{


return(
    <div className={' layout h-dvh w-dvw grid grid-rows-12 '}>


    
   <div className={'row-span-10'}> <Outlet></Outlet></div>
    <footer className={'row-span-2'}>
     <NavLink to={'./'} className={'text-black  block'} >HOME</NavLink>
     <br></br>
     
     <NavLink to='/tomovies' className={'text-black block '}>TO MOVIES</NavLink>
     </footer>
    </div>
)

}