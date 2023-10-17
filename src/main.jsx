import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Coffees from './Coffees.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './AddCoffee';
import UpdateCoffee from './UpdateCoffee';
import Layout from '../Layout';
import AuthProvider from './AuthProvider';
import SignIn from './SignIn';
import SignUp from './SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Coffees></Coffees>,
        loader: () => fetch('http://localhost:5000/coffees')
      },
      {
        path: '/addcoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updatecoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>
      },
      {
        path:'/login',
        element:<SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

