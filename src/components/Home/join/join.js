import React from 'react';
import rightsider from '../../../assets/images/teacher-class.svg'
import './join.css'


const Join = () => {

    return (
        <div className='join'>
            <div className='join-content'>
                <img className='videobg' src={rightsider} alt="" />

                <div className="content">
                    <h3>
                        Want to coach, Soma1on1<br />
                        got your covered, Join us!
                    </h3>

                    <p>
                        You are our atmost talent wherever<br />
                        you are, everywhere and anywhere,<br />
                        Join the big community and share<br />
                        your knowlegde with students...
                    </p>
                </div>

                <button className='btn btn-bg-1'>join us</button>
            </div>
        </div>
    )
}

export default Join;
