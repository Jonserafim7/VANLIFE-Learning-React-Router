import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';

export default function HostLayout() {
  return (
    <>
      <nav className='flex gap-3 p-8 container'>
        <NavLink 
          to='/host' 
          className={({isActive}) => isActive ? 'underline font-bold' : 'hover:text-orange-500'} 
          end
        >
          Dashboard
        </NavLink>

        <NavLink 
          to='income' 
          className={({isActive}) => isActive ? 'underline font-bold' : 'hover:text-orange-500'}
        >
          Income
        </NavLink>

        <NavLink 
          to='vans' 
          className={({isActive}) => isActive ? 'underline font-bold' : 'hover:text-orange-500'}
        >
          Vans
        </NavLink>
        
        <NavLink 
          to='reviews' 
          className={({isActive}) => isActive ? 'underline font-bold' : 'hover:text-orange-500'}
        >
          Reviews
        </NavLink>
      </nav>
      
      <Outlet/>
    </>
  );
}
