import React, {useState, createContext, useEffect} from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export const AppContext = createContext()

export default function Layout() {
  // state variable to store the van data fetched from the mock server
  const [vansData, setVansData] = useState([])
  const [hostVans, setHostVans] = useState([])

   // function to return the appropriate class based on the van type
   const vansClasses = (van) => {
    if (van.type === "simple") return "bg-[#E17654]";
    if (van.type === "luxury") return "bg-[#161616]";
    if (van.type === "rugged") return "bg-[#115E59]";
  };

  return (
    <AppContext.Provider value={{ vansData, setVansData, hostVans, setHostVans, vansClasses }}>
      <div className="h-full flex flex-col relative">
        <Header />
        <main className="flex grow flex-col mt-24 bg-[#FFF7ED]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
