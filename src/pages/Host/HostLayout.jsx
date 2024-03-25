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

  // else, return the host layout page
  return (
    <div className="flex w-full flex-col">
      <nav className="fixed left-0 right-0 top-[68px] z-10 mx-auto w-full max-w-4xl bg-[#fff7ed] p-4 md:top-[84px] md:px-6 lg:top-[99px] lg:px-8">
        <div className=" flex w-full gap-3">
          <NavLink
            to="."
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : 'hover:text-orange-500'
            }
            end>
            Dashboard
          </NavLink>

          <NavLink
            to="vans"
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : 'hover:text-orange-500'
            }>
            Vans
          </NavLink>

          <NavLink
            to="income"
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : 'hover:text-orange-500'
            }>
            Income
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

      <div className="z-0 mt-[56px]">
        <Outlet context={{ userData }} />
      </div>
    </div>
  )
}
