import React, { useState, createContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'

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

  // useLocation hook to get the current location
  const currentPath = useLocation().pathname
  // console.log(currentPath)

  const determineMainBg = () => {
    return currentPath === '/'
      ? `bg-[url('/Assets/home-bg.png')] bg-cover`
      : 'bg-[#FFF7ED]'
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
      <div className="relative flex h-full w-full flex-col">
        <header className="fixed top-0 z-10 w-full bg-[#FFF7ED]">
          <div className="mx-auto max-w-4xl p-4 md:p-6 lg:p-8">
            <Header />
          </div>
        </header>
        <main
          className={`flex grow flex-col ${determineMainBg()} mt-[68px] md:mt-[84px] lg:mt-[100px]`}>
          <div className="relative mx-auto flex w-full max-w-4xl grow p-4 md:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
        <footer className="bg-[#252525]">
          <div className="mx-auto max-w-4xl p-4">
            <Footer />
          </div>
        </footer>
      </div>
    </AppContext.Provider>
  )
}
