import React from 'react';

import logo from '../../assets/images/logos/normal-logo.svg';

const SideNav = () => (

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
          <a className="sidebar-link" href="/dashboard">
            <i className="align-middle fa fa-sliders" data-feather="sliders" />
            {' '}
            <span
              className="align-middle"
            >
              Dashboard
            </span>
          </a>
        </li>

        <li className="sidebar-item">
          <a href="/notfound" data-target="#ui" data-toggle="collapse" className="sidebar-link collapsed">
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
          <a href="/notfound" data-target="#forms" data-toggle="collapse" className="sidebar-link collapsed">
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
          <a className="sidebar-link" href="/profile">
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
            <i className="align-middle bar-chart-2" data-feather="bar-chart-2" />
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
);

export default SideNav;
