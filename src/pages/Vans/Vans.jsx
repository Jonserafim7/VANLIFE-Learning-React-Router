import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '/src/Components/Layout'

export default function Vans() {

  const { vansData, vanTypeClasses} = useContext(AppContext)

  // map the van data to JSX elements
  const vansElements = vansData.map((van) => {
    return (
      <Link to={`/vans/${van.id}`} key={van.id}>
        <div className='van-card flex-column'>
          <img 
            className='card-img' 
            src={van.imageUrl} 
            alt={`${van.name} + image`} 
          />

          <div className='card-info flex-column justify-between'>
            <div className='flex justify-between'>
              <p className='van-name'>{van.name}</p>
              <p className='van-price'>
                ${van.price}
                <span className='duration'>/day</span>
              </p>
            </div>

            <p className={`van-type badge ${vanTypeClasses(van)}`}>
              {van.type}
            </p>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <div className='vans-page pad-3'>
      <section className='vans-cards-section'>
        {vansElements}
      </section> 
    </div>
  );
}
