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
  console.log(location)

  // get the id from the URL
  const { id } = useParams()

  // if there is an error, return the not found page
  if (error) {
    return <NotFound />
  }
  // if there is no error and the vansData is not empty, return the van details
  else if (vansData.length != 0 && !error) {
    const van = vansData.find((van) => van.id === id)

    return (
      <div className="flex grow flex-col p-4 md:p-6">
        <Link
          to={`..${location.state?.search}` || '..'}
          relative="path"
          className="hover:underline">
          {location.state?.type === van.type
            ? `Back to ${van.type} vans`
            : 'Back to all vans'}
        </Link>

        <section className="mt-4 flex grow flex-col md:flex-row md:items-center">
          <img
            className="max-h-[400px] rounded-md object-cover"
            src={van.imageUrl}
            alt={`${van.name} + image`}
          />

          <div className="mt-4 flex flex-col gap-4 md:p-4">
            <p
              className={`w-max rounded-md px-5 py-1 text-white
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
              className="w-full rounded-lg bg-orange-400 
            p-3 text-center text-base font-bold text-white">
              Book now
            </Link>
          </div>
        </section>
      </div>
    )
  }
}
