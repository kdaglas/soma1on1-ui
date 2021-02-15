import React from 'react';
import rightsider from '../../../assets/images/splash/new-child-splash.svg';
import './banner.css';

function Banner() {

  const onClickStart = () => {
    window.location.href = "/signup"
  }

  // onClickRecord = (selectedNotificationId, notificationInfo, app_name) => {
  //   this.setState({
  //       selectedNotificationId: selectedNotificationId,
  //       notificationInfo: notificationInfo
  //   }, async () => {
  //       await this.readNotification(selectedNotificationId)
  //       if (app_name == "CLAMPING") {
  //           window.location.href = "/clamping/clamp_transactions"
  //       } else if (app_name == "PAYMENT_DUE") {
  //           window.location.href = "/contraventions/payment_due"
  //       } else if (app_name == "WRONG_PARKING") {
  //           window.location.href = "/contraventions/wrong_parking"
  //       } else if (app_name == "TOWING") {
  //           window.location.href = "/towing/tow_transactions"
  //       }

  return (
    <div className="banner">

      <div className="leftsider">
        <div className="content">
          <div className="more-content">
            <h1>
              Online coaching,
              with a twist, every
              Subject | Courses
          </h1>

            <p>
              Get your quick education and knowlege from
              great tutors and experienced leaders, join the
              community and get wide coverage to teach...
          </p>

            <div className="btn-section">
              <button className="btn btn-sized btn-bg">pricing</button>
              <button className="btn btn-sized btn-no-bg" onClick={onClickStart}>start now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="nilesafarivideo">
        <img className="videobg" src={rightsider} alt="" />
      </div>
    </div>
  )
};

export default Banner;
