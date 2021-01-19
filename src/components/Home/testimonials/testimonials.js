import React from 'react';
import './testimonials.css'
import profile from '../../../assets/images/profile.png'
import nigga from '../../../assets/images/nigga.png'
import girl from '../../../assets/images/girl.png'
import commas from '../../../assets/icons/invertcommas.svg'


const Testimony = () => {
    return (
        <div className='testimonial'>
            <div className='testimonies'>
                <h2>Nile Safari Experience</h2>
                <hr />
                <div className='inside'>
                    <div className='first custom-elevation-z2'>
                        <p>This is the best place for peace and quiet... great bands that offer peace and quiet...</p>
                        <div className='profile-section'>
                            <img src={commas} alt='profile' />
                            <p className='name'>David</p>
                            <img src={nigga} alt='profile' className='profile' />
                        </div>

                    </div>

                    <div className='second custom-elevation-z2'>
                        <p>We have enjoyed our stay here very much and everything was wonderful and magical, never disappointed at all, great senary, great service, great place and very nice food. We will come back next year...</p>
                        <div className='profile-section'>
                            <img src={commas} alt='profile' />
                            <p className='name'>Cathy</p>
                            <img src={profile} alt='profile' className='profile' />
                        </div>
                    </div>

                    <div className='third custom-elevation-z2'>
                        <p>I have really enjoyed my stay here and what i can say is that this is the best value for the money in Africa, thank you Nile Safari...</p>
                        <div className='profile-section'>
                            <img src={commas} alt='profile' />
                            <p className='name'>Janice</p>
                            <img src={girl} alt='profile' className='profile' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimony
