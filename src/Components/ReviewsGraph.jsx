// Desc: Component to display a bar chart of the ratings of all the reviews
// for all the vans the user has. The ratings are filtered and displayed
// in a bar chart.
import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'

export default function ReviewsGraph({ userData }) {
  //function to get the ratings of all the reviews
  //for all the vans the user has
  const getRatingsArray = () => {
    let ratings = []
    userData.vans.forEach((van) => {
      van.reviews?.forEach((review) => {
        ratings.push(review.rating)
      })
    })
    return ratings
  }

  //function to filter the ratings
  const filterRatings = (rating) => {
    let ratings = getRatingsArray()
    return ratings.filter((r) => r === rating).length
  }

  //dataset for the bar chart
  const ratingsDataSet = [
    { rating: 5, count: filterRatings(5) },
    { rating: 4, count: filterRatings(4) },
    { rating: 3, count: filterRatings(3) },
    { rating: 2, count: filterRatings(2) },
    { rating: 1, count: filterRatings(1) },
  ]

  return (
    <BarChart
      sx={{ '& .MuiBarElement-root': { border: '2px solid red' } }}
      dataset={ratingsDataSet}
      xAxis={[{ tickMinStep: 1 }]}
      yAxis={[
        {
          scaleType: 'band',
          dataKey: 'rating',
          categoryGapRatio: 0.5,
          label: 'stars',
        },
      ]}
      series={[{ dataKey: 'count', color: '#E17654' }]}
      layout="horizontal"
      margin={{
        left: 40,
        right: 5,
        top: 0,
        bottom: 25,
      }}
    />
  )
}
