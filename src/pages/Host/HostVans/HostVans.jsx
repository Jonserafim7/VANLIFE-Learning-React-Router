import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../../Components/Layout'

export default function HostVans() {
  // get the hostVans state variable from the AppContext
  const { hostVans } = useContext(AppContext)

  // map the hostVans state variable to a list of van components
  const hostVansElements = hostVans.map((van) => {
    return (
      <Link
        key={van.id}
        to={van.id}
        className="hover:shadow-md hover:scale-[102%] transition ease-in-out">
        <div
          key={van.id}
          className="flex items-center bg-white py-4 px-5 rounded-md">
          <img
            className="w-24 h-24 rounded-md object-cover"
            src={van.imageUrl}
            alt={`${van.name} + image`}
          />
          <div className="flex flex-col ml-5">
            <h2 className="text-lg font-bold">{van.name}</h2>
            <p className="">
              ${van.price}
              <span className="">/day</span>
            </p>
          </div>
          <button className="ml-auto hover:underline">Edit</button>
        </div>
      </Link>
    )
  })

  return (
    <div className="flex flex-col gap-4 px-8">
      <h1 className="text-3xl font-bold">Host listed vans</h1>
      {hostVans.length > 0 ? hostVansElements : <h2>loading</h2>}
    </div>
  )
}
