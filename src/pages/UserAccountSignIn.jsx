import React, { useContext, useState } from 'react'
import { AppContext } from '../Components/Layout'
import { useLocation, useNavigate } from 'react-router-dom'

export default function UserAccountSignIn() {
  // destructure the setAuthenticated function from the context
  const { setAuthenticated, setError } = useContext(AppContext)

  // The loginFormData state is used to store the user's login details
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  })

  // The status state is used to store the status of the login request
  const [status, setStatus] = useState('idle')

  // The useNavigate hook is used to get the navigate function
  // that can be used to navigate to a different page
  // The navigate function takes a string argument that represents the URL
  // and an optional object argument that represents the state
  // The state object can be used to pass data to the new page
  const navigate = useNavigate()

  // The useLocation hook is used to get the location object
  // The location object contains information about the current URL
  // and the state object that was passed to the Navigate component
  // in the AuthRequired component
  const location = useLocation()

  // The loginUser function is used to send a POST request to the /api/login endpoint
  // with the user's email and password
  const loginUser = async (email, password) => {
    // Set the status to loading
    setStatus('loading')
    // Use a try...catch block to handle errors
    try {
      // Send a POST request to the /api/login endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      // Parse the JSON response
      const data = await response.json()
      // If the response is not ok, throw an error
      if (!response.ok) {
        throw new Error(data.message)
      }
      // if the response is ok, set the authenticated state to true
      // and navigate to the page the user was trying to access
      // to replace the current page in the history stack
      // This prevents the user from navigating back to the sign in page
      setAuthenticated(true)
      navigate(`${location.state?.prevPage || '/host'}`, { replace: true })

      // If there is an error, catch it and set the error state
    } catch (error) {
      // Set the error state to the error message
      setError(error)
      // Navigate to the sign in page with the error message
      navigate('/UserAccountSignIn', { state: { message: error.message } })
    } finally {
      // Set the status to idle
      setStatus('idle')
    }
  }

  // The handleSubmit function is used to handle the form submission.
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault()
    // clear the input fields
    e.target.email.value = ''
    e.target.password.value = ''
    // Call the loginUser function with the email and password
    loginUser(loginFormData.email, loginFormData.password)
  }

  // The handleChange function is used to handle the input change event.
  const handleChange = (e) => {
    // Destructure the name and value from the input field
    const { name, value } = e.target
    // Update the loginFormData state with the new value
    setLoginFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  // The UserAccountSignIn component returns the sign in form
  return (
    <div className="flex grow flex-col p-8 items-center">
      {/* If the location state object contains a message, display it */}
      {location.state?.message && (
        <p className="text-red-500 p-8 font-bold text-lg">
          {location.state.message}
        </p>
      )}
      <h1 className="text-3xl font-bold">Sign in to your account</h1>
      {/* The login form */}
      <form className="flex flex-col w-full max-w-3xl" onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          value={loginFormData.email}
          id="email"
          placeholder="Email address"
          className="mt-8 border border-[#D1D5DB] p-2 rounded-t-md text-[#4D4D4D]"
        />
        <input
          onChange={handleChange}
          name="password"
          value={loginFormData.password}
          type="password"
          id="password"
          placeholder="Password"
          className="border border-[#D1D5DB] p-2 rounded-b-md text-[#4D4D4D]"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white font-bold p-3 rounded-md mt-6">
          {/* check the status of the form submission proccess to determine the text
          displayed on the button */}
          {status === 'loading' ? 'Loading...' : 'Sign in'}
        </button>
      </form>
      <p className="mt-8 font-bold">
        Don't have an account?{' '}
        <a href="a" className="text-orange-500">
          Create one now
        </a>
      </p>
    </div>
  )
}
