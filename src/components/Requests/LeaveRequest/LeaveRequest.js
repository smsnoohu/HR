import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthContextProvider';
import Datepicker from '../../Shared/FormComponents/DatePicker';
import TextBox from '../../Shared/FormComponents/TextBox';
import { LEAVE_REQUEST } from './leaveRequestConst';

const LeaveRequest = props => {
    console.log('Leave Request Page');

    const { userObject } = useContext(AuthContext);

    const { startDate, endDate, reportDate, contactInVacation, mobileNoInVacation, emailInVacation } = LEAVE_REQUEST;

    console.log('LEAVE_REQUEST: ', LEAVE_REQUEST);

    const [ inpValue, setInpValue ] = useState(LEAVE_REQUEST);

    console.log('inpValue: ', inpValue);

    const handleChange = e => {
        const { name, type, checked, value } = e.target;
        console.log(name, value);
        const newState = {
            ...inpValue,
            [name]: value
        }

        setInpValue(newState);
    }

    useEffect(() => {
        setInpValue(LEAVE_REQUEST);
    }, []);

    return(
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
                        <p>{userObject.jobTitle} - {userObject.dept}</p>
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
                        <Datepicker id="stateDate" name="startDate" value={startDate} handleChange={handleChange} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="label-block">Ending date</label>
                        <Datepicker id="endDate" name="endDate" value={endDate} handleChange={handleChange} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="label-block">Reporting date</label>
                        <Datepicker id="reportDate" name="reportDate" value={reportDate} handleChange={handleChange} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="label-block">Contact during vacation</label>
                        <TextBox id="contactInVacation" name="contactInVacation" value={contactInVacation} maxlength="100" placeholder="Enter Contact name during vacation" handleChange={handleChange} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="label-block">Mobile #</label>
                        <TextBox id="mobileNoInVacation" name="mobileNoInVacation" value={mobileNoInVacation} placeholder="Enter mobile number during vacation" handleChange={handleChange} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="label-block">Email address</label>
                        <TextBox id="emailInVacation" name="emailInVacation" value={emailInVacation} placeholder="Enter email address during vacation" handleChange={handleChange} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default LeaveRequest;