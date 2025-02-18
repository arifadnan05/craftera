import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AllCraftItems from "../Pages/AllCraftItems";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Root/Root";
import MyCraftList from "../Pages/MyCraftList";
import AddCraftItem from "../Pages/AddCraftItem";
import PrivetRoutes from "./PrivetRoutes";
import UpdateMyList from "../Pages/UpdateMyList";
import Error from "../Pages/Error/Error";
import ViewCardDetails from "../Pages/HomeCard/ViewCardDetails";
import Categories from "../Pages/Categories";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-art-craft-items',
                element: <AllCraftItems></AllCraftItems>,
                loader: () => fetch('https://craftera.vercel.app/craft-item')
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
                element: <ViewCardDetails></ViewCardDetails>,
                loader: () => fetch('https://craftera.vercel.app/craft-item')
            },
            {
                path: '/update-my-list/:id',
                element: <UpdateMyList></UpdateMyList>,
                loader: ({ params }) => fetch(`https://craftera.vercel.app/craftitem/${params.id}`)
            },
            {
                path: '/view-card-details/:id',
                element: <ViewCardDetails></ViewCardDetails>,
                loader: () => fetch(`https://craftera.vercel.app/art-craft-card`)
            },
            {
                path: '/categories/:subCategory',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`https://craftera.vercel.app/category/${params.subCategory}`)
            }
        ]
    }
])


export default router;