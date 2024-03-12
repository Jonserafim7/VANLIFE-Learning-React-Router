import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../Components/Layout';

export default function ListedVans() {

  // getting the state variable and the function to update the state variable from the context
  // provided by the Layout component
  const { hostVans } = useContext(AppContext)

  // map the host vans data to JSX elements
  const hostVansList = hostVans.map((van, index) => {
    return (
      <Link key={van.id} to={`/host/listedvans/${van.id}`} className='hover:shadow-md hover:scale-[102%] transition ease-in-out'>
        <div key={van.id} className='flex items-center bg-white py-4 px-5 rounded-md'>
            <img 
                className='w-24 h-24 rounded-md object-cover' 
                src={van.imageUrl} 
                alt={`${van.name} + image`} 
            />
            <div className='flex flex-col ml-5'>
                <h2 className='text-lg font-bold'>{van.name}</h2>
                <p className=''>
                    ${van.price}
                    <span className=''>/day</span>
                </p>
            </div>
            <button className='ml-auto hover:underline'>Edit</button>
        </div>
      </Link>
    )
  })

  return (
    <div className='flex flex-col gap-4 container px-8'>
      <h1 className='text-3xl font-bold'>Host listed vans</h1>
      {hostVansList}
    </div>
  );
}
