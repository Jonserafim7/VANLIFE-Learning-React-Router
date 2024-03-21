import { Link, useOutletContext } from 'react-router-dom'

// Component to display the host listed vans in the host dashboard
export default function HostVans() {
  // get the hostVans state variable from the Outlet context
  const { userData } = useOutletContext()

  // map over the hostVans array and return a Link component for each van
  const hostVansElements = userData.vans.map((van) => {
    return (
      <Link
        key={van.id}
        to={van.id}
        className="hover:shadow-md hover:scale-[102%] transition ease-in-out flex items-center rounded-md gap-4 p-3 bg-white mx-auto w-full">
        <img
          className="min-w-24 min-h-24 max-w-36 max-h-36 rounded-md object-cover"
          src={van.imageUrl}
          alt={`${van.name} + image`}
        />

        <div className="flex w-full">
          <div className="flex flex-col">
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
    <div className="flex flex-col p-8 container mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold">Host listed vans</h1>
      <div className="flex flex-col gap-6 mt-8">
        {userData.vans.length > 0 ? hostVansElements : <h2>loading</h2>}
      </div>
    </div>
  )
}
