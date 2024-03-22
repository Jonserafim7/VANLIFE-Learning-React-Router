import React, { useEffect, useContext, useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { AppContext } from '../../Components/Layout'
import NotFound from '../NotFound'

export default function HostLayout() {
  // destructure the state variables and functions from the context
  const { loading, setLoading, error, setError } = useContext(AppContext)

  // state variables to store the host vans data fetched from the mock server
  const [userData, setUserData] = useState({ vans: [], userInfo: {} })

  // async function to fetch the host vans data from the mock server
  const fetchUserData = async () => {
    // set the loading state to true
    setLoading(true)
    // try to fetch the host vans data
    try {
      // fetch the host vans data
      const response1 = await fetch('/api/host/vans')
      // parse the response body as JSON
      const data1 = await response1.json()
      // if the response is not ok, throw an error
      if (!response1.ok) {
        throw {
          message: 'Failed to fetch host vans',
          status: response1.status,
          statusText: response1.statusText,
        }
      }
      // fetch the user data
      const response2 = await fetch('/api/user')
      // parse the response body as JSON
      const data2 = await response2.json()
      // if the response is not ok, throw an error
      if (!response2.ok) {
        throw {
          message: 'Failed to fetch user data',
          status: response2.status,
          statusText: response2.statusText,
        }
      }
      // if both requests are successful, update the state variables with the data
      setUserData({ vans: data1.vans, userInfo: data2.users[0] })
      // if there is an error, catch it and update the error state variable
    } catch (error) {
      console.error('Error fetching host van data', error)
      setError(error)
      // finally, set the loading state to false
    } finally {
      setLoading(false)
    }
  }

  // call the fetchUserData function when the component mounts
  useEffect(() => {
    fetchUserData()
  }, [])

  // if the data is loading, display a loading message
  if (loading) {
    return <p className="p-8 text-2xl font-bold">Loading...</p>
  }

  // if there is an error, return the not found page
  if (error) {
    return <NotFound />
  }

  ;<nav></nav>
  // else, return the host layout page
  return (
    <>
      <nav className="sticky top-[4.75rem] z-[1] bg-inherit">
        <div className=" flex w-full gap-3 border-b p-4 md:p-6">
          <NavLink
            to="."
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : 'hover:text-orange-500'
            }
            end>
            Dashboard
          </NavLink>

          <NavLink
            to="income"
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : 'hover:text-orange-500'
            }>
            Income
          </NavLink>

          <NavLink
            to="vans"
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : 'hover:text-orange-500'
            }>
            Vans
          </NavLink>

          <NavLink
            to="reviews"
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : 'hover:text-orange-500'
            }>
            Reviews
          </NavLink>
        </div>
      </nav>

      <Outlet context={{ userData }} />
    </>
  )
}
