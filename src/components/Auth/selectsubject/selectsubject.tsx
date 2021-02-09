import React from 'react';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

import email from '../../../assets/icons/email.svg';
import password from '../../../assets/icons/password.svg';
import rightsider from '../../../assets/images/splash/faded-splash.svg';
import './banner.css';
import './selectsubject.css';
import './multiselect.css';


const SelectedSubjects = () => (
    <div className="selectsubject">
        <div className="nilesafarivideo">
            <img className="videobg" src={rightsider} alt="" />
        </div>

        <div className="leftsider">
            <div className="selectcontent">
                <div className="selectsubjectcontent">
                    <h3 className="select-subject-title">Complete Signing Up to soma1on1</h3>
                    <p className="select-subject-description">Your first step to quicker and closer education,</p>
                    <form className="select-subject-form">
                        <div className="resident-forms">
                            <div className="residence">
                                <p className="form-title">Residence</p>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text border-right-0" id="basic-addon1">
                                            <img src={email} alt='email' className="login-form-icon" />
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="form-control border-left-0"
                                        placeholder="Location"
                                    />
                                </div>
                            </div>
                            <div className="study">
                                <p className="form-title">Study Level</p>
                                <div className="form-group input-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control border-right-0"
                                        placeholder="Study level"
                                    />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text border-left-0" id="basic-addon1">
                                            <img src={password} alt='email' className="login-form-icon" />
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <p className="form-title mt-2">Required Subjects</p>
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
                        <DropdownMultiselect
                            className="form-control border-left-0 mb-15"
                            options={
                                [
                                    "Mathematics",
                                    "Physics",
                                    "Science",
                                    "Chemistry",
                                    "French",
                                    "France"
                                ]
                            }
                            name="subjects"
                            placeholder="Select your subjects"
                        />


                        <button className="btn btn-bg ripple btn-block login-btn mt-4">
                            <a href="/dashboard">
                                Sign In
                            </a>
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default SelectedSubjects;
