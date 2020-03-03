import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContextProvider";
import Datepicker from "../../Shared/FormComponents/DatePicker";
import TextBox from "../../Shared/FormComponents/TextBox";
import { LEAVE_REQUEST } from "./leaveRequestConst";
import { dateConverter } from "../../../utils/dateConverter";

const LeaveRequest = props => {
  console.log("Leave Request Page");

  const { userObject } = useContext(AuthContext);

  const [inpValue, setInpValue] = useState(LEAVE_REQUEST);

  const {
    startDate,
    endDate,
    reportDate,
    contactInVacation,
    mobileNoInVacation,
    emailInVacation
  } = inpValue;

  const handleChange = e => {
    const { name, type, checked, value } = e.target;
    const newState = {
      ...inpValue,
      [name]: value
    };

    setInpValue(newState);
  };

  //   const updateDate = (startDate, date) => {
  //     // const { name, type, checked, value } = e.target;
  //     console.log('date: ', startDate, date);
  //     const newState = {
  //       ...inpValue,
  //       startDate: date,
  //     };

  //     setInpValue(newState);

  //     console.log('newState: ', newState);
  //   };

  const updateDate = (name, date) => {
    const updatedDate = dateConverter(date);
    console.log("name and date", name, date);
    const newState = {
      ...inpValue,
      [name]: updatedDate
    };

    setInpValue(newState);
  };

  const handleSelect = e => {
    console.log("EVENT", e);
  };
  console.log("inp val", inpValue);

  // useEffect(() => {
  //     setInpValue(LEAVE_REQUEST);
  // }, []);

  return (
    <>
      <h1>Leave Request</h1>
      <div className="card">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <label className="label-block">ID #</label>
            <p>{userObject.userID}</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <label className="label-block">Employee Name</label>
            <p>{userObject.EmployeeName}</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <label className="label-block">Hiring Date</label>
            <p>{userObject.hiringDate}</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <label className="label-block">Job Title & Department</label>
            <p>
              {userObject.jobTitle} - {userObject.dept}
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <label className="label-block">Shift Group</label>
            <p>{userObject.shiftGroup}</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <label className="label-block">Cost Center</label>
            <p>{userObject.costCenter}</p>
          </div>
        </div>
      </div>

      <div className="request-container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <label className="label-block">Starting date</label>
            <Datepicker
              id="stateDate"
              name="startDate"
              value={startDate}
              handleChange={date => updateDate("startDate", date)}
              dateFormat="yyyy/MM/dd"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <label className="label-block">Ending date</label>
            <Datepicker
              id="endDate"
              name="endDate"
              value={endDate}
              handleChange={date => updateDate("endDate", date)}
              handleSelect={handleSelect}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <label className="label-block">Reporting date</label>
            <Datepicker
              id="reportDate"
              name="reportDate"
              value={reportDate}
              handleChange={date => updateDate("reportDate", date)}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <label className="label-block">Contact during vacation</label>
            <TextBox
              id="contactInVacation"
              name="contactInVacation"
              value={contactInVacation}
              maxlength="100"
              placeholder="Enter Contact name during vacation"
              handleChange={handleChange}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <label className="label-block">Mobile #</label>
            <TextBox
              id="mobileNoInVacation"
              name="mobileNoInVacation"
              value={mobileNoInVacation}
              placeholder="Enter mobile number during vacation"
              handleChange={handleChange}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <label className="label-block">Email address</label>
            <TextBox
              id="emailInVacation"
              name="emailInVacation"
              value={emailInVacation}
              placeholder="Enter email address during vacation"
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveRequest;
