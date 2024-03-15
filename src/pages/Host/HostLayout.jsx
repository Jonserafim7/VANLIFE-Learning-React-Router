import React, { useEffect, useContext } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { AppContext } from '../../Components/Layout'

export default function HostLayout() {
  const { setHostVans, signedIn, hostVans, vansClasses } =
    useContext(AppContext)

  // if the user is signed in,
  // fetch the host vans data when the component mounts
  // and update the hostVans state variable
  useEffect(() => {
    if (signedIn) {
      fetch('/api/host/vans')
        .then((response) => response.json())
        .then((data) => {
          setHostVans(data.vans)
        })
    }
  }, [])

  return (
    <>
      <nav className="flex gap-3 p-8 container">
        <NavLink
          to="."
          className={({ isActive }) =>
            isActive ? 'underline font-bold' : 'hover:text-orange-500'
          }
          end>
          Dashboard
        </NavLink>

        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive ? 'underline font-bold' : 'hover:text-orange-500'
          }>
          Income
        </NavLink>

        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive ? 'underline font-bold' : 'hover:text-orange-500'
          }>
          Vans
        </NavLink>

        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? 'underline font-bold' : 'hover:text-orange-500'
          }>
          Reviews
        </NavLink>
      </nav>

      <Outlet context={{ hostVans, vansClasses }} />
    </>
  )
}
