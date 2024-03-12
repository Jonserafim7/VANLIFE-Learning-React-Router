import { Link } from 'react-router-dom';

export default function Home() {
  return (

    <div className=''>

        <section className=''>
          <h1 className=''>You got the tranvel plans, we got the travel vans.</h1>
          <h2 className=''>
              Add adventure to your life by joining the #vanlife movement.
              Rent the perfect van to make your perfect road trip.
          </h2>
          <Link to='/vans' className=''>Find your van</Link>
        </section>

    </div>
  );
}
