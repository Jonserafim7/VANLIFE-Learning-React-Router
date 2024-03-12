import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '/src/Components/Layout'

export default function Vans() {

  const { vansData, vanTypeClasses} = useContext(AppContext)

  // map the van data to JSX elements
  const vansElements = vansData.map((van) => {
    return (
      <Link to={`/vans/${van.id}`} key={van.id}>
        <div className=''>
          <img 
            className='' 
            src={van.imageUrl} 
            alt={`${van.name} + image`} 
          />

          <div className=''>
            <div className=''>
              <p className=''>{van.name}</p>
              <p className=''>
                ${van.price}
                <span className=''>/day</span>
              </p>
            </div>

            <p className=''>
              {van.type}
            </p>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <div className=''>
      <section className=''>
        {vansElements}
      </section> 
    </div>
  );
}
