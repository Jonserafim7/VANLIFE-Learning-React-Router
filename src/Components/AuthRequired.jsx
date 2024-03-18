import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AppContext } from './Layout'

export default function AuthRequired() {
  // destructure the authenticated state from the context
  const { authenticated } = useContext(AppContext)

  // if the user is not authenticated, redirect them to the sign in page
  if (!authenticated) {
    return <Navigate to="UserAccountSignIn" />
  }
  // else, return the child components of the AuthRequired Layout route
  return <Outlet />
}
