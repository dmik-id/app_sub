import { NavLink } from "react-router-dom"
// useRoutError не работает . почему не знаю.
import { useRouteError } from "react-router-dom"

interface RouteError {
    data: string;
    message:string
    error: {
      columnNumber: number;
      fileName: string;
      lineNumber: number;
      message: string;
      stack: string;
    };
    internal: boolean;
    status: number;
    statusText: string;
  }

 
    export  const ErrorPage:React.FC=()=>{
    const error = useRouteError() as RouteError;
return(
<div>
    <h1>ВСЕ ДУЖЕ ПОГАНО ЇДІТЬ ДО ДОМУ</h1>
     <p>{error.statusText??error.message}</p>
    <NavLink to='./'>ДОМ</NavLink>
    <br />
    
   
</div>
)
}
