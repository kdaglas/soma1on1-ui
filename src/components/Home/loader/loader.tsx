import React from 'react';
import './loader.css';
import logo from '../../../assets/images/logos/normal-logo.svg';

const Loader = () => (
  <div className="loader">
    <span aria-hidden="true" className="spinner-border spinner-border-sm login-btn-spinner text-primary" role="status" />
    <img src={logo} alt="Loading..." />
  </div>
);

export default Loader;
