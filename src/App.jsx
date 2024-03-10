import React, {useState, createContext, useEffect} from 'react'
import './App.scss'
import '/src/server.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import HostLayout from './Components/HostLayout'
import Home from './pages/Home'
import About from './pages/About'
import Host from './pages/Dashboard'
import Vans from './pages/Vans'
import VansDetail from './pages/VansDetail'

export default function App() {

  return (
      <div className="App flex column">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route element={<HostLayout />}>
               <Route path="/host/:menu" element={<Host />}/>
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />} />
              <Route path="/vans/:id" element={<VansDetail />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}
