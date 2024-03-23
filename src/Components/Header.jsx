import React, { useContext } from 'react'
import { AppContext } from './Layout'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import HeaderMenu from './HeaderMenu'

// Header component shared by all pages
export default function Header() {
  // destructuring the authenticated property from the useContext hook
  const { authenticated, setAuthenticated } = useContext(AppContext)

  // The activeStyle function is used to apply a style to the active link.
  const activeStyle = (match) => {
    if (!match) {
      return 'text-base hover:underline'
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
    <div className="flex items-center justify-between">
      {/* Site logo */}
      <Link to="/" className="text-3xl font-bold">
        #VANLIFE
      </Link>

      {/* Navigation menu for small screen-sizes */}
      <div className="md:hidden">
        <HeaderMenu
          authenticated={authenticated}
          handleSignOut={handleSignOut}
        />
      </div>

      {/* Navigation menu for medium and large screen-sizes */}
      <nav className="hidden items-center gap-2 md:flex">
        <NavLink to="host" className={({ isActive }) => activeStyle(isActive)}>
          Host
        </NavLink>

        <NavLink to="about" className={({ isActive }) => activeStyle(isActive)}>
          About
        </NavLink>

        <NavLink to="vans" className={({ isActive }) => activeStyle(isActive)}>
          Vans
        </NavLink>

        {authenticated ? (
          <button className="hover:underline" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <NavLink
            to={`${authenticated ? 'host' : 'SignIn'}`}
            className={({ isActive }) => activeStyle(isActive)}>
            {authenticated ? 'Sign Out' : 'Sign In'}
          </NavLink>
        )}
      </nav>
    </div>
  )
}
