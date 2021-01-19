import React from 'react';
import rightsider from '../../../assets/images/splash/new-child-splash.svg'
import './banner.css';

const Banner = () => {

    return (
        <div className='banner'>


            <div className="leftsider">
                <div className="content">
                    <h1>
                        Online coaching,
                        with a twist, every
                        Subject | Courses
                    </h1>

                    <p>
                        Get your quick education and knowlege from
                        great tutors and experienced leaders, join the
                        community and get wide coverage to teach...
                    </p>

                    <div className="btn-section">
                        <button className='btn btn-bg-1'>pricing</button>
                        <button className='btn btn-bg-2'>start now</button>
                    </div>
                </div>
            </div>

            <div className='nilesafarivideo'>
                <img className='videobg' src={rightsider} alt="" />
            </div>
        </div>
    )
}

export default Banner;
