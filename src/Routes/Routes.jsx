import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AllCraftItems from "../Pages/AllCraftItems";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Root/Root";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-art-craft-items',
                element: <AllCraftItems></AllCraftItems>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])


export default router;