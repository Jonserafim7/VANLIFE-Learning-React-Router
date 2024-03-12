import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "/src/Components/Layout";

export default function VansDetail() {
  const { vansData, vanTypeClasses } = useContext(AppContext);

  // get the id from the URL
  // useParams is a hook that returns an object of key/value pairs
  // of URL parameters
  // the key is the name of the URL parameter specified in the route
  // <Route path="/vans/:id ...rest of the route..."
  // the value is the value of the URL parameter specified in vans page
  // <Link to={`/vans/${van.id}`} ...rest of the link...
  const { id } = useParams();

  // find the van with the id that matches the id from the URL
  const van = vansData.find((van) => van.id === id);

  const vansClasses = (van) => {
    if (van.type === "simple") return "bg-[#E17654]";
    if (van.type === "luxury") return "bg-[#161616]";
    if (van.type === "rugged") return "bg-[#115E59]";
  };

  return van ? (
    <div className="p-8">
      <Link to="/vans" className="hover:underline">
        Back
      </Link>

      <section className="mt-8">
        <img
          className="rounded-md w-full object-cover"
          src={van.imageUrl}
          alt={`${van.name} + image`}
        />

        <div className="flex flex-col gap-4">
          <p
            className={`py-1 px-5 rounded-md w-max 
              ${vansClasses(van)} text-white mt-8`}
          >
            {van.type}
          </p>
          <div className="">
            <p className="text-lg font-semibold">{van.name}</p>
            <p className="text-lg font-semibold">
              ${van.price}
              <span className="text-sm font-normal">/day</span>
            </p>
          </div>
          <p className="">{van.description}</p>
          <Link
            to="/vans"
            className="bg-orange-400 text-center w-full 
            text-base font-bold p-3 rounded-lg text-white"
          >
            Book now
          </Link>
        </div>
      </section>
    </div>
  ) : (
    <h1>Van not found</h1>
  );
}
