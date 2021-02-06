import React from 'react';

import logo from '../../assets/img/normal-logo.svg';

import crown from '../../assets/img/crown.svg';
import dash from '../../assets/img/dash.svg';
import handshake from '../../assets/img/hand-shake.svg';
import mic from '../../assets/img/mic.svg';

import avatar from '../../assets/img/avatars/avatar.jpg';
// import avatar1 from '../../assets/img/avatars/avatar-1.jpg';
import avatar2 from '../../assets/img/avatars/avatar-2.jpg';
import avatar3 from '../../assets/img/avatars/avatar-3.jpg';
import avatar4 from '../../assets/img/avatars/avatar-4.jpg';
import avatar5 from '../../assets/img/avatars/avatar-5.jpg';

// import avatar from '../../assets/img/avatars/avatar.jpg';
import jed1 from '../../assets/img/avatars/jed1.svg';
import jed2 from '../../assets/img/avatars/jed2.svg';
import jed3 from '../../assets/img/avatars/jed3.svg';
import jed4 from '../../assets/img/avatars/jed4.svg';
import jed5 from '../../assets/img/avatars/jed5.svg';

import jed6 from '../../assets/img/photos/jed6.svg';
import jed7 from '../../assets/img/photos/jed7.svg';
import jed8 from '../../assets/img/photos/jed8.svg';

import lesson1 from '../../assets/img/photos/lesson1.svg';
import lesson2 from '../../assets/img/photos/lesson2.svg';
import lesson3 from '../../assets/img/photos/lesson3.svg';

import piechart from '../../assets/img/pie-chart.svg';



import '../../assets/css/app.css';

const TutorDashboard = () => {

    return (

        <div class="wrapper">

            <nav id="sidebar" class="sidebar">
                <div class="sidebar-content js-simplebar">
                    <a class="sidebar-brand" href="index.html">
                        <span class="align-middle"><img src={logo} /></span>
                    </a>

                    <ul class="sidebar-nav">
                        <li class="sidebar-header">
                            Pages
					    </li>

                        <li class="sidebar-item active">
                            <a class="sidebar-link" href="index.html">
                                <i class="align-middle" data-feather="sliders"></i> <span
                                    class="align-middle">Dashboard</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a data-target="#ui" data-toggle="collapse" class="sidebar-link collapsed">
                                <i class="align-middle" data-feather="briefcase"></i> <span
                                    class="align-middle">Courses</span>
                            </a>
                            <ul id="ui" class="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                                <li class="sidebar-item"><a class="sidebar-link" href="#">Teaching</a></li>
                                <li class="sidebar-item"><a class="sidebar-link" href="#">Collaborating</a>
                                </li>
                                <li class="sidebar-item"><a class="sidebar-link" href="#">Partaking</a></li>

                            </ul>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="#">
                                <i class="align-middle" data-feather="coffee"></i> <span class="align-middle">Students</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a data-target="#forms" data-toggle="collapse" class="sidebar-link collapsed">
                                <i class="align-middle" data-feather="check-circle"></i> <span
                                    class="align-middle">Reports</span>
                            </a>
                            <ul id="forms" class="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                                <li class="sidebar-item"><a class="sidebar-link" href="#">Results</a>
                                </li>
                                <li class="sidebar-item"><a class="sidebar-link" href="#">Statistics</a>
                                </li>
                            </ul>
                        </li>



                        <li class="sidebar-header">
                            User Management
				</li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="#">
                                <i class="align-middle" data-feather="user"></i> <span class="align-middle">Profile</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="#">
                                <i class="align-middle" data-feather="settings"></i> <span class="align-middle">Settings</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a href="#auth" data-toggle="collapse" class="sidebar-link collapsed">
                                <i class="align-middle" data-feather="users"></i> <span class="align-middle">Auth</span>
                            </a>
                            <ul id="auth" class="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                                <li class="sidebar-item"><a class="sidebar-link" href="pages-sign-in.html">Sign In</a></li>
                                <li class="sidebar-item"><a class="sidebar-link" href="pages-sign-up.html">Sign Up</a></li>
                            </ul>
                        </li>





                        <li class="sidebar-header">
                            Pricing & Addons
				</li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="#">
                                <i class="align-middle" data-feather="bar-chart-2"></i> <span class="align-middle">Rates</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="#">
                                <i class="align-middle" data-feather="map"></i> <span class="align-middle">Packages</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>

            <div class="main">

                <nav class="navbar navbar-expand navbar-light navbar-bg">
                    <a class="sidebar-toggle d-flex">
                        <i class="hamburger align-self-center"></i>
                    </a>

                    <form class="d-none d-sm-inline-block">
                        <div class="input-group input-group-navbar">
                            <input type="text" class="form-control" placeholder="Search…" aria-label="Search" />
                            <button class="btn" type="button">
                                <i class="align-middle" data-feather="search"></i>
                            </button>
                        </div>
                    </form>

                    <div class="navbar-collapse collapse">
                        <ul class="navbar-nav navbar-align">
                            <li class="nav-item dropdown">
                                <a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-toggle="dropdown">
                                    <div class="position-relative">
                                        <i class="align-middle" data-feather="bell"></i>
                                        <span class="indicator">4</span>
                                    </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
                                    aria-labelledby="alertsDropdown">
                                    <div class="dropdown-menu-header">
                                        4 New Notifications
								</div>
                                    <div class="list-group">
                                        <a href="#" class="list-group-item">
                                            <div class="row g-0 align-items-center">
                                                <div class="col-2">
                                                    <i class="text-danger" data-feather="alert-circle"></i>
                                                </div>
                                                <div class="col-10">
                                                    <div class="text-dark">Update completed</div>
                                                    <div class="text-muted small mt-1">Restart server 12 to complete the
													update.</div>
                                                    <div class="text-muted small mt-1">30m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <div class="row g-0 align-items-center">
                                                <div class="col-2">
                                                    <i class="text-warning" data-feather="bell"></i>
                                                </div>
                                                <div class="col-10">
                                                    <div class="text-dark">Lorem ipsum</div>
                                                    <div class="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate
													hendrerit et.</div>
                                                    <div class="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <div class="row g-0 align-items-center">
                                                <div class="col-2">
                                                    <i class="text-primary" data-feather="home"></i>
                                                </div>
                                                <div class="col-10">
                                                    <div class="text-dark">Login from 192.186.1.8</div>
                                                    <div class="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <div class="row g-0 align-items-center">
                                                <div class="col-2">
                                                    <i class="text-success" data-feather="user-plus"></i>
                                                </div>
                                                <div class="col-10">
                                                    <div class="text-dark">New connection</div>
                                                    <div class="text-muted small mt-1">Christina accepted your request.
												</div>
                                                    <div class="text-muted small mt-1">14h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="dropdown-menu-footer">
                                        <a href="#" class="text-muted">Show all notifications</a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-toggle="dropdown">
                                    <div class="position-relative">
                                        <i class="align-middle" data-feather="message-square"></i>
                                    </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
                                    aria-labelledby="messagesDropdown">
                                    <div class="dropdown-menu-header">
                                        <div class="position-relative">
                                            4 New Messages
									</div>
                                    </div>
                                    <div class="list-group">
                                        <a href="#" class="list-group-item">
                                            <div class="row g-0 align-items-center">
                                                <div class="col-2">
                                                    <img src={avatar5}
                                                        class="avatar img-fluid rounded-circle" alt="Vanessa Tucker" />
                                                </div>
                                                <div class="col-10 pl-2">
                                                    <div class="text-dark">Vanessa Tucker</div>
                                                    <div class="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu
													tortor.</div>
                                                    <div class="text-muted small mt-1">15m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <div class="row g-0 align-items-center">
                                                <div class="col-2">
                                                    <img src={avatar2}
                                                        class="avatar img-fluid rounded-circle" alt="William Harris" />
                                                </div>
                                                <div class="col-10 pl-2">
                                                    <div class="text-dark">William Harris</div>
                                                    <div class="text-muted small mt-1">Curabitur ligula sapien euismod
													vitae.</div>
                                                    <div class="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <div class="row g-0 align-items-center">
                                                <div class="col-2">
                                                    <img src={avatar4}
                                                        class="avatar img-fluid rounded-circle" alt="Christina Mason" />
                                                </div>
                                                <div class="col-10 pl-2">
                                                    <div class="text-dark">Christina Mason</div>
                                                    <div class="text-muted small mt-1">Pellentesque auctor neque nec urna.
												</div>
                                                    <div class="text-muted small mt-1">4h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <div class="row g-0 align-items-center">
                                                <div class="col-2">
                                                    <img src={avatar3}
                                                        class="avatar img-fluid rounded-circle" alt="Sharon Lessman" />
                                                </div>
                                                <div class="col-10 pl-2">
                                                    <div class="text-dark">Sharon Lessman</div>
                                                    <div class="text-muted small mt-1">Aenean tellus metus, bibendum sed,
													posuere ac, mattis non.</div>
                                                    <div class="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="dropdown-menu-footer">
                                        <a href="#" class="text-muted">Show all messages</a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
                                    data-toggle="dropdown">
                                    <i class="align-middle" data-feather="settings"></i>
                                </a>

                                <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                                    data-toggle="dropdown">
                                    <img src={avatar} class="avatar img-fluid rounded mr-1"
                                        alt="Charles Hall" /> <span class="text-dark">K Johns</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="pages-profile.html"><i class="align-middle mr-1"
                                        data-feather="user"></i> Profile</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="pages-settings.html"><i class="align-middle mr-1"
                                        data-feather="settings"></i> Settings & Privacy</a>
                                    <a class="dropdown-item" href="#"><i class="align-middle mr-1"
                                        data-feather="help-circle"></i> Help Center</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Log out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main class="content">
                    <div class="container-fluid p-0">

                        <div class="row mb-2 mb-xl-3">
                            <div class="col-auto d-none d-sm-block">
                                <h3><strong>Statistics</strong> Dashboard</h3>
                            </div>

                            <div class="col-auto ml-auto text-right mt-n1">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb bg-transparent p-0 mt-1 mb-0">
                                        <li class="breadcrumb-item"><a href="#">Soma1on1</a></li>
                                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xl-9 col-xxl-8 d-flex">
                                <div class="w-100">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="card yellow">
                                                <div class="card-body d-flex align-items-center">
                                                    <div class="side1 ml-2 mr-4">
                                                        <img src={crown} />
                                                    </div>
                                                    <div class="side2 mt-2 mb-2">
                                                        <h1 class="mb-2 card-value">394</h1>
                                                        <h5 class="card-title c-t mt-2">Students</h5>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="card pink">
                                                <div class="card-body d-flex align-items-center">
                                                    <div class="side1 ml-2 mr-4">
                                                        <img src={handshake} />
                                                    </div>
                                                    <div class="side2 mt-2 mb-2">
                                                        <h1 class="mb-2 card-value">44</h1>
                                                        <h5 class="card-title c-t mt-2">Courses</h5>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="card blue">
                                                <div class="card-body d-flex align-items-center">
                                                    <div class="side1 ml-2 mr-4">
                                                        <img src={mic} />
                                                    </div>
                                                    <div class="side2 mt-2 mb-2">
                                                        <h1 class="mb-2 card-value">274</h1>
                                                        <h5 class="card-title c-t mt-2">Available</h5>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">

                                        <div class="col-12 col-md-7 col-xxl-8">
                                            <div class="card flex-fill w-100">
                                                <div class="card-header">

                                                    <h5 class="card-title c-title mt-2 mb-0">Your best students</h5>
                                                </div>

                                                <div class="card-body d-flex">
                                                    <div class="student mr-5">
                                                        <img src={jed6} alt="Christina Mason"
                                                            class="img-fluid rounded mb-3" width="115" />
                                                        <h5 class="card-title mb-1">Ronald Abuka</h5>
                                                        <div class="text-muted mb-2">O Level</div>
                                                    </div>

                                                    <div class="student mr-5">
                                                        <img src={jed7} alt="Christina Mason"
                                                            class="img-fluid rounded mb-3" width="115" />
                                                        <h5 class="card-title mb-1">Rolex Nyanya</h5>
                                                        <div class="text-muted mb-2">A Level</div>
                                                    </div>

                                                    <div class="student mr-5">
                                                        <img src={jed8} alt="Christina Mason"
                                                            class="img-fluid rounded mb-3" width="115" />
                                                        <h5 class="card-title mb-1">Thomas Key</h5>
                                                        <div class="text-muted mb-2">A Level</div>
                                                    </div>

                                                    <div class="student mr-5">
                                                        <img src={jed6} alt="Christina Mason"
                                                            class="img-fluid rounded mb-3" width="115" />
                                                        <h5 class="card-title mb-1">Christina Mason</h5>
                                                        <div class="text-muted mb-2">O Level</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class=" flex-fill w-100">
                                                <div class="card-header">

                                                    <h5 class="card-title c-title mt-2 mb-0">Upcoming lessons</h5>
                                                </div>

                                                <div class="card-body d-flex">
                                                    <div class="student mr-4">
                                                        <img src={lesson1} alt="Christina Mason"
                                                            class="img-fluid rounded mb-3" width="170" height="150" />
                                                    </div>

                                                    <div class="student mr-4">
                                                        <img src={lesson2} alt="Christina Mason"
                                                            class="img-fluid rounded mb-3" width="170" height="150" />
                                                    </div>

                                                    <div class="student mr-4">
                                                        <img src={lesson3} alt="Christina Mason"
                                                            class="img-fluid rounded mb-3" width="140" height="150" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <div class="card pb-3">

                                                <div class="px-4 d-none d-md-block">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-grow-1">
                                                            <input type="text" class="form-control my-3"
                                                                placeholder="Search..." />
                                                        </div>
                                                    </div>
                                                </div>

                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="badge bg-success float-right">5</div>
                                                    <div class="d-flex align-items-start">
                                                        <img src={avatar5} class="rounded-circle mr-1"
                                                            alt="Vanessa Tucker" width="40" height="40" />
                                                        <div class="flex-grow-1 ml-3">
                                                            Vanessa Tucker
														<div class="small"><span
                                                                class="fas fa-circle chat-online"></span> Online
														</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="badge bg-success float-right">2</div>
                                                    <div class="d-flex align-items-start">
                                                        <img src={avatar2} class="rounded-circle mr-1"
                                                            alt="William Harris" width="40" height="40" />
                                                        <div class="flex-grow-1 ml-3">
                                                            William Harris
														<div class="small"><span
                                                                class="fas fa-circle chat-online"></span> Online
														</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src={avatar3} class="rounded-circle mr-1"
                                                            alt="Sharon Lessman" width="40" height="40" />
                                                        <div class="flex-grow-1 ml-3">
                                                            Sharon Lessman
														<div class="small"><span
                                                                class="fas fa-circle chat-online"></span> Online
														</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src={avatar4} class="rounded-circle mr-1"
                                                            alt="Christina Mason" width="40" height="40" />
                                                        <div class="flex-grow-1 ml-3">
                                                            Christina Mason
														<div class="small"><span
                                                                class="fas fa-circle chat-offline"></span> Offline
														</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src={avatar5} class="rounded-circle mr-1"
                                                            alt="Fiona Green" width="40" height="40" />
                                                        <div class="flex-grow-1 ml-3">
                                                            Fiona Green
														<div class="small"><span
                                                                class="fas fa-circle chat-offline"></span> Offline
														</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src={avatar4} class="rounded-circle mr-1"
                                                            alt="Christina Mason" width="40" height="40" />
                                                        <div class="flex-grow-1 ml-3">
                                                            Christina Mason
														<div class="small"><span
                                                                class="fas fa-circle chat-offline"></span> Offline
														</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src={avatar5} class="rounded-circle mr-1"
                                                            alt="Fiona Green" width="40" height="40" />
                                                        <div class="flex-grow-1 ml-3">
                                                            Fiona Green
														<div class="small"><span
                                                                class="fas fa-circle chat-offline"></span> Offline
														</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr class="d-block d-lg-none mt-1 mb-0" />
                                            </div>
                                        </div>


                                        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-8 d-flex">
                                            <div class="card">
                                                <div class="card-header pb-0">
                                                    <div class="card-actions float-right">
                                                        <div class="dropdown show">
                                                            <a href="#" data-toggle="dropdown" data-display="static">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    class="feather feather-more-horizontal align-middle">
                                                                    <circle cx="12" cy="12" r="1"></circle>
                                                                    <circle cx="19" cy="12" r="1"></circle>
                                                                    <circle cx="5" cy="12" r="1"></circle>
                                                                </svg>
                                                            </a>

                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                <a class="dropdown-item" href="#">Action</a>
                                                                <a class="dropdown-item" href="#">Another action</a>
                                                                <a class="dropdown-item" href="#">Something else here</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 class="card-title c-title mt-2 mb-0">Your student Registry</h5>
                                                </div>
                                                <div class="card-body">
                                                    <div className="table-responsive">
                                                        <table
                                                            class="table table-striped w-100 text-nowrap table-hover mg-b-0">
                                                            <thead>
                                                                <tr>
                                                                    <th></th>
                                                                    <th>NAME</th>
                                                                    <th>JOIN DATE</th>
                                                                    <th>TELEPHONE</th>
                                                                    <th>STATUS</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><img src={jed1} width="50"
                                                                        height="50" class="rounded my-n1" alt="Avatar" />
                                                                    </td>
                                                                    <td>Moses K</td>
                                                                    <td>
                                                                        31 Aug 2018 <br />
                                                                        <small className="tx-12 tx-gray-500">9:30 am</small>
                                                                    </td>
                                                                    <td>+256 767 282828</td>
                                                                    <td><span class="badge bg-success">Active</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><img src={jed2} width="50"
                                                                        height="50" class="rounded my-n1" alt="Avatar" />
                                                                    </td>
                                                                    <td>Lillian Nakite</td>
                                                                    <td>
                                                                        31 Aug 2018 <br />
                                                                        <small className="tx-12 tx-gray-500">9:30 am</small>
                                                                    </td>
                                                                    <td>+256 767 282820</td>
                                                                    <td><span class="badge bg-success">Active</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><img src={jed3} width="50"
                                                                        height="50" class="rounded my-n1" alt="Avatar" />
                                                                    </td>
                                                                    <td>Okwi D</td>
                                                                    <td>
                                                                        31 Aug 2018 <br />
                                                                        <small className="tx-12 tx-gray-500">9:30 am</small>
                                                                    </td>
                                                                    <td>+256 767 162828</td>
                                                                    <td><span class="badge bg-danger">Deleted</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><img src={jed4} width="50"
                                                                        height="50" class="rounded my-n1" alt="Avatar" />
                                                                    </td>
                                                                    <td>Nakimera S</td>
                                                                    <td>
                                                                        31 Aug 2018 <br />
                                                                        <small className="tx-12 tx-gray-500">9:30 am</small>
                                                                    </td>
                                                                    <td>+256 767 283228</td>
                                                                    <td><span class="badge bg-warning">Inactive</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><img src={jed5} width="50"
                                                                        height="50" class="rounded my-n1" alt="Avatar" />
                                                                    </td>
                                                                    <td>Kintu H</td>
                                                                    <td>
                                                                        31 Aug 2018 <br />
                                                                        <small className="tx-12 tx-gray-500">9:30 am</small>
                                                                    </td>
                                                                    <td>+256 702 284628</td>
                                                                    <td><span class="badge bg-success">Active</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><img src={avatar2} width="50"
                                                                        height="50" class="rounded my-n1" alt="Avatar" />
                                                                    </td>
                                                                    <td>Haley K</td>
                                                                    <td>
                                                                        31 Aug 2018 <br />
                                                                        <small className="tx-12 tx-gray-500">9:30 am</small>
                                                                    </td>
                                                                    <td>+256 702 284628</td>
                                                                    <td><span class="badge bg-danger">Deleted</span></td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4 d-flex">
                                            <div class="card flex-fill w-100">
                                                <div class="card-header">

                                                    <h5 class="card-title c-title mt-2 mb-0">Availability Scale</h5>
                                                </div>
                                                <div class="card-body d-flex">
                                                    <div class="align-self-center w-100">
                                                        <img src={piechart} class="w-100 my-n1" alt="Avatar" />

                                                        <table class="table mb-0">
                                                            <tbody>
                                                                <tr>
                                                                    <td>Online Students</td>
                                                                    <td class="text-right">274</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Offline Students</td>
                                                                    <td class="text-right">117</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>New Students</td>
                                                                    <td class="text-right">3</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-xl-3 col-xxl-4 d-flex order-1 order-xxl-1">
                                <div class="card flex-fill">
                                    <div class="card-header">

                                        <h5 class="card-title c-title mt-2 mb-0">Calendar</h5>
                                    </div>
                                    <div class="card-body d-flex">
                                        <div class="align-self-center w-100">
                                            <div class="chart">
                                                <div id="datetimepicker-dashboard"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </main>

                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row text-muted">
                            <div class="col-6 text-left">
                                <p class="mb-0">
                                    <a href="index.html" class="text-muted"><strong>Copyright @2020 soma1on1</strong></a>
								&copy;
							</p>
                            </div>
                            <div class="col-6 text-right">
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <a class="text-muted" href="#">Support</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="text-muted" href="#">Help Center</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="text-muted" href="#">Privacy</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="text-muted" href="#">Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default TutorDashboard;
