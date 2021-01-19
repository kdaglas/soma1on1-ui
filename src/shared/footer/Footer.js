import React from 'react';
import { Link } from 'react-router-dom';
// import you from '../../assets/icons/youtube.png'
// import insta from '../../assets/icons/insta.png'
// import face from '../../assets/icons/face.png'
// import associate from '../../assets/images/association.png'
// import asso from '../../assets/images/asso.png'
// import tweet from '../../assets/icons/twitter.png'
// import ioni from '../../assets/icons/email.png'
import './footer.css'
import FooterNav from '../MobileNav/footerNav';
import logo from '../../assets/images/logos/white-logo.svg';


const Footer = () => {

    return (
        <div className='footer'>
            <div className='content'>
                <div className='first'>
                    <h3>__ About Us</h3>
                    <p>Nile Safari Lodge is a family project that aspires to offer the most environmental friendly eco-lodge in Uganda while providing our guests with outstanding hospitality and adventures.</p>
                    {/* <div className='icons'>
                        <img src={you} className='footer__icon' alt='youtube' />
                        <img src={insta} className='footer__icon' alt='instagram' />
                        <img src={face} className='footer__icon' alt='facebook' />
                        <img src={tweet} className='footer__icon' alt="twitter" />
                    </div> */}
                </div>
                <div className='second'>
                    <h3>__ Quick Links</h3>
                    <FooterNav>
                        <Link to="/" onClick={()=>window.scrollTo(0, 0)}>Home</Link>
                        <Link to="/activities" onClick={()=>window.scrollTo(0, 0)}>Activities</Link>
                        <Link to="/accommodate" onClick={()=>window.scrollTo(0, 0)}>Accommodation</Link>
                        <Link to="/facilities" onClick={()=>window.scrollTo(0, 0)}>Facilities</Link>
                        <Link to="/gallery" onClick={()=>window.scrollTo(0, 0)}>Gallery</Link>
                        <Link to="/about" onClick={()=>window.scrollTo(0, 0)}>About</Link>
                        <Link to="/" onClick={()=>window.scrollTo(0, 0)}><img className="logo" src={logo} alt="logo" /></Link>
                    </FooterNav>
                </div>
                <div className='second'>
                    <h3>__ Quick Links</h3>
                    <FooterNav>
                        <Link to="/" onClick={()=>window.scrollTo(0, 0)}>Home</Link>
                        <Link to="/activities" onClick={()=>window.scrollTo(0, 0)}>Activities</Link>
                        <Link to="/accommodate" onClick={()=>window.scrollTo(0, 0)}>Accommodation</Link>
                        <Link to="/facilities" onClick={()=>window.scrollTo(0, 0)}>Facilities</Link>
                        <Link to="/gallery" onClick={()=>window.scrollTo(0, 0)}>Gallery</Link>
                        <Link to="/about" onClick={()=>window.scrollTo(0, 0)}>About</Link>
                        <Link to="/" onClick={()=>window.scrollTo(0, 0)}><img className="logo" src={logo} alt="logo" /></Link>
                    </FooterNav>
                </div>
                <div className='second'>
                    <h3>__ Quick Links</h3>
                    <FooterNav>
                        <Link to="/" onClick={()=>window.scrollTo(0, 0)}>Home</Link>
                        <Link to="/activities" onClick={()=>window.scrollTo(0, 0)}>Activities</Link>
                        <Link to="/accommodate" onClick={()=>window.scrollTo(0, 0)}>Accommodation</Link>
                        <Link to="/facilities" onClick={()=>window.scrollTo(0, 0)}>Facilities</Link>
                        <Link to="/gallery" onClick={()=>window.scrollTo(0, 0)}>Gallery</Link>
                        <Link to="/about" onClick={()=>window.scrollTo(0, 0)}>About</Link>
                        <Link to="/" onClick={()=>window.scrollTo(0, 0)}><img className="logo" src={logo} alt="logo" /></Link>
                    </FooterNav>
                </div>
                <div className='third'>
                    <h3>__ Members of:</h3>
                    {/* <div className='icons'>
                        <img src={associate} className='footer__image' alt='youtube' />
                        <img src={asso} className='footer__image' alt='instagram' />
                        <img src={face} className='footer__image' alt='facebook' />
                    </div> */}
                    <p>Nile Safari Lodge requires your feedback so help us by signing up for the newsletter</p>
                    <form action="/action_page.php">
                        <div className="input-container">
                            {/* <img src={ioni} alt='email' className="icon"></img> */}
                            <input className="input-field" type="text" placeholder="Email" name="email" />
                        </div>
                    </form>
                </div>
            </div>
            <div className='copyright'>
                <p>@2020 Nile Safari Lodge. All rights reserved <br />Designed by dagartstudios.</p>
            </div>
        </div>
    )
}

export default Footer;
