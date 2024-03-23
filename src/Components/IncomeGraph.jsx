import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts'

const chartSetting = {
  yAxis: [
    {
      label: 'amount ($)',
    },
  ],
  // width: 300,
  // height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
    // width: 100, // width of the chart
    // height: 100, // height of the chart
  },
}

export default function IncomeGraph({ transactions }) {
  const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

  const mydataset = months.map((month, index) => {
    const transaction = transactions.find(
      (transaction) => transaction.date.month === index + 1
    )
    return {
      amount: transaction ? transaction.amount : 0,
      month,
    }
  })
  return (
    <BarChart
      dataset={mydataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month', label: 'Month' }]}
      series={[{ dataKey: 'amount', color: '#E17654' }]}
      margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
      {...chartSetting}
    />
  )
}
