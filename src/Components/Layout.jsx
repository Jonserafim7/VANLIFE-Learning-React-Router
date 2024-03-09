import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

export default function Layout() {
  return (
    <div className='layout flex column grow-1'>
        <Header />
        <Main />
        <Footer />
    </div>
  );
}
