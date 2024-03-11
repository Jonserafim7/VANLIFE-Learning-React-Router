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
        <div className='dashboard flex column'>  
            <section className='dashboard-overview flex column grow-1'>
                <div className='welcome flex column gap-1'>
                    <h1>Welcome</h1>
                    <div className='flex'>
                        <h2>Income last <span>30 days</span></h2>
                        <button className='marg-left-auto'>Details</button>
                    </div>
                    <h3>$ 0.00</h3>
                </div>
                <div className='reviews flex align-center'>
                    <div className='flex align-center gap-1'>
                        <h2>Review score</h2>
                        <div className='flex gap-05 align-center'>
                            <img src='/src/Assets/Icons/Star-3.png' alt='star' />
                            <h3>5.0/<span>5</span></h3>
                        </div>
                    </div>
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
        </div>
    );
}
