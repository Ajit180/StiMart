import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './pages/Layout/MainLayout'
import Home from './pages/Home/Home'

const AppRoutes = () => {
  return (
     <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
     </Routes>
  )
}

export default AppRoutes
