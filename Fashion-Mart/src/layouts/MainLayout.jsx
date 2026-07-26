import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import { MyStore } from '../context/MainContext'

const MainLayout = () => {
    const { isCartOpen, setFilter } = useContext(MyStore);
    return (
      <div className='min-h-screen flex flex-col'>
        <div className={`${isCartOpen ? "blur-sm" : ""}`}>
          <Navbar />
          <Outlet />
          <Footer />
        </div>

        <Cart />
      </div>
    )
}

export default MainLayout
