import React, {useContext} from 'react';
import { AppContext } from '../../Components/Layout'

export default function Dashboard() {

    const { vansData } = useContext(AppContext)

    const vansElements = vansData.map((van) => {
        return (
            <div key={van.id} className=''>
                <img 
                    className='' 
                    src={van.imageUrl} 
                    alt={`${van.name} + image`} 
                />
                <div className=''>
                    <p className=''>{van.name}</p>
                    <p className=''>
                        ${van.price}
                        <span className=''>/day</span>
                    </p>
                </div>
                <button className=''>Edit</button>
            </div>
        )
    })

    return (
        <div className=''>  
            <section className=''>
                <div className=''>
                    <h1>Welcome</h1>
                    <div className=''>
                        <h2>Income last <span>30 days</span></h2>
                        <button className=''>Details</button>
                    </div>
                    <h3>$ 0.00</h3>
                </div>
                <div className=''>
                    <div className=''>
                        <h2>Review score</h2>
                        <div className=''>
                            <img src='' alt='star' />
                            <h3>5.0/<span>5</span></h3>
                        </div>
                    </div>
                    <button className=''>Details</button>
                </div>
            </section>

            <section className=''>
                <div className=''>
                    <h2>Your listed vans</h2>
                    <button className=''>view all</button>
                </div>
                <div className=''>
                    {vansElements}
                </div>
            </section>
        </div>
    );
}
