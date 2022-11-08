import Main from "../../../Layout/Main";
import Home from "../../Home/Home/Home";
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
            }
        ]
    }
])

export default router;