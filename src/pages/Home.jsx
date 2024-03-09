import { Link } from 'react-router-dom';

export default function Home() {
  return (

    <main className='home-page flex column grow-1'>
      <div className='flex grow-1'>

        <section className='hero-section flex column justify-center'>
          <h1 className='hero-title'>You got the tranvel plans, we got the travel vans.</h1>
          <h2 className='hero-content'>
              Add adventure to your life by joining the #vanlife movement.
              Rent the perfect van to make your perfect road trip.
          </h2>
          <Link to='/vans' className='find-van-link badge'>Find your van</Link>
        </section>

      </div>
    </main>
  );
}
