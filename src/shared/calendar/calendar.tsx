import React from 'react';
import calendar from '../../assets/img/calendar.svg';

const Calendar = () => (

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
);

export default Calendar;
