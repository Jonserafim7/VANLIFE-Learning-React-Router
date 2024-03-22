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
            className="flex flex-col gap-2 border-b border-gray-300 py-4">
            <Rating
              name="read-only"
              value={review.rating}
              size="small"
              readOnly
            />
            <div className="flex items-center">
              <p className="text-lg font-medium">{review.reviewer}</p>
              <p className="ml-auto text-sm text-gray-400">{review.date}</p>
            </div>
            <p>{review.content}</p>
          </div>
        )
      })
    }
    return vanreviews
  })

  return (
    <div className="maw-w-lg mx-auto max-w-lg p-4 md:p-6">
      <img src="/Assets/reviews-chart.png" className="object-cover" />
      <div className="flex flex-col">{hostReviewElements}</div>
    </div>
  )
}
