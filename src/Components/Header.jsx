import React from "react";
import { NavLink, Link } from "react-router-dom";
// Link is used to navigate between different pages in the application.
// It does not reload the entire page when the link is clicked,
// allowing for a faster navigation experience and maintaining the state of the application.

export default function Header() {
  return (
    <header className="flex items-center p-8 fixed top-0 bg-[#ffefdc] w-full shadow-md">
      <Link to="/" className="text-2xl font-bold">
        #VANLIFE
      </Link>
      <nav className="flex ml-auto gap-3">
        <NavLink to="/host" className={({ isActive }) => (isActive ? "underline font-semibold text-base" : "font-medium text-base")}>
          Host
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "underline font-semibold text-base" : "font-medium text-base")}>
          About
        </NavLink>
        <NavLink to="/vans" className={({ isActive }) => (isActive ? "underline font-semibold text-base" : "font-medium text-base")}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
