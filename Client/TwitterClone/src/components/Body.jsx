import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import Profile from './Profile'
import Feed from "./Feed"
function Body() {

  const appRouter = createBrowserRouter( [ 
    {
      path:"/",
      element:<Home/>,
      children:[
        {
          path:"/",
          element:<Feed/>
        },
        {
          path:"Profile",
          element:<Profile/>
        }
      ]
    },
    {
      path:"Login",
      element:<Login/>
    }
  ])
  return (
    <div>
<RouterProvider router ={appRouter}/>
    </div>
  )
}

export default Body