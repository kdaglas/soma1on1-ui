import React from 'react';

import email from '../../../assets/icons/email.svg';
import password from '../../../assets/icons/password.svg';
import profile from '../../../assets/icons/profile.svg';
import phone from '../../../assets/icons/phone.svg';
import rightsider from '../../../assets/images/splash/faded-splash.svg';


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
                        <div className="form-group input-group">
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
                            <div className="residence mr-5">
                                <p className="form-title">Specification</p>
                                <div className="d-flex">
                                    <div className="form-check mr-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Tutor
                                    </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault2"
                                            checked
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Student
                                    </label>
                                    </div>
                                </div>
                            </div>
                            <div className="study">
                                <p className="form-title">Gender</p>
                                <div className="d-flex">
                                    <div className="form-check mr-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault2"
                                            checked
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <button className="btn btn-bg ripple btn-block login-btn mt-5">
                            <a href="/select-subject">
                                {/* <span aria-hidden="true" className="spinner-border spinner-border-sm login-btn-spinner" role="status" /> */}
                                NEXT
                            </a>
                        </button>
                    </form>

                    <p className="login-card-footer-text">
                        Already have an account,
                <a href="/login" className="text-reset text-link text-white"> Login Here</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default SignUp;
