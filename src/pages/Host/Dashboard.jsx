import { useContext } from 'react'
import { AppContext } from '../../Components/Layout'

export default function Dashboard() {
  // destructure the hostVans state variable from the context
  const { hostVans } = useContext(AppContext)

  // function to map over the hostVans and return the van elements
  const getVansElements = () => {
    if (!hostVans) return <p>No vans available</p>
    else {
      const vansElements = hostVans.map((van) => {
        return (
          <div
            key={van.id}
            className="flex items-center bg-white py-4 px-5 rounded-md">
            <img
              className="w-24 h-24 rounded-md object-cover"
              src={van.imageUrl}
              alt={`${van.name} + image`}
            />
            <div className="flex flex-col ml-5">
              <h3 className="text-lg font-bold">{van.name}</h3>
              <p className="">
                ${van.price}
                <span className="">/day</span>
              </p>
            </div>
            <button className="ml-auto hover:underline">Edit</button>
          </div>
        )
      })
      return vansElements
    }
  }

  // return the dashboard page
  return (
    // page container
    <div className="px-8 pb-14 flex flex-col">
      {/* overview section */}
      <section className="mx-[-32px]">
        {/* income information */}
        <div className="bg-[#FFEAD0] px-8 py-4 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Welcome!</h1>
          <div className="flex">
            <h2>
              Income last <span className="underline">30 days</span>
            </h2>
            <button className="ml-auto">Details</button>
          </div>
          <h3 className="text-4xl font-black">$0.00</h3>
        </div>

        {/* reviews information */}
        <div className="bg-[#FFDDB2] px-8 py-4 flex">
          <div className="flex items-center">
            <h2 className="text-lg font-bold">Review score</h2>
            <img
              src="/src/Assets/Icons/Star-3.png"
              className="ml-3"
              alt="star"
            />
            <h3 className="font-bold ml-1">
              5.0/<span className="font-normal">5</span>
            </h3>
          </div>
          <button className="ml-auto">Details</button>
        </div>
      </section>

      {/* vans section */}
      <section className="">
        <div className="flex py-5">
          <h2 className="text-lg font-bold">Your listed vans</h2>
          <button className="ml-auto hover:underline">View all</button>
        </div>
        <div className="flex flex-col gap-4">{getVansElements()}</div>
      </section>
    </div>
  )
}
