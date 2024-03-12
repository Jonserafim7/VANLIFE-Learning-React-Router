import React, {useState, createContext, useEffect} from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export const AppContext = createContext()

export default function Layout() {
  // state variable to store the van data fetched from the mock server
  const [vansData, setVansData] = useState([]);

  // function to fetch the van data from the mock server
  const fetchVansData = async () => {
    try {
      const response = await fetch("/api/vans");
      const data = await response.json();
      setVansData(data.vans);
    } catch (error) {
      console.error("Error fetching van data", error);
    }
  };

  // fetch the van data when the component mounts
  useEffect(() => {
    fetchVansData();
  }, []);

  return (
    <AppContext.Provider value={{ vansData }}>
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
