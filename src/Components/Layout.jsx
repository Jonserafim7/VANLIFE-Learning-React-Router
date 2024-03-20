import React, { useState, createContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import NotFound from '../pages/NotFound'
import { Outlet } from 'react-router-dom'

// create a context to store the state variables and share them with the child components
export const AppContext = createContext()

export default function Layout() {
  // state variable to store the van data fetched from the mock server
  const [vansData, setVansData] = useState([])
  // state variable to store the signed in status
  const [loading, setLoading] = useState(false)
  // state variable to store the error status
  const [error, setError] = useState(null)
  // state variable to store the authenticated status
  const [authenticated, setAuthenticated] = useState(false)

  // function to return the appropriate bg-color based on the van type
  const vansClasses = (van) => {
    if (van.type === 'simple') return 'bg-[#E17654]'
    if (van.type === 'luxury') return 'bg-[#161616]'
    if (van.type === 'rugged') return 'bg-[#115E59]'
  }

  return (
    <AppContext.Provider
      value={{
        vansData,
        setVansData,
        vansClasses,
        error,
        setError,
        loading,
        setLoading,
        authenticated,
        setAuthenticated,
      }}>
      <div className="h-full flex flex-col relative">
        <Header />
        <main className="flex grow flex-col mt-[6.25rem] bg-[#FFF7ED] w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  )
}
