import React, { useContext } from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { AppContext } from './Layout'

// component to protect routes that require authentication
export default function AuthRequired() {
  // destructure the authenticated state from the context
  const { authenticated } = useContext(AppContext)

  // use the useLocation hook to get the location object
  const location = useLocation()

  // if the user is not authenticated, redirect them to the sign in page
  if (!authenticated) {
    return (
      <Navigate
        // redirect the user to the sign in page
        to="SignIn"
        // pass a state object to the sign in page
        // this state object will be available in the location object
        // in the sign in page
        state={{
          message: 'You must login first!',
          prevPage: location.pathname,
        }}
        // replace the current page in the history stack with the sign in page
        // this prevents the user from navigating back to the page they were trying to access
        replace
      />
    )
  }
  // else, return the child components of the AuthRequired Layout route
  return <Outlet />
}
