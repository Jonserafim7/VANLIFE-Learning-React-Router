import React, { useContext } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { AppContext } from '../../Components/Layout'
import NotFound from '../NotFound'

// Component to display the details of a van
export default function VansDetail() {
  // get the van data and the vansClasses function from the context
  const { vansData, vansClasses, error } = useContext(AppContext)

  // get the location object from the router
  const location = useLocation()

  // get the id from the URL
  const { id } = useParams()
  console.log(useParams())

  // if there is an error, return the not found page
  if (error) {
    return <NotFound />
  }
  // if there is no error and the vansData is not empty, return the van details
  else if (vansData.length != 0 && !error) {
    const van = vansData.find((van) => van.id === id)

    return (
      <div className="p-8 mx-auto flex flex-col grow">
        <Link
          to={`..${location.state?.search}` || '..'}
          relative="path"
          className="hover:underline">
          {location.state?.type === van.type
            ? `Back to ${van.type} vans`
            : 'Back to all vans'}
        </Link>

        <section className="max-w-4xl flex grow gap-8 my-auto mt-8">
          <img
            className="rounded-md object-cover object-center grow-1 max-h-[600px] w-full"
            src={van.imageUrl}
            alt={`${van.name} + image`}
          />

          <div className="flex flex-col gap-4">
            <p
              className={`py-1 px-5 rounded-md w-max text-white
              ${vansClasses(van)}`}>
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
    )
  }
}
