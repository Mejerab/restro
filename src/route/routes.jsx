import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import Home2 from "../Pages/Home2/Home2";
import Home3 from "../Pages/Home3/Home3";
import About from "../Pages/About";
import MenuPage from "../Pages/MenuPage";
import Shop from '../Pages/Shop'
import FoodItems from "../Pages/FoodItems";
import CartPage from "../Pages/CartPage";
import Checkout from "../Pages/Checkout";
import Blogs from "../Pages/BlogsPage";
import BlogDetails from "../Pages/BlogDetails";
import Reservation from "../Pages/Reservation";
import ConfirmReservation from "../Pages/ConfirmReservation";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:'/',
                element: <Home1 />
            },
            {
                path:'/home2',
                element: <Home2 />
            },
            {
                path:'/home3',
                element: <Home3 />
            },
            {
                path:'/about-us',
                element: <About />
            },
            {
                path:'/menu',
                element: <MenuPage />
            },
            {
                path:'/shop',
                element: <Shop />
            },
            {
                path:'/food-item',
                element: <FoodItems />,
                loader: ()=>fetch(`/foods.json`)
            },
            {
                path:'/cart',
                element: <CartPage />,
            },
            {
                path:'/checkout',
                element: <Checkout />,
            },
            {
                path:'/blogs',
                element: <Blogs />,
            },
            {
                path:'/blog',
                element: <BlogDetails />,
            },
            {
                path:'/reservation',
                element: <Reservation />,
            },
            {
                path:'/confirm-reservation',
                element: <ConfirmReservation />,
            },
        ]
    },
]);
export default router;