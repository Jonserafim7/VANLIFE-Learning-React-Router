import { useOutletContext } from 'react-router'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating'

// Dashboard page for the host
// It is the index page for the host layout
// The index page is the default page that
//gets rendered when the route is matched with the parent layout route
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
            className="flex items-center rounded-md bg-white p-3">
            <img
              className="h-24 w-24 rounded-md object-cover"
              src={van.imageUrl}
              alt={`${van.name} + image`}
            />
            <div className="ml-3 flex flex-col">
              <h3 className="text-base font-medium">{van.name}</h3>
              <p className="text-sm">
                ${van.price}
                <span className="">/day</span>
              </p>
            </div>
            <Link
              to={`vans/${van.id}`}
              className="ml-auto text-sm hover:underline">
              Edit
            </Link>
          </div>
        )
      })
      return vansElements
    }
  }

  // function to get the average rating of the user's vans
  const getUserVansRatingsAverage = () => {
    // check if the user has vans
    if (userData?.vans.length > 0) {
      // map over the vans and return the reviews
      const ratingsArray = userData?.vans?.map((van) => {
        // check if the van has reviews
        // if not, return an empty array
        if (!van.reviews) return []
        // if the van has reviews, map over the reviews and return the ratings
        else {
          return van.reviews.map((review) => {
            return review.rating
          })
        }
      })
      // return the average of the ratings using the reduce array method
      // flatten the ratingsArray using the flat array method
      return (
        ratingsArray.flat().reduce((acc, curr) => acc + curr, 0) /
        ratingsArray.flat().length
      )
    }
  }

  // return the dashboard page
  return (
    <div className="flex flex-col">
      {/* income section */}
      <div>
        <section className=" absolute left-0 top-[56px] w-full bg-[#FFEAD0] p-4">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-medium">Welcome!</h1>
              <div className="flex">
                <h2 className="mt-4 text-sm">
                  Income last <span className=" underline">30 days</span>
                </h2>
                <Link to="income" className="ml-auto text-sm hover:underline">
                  Details
                </Link>
              </div>
              <h3 className="text-3xl font-medium">
                ${userData?.userInfo?.income?.total}
              </h3>
            </div>
          </div>
        </section>

        {/* reviews section */}
        <section className=" absolute left-0 top-[204px] w-full bg-[#FFDDB2] p-4">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center">
              <div className="flex flex-col">
                <h2 className="text-lg font-medium">Review score</h2>
                <div className="flex gap-2">
                  <Rating
                    name="read-only"
                    precision={0.5}
                    value={getUserVansRatingsAverage()}
                    readOnly
                  />
                  <h3 className=" ml-1">
                    <span className="font-medium">
                      {userData?.vans.length > 0
                        ? getUserVansRatingsAverage()
                        : ''}
                    </span>
                    /5
                  </h3>
                </div>
              </div>
              <Link to="reviews" className="ml-auto text-sm hover:underline">
                Details
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* vans section */}
      <section className="mt-[232px]">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <h2 className="text-lg font-medium">Your listed vans</h2>
              <Link to="vans" className="ml-auto text-sm hover:underline">
                View all
              </Link>
            </div>
            <div className="flex flex-col gap-4">{getVansElements()}</div>
            <div className="flex flex-col gap-4">{getVansElements()}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
