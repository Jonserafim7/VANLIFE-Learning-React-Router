import React, {useState, createContext, useEffect} from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export const AppContext = createContext()

export default function Layout() {

    // state variable to store the van data fetched from the mock server
    const [vansData, setVansData] = useState([])

    // function to fetch the van data from the mock server
    const fetchVansData = async () => {
      try {
        const response = await fetch('/api/vans')
        const data = await response.json()
        setVansData(data.vans)
      } catch (error) {
        console.error('Error fetching van data', error)
      }
    }
  
    // fetch the van data when the component mounts
    useEffect(() => {
      fetchVansData()
    }, [])
  
    // function to return the appropriate van type class based on the van type
    const vanTypeClasses = (van) => {
      if (van.type === 'simple') {
        return 'simple';
      }
      else if (van.type === 'luxury') {
        return 'luxury';
      }
      else if (van.type === 'rugged') {
        return 'rugged';
      }
    }

  return (
    <AppContext.Provider value={{ vansData, vanTypeClasses }}>
      <div className='layout flex column grow-1'>
          <Header />
          <Outlet />
          <Footer />
      </div>
    </AppContext.Provider>
  );
}
