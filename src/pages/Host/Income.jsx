import { useOutletContext } from 'react-router-dom'
import IncomeGraph from '../../Components/IncomeGraph'

// Component to display the income of the user
export default function Income() {
  //use the useOutletContext hook to get the user data from the context
  const { userData } = useOutletContext()

  //destructure the transactions from the user data
  const transactions = userData.userInfo.income.transactions

  //map through the transactions and return a div for each transaction
  const transactionsElements = transactions.map((transaction) => {
    return (
      <div
        key={transaction.id}
        className="flex items-center justify-between rounded-md bg-white p-2">
        <p className="text-xl font-semibold">${transaction.amount}</p>
        <p className="text-sm">
          {transaction.date.day}/{transaction.date.month}/
          {transaction.date.year}
        </p>
      </div>
    )
  })

  return (
    <div className="mx-auto flex max-w-lg flex-col p-4 md:p-6">
      <h1 className="text-3xl font-bold">Income</h1>

      {/* <img
        src="/Assets/income-chart.png"
        alt="income chart"
        className="mx-auto mt-4  object-cover"
      /> */}

      <IncomeGraph transactions={transactions} />

      <div className="mt-4 flex flex-col gap-4">
        <h2>Your transactions ({transactions.length})</h2>
        <div className="flex flex-col gap-4">{transactionsElements}</div>
      </div>
    </div>
  )
}
