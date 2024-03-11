import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function HostLayout() {
  return (
    <div className='host-page page-main-content'>
        <nav className='host-nav flex gap-1 pad-1'>
            <Link to='/host'>Dashboard</Link>
            <Link to='income'>Income</Link>
            <Link to='listedvans'>Vans</Link>
            <Link to='reviews'>Reviews</Link>
        </nav>
        <Outlet/>
    </div>
  );
}
