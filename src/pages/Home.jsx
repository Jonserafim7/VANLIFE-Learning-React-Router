import { Link } from 'react-router-dom'
// Link is used to navigate between different pages in the application.
// It is used to create a hyperlink to the specified path.

// The Home component is used to render the home page of the application.
export default function Home() {
  return (
    <div className="flex w-full flex-col justify-center text-white">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
        You got the travel plans,
        <br />
        we got the travel vans.
      </h1>
      <h2 className="mt-5 text-base lg:text-lg">
        Add adventure to your life by joining the #vanlife movement.
        <br />
        Rent the perfect van to make your perfect road trip.
      </h2>
      <Link
        to="/vans"
        className="font-semi-bold mt-10 rounded-lg bg-orange-400 px-10 py-3 text-center md:max-w-max lg:text-lg">
        Find your van
      </Link>
    </div>
  )
}
