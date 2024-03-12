import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// Link is used to navigate between different pages in the application.
// It does not reload the entire page when the link is clicked, 
// allowing for a faster navigation experience and maintaining the state of the application.

export default function Header() {
  return (
    <header className=''>
      <Link to="/" className=''>#VANLIFE</Link>  
      <nav className=''>
        <NavLink 
          to='/host' 
          className={({isActive}) => isActive ? 'active' : ''}
        >
          Host
        </NavLink>
        <NavLink 
          to="/about" 
          className={({isActive}) => isActive ? 'active' : ''}
        >
          About
        </NavLink>
        <NavLink 
          to='/vans' 
          className={({isActive}) => isActive ? 'active' : ''}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
