import React from 'react';
import './header.css';
import logo from '../../assets/images/logos/normal-logo.svg';
// import CSS from 'csstype'
import MobileNav from '../MobileNav/mobileNav'
import { Link } from 'react-router-dom';


const style = {
    width: '0',
    height: '100%',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    backgroundColor: 'rgb(226, 55, 68)',
    overflowX: 'hidden',
    transition: "all 0.5s ease 0s",
}

class Header extends React.Component {

    showNav = false;
    state = {
        style,
        hideNav: true
    }
    myRef = React.createRef();

    openNavBar = () => {
        this.showNav = !this.showNav;
        this.setState({
            style: {
                width: this.showNav ? '100%' : '0',
                height: '100%',
                position: 'fixed',
                zIindex: 1,
                left: 0,
                top: 0,
                backgroundColor: 'rgb(226, 55, 68)',
                overflowX: 'hidden',
                transition: "all 0.5s ease 0s",
            },
            showNav: true
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let scrollPosition = window.pageYOffset;
        if (scrollPosition > 775) {
            this.setState({ hideNav: false });
        } else {
            this.setState({ hideNav: true });
        }
    }

    render() {
        return (
            <div className={this.state.hideNav ? 'hide header' : ' header show'}>
                <div className={this.state.hideNav ? 'cover cover-show' : 'cover cover-hide'}></div>
                <div className='nav'>
                    <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>

                    <nav>
                        <ul className="nav__links">
                            <li><a href="home.html">Home</a></li>
                            <li><a href="courses.html">Courses</a></li>
                            <li><a href="platform.html">Platform</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="about.html">About</a></li>
                        </ul>
                    </nav>

                    <div className="auth-section">
                        {/* <Link to="/">login</Link> */}

                        <button className='btn'>start now</button>

                        <div className='menu' onClick={this.openNavBar}>
                            <div className='bar half start'></div>
                            <div className='bar'></div>
                            <div className='bar half end'></div>
                        </div>
                    </div>
                </div>

                <MobileNav style={this.state.style}>
                    <button onClick={this.openNavBar} className='close'>&times;</button>

                    <div className="overlay__links">
                        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                        <Link to="/">Home</Link>
                        <Link to="/activities">Courses</Link>
                        <Link to="/accommodate">Platform</Link> 
                        <Link to="/gallery">Pricing</Link>
                        <Link to="/about">About</Link>
                    </div>
                </MobileNav>

                <script></script>
            </div>
        )
    }
}

export default Header;
