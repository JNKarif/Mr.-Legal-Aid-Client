import Main from "../../../Layout/Main";
import Home from "../../Home/Home/Home";
import PageNotFound from "../../PageNotFound/PageNotFound";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import Blog from "../../Shared/Header/Blog/Blog";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/SignUp/SignUp";


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
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'*',
                element:<PageNotFound></PageNotFound>
            }
        ]
    }
])

export default router;