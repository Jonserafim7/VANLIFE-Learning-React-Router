import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function ReviewsGraph() {
  const { userData } = useOutletContext()

  //function to get the ratings of the user
  const getRatingsArray = () => {
    //create an empty array to store the ratings
    let ratings = []
    //map through the vans of the user and get the ratings of each review
    userData.vans.forEach((van) => {
      //if the van has reviews, loop through the reviews and push the ratings
      //to the ratings array
      van.reviews?.forEach((review) => {
        ratings.push(review.rating)
      })
    })
    return ratings
  }
  //function to filter the ratings
  const filterRatings = (rating) => {
    //get the ratings array
    let ratings = getRatingsArray()
    //filter the ratings array and return the number of ratings that match the rating
    //passed to the function as an argument
    return ratings.filter((r) => r === rating).length
  }
  //function to get the total number of ratings
  const getTotalRatings = () => {
    //get the ratings array
    let ratings = getRatingsArray()
    //return the length of the ratings array
    return ratings.length
  }

  //function to get the percentage of the ratings
  //and return a string that can be used as a tailwind class
  const getPercentage = (rating) => {
    //get the total number of ratings
    let totalRatings = getTotalRatings()
    //get the number of ratings that match the rating passed to the function
    let ratingCount = filterRatings(rating)
    //calculate the percentage of the rating
    let percentage = (ratingCount / totalRatings) * 100
    //return a string that can be used as a tailwind class
    return `w-[${percentage}%]`
  }

  console.log(getPercentage(5))
  console.log(getPercentage(4))

  // function to get the average rating
  const getRatingsAverage = () => {
    //get the ratings array
    let ratings = getRatingsArray()
    //calculate the total of the ratings with the reduce method
    let total = ratings.reduce((acc, rating) => acc + rating, 0)
    //return the average rating
    return total / ratings.length
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="mt-4 flex items-center gap-2">
        <h2 className="text-3xl font-bold">{getRatingsAverage().toFixed(1)}</h2>
        <img
          src="/Assets/star-icon.png"
          alt="star-icon"
          className="inline-block h-5 w-5"
        />
        <p className="font-medium">Overall rating</p>
      </div>

      <div className="flex flex-col gap-2 px-2">
        <div className="gap-15 flex items-center gap-6">
          <p className=" font-medium text-[#4D4D4D]">5 stars</p>
          <div className="relative z-0 flex h-1.5 grow rounded-full bg-[#B9B9B9]">
            <div
              className={`${getPercentage(5)} relative z-10 h-1.5 rounded-full bg-[#FF8C38]`}></div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <p className=" font-medium text-[#4D4D4D]">4 stars</p>
          <div className="flex h-1.5 grow rounded-full bg-[#B9B9B9]">
            <div
              className={`${getPercentage(4)} h-1.5 rounded-full bg-[#FF8C38]`}></div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <p className=" font-medium text-[#4D4D4D]">3 stars</p>
          <div className="flex h-1.5 grow rounded-full bg-[#B9B9B9]">
            <div
              className={`${getPercentage(3)} h-1.5 rounded-full bg-[#FF8C38]`}></div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <p className=" font-medium text-[#4D4D4D]">2 stars</p>
          <div className="flex h-1.5 grow rounded-full bg-[#B9B9B9]">
            <div
              className={`${getPercentage(2)} h-1.5 rounded-full bg-[#FF8C38]`}></div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <p className=" font-medium text-[#4D4D4D]">1 stars</p>
          <div className="flex h-1.5 grow rounded-full bg-[#B9B9B9]">
            <div
              className={`${getPercentage(1)} h-1.5 rounded-full bg-[#FF8C38]`}></div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-bold">Reviews ({getTotalRatings()})</h2>
    </div>
  )
}
