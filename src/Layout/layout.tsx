import { Outlet,NavLink } from "react-router-dom";
export const Layout=()=>{

return(
    <>
    {/* <h2>LAYOUT</h2> */}
    <Outlet></Outlet>
    <br></br>
    
     <NavLink to={'./'}>HOME</NavLink>
     <br></br>
     <NavLink to='/tomovies'>TO MOVIES</NavLink>
    </>
)

}