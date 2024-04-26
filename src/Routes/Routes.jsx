import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AllCraftItems from "../Pages/AllCraftItems";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Root/Root";
import MyCraftList from "../Pages/MyCraftList";
import AddCraftItem from "../Pages/AddCraftItem";

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
            },
            {
                path: '/my-craft-list',
                element: <MyCraftList></MyCraftList>
            },
            {
                path: '/add-craft-item',
                element: <AddCraftItem></AddCraftItem>
            }
        ]
    }
])


export default router;