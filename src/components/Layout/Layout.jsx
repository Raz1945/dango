import React from 'react'
import { Outlet } from "react-router-dom"
import { Navbar } from '../Navbar/Navbar'
import { Banner } from '../Banner'

import './Layout.css'
export const Layout = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Outlet />
    </>
  )
}
