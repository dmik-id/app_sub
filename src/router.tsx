import { createBrowserRouter ,} from "react-router-dom";
import Root from "./routs/root";
import { Tomovies } from "./components/tomovies";
import { Layout } from "./Layout/layout";
import { ErrorPage } from "./components/errorElement";


export const router =createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                element:<Root/>,
                index:true,
            },
             {
                path:'/tomovies',
                element:<Tomovies/>
            }
        ]
    },
      
]

)