import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '/src/server.js'
import '/src/index.css'

import Layout from './Components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VansDetail from './pages/Vans/VansDetail'

import HostLayout from './pages/Host/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'

import HostVans from './pages/Host/HostVans/HostVans'
import HostVanLayout from './pages/Host/HostVans/HostVanLayout'
import HostVanDetails from './pages/Host/HostVans/HostVanDetails'
import HostVanPricing from './pages/Host/HostVans/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVans/HostVanPhotos'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanLayout />}>
              <Route index element={<HostVanDetails />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
