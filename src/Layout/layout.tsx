import { Outlet,NavLink } from "react-router-dom";
export const Layout=()=>{

return(
    <div className="layout">
    <Outlet></Outlet>
    <br></br>
    <footer>
     <NavLink to={'./'}>HOME</NavLink>
     <br></br>
     
     <NavLink to='/tomovies'>TO MOVIES</NavLink>
     </footer>
    </div>
)

}