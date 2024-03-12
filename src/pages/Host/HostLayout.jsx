import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';

export default function HostLayout() {
  return (
    <div className='host-page pad-3'>
      
        <nav className='host-nav flex gap-1'>
          <NavLink 
            to='/host' 
            className={({isActive}) => isActive ? 'active' : ''} 
            end
          >
            Dashboard
          </NavLink>

          <NavLink 
            to='income' 
            className={({isActive}) => isActive ? 'active' : ''}
          >
            Income
          </NavLink>

          <NavLink 
            to='listedvans' 
            className={({isActive}) => isActive ? 'active' : ''}
          >
            Vans
          </NavLink>
          
          <NavLink 
            to='reviews' 
            className={({isActive}) => isActive ? 'active' : ''}
          >
            Reviews
          </NavLink>
        </nav>
        
        <Outlet/>
       
    </div>
  );
}
