import { Link } from 'react-router-dom';

export default function About() {

    return (

        <main className='about-page page-main-content'>
            <div className='flex column grow-1'>
                
                <section className='hero-section flex column grow-1'>
                    <img 
                        className='hero-img' 
                        src='/src/Assets/Images/about-hero-img.png'
                    />
                    <div className='flex column grow-1 justify-center'>
                        <h1 className='hero-title'>
                            Don’t squeeze in a sedan when you could relax in a van.
                        </h1>
                        <p className='hero-content'>
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
                    </div>
                </section>

                <section className='explore-section flex column'>
                    <h2 className='explore-title'>Your destination is waiting. <br />Your van is ready.</h2>
                    <Link to='/vans' className='explore-link badge'>Explore our vans</Link>
                </section>
                
            </div>
        </main>
    );
}
