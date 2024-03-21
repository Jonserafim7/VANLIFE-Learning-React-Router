import { useOutletContext } from 'react-router-dom'

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
        className="flex justify-between bg-white p-4 items-center rounded-md">
        <p className="font-semibold text-2xl">${transaction.amount}</p>
        <p>{transaction.date}</p>
      </div>
    )
  })

  return (
    <div className="p-8 flex flex-col container max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold">Income</h1>
      <div className="flex mx-auto">
        <img
          src="/src/Assets/Images/income-chart.png"
          alt="income chart"
          className="mt-6 object-cover "
        />
      </div>
      <div className="flex flex-col gap-5 mt-5 w-full ">
        <h2>Your transactions ({transactions.length})</h2>
        <div className="flex flex-col gap-4">{transactionsElements}</div>
      </div>
    </div>
  )
}
