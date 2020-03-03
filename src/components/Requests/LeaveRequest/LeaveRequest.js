import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthContextProvider';
import Datepicker from '../../Shared/FormComponents/Datepicker';
import TextBox from '../../Shared/FormComponents/TextBox';
import SelectBox from '../../Shared/FormComponents/SelectBox';
import RadioButton from '../../Shared/FormComponents/RadioButton';
import { LEAVE_REQUEST, LEAVE_TYPE, EMPLOYEE_DETAILS } from './leaveRequestConst';

const LeaveRequest = props => {
    console.log('Leave Request Page');

    const { userObject } = useContext(AuthContext);

    const [inpValue, setInpValue] = useState(LEAVE_REQUEST);

    const { startDate, endDate, reportDate, contactInVacation, mobileNoInVacation, emailInVacation, leaveType } = inpValue;

    const handleChange = e => {
        const { name, type, checked, value } = e.target;
        const newState = {
            ...inpValue,
            [name]: value
        }

        setInpValue(newState);

        console.log('newState: ', newState);
    }

    const updateDate = (startDate, date) => {
        // const { name, type, checked, value } = e.target;
        console.log('date: ', startDate, date);
        const newState = {
            ...inpValue,
            startDate: date
        }

        setInpValue(newState);

        console.log('newState: ', newState);
    }

    const handleLeaveType = e => {
        e.preventDefault();
        const { name, value } = e.target;

        console.log(e.nativeEvent.target[value].text, name, value);

        const newState = {
            ...inpValue,
            leaveType: [{
                id: value,
                desc: e.nativeEvent.target[value].text
            }]
        }

        setInpValue(newState);

        console.log('newState: ', newState);
    }

    const empDetails = EMPLOYEE_DETAILS.employee[0];
    const spouseDetails = EMPLOYEE_DETAILS.spouse[0];

    console.log('empDetails: ', empDetails);

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
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block">Leave type</label>
                        <SelectBox id="leaveType" name="leaveType" handleChange={handleLeaveType} value={leaveType.leaveID} options={LEAVE_TYPE} placeholder="Select Leave Type" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block">Starting date</label>
                        <Datepicker id="stateDate" name="startDate" value={startDate} handleChange={(startDate) => updateDate(startDate)} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block">Ending date</label>
                        <Datepicker id="endDate" name="endDate" value={endDate} handleChange={handleChange} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
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
                <h3>Employee Details</h3>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="label-block">Employee name</label>
                        <TextBox id="empName" name="empName" value={empDetails.name} disabled />
                    </div>
                    <div className="col-12 col-md-2">
                        <label className="label-block">Age</label>
                        <TextBox id="empAge" name="empAge" value={empDetails.age} disabled />
                    </div>
                    <div className="col-12 col-md-2">
                        <label className="label-block">Gender</label>
                        <RadioButton id="empGender" name="empGender" value={empDetails.gender} checked={true} disabled />
                        <RadioButton id="empGender" name="empGender" value="Female" disabled />
                    </div>
                </div>
            </div>

        </>
    );
}

export default LeaveRequest;