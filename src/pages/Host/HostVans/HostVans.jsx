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
        className="flex items-center rounded-md bg-white p-3 transition ease-in-out hover:scale-[102%] hover:shadow-md">
        <img
          className="max-h-36 min-h-24 min-w-24 max-w-36 rounded-md object-cover"
          src={van.imageUrl}
          alt={`${van.name} + image`}
        />

        <div className="flex w-full">
          <div className="ml-2 flex flex-col">
            <h2 className="text-lg font-medium">{van.name}</h2>
            <p className="">
              ${van.price}
              <span className="">/day</span>
            </p>
          </div>
          <button className="ml-auto text-sm hover:underline">Edit</button>
        </div>
      </Link>
    )
  })

  return (
    <div className="mx-auto flex w-full max-w-lg grow flex-col p-4 md:p-6">
      <h1 className="text-3xl font-bold">Host listed vans</h1>
      <div className="mt-4 flex flex-col gap-2">
        {userData.vans.length > 0 ? hostVansElements : <h2>loading</h2>}
      </div>
    </div>
  )
}
