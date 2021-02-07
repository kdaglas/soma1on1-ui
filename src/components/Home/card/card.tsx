import React from 'react';
import rightsider from '../../../assets/images/kid-class.svg';
import './card.css';

const Card = () => (
  <div className="cardio">
    <div className="cardio-content">
      <img className="videobg" src={rightsider} alt="" />

      <div className="content">
        <h3>
          Here at Soma1on1, the
          <br />
          universe is your talent.
        </h3>

        <p>
          We have atmost talent everywhere
          <br />
          and anywhere, all you have to do is
          <br />
          look and you will find...
        </p>
      </div>

      <button className="btn btn-no-bg-white">about us</button>
    </div>
  </div>
);

export default Card;
