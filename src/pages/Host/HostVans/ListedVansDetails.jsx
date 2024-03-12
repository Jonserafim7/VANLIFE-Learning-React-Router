import React, { useContext } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { AppContext } from "../../../Components/Layout";

export default function ListedVansDetails() {
  // get the van data and the vansClasses function from the context
  const { hostVans, vansClasses } = useContext(AppContext);

  // get the id from the URL
  const { id } = useParams();

  // find the van with the id that matches the id from the URL
  const van = hostVans.find((van) => van.id === id);

  // display the van data if it exists, otherwise display a message
  const vanElement = van ? (
    <section className="container bg-white flex flex-col p-5">
      <div className="flex gap-4">
        <img src={`${van.imageUrl}`} className="w-36 rounded-md object-cover" />
        <div className="flex flex-col justify-center gap-1">
          <p
            className={`py-1 px-5 rounded-md w-max 
                ${vansClasses(van)} text-white`}
          >
            {van.type}
          </p>
          <h1 className="text-3xl font-bold">{van.name}</h1>
          <h2>${van.price}/day</h2>
        </div>
      </div>
      <nav className="flex gap-5 py-5">
        <NavLink
          to={`/host/listedvans/${van.id}`}
          className={({ isActive }) =>
            isActive
              ? "underline font-semibold text-base hover:text-orange-500"
              : "font-medium text-base hover:text-orange-500"
          }
          end
        >
          Details
        </NavLink>
        <NavLink
          to={`/host/listedvans/${van.id}/pricing`}
          className={({ isActive }) =>
            isActive
              ? "underline font-semibold text-base hover:text-orange-500"
              : "font-medium text-base hover:text-orange-500"
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to={`/host/listedvans/${van.id}/Photos`}
          className={({ isActive }) =>
            isActive
              ? "underline font-semibold text-base hover:text-orange-500"
              : "font-medium text-base hover:text-orange-500"
          }
        >
          Photos
        </NavLink>
      </nav>
      <div className="flex flex-col">
        <Outlet />
      </div>
    </section>
  ) : (
    <div>
      <h1>Van not found</h1>
    </div>
  );

  return <div className="p-8">{vanElement}</div>;
}
