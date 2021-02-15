import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import FooterNav from '../MobileNav/footerNav';
import logo from '../../assets/images/logos/footer-logo.svg';

const Footer = () => (
  <div className="footer">
    <div className="content">
      <div className="first">
        <h5>__ About Us</h5>
        <p>
          Soma1on1 is a project that aspires
          to offer the most friendly education
          while at home in Uganda while providing
          our tutors and students with outstanding
          services.
        </p>
      </div>
      <div className="second">
        <h5>__ Features</h5>
        <FooterNav>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>User Management</Link>
          <Link to="/notfound" onClick={() => window.scrollTo(0, 0)}>Courses</Link>
          <Link to="/notfound" onClick={() => window.scrollTo(0, 0)}>Subjects</Link>
          <Link to="/notfound" onClick={() => window.scrollTo(0, 0)}>Product Design</Link>
        </FooterNav>
      </div>
      <div className="second">
        <h5>__ Company</h5>
        <FooterNav>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>Partners</Link>
          <Link to="/notfound" onClick={() => window.scrollTo(0, 0)}>Press</Link>
          <Link to="/notfound" onClick={() => window.scrollTo(0, 0)}>Tutors</Link>
          <Link to="/notfound" onClick={() => window.scrollTo(0, 0)}>Customers</Link>
        </FooterNav>
      </div>
      <div className="second">
        <h5>__ Support</h5>
        <FooterNav>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>Help and Support</Link>
          <Link to="/notfound" onClick={() => window.scrollTo(0, 0)}>Availability</Link>
          <Link to="/notfound" onClick={() => window.scrollTo(0, 0)}>Special Services</Link>
          <Link to="/notfound" onClick={() => window.scrollTo(0, 0)}>Facilities</Link>
        </FooterNav>
      </div>
      <div className="third">
        <h5>__ Follow us:</h5>
        <p>Soma1on1 requires your feedback so help us by signing up for the newsletter</p>
        <form className="footer-form" action="/action_page.php">
          <div className="input-container">
            <input className="input-field" type="text" placeholder="Email" name="email" />
          </div>
        </form>
      </div>
    </div>
    <div className="copyright">
      <div className="logo-side">
        <img src={logo} className="logo__image" alt="logo" />
        <p>@ 2020 Soma1on1. All Rights Reserved. by DagartStudios.</p>
      </div>

      <div className="link-side">
        <p>Privacy Policy</p>
        <p>Cookies</p>
      </div>
    </div>
  </div>
);

export default Footer;
