import React from 'react';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';
import './About.scss';

export default function About() {

    return (
        <div className='about-page'>
            <Nav />
            <main className='about-page-main-content'>
                {/* hero */}
                <img 
                    className='about-hero-img' 
                    src='/src/Assets/Images/about-hero-img.png'
                />
                {/* sections */}
                <div className='about-page-main-content-container'>
                    {/* article-section */}
                    <section className='about-article-section'>
                        <h1 className='about-article-title'>
                            Don’t squeeze in a sedan when you could relax in a van.
                        </h1>
                        <p className='about-article-paragraph'>
                            Our mission is to enliven your road trip with
                            the perfect travel van rental. Our vans are 
                            recertified before each trip to ensure your
                            travel plans can go off without a hitch.
                            (Hitch costs extra 😉)
                            <br/>
                            <br/>
                            Our team is full of vanlife enthusiasts who know firsthand
                            the magic of touring the world on 4 wheels.
                        </p>
                    </section>
                    {/* explore-section */}
                    <section className='about-explore-section'>
                        <h2>Your destination is waiting. <br />Your van is ready.</h2>
                        <button className='about-explore-btn'>Explore our vans</button>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
