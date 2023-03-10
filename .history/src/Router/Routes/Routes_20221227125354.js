import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Services/Service";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/service',
          element: <Service></Service>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path: '/servicedetails/:id',
          loader:({params})=> fetch(`http://localhost:5000/service/${params.id}`),
          element: <ServiceDetails></ServiceDetails>
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
          path: '/myreview',
          element: <PrivateRoute></PrivateRoute>
        }
      ]
    }
])
export default router;