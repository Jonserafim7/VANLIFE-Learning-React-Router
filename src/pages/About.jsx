import { Link } from 'react-router-dom'

// The About component is used to render the about page of the application.
export default function About() {
  return (
    <div className="flex grow flex-col py-8 max-w-4xl mx-auto">
      <section className="flex flex-col">
        <img
          className="oject-cover w-full max-h-[450px]"
          src="/Assets/about-hero-img.png"
        />
        <div className="p-8">
          <h1 className="text-[2rem]/[2.375rem] font-bold">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="mt-5 text-base/[1.375rem]">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br />
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
      </section>

      <section className="px-8 ">
        <div className="bg-[#FFCC8D] flex flex-col p-6 rounded-lg">
          <h2 className="text-2xl font-bold">
            Your destination is waiting. <br />
            Your van is ready.
          </h2>
          <Link
            to="/vans"
            className="bg-black text-white w-max px-6 py-3  rounded-md mt-4">
            Explore our vans
          </Link>
        </div>
      </section>
    </div>
  )
}
