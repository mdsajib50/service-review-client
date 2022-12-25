import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Services/Service";

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
          path: '/service',
          element: <Service></Service>
        },
        {
          pa
        }
      ]
    }
])
export default router;