import { Dashboard } from "@/pages/Dashboard";
import { Login } from "@/pages/Login";
import { Signup } from "@/pages/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
    {
        id: 'signup',
        path: '/signup',
        element:(
            <Signup/>
        )
    },
    {
        id: 'login',
        path: '/login',
        element:(
            <Login/>
        )
    },
    {
        id: 'dashboard',
        path: '/',
        element:(
            <Dashboard/>
        )
    },
])

export default function AppRouter(){
    return <RouterProvider router={routes}/>
}