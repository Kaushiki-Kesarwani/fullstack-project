import React from 'react'
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router';
import Users from './user/pages/users'
import Newplaces from './places/pages/newplace'

const route = createBrowserRouter([
    {
        path:'/',
        element:<Users/>
    },
    {
      path:'/places/new',
      element:<Newplaces/>
    },
    {
      path:'*',
      element: <Navigate to="/" replace />,
    },
]);

const Route = () => {
  return (
    <RouterProvider router={route} />
  )
}
export default Route
