import React, { useContext } from 'react'
import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useOutletContext,
} from 'react-router-dom'
import { AppContext } from '../../../Components/Layout'

// Layout component used to share UI elements across the child components
// The shared UI elements include a back button, the van card, and the navigation links
// The Outlet component is used to render the child components of the HostVanLayout route
export default function HostVanLayout() {
  // get the van data and the vansClasses function from the context
  const { vansClasses } = useContext(AppContext)
  const { userData } = useOutletContext()

  // get the id from the URL
  const { id } = useParams()

  // find the van with the id that matches the id from the URL
  const van = userData.vans.find((van) => van.id === id)

  // display the van data if it exists, otherwise display a message
  const vanElement = van ? (
    <div className="flex gap-2 rounded-md md:gap-4">
      <img src={`${van.imageUrl}`} className="w-40  rounded-md md:w-60" />
      <div className="flex flex-col justify-center">
        <p
          className={`w-max rounded-md px-5 py-1 
                      ${vansClasses(van)} text-white`}>
          {van.type}
        </p>
        <h1 className="mt-4 text-2xl/none font-semibold">{van.name}</h1>

        <h2 className="mt-1">
          <span className="text-lg font-medium">${van.price}</span>
          /day
        </h2>
      </div>
    </div>
  ) : (
    <div>
      <h1>Van not found</h1>
    </div>
  )

  return (
    <div className="mx-auto max-w-lg p-4 md:p-6">
      <Link to=".." relative="path" className="hover:font-bold hover:underline">
        Back to all vans
      </Link>
      <div className="mt-4  rounded-md bg-white p-4">
        {vanElement}

        <nav className="flex gap-4 py-4">
          <NavLink
            to={`.`}
            className={({ isActive }) =>
              isActive
                ? 'font-semibold underline'
                : 'font-medium text-[#4D4D4D]'
            }
            end>
            Details
          </NavLink>
          <NavLink
            to={`pricing`}
            className={({ isActive }) =>
              isActive
                ? 'font-semibold underline'
                : 'font-medium text-[#4D4D4D]'
            }>
            Pricing
          </NavLink>
          <NavLink
            to={`photos`}
            className={({ isActive }) =>
              isActive
                ? 'font-semibold underline'
                : 'font-medium text-[#4D4D4D]'
            }>
            Photos
          </NavLink>
        </nav>
        <hr />
        <div className="mt-4 flex flex-col">
          <Outlet context={{ van }} />
        </div>
      </div>
    </div>
  )
}
