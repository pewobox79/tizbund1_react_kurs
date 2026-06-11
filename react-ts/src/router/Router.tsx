import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <h1>404 page</h1>,
        children:[
            {   
                index: true,
                element: <Homepage/>
            },
            {
                path:"about",
                element: <h1>About page</h1>
            }
        ]
    }
])