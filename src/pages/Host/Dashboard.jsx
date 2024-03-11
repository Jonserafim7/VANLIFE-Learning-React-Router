import React, {useContext} from 'react';
import { AppContext } from '../../Components/Layout'

export default function Dashboard() {

    const { vansData } = useContext(AppContext)

    const vansElements = vansData.map((van) => {
        return (
            <div key={van.id} className='van-card flex align-center gap-1 pad-2'>
                <img 
                    className='card-img' 
                    src={van.imageUrl} 
                    alt={`${van.name} + image`} 
                />
                <div className='card-info flex column'>
                    <p className='van-name'>{van.name}</p>
                    <p className='van-price'>
                        ${van.price}
                        <span className='duration'>/day</span>
                    </p>
                </div>
                <button className='edit-btn marg-left-auto'>Edit</button>
            </div>
        )
    })

    return (
    <main className='flex column'>  
        <section className='dashboard-overview flex column grow-1'>
            <div className='welcome flex column'>
                <h1>Welcome</h1>
                <div className='flex'>
                    <p>Income last <span>30 days</span></p>
                    <button className='marg-left-auto'>Details</button>
                </div>
                <h2>$ 0.00</h2>
            </div>
            <div className='review-score flex align-center'>
                <h3>Review score</h3>
                <p>5.0/5</p>
                <button className='marg-left-auto'>Details</button>
            </div>
        </section>

        <section className='listed-vans flex column grow-1'>
            <div className='listed-vans-header flex'>
                <h2>Your listed vans</h2>
                <button className='marg-left-auto'>view all</button>
            </div>
            <div className='vans-list flex column gap-1'>
                {vansElements}
            </div>
        </section>
    </main>
    );
}
