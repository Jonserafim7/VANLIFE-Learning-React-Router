import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';
import './Home.scss';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home-page'>
        <Nav />
        <main className='home-page-main-content'>
            <div className='home-page-main-content-container'>
                <h1 className='home-title'>You got the tranvel plans, we got the travel vans.</h1>
                <p className='home-subtitle'>
                    Add adventure to your life by joining the #vanlife movement.
                    Rent the perfect van to make your perfect road trip.
                </p>
                <Link to='/vans'><button className='home-button'>Find your van</button></Link>
            </div>
        </main>
        <Footer />
    </div>
  );
}
