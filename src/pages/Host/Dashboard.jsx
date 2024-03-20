import { useOutletContext } from 'react-router'
import Rating from '@mui/material/Rating'

export default function Dashboard() {
  // destructure the hostVans state variable from the context
  const { userData } = useOutletContext()

  // function to map over the hostVans and return the van elements
  const getVansElements = () => {
    if (!userData?.vans) return <p>No vans available</p>
    else {
      const vansElements = userData.vans.map((van) => {
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

  // function to get the average rating of the user's vans
  const getUserVansRatingsAverage = () => {
    if (userData?.vans.length > 0) {
      const ratingsArray = userData?.vans?.map((van) => {
        if (!van.reviews) return []
        else {
          return van.reviews.map((review) => {
            return review.rating
          })
        }
      })
      return (
        ratingsArray.flat().reduce((acc, curr) => acc + curr, 0) /
        ratingsArray.flat().length
      )
    }
  }

  // return the dashboard page
  return (
    <div className="pb-14 flex flex-col">
      {/* income section */}
      <section className="py-5 px-8 bg-[#FFEAD0] ">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Welcome!</h1>
            <div className="flex">
              <h2>
                Income last <span className="underline">30 days</span>
              </h2>
              <button className="ml-auto hover:underline">Details</button>
            </div>
            <h3 className="text-4xl font-black">
              ${userData?.userInfo?.income?.total}
            </h3>
          </div>
        </div>
      </section>

      {/* reviews section */}
      <section className="py-5 px-8 bg-[#FFDDB2] ">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3">
            <h2 className="text-lg font-bold">Review score</h2>
            <Rating
              name="read-only"
              precision={0.5}
              value={getUserVansRatingsAverage()}
              readOnly
            />
            <h3 className=" ml-1">
              <span className="font-bold">
                {userData?.vans.length > 0 ? getUserVansRatingsAverage() : ''}
              </span>
              /5
            </h3>
            <button className="ml-auto hover:underline">Details</button>
          </div>
        </div>
      </section>

      {/* vans section */}
      <section className="py-5 px-8 ">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-5">
            <div className="flex">
              <h2 className="text-lg font-bold">Your listed vans</h2>
              <button className="ml-auto hover:underline">View all</button>
            </div>
            <div className="flex flex-col gap-4">{getVansElements()}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
