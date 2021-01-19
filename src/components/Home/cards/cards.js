import React from 'react';
import rightsider from '../../../assets/images/kid-class.svg'
import './cards.css'


const Cards = () => {

    return (
        <div className='card'>
            <div className='card-content'>
                <img className='videobg' src={rightsider} alt="" />

                <div className="content">
                    <h1>
                        Here at Soma1on1, the<br />
                        universe is your talent.
                    </h1>

                    <p>
                        We have atmost talent everywhere<br />
                        and anywhere, all you have to do is<br />
                        look and you will find...
                    </p>
                </div>

                <button className='btn btn-bg-1'>about us</button>
            </div>
        </div>
    )
}

export default Cards;
