import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-white flex flex-col grow bg-[url('/src/Assets/Images/home-bg.png')] bg-cover bg-center p-8">
      <h1 className="mt-5 text-4xl font-extrabold">You got the tranvel plans, we got the travel vans.</h1>
      <h2 className="mt-5 text-xl">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </h2>
      <Link to="/vans" className="mt-10 bg-orange-400 text-center text-base font-bold p-3 rounded-lg">
        Find your van
      </Link>
    </section>
  );
}
