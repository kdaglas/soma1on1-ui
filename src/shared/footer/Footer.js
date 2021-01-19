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
import logo from '../../assets/images/logos/footer-logo.svg';


const Footer = () => {

    return (
        <div className='footer'>
            <div className='content'>
                <div className='first'>
                    <h5>__ About Us</h5>
                    <p>Nile Safari Lodge is a family project that aspires to offer the most environmental friendly eco-lodge in Uganda while providing our guests with outstanding hospitality and adventures.</p>
                    {/* <div className='icons'>
                        <img src={you} className='footer__icon' alt='youtube' />
                        <img src={insta} className='footer__icon' alt='instagram' />
                        <img src={face} className='footer__icon' alt='facebook' />
                        <img src={tweet} className='footer__icon' alt="twitter" />
                    </div> */}
                </div>
                <div className='second'>
                    <h5>__ Features</h5>
                    <FooterNav>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>User Management</Link>
                        <Link to="/activities" onClick={() => window.scrollTo(0, 0)}>Courses</Link>
                        <Link to="/accommodate" onClick={() => window.scrollTo(0, 0)}>Subjects</Link>
                        <Link to="/facilities" onClick={() => window.scrollTo(0, 0)}>Product Design</Link>
                    </FooterNav>
                </div>
                <div className='second'>
                    <h5>__ Company</h5>
                    <FooterNav>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>Partners</Link>
                        <Link to="/activities" onClick={() => window.scrollTo(0, 0)}>Press</Link>
                        <Link to="/accommodate" onClick={() => window.scrollTo(0, 0)}>Tutors</Link>
                        <Link to="/facilities" onClick={() => window.scrollTo(0, 0)}>Customers</Link>
                    </FooterNav>
                </div>
                <div className='second'>
                    <h5>__ Support</h5>
                    <FooterNav>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>Help and Support</Link>
                        <Link to="/activities" onClick={() => window.scrollTo(0, 0)}>Availability</Link>
                        <Link to="/accommodate" onClick={() => window.scrollTo(0, 0)}>Special Services</Link>
                        <Link to="/facilities" onClick={() => window.scrollTo(0, 0)}>Facilities</Link>
                    </FooterNav>
                </div>
                <div className='third'>
                    <h5>__ Follow us:</h5>
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
                <div className="logo-side">
                    <img src={logo} className='logo__image' alt='logo' />
                    <p>@ 2020 Soma1on1. All Rights Reserved. by DagartStudios.</p>
                </div>

                <div className="link-side">
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
