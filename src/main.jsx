import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from './routes/AppRoutes';

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={AppRoutes} />
  </StrictMode>,
)
