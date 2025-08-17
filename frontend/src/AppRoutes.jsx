import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './pages/Layout/MainLayout'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Signin from './pages/Signin/Signin'
import ProductDetails from './pages/Product/ProductDetails'
import CartPage from './pages/Cart/CartPage'
import ProtectedCom from './components/ProtectedCom/ProtectedCom'
import ProtectedCart from './pages/Cart/ProtectedCart'

const AppRoutes = () => {
  return (
     <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path=':id' element={<ProductDetails/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/pcart'
             element={<ProtectedCom> 
                       <ProtectedCart/>  
                     </ProtectedCom>}/>
        </Route>
     </Routes>
  )
}

export default AppRoutes
