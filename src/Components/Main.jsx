import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <main className='flex grow-1'>
      <Outlet />
    </main>
  );
}
