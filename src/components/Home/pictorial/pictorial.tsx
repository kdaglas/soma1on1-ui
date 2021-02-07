import React from 'react';
// import child from '../../../assets/images/pictorial/child-class.svg';
// import splash from '../../../assets/images/pictorial/class-class.svg';
// import teacher from '../../../assets/images/pictorial/teacher-class.svg';
import picts from '../../../assets/images/pictorial/3-class.svg';
import './pictorial.css';

const Pictorial = () => (
  <div className="pictorial">
    <div className="pictorial-content">
      <div className="content">
        <h2>
          Build your knowledge
          <br />
          from your experience
          <br />
          and thrive...
        </h2>

        <p>
          Soma1on1 is optimised to help you add a
          <br />
          classes as easy as a button. Sign up now
          <br />
          and integrate with many more learners
          <br />
          and earn success on the application.
        </p>

        <button className="btn btn-bg">start now</button>
      </div>

      <div className="picbg">
        {/* <img className='' src={teacher} alt="" />
                    <img className='' src={splash} alt="" />
                    <img className='' src={child} alt="" /> */}
        <img className="" src={picts} alt="" />
      </div>
    </div>
  </div>
);

export default Pictorial;
