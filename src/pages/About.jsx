import { Link } from 'react-router-dom';

export default function About() {

    return (

        <div className='flex grow flex-col p-8'>
            
            <section className='flex flex-col grow'>
                <img 
                    className='mx-[-32px] w-full object-cover' 
                    src='/src/Assets/Images/about-hero-img.png'
                />
                <div className='mt-8'>
                    <h1 className='text-[2rem]/[2.375rem] font-bold'>
                        Don’t squeeze in a sedan when you could relax in a van.
                    </h1>
                    <p className='mt-5 text-base/[1.375rem]'>
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

            <section className='bg-[#FFCC8D] p-6 flex flex-col'>
                <h2 className=''>Your destination is waiting. <br />Your van is ready.</h2>
                <Link to='/vans' className=''>Explore our vans</Link>
            </section>
            
        </div>
    );
}
