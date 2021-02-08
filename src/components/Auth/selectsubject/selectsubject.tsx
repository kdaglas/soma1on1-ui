import React from 'react';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
// import Multiselect from "react-bootstrap-multiselect";
// import { Multiselect } from 'multiselect-react-dropdown';

import email from '../../../assets/icons/email.svg';
import password from '../../../assets/icons/password.svg';
// import logo from '../../../assets/images/logos/normal-logo.svg';
import rightsider from '../../../assets/images/splash/faded-splash.svg';
import './banner.css';
import './selectsubject.css';
import './multiselect.css';

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

const SelectSubjects = () => (
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
                                    {/* <label htmlFor="username" className="sr-only">Email Address</label> */}
                                    {/* <img src={email} alt='email' className="icon" /> */}
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
                                    {/* <label htmlFor="password" className="sr-only">Password</label> */}
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
                        {/* <Multiselect
                            options={[
                                "Mathematics",
                                "Physics",
                                "Science",
                                "Chemistry",
                                "French",
                                "France"
                            ]} // Options to display in the dropdown
                            // style={style}
                            // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                            // onSelect={this.onSelect} // Function will trigger on select event
                            // onRemove={this.onRemove} // Function will trigger on remove event
                            displayValue="Subjects" // Property name to display in the dropdown options
                        /> */}


                        <button className="btn btn-bg ripple btn-block login-btn mt-4">
                            <a href="/dashboard">
                                {/* <span aria-hidden="true" className="spinner-border spinner-border-sm login-btn-spinner" role="status" /> */}
                    Sign In
                    </a>
                        </button>

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

export default SelectSubjects;
