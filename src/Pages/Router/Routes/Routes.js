import Main from "../../../Layout/Main";
import AddService from "../../AddServices/AddService";

import Home from "../../Home/Home/Home";
import PageNotFound from "../../PageNotFound/PageNotFound";
import Reviews from "../../Reviews/Reviews";
import SeeAll from "../../SeeAll/SeeAll";

import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import Blog from "../../Shared/Header/Blog/Blog";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-server-five-kappa.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>

            },
            {
                path: '/services',
                element: <SeeAll></SeeAll>
            },
            {

                path:'/addedservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>,
                loader:()=>fetch('https://assignment-11-server-five-kappa.vercel.app/addedservice')
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            },
           
        ]
    }
])

export default router;