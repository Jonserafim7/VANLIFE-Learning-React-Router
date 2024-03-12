import React from 'react'
import './App.scss'
import '/src/server.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VansDetail from './pages/Vans/VansDetail'

import HostLayout from './pages/Host/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import ListedVans from './pages/Host/ListedVans'
import ListedVansDetails from './pages/Host/ListedVansDetails'
import Reviews from './pages/Host/Reviews'

export default function App() {

  return (
      <div className="App flex column">
        <BrowserRouter>
          <Routes>
            <Route path='/'element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="vans" element={<Vans />} />
              <Route path="vans/:id" element={<VansDetail />}/>

              <Route path='host' element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='income' element={<Income />} />
                <Route path='listedvans' element={<ListedVans />} />
                <Route path='listedvans/:id' element={<ListedVansDetails />} />
                <Route path='reviews' element={<Reviews />} />
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}
