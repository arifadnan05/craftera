import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AllCraftItems from "../Pages/AllCraftItems";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Root/Root";
import MyCraftList from "../Pages/MyCraftList";
import AddCraftItem from "../Pages/AddCraftItem";
import PrivetRoutes from "./PrivetRoutes";
import CraftItemDetails from "../Pages/CraftItemDetails";

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
                element: <AllCraftItems></AllCraftItems>,
                loader: () => fetch('http://localhost:5000/craft-item')
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
                element: <PrivetRoutes><MyCraftList></MyCraftList></PrivetRoutes>
            },
            {
                path: '/add-craft-item',
                element: <PrivetRoutes><AddCraftItem></AddCraftItem></PrivetRoutes>
            },
            {
                path: '/craft-item-details/:id',
                element: <CraftItemDetails></CraftItemDetails>,
                loader: () => fetch('http://localhost:5000/craft-item')
            }
        ]
    }
])


export default router;