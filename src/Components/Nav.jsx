import React from 'react';
import { Link } from 'react-router-dom';
// Link is used to navigate between different pages in the application.
// It does not reload the entire page when the link is clicked, 
// allowing for a faster navigation experience and maintaining the state of the application.

export default function Nav() {
  return (
    <nav>
        <div className='nav-container'>
          <ul className='nav-links'>
            <li className='nav-logo'><Link Link to="/">#VANLIFE</Link></li>  
            <li className='nav-about'><Link to="/about">About</Link></li>
            <li className='nav-vans'><Link to='/vans'>Vans</Link></li>
          </ul>
      </div>
    </nav>
  );
}
