import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col grow p-8 justify-center">
      <h1 className="text-4xl font-bold">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link
        to="/"
        className="bg-[#161616] text-white font-semibold text-center p-3 rounded-md mt-8">
        Return to home
      </Link>
    </div>
  )
}
