import React from 'react';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';
import './About.scss';

export default function About() {
  return (
    <div className='about-page'>
        <Nav />
        <img className='about-bg-img'/>
        <main>
            <div className='about-content-container'>
                <div className='about-hero'>
                    <h1 className='about-hero-title'>
                        Don’t squeeze in a sedan when you could relax in a van.
                    </h1>
                    <p className='about-hero-subtitle'>
                        Our mission is to enliven your road trip with
                        the perfect travel van rental. Our vans are recertified before 
                        each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)
                        <br/>
                        <br/>
                        Our team is full of vanlife enthusiasts who know firsthand
                         the magic of touring the world on 4 wheels.
                    </p>
                </div>
                <div className='about-explore'>
                    <h2>Your destination is waiting. <br />Your van is ready.</h2>
                    <button className='about-explore-btn'>Explore our vans</button>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  );
}
