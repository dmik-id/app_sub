import { NavLink } from "react-router-dom"

export const ErrorPage:React.FC=()=>{
return(
<div>
    <h1>ВСЕ ДУЖЕ ПОГАНО ЇДІТЬ ДО ДОМУ</h1>
    <NavLink to='./'>ДОМ</NavLink>
</div>
)
}