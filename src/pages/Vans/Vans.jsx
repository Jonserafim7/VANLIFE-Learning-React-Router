import React, { useState, useEffect } from 'react';
import './Vans.scss';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

export default function Vans() {

  // state variable to store the van data fetched from the mock server
  const [vansData, setVansData] = useState([])

  // function to fetch the van data from the mock server
  const fetchVansData = async () => {
    try {
      const response = await fetch('/api/vans')
      const data = await response.json()
      console.log('data', data.vans)
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
      return 'simple-van';
    }
    else if (van.type === 'luxury') {
      return 'luxury-van';
    }
    else if (van.type === 'rugged') {
      return 'rugged-van';
    }
  }

  // map the van data to JSX elements
  const vansElements = vansData.map((van, index) => {
    return (
      <div key={index} className='van-card'>
        <img 
          className='van-card-img' 
          src={van.imageUrl} 
          alt={`${van.name} + image`} 
        />
        <div className='van-card-description'>
          <div className='van-card-name-container'>
            <h3 className='van-card-name'>{van.name}</h3>
            <button 
              className={`van-type-box ${vanTypeClasses(van)}`}
            >
              {van.type}
            </button>
          </div>
          <div className='van-card-price-container'>
            <h3 className='van-card-price-value'>${van.price}</h3>
            <p className='van-card-price-duration'>/day</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='vans-page'>
      <Nav />
      <main className='vans-page-main-content'>
        <section className='vans-page-main-content-container'>
          {/* filter menu */}
          <div className='filter-container'>
            <h1 className='filter-title'>Explore our van options</h1>
            <div className='filter-options'>
              <button className='van-type-box generic-van'>Simple</button>
              <button className='van-type-box generic-van'>Luxury</button>
              <button className='van-type-box generic-van'>Rugged</button>
              <button className='clear-filter'>clear filters</button>
            </div>
          </div>
          {/* vans cards */}
          <div className='cards-container'>
            {vansElements}
          </div> 
        </section>
      </main>
      <Footer />
    </div>
  );
}
