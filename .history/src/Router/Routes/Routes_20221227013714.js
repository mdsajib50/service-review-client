import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Services/Service";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
          loader:({params})=> fetch(`https://service-review-server-ebon.vercel.app/service/${params.id}`),
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
          element: >
        }
      ]
    }
])
export default router;