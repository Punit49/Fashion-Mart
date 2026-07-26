import React, { useContext, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import IsLoggedIn from './routes/AuthProtectedRoutes'
import LayoutProtectedRoutes from './routes/LayoutProtectedRoutes'
import ProductPage from './pages/ProductPage'
import { Toaster } from 'react-hot-toast'
import ScrollToTop from './components/ScrollToTop'
import { MyStore } from './context/MainContext'
import About from './pages/About'

const App = () => {

  const location = useLocation();
  const {setFilter} = useContext(MyStore);

  useEffect(() => {
    setFilter(null);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />

      <Toaster containerStyle={{
        top: 20,
        left: 20,
        bottom: 20,
              right: 20,
            }} toastOptions={{
              style: {
                fontSize: "16px",
                minWidth: "300px",
                width: "fit-content",
                maxWidth: "500px",
                fontWeight: 500,
                textAlign: "center"
              },
        }}/>

        <Routes>
          <Route element={
              <LayoutProtectedRoutes>
                <MainLayout />
              </LayoutProtectedRoutes>
            }>
              <Route path='/home' element={<Home />}/>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/category/:category' element={<ProductPage />}/>
              <Route path='/:category/:id' element={<ProductDetails />}/>
            </Route>
          
            <Route element={
              <IsLoggedIn>
                <AuthLayout />
              </IsLoggedIn>
            }>
              <Route path='/login' element={<LoginForm />}/>
              <Route path='/register' element={<RegisterForm />}/>
            </Route>
          </Routes>
    </>
  )
}

export default App;
