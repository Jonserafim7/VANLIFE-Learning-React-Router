import { Link } from 'react-router-dom'

// The About component is used to render the about page of the application.
export default function About() {
  return (
    <div className="flex grow flex-col py-4 md:py-8">
      <img
        className="h-[200px] w-full object-cover md:h-[300px] lg:h-[400px]"
        src="/Assets/about-hero-img.png"
      />
      <section className="flex flex-col p-4 md:p-6">
        <h1 className="text-3xl/none font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="mt-3 text-base/[1.375rem]">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="mt-3">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </section>

      <section className="flex grow items-center px-4 md:px-6">
        <div className="flex flex-col rounded-lg bg-[#FFCC8D] p-4 md:w-full">
          <h2 className="text-2xl/tight font-bold">
            Your destination is waiting.
          </h2>
          <h2 className="text-2xl/tight font-bold">Your van is ready.</h2>
          <Link
            to="/vans"
            className="mt-3 w-max rounded-md bg-black px-6 py-3 text-center font-semibold text-white md:mt-5 md:w-full">
            Explore our vans
          </Link>
        </div>
      </section>
    </div>
  )
}
