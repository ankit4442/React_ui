import { createBrowserRouter } from "react-router-dom";




import Github, { githubInfoLoader } from "../Page/Github/Github";


import Layout from "../Layout";

import Dashboard from "../Page/Dashboard/Dashboard";
import User from "../Page/User/User";

import Admin from "../Page/Admin/Admin";
import { About, Contact, Home, Login, PrivateRoute } from "../Page";



const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,
  children: [
    {
      path: "",
      element: <Home/>,
    },
    {
      path: "about",
      element: <About/>,
    },
    {
      path:"contact",
      element:
    
          <Contact/>
        
      
     },


       {
        path:"login",
        element:(
          <PrivateRoute authentication={false}>
            <Login/>
          </PrivateRoute>
        )
       },
       
      
       {
        path: "dashboard",
        element:(
          <PrivateRoute authentication={true} rolename="Admin">
          <Dashboard />
          </PrivateRoute>
        )
       },
       {
        path: "admin",
        element:(
          <PrivateRoute authentication={true} rolename="Admin">
          <Admin/>
          </PrivateRoute>
        )
       },


       {
        loader: githubInfoLoader,
        path: "github",
        element:(
          <PrivateRoute authentication={true} rolename="DOCTOR">
        <Github />
          </PrivateRoute>
        )
       },
       {
        path:"*",
        element:(
          <PrivateRoute authentication={false}>
       <p>404 Error - Nothing here...</p>,
          </PrivateRoute>
        )
       },

       

  ]}

])

export default router;