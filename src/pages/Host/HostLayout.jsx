import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';

export default function HostLayout() {
  return (
    <div className=''>
      
        <nav className=''>
          <NavLink 
            to='/host' 
            className={({isActive}) => isActive ? '' : ''} 
            end
          >
            Dashboard
          </NavLink>

          <NavLink 
            to='income' 
            className={({isActive}) => isActive ? '' : ''}
          >
            Income
          </NavLink>

          <NavLink 
            to='listedvans' 
            className={({isActive}) => isActive ? '' : ''}
          >
            Vans
          </NavLink>
          
          <NavLink 
            to='reviews' 
            className={({isActive}) => isActive ? '' : ''}
          >
            Reviews
          </NavLink>
        </nav>
        
        <Outlet/>
       
    </div>
  );
}
