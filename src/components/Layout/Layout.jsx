import React from 'react'
import { Outlet } from "react-router-dom"
import { Navbar } from '../Navbar/Navbar'

import './Layout.css'
export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
