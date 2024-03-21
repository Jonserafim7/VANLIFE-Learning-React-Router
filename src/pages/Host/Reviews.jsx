import { useOutletContext } from 'react-router-dom'
import Rating from '@mui/material/Rating'

// Component to display the reviews of a host
export default function Reviews() {
  //use the useOutletContext hook to get the user data from the context
  const { userData } = useOutletContext()

  //map through the vans of the user and return a div for each review
  const hostReviewElements = userData.vans.map((van) => {
    let vanreviews = []
    if (van.reviews) {
      vanreviews = van.reviews.map((review) => {
        return (
          <div
            key={review.id}
            className="flex flex-col gap-3 p-4 border-b  border-gray-300">
            <Rating name="read-only" value={review.rating} readOnly />
            <div className="flex gap-2">
              <h2 className="font-bold">{review.reviewer}</h2>
              <p className="text-gray-400 font-semibold">{review.date}</p>
            </div>
            <p>{review.content}</p>
          </div>
        )
      })
    }
    return vanreviews
  })

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center justify-center">
        <img src="/src/Assets/Images/reviews-chart.png" className="p-6" />
      </div>
      <div className="flex flex-col gap-3">{hostReviewElements}</div>
    </div>
  )
}
