import { useParams } from 'react-router-dom';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

function VansDetail({ vansData }) {

    const { id } = useParams();
    const van = vansData.find(van => van.id === id);
  
    if (!van) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className='vans-detail-page'>
        <Nav />
        <main className='vans-detail-main-content'>
            <section className='vans-detail-main-content-container'> 
                <h1>The van id is {id}.</h1>
                <img src={van.imageUrl} alt={van.name} />
            </section>
        </main>
        <Footer />
      </div>
    );
  }

export default VansDetail;