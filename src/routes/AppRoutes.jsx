import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import {Home} from '../components/Home/Home'

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />, 
      },
      {
        path: '/home',
        element: <Home/>,
        index: true, 
      },
      {
        path: '/item1',
        element: <h1>Item 1</h1>,
      },
      {
        path: '/item2',
        element: <h1>Item 2</h1>,
      },
      {
        path: '/item3',
        element: <h1>Item 3</h1>,
      },
      {
        path: '/item4',
        element: <h1>Item 4</h1>,
      },
      {
        path: '/item5',
        element: <h1>Item 5</h1>,
      },
    ]
  }
]);
