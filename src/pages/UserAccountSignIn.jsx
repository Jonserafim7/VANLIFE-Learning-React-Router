import React from 'react'
import { AppContext } from '../Components/Layout'
import { Navigate } from 'react-router-dom'

export default function UserAccountSignIn() {
  const { setAuthenticated } = React.useContext(AppContext)
  const [loginFormData, setLoginFormData] = React.useState({
    email: '',
    password: '',
  })
  // The handleSubmit function is used to handle the form submission.
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault()
    // clear the input fields
    e.target.email.value = ''
    e.target.password.value = ''
    console.log(loginFormData)
    // Set the authenticated state to true
    setAuthenticated(true)
    // Redirect the user to the host dashboard
    return <Navigate to="host" />
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

  return (
    <div className="flex grow flex-col p-8 items-center">
      <h1 className="text-3xl font-bold">Sign in to your account</h1>
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
          Sign in
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
