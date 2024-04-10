import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sidnav from './components/Header/Sidnav'

const Layout = () => {
  const { isAuthenticated } = useSelector((state) => state.userDetail);
  return (
    <>

       {/* {isAuthenticated ?<Sidnav/> : <Header/>}  */}
       <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout;