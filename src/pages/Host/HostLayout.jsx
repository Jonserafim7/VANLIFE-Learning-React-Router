import React, { useEffect, useContext } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { AppContext } from '../../Components/Layout'
import NotFound from '../NotFound'

export default function HostLayout() {
  // destructure the state variables and functions from the context
  const { setHostVans, loading, setLoading, error, setError } =
    useContext(AppContext)

  // async function to fetch the host van data from the mock server
  const fetchHostVans = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/host/vans')
      const data = await response.json()
      if (!response.ok) {
        throw {
          message: 'Failed to fetch host vans',
          status: response.status,
          statusText: response.statusText,
        }
      }
      setHostVans(data.vans)
    } catch (error) {
      console.error('Error fetching host van data', error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  // fetch the host van data when the component mounts
  useEffect(() => {
    fetchHostVans()
  }, [])

  // if the data is loading, display a loading message
  if (loading) {
    return <p className="p-8 font-bold text-2xl">Loading...</p>
  }

  // if there is an error, return the not found page
  // if (error) {
  //   return <NotFound />
  // }

  // else, return the host layout page
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

      <Outlet />
    </>
  )
}
