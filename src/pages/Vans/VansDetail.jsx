import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import {AppContext} from '/src/Components/Layout'

export default function VansDetail() {

  const { vansData, vanTypeClasses} = useContext(AppContext)

  // get the id from the URL
  // useParams is a hook that returns an object of key/value pairs 
  // of URL parameters
  // the key is the name of the URL parameter specified in the route
  // <Route path="/vans/:id ...rest of the route..." 
  // the value is the value of the URL parameter specified in vans page
  // <Link to={`/vans/${van.id}`} ...rest of the link...
  const { id } = useParams();

  // find the van with the id that matches the id from the URL
  const van = vansData.find(van => van.id === id);

  return (
    
    van ? 

      <div className=''>
          <Link to='/vans' className=''>Back</Link>

          <section className=''>
            <img 
              className='' 
              src={van.imageUrl} 
              alt={`${van.name} + image`} 
            />

            <div className=''>
              <p className=''>
                {van.type}
              </p>
              <div className=''>
                <p className=''>{van.name}</p>
                <p className=''>
                  ${van.price}
                  <span className=''>/day</span>
                </p>
              </div>
              <p className=''>{van.description}</p>
            </div>
          </section>

          <Link to='/vans' className=''>Book now</Link> 
      </div>

    : 

      <h1>Van not found</h1>
    
  )
}