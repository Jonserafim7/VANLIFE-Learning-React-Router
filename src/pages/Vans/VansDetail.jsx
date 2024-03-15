import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../../Components/Layout'

export default function VansDetail() {
  // get the van data and the vansClasses function from the context
  const { vansData, vansClasses } = useContext(AppContext)

  // get the id from the URL
  const { id } = useParams()

  // find the van with the id that matches the id from the URL
  const van = vansData.find((van) => van.id === id)

  return van ? (
    <div className="p-8">
      <Link to="/vans" className="hover:underline">
        Back
      </Link>

      <section className="container mt-8 flex flex-col  mx-auto">
        <img
          className="rounded-md w-full object-cover object-center max-h-[500px]"
          src={van.imageUrl}
          alt={`${van.name} + image`}
        />

        <div className="flex flex-col gap-4">
          <p
            className={`py-1 px-5 rounded-md w-max 
              ${vansClasses(van)} text-white mt-8`}>
            {van.type}
          </p>
          <div className="">
            <p className="text-lg font-semibold">{van.name}</p>
            <p className="text-lg font-semibold">
              ${van.price}
              <span className="text-sm font-normal">/day</span>
            </p>
          </div>
          <p className="">{van.description}</p>
          <Link
            to="/vans"
            className="bg-orange-400 text-center w-full 
            text-base font-bold p-3 rounded-lg text-white">
            Book now
          </Link>
        </div>
      </section>
    </div>
  ) : (
    <h1>Van not found</h1>
  )
}
