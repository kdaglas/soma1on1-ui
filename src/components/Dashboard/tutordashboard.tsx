import React from 'react';

import logo from '../../assets/img/normal-logo.svg';

import crown from '../../assets/img/crown.svg';
// import dash from '../../assets/img/dash.svg';
import handshake from '../../assets/img/hand-shake.svg';
import mic from '../../assets/img/mic.svg';

import avatar from '../../assets/img/avatars/avatar.jpg';
import avatar2 from '../../assets/img/avatars/avatar-2.jpg';
import avatar3 from '../../assets/img/avatars/avatar-3.jpg';
import avatar4 from '../../assets/img/avatars/avatar-4.jpg';
import avatar5 from '../../assets/img/avatars/avatar-5.jpg';


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
import calendar from '../../assets/img/calendar.svg';

import '../../assets/css/app.css';

const TutorDashboard = () => (

  <div className="wrapper">

    <nav id="sidebar" className="sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="/notfound">
          <span className="align-middle"><img src={logo} alt="" /></span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-header">
            Pages
          </li>

          <li className="sidebar-item active">
            <a className="sidebar-link" href="/notfound">
              <i className="align-middle" data-feather="sliders" />
              {' '}
              <span
                className="align-middle"
              >
                Dashboard
              </span>
            </a>
          </li>

          <li className="sidebar-item">
            <a data-target="#ui" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="briefcase" />
              {' '}
              <span
                className="align-middle"
              >
                Courses
              </span>
            </a>
            <ul id="ui" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
              <li className="sidebar-item"><a className="sidebar-link" href="/notfound">Teaching</a></li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/notfound">Collaborating</a>
              </li>
              <li className="sidebar-item"><a className="sidebar-link" href="/notfound">Partaking</a></li>

            </ul>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/notfound">
              <i className="align-middle" data-feather="coffee" />
              {' '}
              <span className="align-middle">Students</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a data-target="#forms" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="check-circle" />
              {' '}
              <span
                className="align-middle"
              >
                Reports
              </span>
            </a>
            <ul id="forms" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
              <li className="sidebar-item">
                <a className="sidebar-link" href="/notfound">Results</a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/notfound">Statistics</a>
              </li>
            </ul>
          </li>

          <li className="sidebar-header">
            User Management
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/notfound">
              <i className="align-middle" data-feather="user" />
              {' '}
              <span className="align-middle">Profile</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/notfound">
              <i className="align-middle" data-feather="settings" />
              {' '}
              <span className="align-middle">Settings</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a href="#auth" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="users" />
              {' '}
              <span className="align-middle">Auth</span>
            </a>
            <ul id="auth" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
              <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-in.html">Sign In</a></li>
              <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-up.html">Sign Up</a></li>
            </ul>
          </li>

          <li className="sidebar-header">
            Pricing & Addons
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/notfound">
              <i className="align-middle" data-feather="bar-chart-2" />
              {' '}
              <span className="align-middle">Rates</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/notfound">
              <i className="align-middle" data-feather="map" />
              {' '}
              <span className="align-middle">Packages</span>
            </a>
          </li>
        </ul>

      </div>
    </nav>

    <div className="main">

      <nav className="navbar navbar-expand navbar-light navbar-bg">
        <a className="sidebar-toggle d-flex">
          <i className="hamburger align-self-center" />
        </a>

        <form className="d-none d-sm-inline-block">
          <div className="input-group input-group-navbar">
            <input type="text" className="form-control" placeholder="Search…" aria-label="Search" />
            <button className="btn" type="button">
              <i className="align-middle" data-feather="search" />
            </button>
          </div>
        </form>

        <div className="navbar-collapse collapse">
          <ul className="navbar-nav navbar-align">
            <li className="nav-item dropdown">
              <a className="nav-icon dropdown-toggle" href="/notfound" id="alertsDropdown" data-toggle="dropdown">
                <div className="position-relative">
                  <i className="align-middle" data-feather="bell" />
                  <span className="indicator">4</span>
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
                aria-labelledby="alertsDropdown"
              >
                <div className="dropdown-menu-header">
                  4 New Notifications
                </div>
                <div className="list-group">
                  <a href="/notfound" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <i className="text-danger" data-feather="alert-circle" />
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Update completed</div>
                        <div className="text-muted small mt-1">
                          Restart server 12 to complete the
                          update.
                        </div>
                        <div className="text-muted small mt-1">30m ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="/notfound" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <i className="text-warning" data-feather="bell" />
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Lorem ipsum</div>
                        <div className="text-muted small mt-1">
                          Aliquam ex eros, imperdiet vulputate
                          hendrerit et.
                        </div>
                        <div className="text-muted small mt-1">2h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="/notfound" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <i className="text-primary" data-feather="home" />
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Login from 192.186.1.8</div>
                        <div className="text-muted small mt-1">5h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="/notfound" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <i className="text-success" data-feather="user-plus" />
                      </div>
                      <div className="col-10">
                        <div className="text-dark">New connection</div>
                        <div className="text-muted small mt-1">
                          Christina accepted your request.
                        </div>
                        <div className="text-muted small mt-1">14h ago</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dropdown-menu-footer">
                  <a href="/notfound" className="text-muted">Show all notifications</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-icon dropdown-toggle" href="/notfound" id="messagesDropdown" data-toggle="dropdown">
                <div className="position-relative">
                  <i className="align-middle" data-feather="message-square" />
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
                aria-labelledby="messagesDropdown"
              >
                <div className="dropdown-menu-header">
                  <div className="position-relative">
                    4 New Messages
                  </div>
                </div>
                <div className="list-group">
                  <a href="/notfound" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <img
                          src={avatar5}
                          className="avatar img-fluid rounded-circle"
                          alt="Vanessa Tucker"
                        />
                      </div>
                      <div className="col-10 pl-2">
                        <div className="text-dark">Vanessa Tucker</div>
                        <div className="text-muted small mt-1">
                          Nam pretium turpis et arcu. Duis arcu
                          tortor.
                        </div>
                        <div className="text-muted small mt-1">15m ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="/notfound" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <img
                          src={avatar2}
                          className="avatar img-fluid rounded-circle"
                          alt="William Harris"
                        />
                      </div>
                      <div className="col-10 pl-2">
                        <div className="text-dark">William Harris</div>
                        <div className="text-muted small mt-1">
                          Curabitur ligula sapien euismod
                          vitae.
                        </div>
                        <div className="text-muted small mt-1">2h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="/notfound" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <img
                          src={avatar4}
                          className="avatar img-fluid rounded-circle"
                          alt="Christina Mason"
                        />
                      </div>
                      <div className="col-10 pl-2">
                        <div className="text-dark">Christina Mason</div>
                        <div className="text-muted small mt-1">
                          Pellentesque auctor neque nec urna.
                        </div>
                        <div className="text-muted small mt-1">4h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="/notfound" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <img
                          src={avatar3}
                          className="avatar img-fluid rounded-circle"
                          alt="Sharon Lessman"
                        />
                      </div>
                      <div className="col-10 pl-2">
                        <div className="text-dark">Sharon Lessman</div>
                        <div className="text-muted small mt-1">
                          Aenean tellus metus, bibendum sed,
                          posuere ac, mattis non.
                        </div>
                        <div className="text-muted small mt-1">5h ago</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dropdown-menu-footer">
                  <a href="/notfound" className="text-muted">Show all messages</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                href="/notfound"
                data-toggle="dropdown"
              >
                <i className="align-middle" data-feather="settings" />
              </a>

              <a
                className="nav-link dropdown-toggle d-none d-sm-inline-block"
                href="/notfound"
                data-toggle="dropdown"
              >
                <img
                  src={avatar}
                  className="avatar img-fluid rounded mr-1"
                  alt="Charles Hall"
                />
                {' '}
                <span className="text-dark">K Johns</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="pages-profile.html">
                  <i
                    className="align-middle mr-1"
                    data-feather="user"
                  />
                  {' '}
                  Profile
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="pages-settings.html">
                  <i
                    className="align-middle mr-1"
                    data-feather="settings"
                  />
                  {' '}
                  Settings & Privacy
                </a>
                <a className="dropdown-item" href="/notfound">
                  <i
                    className="align-middle mr-1"
                    data-feather="help-circle"
                  />
                  {' '}
                  Help Center
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/notfound">Log out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <main className="content">
        <div className="container-fluid p-0">

          <div className="row mb-2 mb-xl-3">
            <div className="col-auto d-none d-sm-block">
              <h3>
                <strong>Statistics</strong>
                {' '}
                Dashboard
              </h3>
            </div>

            <div className="col-auto ml-auto text-right mt-n1">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0 mt-1 mb-0">
                  <li className="breadcrumb-item"><a href="/notfound">Soma1on1</a></li>
                  <li className="breadcrumb-item"><a href="/notfound">Pages</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-9 col-xxl-8 d-flex">
              <div className="w-100">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="card yellow">
                      <div className="card-body d-flex align-items-center">
                        <div className="side1 ml-2 mr-4">
                          <img src={crown} alt="" />
                        </div>
                        <div className="side2 mt-2 mb-2">
                          <h1 className="mb-2 card-value">394</h1>
                          <h5 className="card-title c-t mt-2">Students</h5>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card pink">
                      <div className="card-body d-flex align-items-center">
                        <div className="side1 ml-2 mr-4">
                          <img src={handshake} alt="" />
                        </div>
                        <div className="side2 mt-2 mb-2">
                          <h1 className="mb-2 card-value">44</h1>
                          <h5 className="card-title c-t mt-2">Courses</h5>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card blue">
                      <div className="card-body d-flex align-items-center">
                        <div className="side1 ml-2 mr-4">
                          <img src={mic} alt="" />
                        </div>
                        <div className="side2 mt-2 mb-2">
                          <h1 className="mb-2 card-value">274</h1>
                          <h5 className="card-title c-t mt-2">Available</h5>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">

                  <div className="col-12 col-md-7 col-xxl-8">
                    <div className="card flex-fill w-100">
                      <div className="card-header">

                        <h5 className="card-title c-title mt-2 mb-0">Your best students</h5>
                      </div>

                      <div className="card-body d-flex">
                        <div className="student mr-5">
                          <img
                            src={jed6}
                            alt="Christina Mason"
                            className="img-fluid rounded mb-3"
                            width="115"
                          />
                          <h5 className="card-title mb-1">Ronald Abuka</h5>
                          <div className="text-muted mb-2">O Level</div>
                        </div>

                        <div className="student mr-5">
                          <img
                            src={jed7}
                            alt="Christina Mason"
                            className="img-fluid rounded mb-3"
                            width="115"
                          />
                          <h5 className="card-title mb-1">Rolex Nyanya</h5>
                          <div className="text-muted mb-2">A Level</div>
                        </div>

                        <div className="student mr-5">
                          <img
                            src={jed8}
                            alt="Christina Mason"
                            className="img-fluid rounded mb-3"
                            width="115"
                          />
                          <h5 className="card-title mb-1">Thomas Key</h5>
                          <div className="text-muted mb-2">A Level</div>
                        </div>

                        <div className="student mr-5">
                          <img
                            src={jed6}
                            alt="Christina Mason"
                            className="img-fluid rounded mb-3"
                            width="115"
                          />
                          <h5 className="card-title mb-1">Christina Mason</h5>
                          <div className="text-muted mb-2">O Level</div>
                        </div>
                      </div>
                    </div>

                    <div className=" flex-fill w-100">
                      <div className="card-header">

                        <h5 className="card-title c-title mt-2 mb-0">Upcoming lessons</h5>
                      </div>

                      <div className="card-body d-flex">
                        <div className="student mr-4">
                          <img
                            src={lesson1}
                            alt="Christina Mason"
                            className="img-fluid rounded mb-3"
                            width="170"
                            height="150"
                          />
                        </div>

                        <div className="student mr-4">
                          <img
                            src={lesson2}
                            alt="Christina Mason"
                            className="img-fluid rounded mb-3"
                            width="170"
                            height="150"
                          />
                        </div>

                        <div className="student mr-4">
                          <img
                            src={lesson3}
                            alt="Christina Mason"
                            className="img-fluid rounded mb-3"
                            width="140"
                            height="150"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="card pb-3">

                      {/* <div className="px-4 d-none d-md-block">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <input
                              type="text"
                              className="form-control my-3"
                              placeholder="Search..."
                            />
                          </div>
                        </div>
                      </div> */}

                      <div className="card-header">

                        <h5 className="card-title c-title mt-2 mb-0">Your Chats</h5>
                      </div>

                      <a href="/notfound" className="list-group-item list-group-item-action border-0">
                        <div className="badge bg-main float-right">5</div>
                        <div className="d-flex align-items-start">
                          <img
                            src={avatar5}
                            className="rounded-circle mr-1"
                            alt="Vanessa Tucker"
                            width="40"
                            height="40"
                          />
                          <div className="flex-grow-1 ml-3">
                            Vanessa Tucker
                            <div className="small text-success">
                              {/* <span
                                className="fas fa-circle chat-online"
                              />
                              {' '} */}
                              Online
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/notfound" className="list-group-item list-group-item-action border-0">
                        <div className="badge bg-main float-right">2</div>
                        <div className="d-flex align-items-start">
                          <img
                            src={avatar2}
                            className="rounded-circle mr-1"
                            alt="William Harris"
                            width="40"
                            height="40"
                          />
                          <div className="flex-grow-1 ml-3">
                            William Harris
                            <div className="small text-success">
                              {/* <span
                                className="fas fa-circle chat-online"
                              />
                              {' '} */}
                              Online
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/notfound" className="list-group-item list-group-item-action border-0">
                        <div className="d-flex align-items-start">
                          <img
                            src={avatar3}
                            className="rounded-circle mr-1"
                            alt="Sharon Lessman"
                            width="40"
                            height="40"
                          />
                          <div className="flex-grow-1 ml-3">
                            Sharon Lessman
                            <div className="small text-success">
                              {/* <span
                                className="fas fa-circle chat-online"
                              />
                              {' '} */}
                              Online
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/notfound" className="list-group-item list-group-item-action border-0">
                        <div className="d-flex align-items-start">
                          <img
                            src={avatar4}
                            className="rounded-circle mr-1"
                            alt="Christina Mason"
                            width="40"
                            height="40"
                          />
                          <div className="flex-grow-1 ml-3">
                            Christina Mason
                            <div className="small text-danger">
                              {/* <span
                                className="fas fa-circle chat-offline"
                              />
                              {' '} */}
                              Offline
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/notfound" className="list-group-item list-group-item-action border-0">
                        <div className="d-flex align-items-start">
                          <img
                            src={avatar5}
                            className="rounded-circle mr-1"
                            alt="Fiona Green"
                            width="40"
                            height="40"
                          />
                          <div className="flex-grow-1 ml-3">
                            Fiona Green
                            <div className="small text-danger">
                              {/* <span
                                className="fas fa-circle chat-offline"
                              />
                              {' '} */}
                              Offline
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/notfound" className="list-group-item list-group-item-action border-0">
                        <div className="d-flex align-items-start">
                          <img
                            src={avatar4}
                            className="rounded-circle mr-1"
                            alt="Christina Mason"
                            width="40"
                            height="40"
                          />
                          <div className="flex-grow-1 ml-3">
                            Christina Mason
                            <div className="small text-danger">
                              {/* <span
                                className="fas fa-circle chat-offline"
                              />
                              {' '} */}
                              Offline
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/notfound" className="list-group-item list-group-item-action border-0">
                        <div className="d-flex align-items-start">
                          <img
                            src={avatar5}
                            className="rounded-circle mr-1"
                            alt="Fiona Green"
                            width="40"
                            height="40"
                          />
                          <div className="flex-grow-1 ml-3">
                            Fiona Green
                            <div className="small text-success">
                              {/* <span
                                className="fas fa-circle chat-offline"
                              />
                              {' '} */}
                              Online
                            </div>
                          </div>
                        </div>
                      </a>
                      <hr className="d-block d-lg-none mt-1 mb-0" />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-8 d-flex">
                    <div className="card">
                      <div className="card-header pb-0">
                        <div className="card-actions float-right">
                          <div className="dropdown show">
                            <a href="/notfound" data-toggle="dropdown" data-display="static">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal align-middle"
                              >
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="19" cy="12" r="1" />
                                <circle cx="5" cy="12" r="1" />
                              </svg>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="/notfound">Action</a>
                              <a className="dropdown-item" href="/notfound">Another action</a>
                              <a className="dropdown-item" href="/notfound">Something else here</a>
                            </div>
                          </div>
                        </div>
                        <h5 className="card-title c-title mt-2 mb-0">Your student Registry</h5>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table
                            className="table table-striped w-100 text-nowrap table-hover mg-b-0"
                          >
                            <thead>
                              <tr>
                                <th />
                                <th>NAME</th>
                                <th>JOIN DATE</th>
                                <th>TELEPHONE</th>
                                <th>STATUS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <img
                                    src={jed1}
                                    width="50"
                                    height="50"
                                    className="rounded my-n1"
                                    alt="Avatar"
                                  />
                                </td>
                                <td>Moses K</td>
                                <td>
                                  31 Aug 2018
                                  {' '}
                                  <br />
                                  <small className="tx-12 tx-gray-500">9:30 am</small>
                                </td>
                                <td>+256 767 282828</td>
                                <td><span className="badge bg-success">Active</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src={jed2}
                                    width="50"
                                    height="50"
                                    className="rounded my-n1"
                                    alt="Avatar"
                                  />
                                </td>
                                <td>Lillian Nakite</td>
                                <td>
                                  31 Aug 2018
                                  {' '}
                                  <br />
                                  <small className="tx-12 tx-gray-500">9:30 am</small>
                                </td>
                                <td>+256 767 282820</td>
                                <td><span className="badge bg-success">Active</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src={jed3}
                                    width="50"
                                    height="50"
                                    className="rounded my-n1"
                                    alt="Avatar"
                                  />
                                </td>
                                <td>Okwi D</td>
                                <td>
                                  31 Aug 2018
                                  {' '}
                                  <br />
                                  <small className="tx-12 tx-gray-500">9:30 am</small>
                                </td>
                                <td>+256 767 162828</td>
                                <td><span className="badge bg-danger">Deleted</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src={jed4}
                                    width="50"
                                    height="50"
                                    className="rounded my-n1"
                                    alt="Avatar"
                                  />
                                </td>
                                <td>Nakimera S</td>
                                <td>
                                  31 Aug 2018
                                  {' '}
                                  <br />
                                  <small className="tx-12 tx-gray-500">9:30 am</small>
                                </td>
                                <td>+256 767 283228</td>
                                <td><span className="badge bg-warning">Inactive</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src={jed5}
                                    width="50"
                                    height="50"
                                    className="rounded my-n1"
                                    alt="Avatar"
                                  />
                                </td>
                                <td>Kintu H</td>
                                <td>
                                  31 Aug 2018
                                  {' '}
                                  <br />
                                  <small className="tx-12 tx-gray-500">9:30 am</small>
                                </td>
                                <td>+256 702 284628</td>
                                <td><span className="badge bg-success">Active</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src={avatar2}
                                    width="50"
                                    height="50"
                                    className="rounded my-n1"
                                    alt="Avatar"
                                  />
                                </td>
                                <td>Haley K</td>
                                <td>
                                  31 Aug 2018
                                  {' '}
                                  <br />
                                  <small className="tx-12 tx-gray-500">9:30 am</small>
                                </td>
                                <td>+256 702 284628</td>
                                <td><span className="badge bg-danger">Deleted</span></td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4 d-flex">
                    <div className="card flex-fill w-100">
                      <div className="card-header">

                        <h5 className="card-title c-title mt-2 mb-0">Availability Scale</h5>
                      </div>
                      <div className="card-body d-flex">
                        <div className="align-self-center w-100">
                          <img src={piechart} className="w-100 my-n1" alt="Avatar" />

                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <td>Online Students</td>
                                <td className="text-right">274</td>
                              </tr>
                              <tr>
                                <td>Offline Students</td>
                                <td className="text-right">117</td>
                              </tr>
                              <tr>
                                <td>New Students</td>
                                <td className="text-right">3</td>
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

            <div className="col-12 col-md-6 col-xl-3 col-xxl-4 d-flex order-1 order-xxl-1">
              <div className="card flex-fill">
                <div className="card-header">

                  <h5 className="card-title c-title mt-2 mb-0">Calendar</h5>
                </div>
                <div className="card-body d-flex">
                  <div className="align-self-center w-100">
                    <div className="chart">
                      {/* <div id="datetimepicker-dashboard" /> */}
                      <img src={calendar} className="w-100" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="footer">
        <div className="container-fluid">
          <div className="row text-muted">
            <div className="col-6 text-left">
              <p className="mb-0">
                <a href="index.html" className="text-muted"><strong>Copyright @2020 soma1on1</strong></a>
                &copy;
              </p>
            </div>
            <div className="col-6 text-right">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a className="text-muted" href="/notfound">Support</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-muted" href="/notfound">Help Center</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-muted" href="/notfound">Privacy</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-muted" href="/notfound">Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default TutorDashboard;
