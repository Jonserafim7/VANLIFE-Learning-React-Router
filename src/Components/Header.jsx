import React from 'react'
import UserAccountIcon from '../Assets/Icons/UserAccountIcon'
import { NavLink, Link } from 'react-router-dom'
// Link is used to navigate between different pages in the application.
// It does not reload the entire page when the link is clicked,
// allowing for a faster navigation experience and maintaining the state of the application.

export default function Header() {
  // The activeStyle function is used to apply a style to the active link.
  const activeStyle = (match) => {
    if (!match) {
      return 'hover:text-orange-500'
    }
    return 'underline font-semibold text-base hover:text-orange-500'
  }

  return (
    <header className="flex items-center p-8 fixed top-0 bg-[#ffefdc] w-full shadow-md">
      <Link to="/" className="text-2xl font-bold">
        #VANLIFE
      </Link>
      <nav className="flex ml-auto gap-3">
        <NavLink to="host" className={({ isActive }) => activeStyle(isActive)}>
          Host
        </NavLink>
        <NavLink to="about" className={({ isActive }) => activeStyle(isActive)}>
          About
        </NavLink>
        <NavLink to="vans" className={({ isActive }) => activeStyle(isActive)}>
          Vans
        </NavLink>
        <NavLink
          to="UserAccountSignIn"
          className={({ isActive }) => activeStyle(isActive)}>
          {UserAccountIcon}
        </NavLink>
      </nav>
    </header>
  )
}
