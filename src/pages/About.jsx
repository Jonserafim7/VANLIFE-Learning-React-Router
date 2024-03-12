import { Link } from 'react-router-dom';

export default function About() {

    return (

        <div className=''>
            
            <section className=''>
                <img 
                    className='' 
                    src='/src/Assets/Images/about-hero-img.png'
                />
                <div className=''>
                    <h1 className=''>
                        Don’t squeeze in a sedan when you could relax in a van.
                    </h1>
                    <p className=''>
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

            <section className=''>
                <h2 className=''>Your destination is waiting. <br />Your van is ready.</h2>
                <Link to='/vans' className=''>Explore our vans</Link>
            </section>
            
        </div>
    );
}
