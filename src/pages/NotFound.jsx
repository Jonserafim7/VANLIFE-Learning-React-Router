import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Components/Layout'

// Component to display the not found page
// This component gets rendered when a user tries to access a page that does not exist
// If there is an error in the context, it will be displayed on the page
export default function NotFound() {
  const { error } = useContext(AppContext)

  return (
    <div className="flex flex-col grow p-8 justify-center">
      <h1 className="text-4xl font-bold" aria-live="assertive">
        Sorry, the page you were looking for was not found.
      </h1>
      <p className="text-lg mt-4">
        {error ? `There was an error: ${error.message}` : null}
      </p>
      <Link
        to="/"
        className="bg-[#161616] text-white font-semibold text-center p-3 rounded-md mt-8">
        Return to home
      </Link>
    </div>
  )
}
