import React, { useContext } from 'react'
import { AppContext } from './Layout'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import HeaderMenu from './HeaderMenu'

// Header component shared by all pages
export default function Header() {
  // destructuring the authenticated property from the useContext hook
  const { authenticated, setAuthenticated } = useContext(AppContext)

  // The useMediaQuery hook is used to determine the screen size of the device.
  const isLargeScreen = useMediaQuery({ minDeviceWidth: 426 })
  const isSmallScreen = useMediaQuery({ maxDeviceWidth: 425 })

  // The activeStyle function is used to apply a style to the active link.
  const activeStyle = (match) => {
    if (!match) {
      return 'text-lg hover:underline'
    }
    return 'underline font-bold text-lg'
  }

  // The useNavigate hook is used to navigate between different pages in the application.
  const navigate = useNavigate()

  // The handleSignOut function is used to sign out the user.
  const handleSignOut = () => {
    // set the authenticated state to false
    setAuthenticated(false)
    navigate('UserAccountSignIn', { replace: true })
  }

  // The Header component returns the header of the application.
  return (
    <header className="flex items-center p-8 fixed top-0 bg-[#ffefdc] w-full shadow-md">
      {isSmallScreen && (
        <div className="flex w-full justify-between">
          <Link to="/" className="text-3xl font-bold">
            #VANLIFE
          </Link>
          <HeaderMenu authenticated={authenticated} />
        </div>
      )}

      {isLargeScreen && (
        <div className="flex w-full">
          <Link to="/" className="text-3xl font-bold">
            #VANLIFE
          </Link>

          <nav className="flex ml-auto gap-2 items-center">
            <NavLink
              to="host"
              className={({ isActive }) => activeStyle(isActive)}>
              Host
            </NavLink>

            <NavLink
              to="about"
              className={({ isActive }) => activeStyle(isActive)}>
              About
            </NavLink>

            <NavLink
              to="vans"
              className={({ isActive }) => activeStyle(isActive)}>
              Vans
            </NavLink>

            {authenticated ? (
              <button className="hover:underline" onClick={handleSignOut}>
                Sign Out
              </button>
            ) : (
              <NavLink
                to={`${authenticated ? 'host' : 'UserAccountSignIn'}`}
                className={({ isActive }) => activeStyle(isActive)}>
                {authenticated ? 'Sign Out' : 'Sign In'}
              </NavLink>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
