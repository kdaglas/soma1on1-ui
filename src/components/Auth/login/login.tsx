import React from 'react';

import email from '../../../assets/icons/email.svg';
import password from '../../../assets/icons/password.svg';
import logo from '../../../assets/images/logos/normal-logo.svg';
import './login.css';

class Login extends React.Component {
  state = {
    info: '',
  }

  onChangeUsername = (event: any) => {
    this.setState({ username: event.target.value });
  }

  onChangePassword = (event: any) => {
    this.setState({ password: event.target.value });
  }

  // showPassword = () => {
  //   const input = document.getElementById('password');
  //   if (input.type === 'password') {
  //     input.type = 'text';
  //   } else {
  //     input.type = 'password';
  //   }
  // }

  render() {
    return (
      <div className="auth-log">
        <div className="login-box">
          <div className="leftsider">
            <div className="content">
              <div className="more-content">
                <img className="logo" src={logo} alt="" />

                <h1>
                  Your one great
                  ticket to a Quick
                  Education
                </h1>

                <p>
                  Connecting the world
                  world to learn
                </p>
              </div>
            </div>
          </div>

          <div className="nilesafarivideo">
            <div className="videobg">
              <h3 className="login-card-description">Login to soma1on1</h3>
              {this.state.info}
              <form className="login-form">
                <p className="form-title">Account</p>

                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text border-right-0" id="basic-addon1">
                      <img src={email} alt="email" className="login-form-icon" />
                    </span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control border-left-0"
                    placeholder="Email Address"
                    onChange={this.onChangeUsername}
                  />
                </div>

                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text border-right-0" id="basic-addon1">
                      <img src={password} alt="email" className="login-form-icon" />
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control border-left-0"
                    placeholder="Password"
                    onChange={this.onChangePassword}
                  />
                </div>

                <div className="form-options-wrapper">
                  <div className="login-card-check-box">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Show password</label>
                  </div>
                  <a href="/notfound" className="text-reset text-link">Forgot password?</a>
                </div>

                <button className="btn btn-sized btn-bg ripple btn-block login-btn">
                  <a href="/dashboard">
                    Sign In
                  </a>
                </button>

              </form>

              <p className="login-card-footer-text">
                Don’t have an account,
                <a href="/signup" className="text-reset text-link text-white"> Sign Up Here</a>
              </p>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Login;
