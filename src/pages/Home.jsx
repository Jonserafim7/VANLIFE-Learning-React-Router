import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className=" text-white bg-[url('/src/Assets/Images/home-bg.png')] bg-cover bg-center flex flex-col items-center grow justify-center">
      <div className="flex flex-col p-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold">
          You got the tranvel plans, we got the travel vans.
        </h1>
        <h2 className="mt-5 text-xl">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </h2>
        <Link
          to="/vans"
          className="mt-10 bg-orange-400 text-center text-base font-bold p-3 rounded-lg">
          Find your van
        </Link>
      </div>
    </section>
  )
}
