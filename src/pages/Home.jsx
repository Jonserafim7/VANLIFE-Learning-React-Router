import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home-page'>

      <section className='hero-section'>
        <h1 className='hero-title'>You got the tranvel plans, we got the travel vans.</h1>
        <p className='hero-content'>
            Add adventure to your life by joining the #vanlife movement.
            Rent the perfect van to make your perfect road trip.
        </p>
        <Link to='/vans' className='find-van-link badge'>Find your van</Link>
      </section>

    </div>
  );
}