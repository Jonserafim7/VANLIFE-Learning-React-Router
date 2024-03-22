import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts'

const chartSetting = {
  yAxis: [
    {
      label: 'amount ($)',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
  },
}

export default function IncomeGraph({ transactions }) {
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]

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
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'amount', color: '#E17654' }]}
      {...chartSetting}
    />
  )
}
