import React from 'react';
// import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
// import Multiselect from "react-bootstrap-multiselect";
// import { Multiselect } from 'multiselect-react-dropdown';

import email from '../../../assets/icons/email.svg';
import password from '../../../assets/icons/password.svg';
import profile from '../../../assets/icons/profile.svg';
import phone from '../../../assets/icons/phone.svg';
// import logo from '../../../assets/images/logos/normal-logo.svg';
import rightsider from '../../../assets/images/splash/faded-splash.svg';
// import './banner.css';
// import './selectsubject.css';
// import './multiselect.css';

// const style= {
//     chips: { background: "red" },
//     searchBox: {
//         "border": "none",
//         "border-bottom": "1px solid blue",
//         "border-radius": "0px"
//     },
//     width: '20px',
// }

// const style: CSS.Properties = {
//     width: '0',
//     height: '100%',
//     position: 'fixed',
//     zIndex: 1,
//     left: 0,
//     top: 0,
//     backgroundColor: 'rgb(226, 55, 68)',
//     overflowX: 'hidden',
//     transition: 'all 0.5s ease 0s',
//   };

const SignUp = () => (
    <div className="selectsubject">
        <div className="nilesafarivideo">
            <img className="videobg" src={rightsider} alt="" />
        </div>

        <div className="leftsider">
            <div className="selectcontent">
                <div className="selectsubjectcontent">
                    <h3 className="select-subject-title">Sign Up to soma1on1 </h3>
                    <p className="select-subject-description">Your first step to quicker and closer education,</p>
                    <form className="select-subject-form">
                        <div className="resident-forms">
                            <div className="residence">
                                <p className="form-title">Account</p>
                                <div className="form-group input-group">
                                    {/* <label htmlFor="username" className="sr-only">Email Address</label> */}
                                    {/* <img src={email} alt='email' className="icon" /> */}
                                    <div className="input-group-prepend">
                                        <span className="input-group-text border-right-0" id="basic-addon1">
                                            <img src={profile} alt='email' className="login-form-icon" />
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="form-control border-left-0"
                                        placeholder="First Name"
                                    />
                                </div>
                            </div>
                            <div className="study">
                                <p className="form-title">-</p>
                                <div className="form-group input-group">
                                    {/* <label htmlFor="password" className="sr-only">Password</label> */}
                                    <div className="input-group-prepend">
                                        <span className="input-group-text border-left-0" id="basic-addon1">
                                            <img src={profile} alt='email' className="login-form-icon" />
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control border-right-0"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <p className="form-title mt-2">Required Subjects</p> */}
                        <div className="form-group input-group">
                            {/* <label htmlFor="password" className="sr-only">Password</label> */}
                            <div className="input-group-prepend">
                                <span className="input-group-text border-right-0" id="basic-addon1">
                                    <img src={email} alt='email' className="login-form-icon" />
                                </span>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control border-left-0"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="form-group input-group">
                            {/* <label htmlFor="password" className="sr-only">Password</label> */}
                            <div className="input-group-prepend">
                                <span className="input-group-text border-right-0" id="basic-addon1">
                                    <img src={password} alt='email' className="login-form-icon" />
                                </span>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control border-left-0"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group input-group">
                            {/* <label htmlFor="password" className="sr-only">Password</label> */}
                            <div className="input-group-prepend">
                                <span className="input-group-text border-right-0" id="basic-addon1">
                                    <img src={phone} alt='email' className="login-form-icon" />
                                </span>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control border-left-0"
                                placeholder="Phone Number"
                            />
                        </div>

                        <div className="resident-forms">
                            <div className="residence">
                                <p className="form-title">Specification</p>
                                <div className="form-group input-group">
                                    {/* <label htmlFor="username" className="sr-only">Email Address</label> */}
                                    {/* <img src={email} alt='email' className="icon" /> */}
                                    <div className="input-group-prepend">
                                        <span className="input-group-text border-right-0" id="basic-addon1">
                                            <img src={profile} alt='email' className="login-form-icon" />
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="form-control border-left-0"
                                        placeholder="First Name"
                                    />
                                </div>
                            </div>
                            <div className="study">
                                <p className="form-title">Gender</p>
                                <div className="form-group input-group">
                                    {/* <label htmlFor="password" className="sr-only">Password</label> */}
                                    <div className="input-group-prepend">
                                        <span className="input-group-text border-left-0" id="basic-addon1">
                                            <img src={profile} alt='email' className="login-form-icon" />
                                        </span>
                                    </div>
                                    <input
                                        type="checkbox"
                                        name="password"
                                        id="password"
                                        className="form-control border-right-0"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                        </div>


                        <a href="/select-subjects">
                            <button className="btn btn-bg ripple btn-block login-btn mt-4">

                                {/* <span aria-hidden="true" className="spinner-border spinner-border-sm login-btn-spinner" role="status" /> */}
                                Sign In
                            </button>
                        </a>

                    </form>

                    {/* <p className="login-card-footer-text">
                        Don’t have an account,
                <a href="/notfound" className="text-reset text-link text-white"> Sign Up Here</a>
                    </p> */}
                </div>
            </div>
        </div>
    </div>
);

export default SignUp;
