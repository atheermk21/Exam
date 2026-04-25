import React from 'react'

import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Contact from '../../pages/contact/Contact'
import MainLayout from '../../component/layout/MainLayout'
import { ROUTES } from '../../contanet/router'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function AppRouter() {
  return (
    
    <BrowserRouter>
    <Routes>
<Route element={<MainLayout/>}>
    <Route path={ROUTES.HOME} element={<Home/>}/>
    <Route path={ROUTES.ABOUT} element={<About/>}/>
    <Route path={ROUTES.CONTACT} element={<Contact/>}/></Route>
    </Routes>
    </BrowserRouter>

        
  )
}

export default AppRouter