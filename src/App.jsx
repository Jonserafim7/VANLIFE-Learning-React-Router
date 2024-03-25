// imports
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '/src/server.js'
import '/src/index.css'

import Layout from './Components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import NotFound from './pages/NotFound'
import AuthRequired from './Components/AuthRequired'

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

// The App component is the root component of the application.
export default function App() {
  return (
    // The BrowserRouter component is used to wrap the application.
    // It provides the routing functionality to the application.
    <BrowserRouter>
      {/* The Routes component is used to define the routes of the application. */}
      {/* The Route component is used to define the individual routes of the application. */}
      {/* The path prop is used to define the path of the route. */}
      {/* The element prop is used to define the component to be rendered when the route is matched. */}
      {/* The index prop is used to define the default route of the application. */}
      {/* The * path is used to define the 404 route of the application. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetail />} />
          <Route path="SignIn" element={<SignIn />} />

          <Route element={<AuthRequired />}>
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
