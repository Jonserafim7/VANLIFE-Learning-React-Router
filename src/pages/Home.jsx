import { Link } from 'react-router-dom'
// Link is used to navigate between different pages in the application.
// It is used to create a hyperlink to the specified path.

// The Home component is used to render the home page of the application.
export default function Home() {
  return (
    <section className=" flex grow flex-col justify-center bg-[url('/Assets/home-bg.png')] bg-cover bg-center text-white">
      <div className="flex max-w-2xl flex-col p-4 md:p-6">
        <h1 className="text-4xl font-extrabold tracking-tight">
          You got the travel plans, we got the travel vans.
        </h1>
        <h2 className="mt-5 text-lg">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </h2>
        <Link
          to="/vans"
          className="font-semi-bold mt-10 rounded-lg bg-orange-400 px-10 py-3 text-center text-base md:max-w-max">
          Find your van
        </Link>
      </div>
    </section>
  )
}
