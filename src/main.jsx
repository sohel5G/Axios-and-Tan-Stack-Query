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

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Coffees_Tan_Stack_Query from './Coffees_Tan_Stack_Query';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Coffees></Coffees>
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
        path: '/login',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'coffees_tan_stack_query',
        element: <Coffees_Tan_Stack_Query></Coffees_Tan_Stack_Query>
      }
    ]
  }

]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

