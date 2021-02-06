import React from 'react';
import rightsider from '../../assets/images/splash/login-bg.svg'
import logo from '../../assets/images/logos/normal-logo.svg';
import './banner.css';
import './login.css';



class Login extends React.Component {

    state = {
        username: '',
        password: '',
        error: false,
        info: '',
        loading: false,
        login: false
    }

    onChangeUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    onChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    showPassword = () => {
        let input = document.getElementById("password");
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    }

    render() {

        return (
            <div className='banner'>

                <div className="leftsider">
                    <div className="content">
                        <div className="more-content">
                            <img className='logo' src={logo} alt="" />

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

                <div className='nilesafarivideo'>
                    {/* <img className='videobg' src={rightsider} alt="" /> */}
                    <div className='videobg'>
                        <p className="login-card-description">Sign into your account</p>
                        {this.state.info}
                        <form method="post">
                            <div className="form-group">
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="form-control"
                                    placeholder="Username"
                                    onChange={this.onChangeUsername} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={this.onChangePassword} />
                            </div>
                            <div className="form-options-wrapper">
                                <div className="custom-control custom-checkbox login-card-check-box">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" onClick={this.showPassword} />
                                    <label className="custom-control-label" htmlFor="customCheck1">Show password</label>
                                </div>
                                <a href="#!" className="text-reset">Forgot password?</a>
                            </div>

                            <button className="btn ripple btn-block login-btn">
                                <span aria-hidden="true" class="spinner-border spinner-border-sm login-btn-spinner" role="status"></span>
                                Sign In
                            </button>

                            {/* {!login && <ActivityLoader />} */}

                            {/* <button class="btn ripple btn-primary" type="button">
                    <span aria-hidden="true" class="spinner-border spinner-border-sm" role="status"></span> <span class="sr-only">Loading...</span>
                  </button> */}
                            {/* <button class="btn ripple btn-secondary" disabled type="button">
                    <span aria-hidden="true" class="spinner-border spinner-border-sm" role="status"></span> Loading...
                  </button> */}

                        </form>
                        <p className="login-card-footer-text">Can not access your account? <a href="#!" className="text-reset">Request ADMIN here</a></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;
