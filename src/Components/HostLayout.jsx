import React from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';


export default function HostLayout() {
  return (
    <main className='host-page page-main-content'>
        <section className='host-nav flex gap-1'>
            <Link to='/host/dashboard'>Dashboard</Link>
            <Link to='/host/income'>Income</Link>
            <Link to='/host/vans'>Vans</Link>
            <Link to='/host/reviews'>Reviews</Link>
        </section>
        <Outlet/>
    </main>
  );
}
