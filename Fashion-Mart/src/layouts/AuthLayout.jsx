import React from 'react'
import LoginBanner from '../components/LoginBanner'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:block lg:w-1/2">
        <LoginBanner />
      </div>

      <div className="w-full lg:w-1/2 h-screen">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
