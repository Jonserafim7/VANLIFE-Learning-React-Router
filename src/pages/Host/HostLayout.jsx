import React, { useEffect, useContext } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { AppContext } from '../../Components/Layout'
import NotFound from '../NotFound'
import { getHostVans } from '../../api'

export default function HostLayout() {
  // destructure the state variables and functions from the context
  const { setHostVans, loading, setLoading, error, setError } =
    useContext(AppContext)

  // async function to fetch the host van data from the mock server
  // const fetchHostVans = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await fetch('/api/host/vans')
  //     const data = await response.json()
  //     if (!response.ok) {
  //       throw {
  //         message: 'Failed to fetch host vans',
  //         status: response.status,
  //         statusText: response.statusText,
  //       }
  //     }
  //     setHostVans(data.vans)
  //   } catch (error) {
  //     console.error('Error fetching host van data', error)
  //     setError(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  useEffect(() => {
    // async function to fetch the host van data from the real server
    const loadHostVans = async () => {
      // Sets the loading state to true at the start of the function.
      setLoading(true)
      // try block to catch any errors that occur in the try block
      // and handle them in the catch block
      try {
        // Fetches data from the firestore database
        const vans = await getHostVans()
        // Sets the vans data state with the fetched data.
        setHostVans(vans)
        // catch block to catch any errors that occur in the try block
        // and handle them
      } catch (error) {
        // If an error occurs at any point in the try block,
        // it catches the error, logs it to the console, and sets the error state with the error.
        console.error('Error fetching host van data', error)
        setError(error)
        // finally block to run code after the try block and catch block
        // whether an error occurs or not
      } finally {
        // Whether an error occurs or not, it sets the loading state to false at the end of the function.
        setLoading(false)
      }
    }
    // call the function to fetch the host van data
    // when the component mounts
    loadHostVans()
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
