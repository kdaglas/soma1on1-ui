import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logos/normal-logo.svg';

class Header extends React.Component {
  state = {
    style: {
      width: '0',
      height: '100%',
      position: 'fixed',
      zIndex: 1,
      left: 0,
      top: 0,
      backgroundColor: 'rgb(226, 55, 68)',
      overflowX: 'hidden',
      transition: 'all 0.5s ease 0s',
    },
    hideNav: true,
    showNav: false,
  }

  myRef = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  openNavBar = () => {
    this.setState({
      showNav: !this.state.showNav,
    }, () => {
      this.setState({
        style: {
          width: this.state.showNav ? '100%' : '0',
          height: '100%',
          position: 'fixed',
          zIindex: 1,
          left: 0,
          top: 0,
          backgroundColor: 'rgb(226, 55, 68)',
          overflowX: 'hidden',
          transition: 'all 0.5s ease 0s',
        },
        showNav: true,
      });
    });
  }

  onClickStart = () => {
    window.location.href = "/signup"
  }

  handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 775) {
      this.setState({ hideNav: false });
    } else {
      this.setState({ hideNav: true });
    }
  }

  render() {
    const { hideNav } = this.state;
    return (
      <div className={hideNav ? 'hide header' : ' header show'}>
        <div className={hideNav ? 'cover cover-show' : 'cover cover-hide'} />
        <div className="nav">
          <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>

          <nav>
            <ul className="nav__links">
              <li><a href="/">Home</a></li>
              <li><a href="/notfound">Courses</a></li>
              <li><a href="/notfound">Platform</a></li>
              <li><a href="/notfound">Pricing</a></li>
              <li><a href="/notfound">About</a></li>
            </ul>
          </nav>

          <div className="auth-section">
            <Link to="/login"><p className="login-txt">login</p></Link>

            <button className="btn btn-sized btn-bg auth-btn" onClick={this.onClickStart}>start now</button>

            <div className="menu" onClick={this.openNavBar} onKeyDown={this.openNavBar}>
              <div className="bar half start" />
              <div className="bar" />
              <div className="bar half end" />
            </div>
          </div>
        </div>

        <div className="mobile-style">
          <button onClick={this.openNavBar} className="close">&times;</button>

          <div className="overlay__links">
            <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
            <Link to="/">Home</Link>
            <Link to="/notfound">Courses</Link>
            <Link to="/notfound">Platform</Link>
            <Link to="/notfound">Pricing</Link>
            <Link to="/notfound">About</Link>
          </div>
        </div>

        <script />
      </div>
    );
  }
}

export default Header;
