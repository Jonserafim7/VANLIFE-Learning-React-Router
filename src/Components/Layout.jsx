import React, { useState, createContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

// create a context to store the state variables and share them with the child components
export const AppContext = createContext()

// The Layout component is used to wrap the entire application.
// It provides the state variables and functions to the child components.
// It is a context provider that provides the state variables and functions to the child components.
// As a layout component, it contains the header, footer, and the main content of the application.
// The main content is rendered using the Outlet component from the react-router-dom package.
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
