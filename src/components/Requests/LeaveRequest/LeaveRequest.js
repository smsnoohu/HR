import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthContextProvider';
import Datepicker from '../../Shared/FormComponents/DatePicker/Datepicker';
import DateRange from '../../Shared/FormComponents/DatePicker/DateRange';
import { DateFormetter } from '../../../utils/DateFormetter';
import TextBox from '../../Shared/FormComponents/TextBox';
import SelectBox from '../../Shared/FormComponents/SelectBox';
import RadioButton from '../../Shared/FormComponents/RadioButton';
import CheckBox from '../../Shared/FormComponents/CheckBox';
import Button from '../../Shared/FormComponents/Button';
import { LEAVE_REQUEST, LEAVE_TYPE, EMPLOYEE_DETAILS } from './leaveRequestConst';

const LeaveRequest = props => {
    console.log('Leave Request Page');

    const { userObject } = useContext(AuthContext);

    const [inpValue, setInpValue] = useState(LEAVE_REQUEST);

    const [empValue, setEmpValue] = useState(EMPLOYEE_DETAILS.employee);
    const [deptValue, setDeptValue] = useState(EMPLOYEE_DETAILS.depedent);

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

    const updateDate = (name, date) => {
        const formettedDate = DateFormetter(date);
        const newState = {
            ...inpValue,
            [name]: formettedDate
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

    const empDetails = empValue[0];
    // const dependentDetails = deptValue;

    console.log('deptValue: ', deptValue);

    const updateDependent = (e, index) => {
        console.log('index:', index);
        e.preventDefault();
        const { name, value } = e.target;

        // console.log(e.nativeEvent.target[value].text, name, value);

        let newArr = [...deptValue];

        // console.log(newArr);
        // newArr[index][name] = value;

        const newState = [
            ...deptValue,
            {
            0: {
                [name]: value
            }}
            
        ];

        // const updatedState = {
        //     ...EMPLOYEE_DETAILS.
        // }

        console.log('newState: ', newState);

        setDeptValue(newState);
    }

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
                        <Datepicker id="stateDate" name="startDate" value={startDate} handleChange={(date) => updateDate('startDate', date)} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block">Ending date</label>
                        <Datepicker id="endDate" name="endDate" value={endDate} handleChange={(date) => updateDate('endDate', date)} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block">Reporting date</label>
                        <Datepicker id="reportDate" name="reportDate" value={reportDate} handleChange={(date) => updateDate('reportDate', date)} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block">Ticker status</label>
                        <CheckBox id="ticketCompany" name="ticketCompany" label="Company" />
                        <CheckBox id="ticketEmployee" name="ticketEmployee" label="Employee" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block">Contact during vacation</label>
                        <TextBox id="contactInVacation" name="contactInVacation" value={contactInVacation} maxlength="100" placeholder="Enter Contact name during vacation" handleChange={handleChange} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block">Mobile #</label>
                        <TextBox id="mobileNoInVacation" name="mobileNoInVacation" value={mobileNoInVacation} placeholder="Enter mobile number during vacation" handleChange={handleChange} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
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
                    <div className="col-12 col-md-4">
                        <label className="label-block">Date of ticket</label>
                        <DateRange id="dateRange" name="dateRange" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block">Ticket clasification</label>
                        <RadioButton id="empOneway" name="empOneway" value="One way" />
                        <RadioButton id="empRound" name="empRound" value="Round trip" />
                        <RadioButton id="empExit" name="empExit" value="Final exit" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block">Ticket route</label>
                        <SelectBox id="empRouteFrom" name="empRouteFrom" inline options={[]} placeholder="From" />
                        <SelectBox id="empRouteTo" name="empRouteTo" inline options={[]} placeholder="To" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block">Present Location</label>
                        <RadioButton id="empKSA" name="empKSA" value="In KSA" />
                        <RadioButton id="empOutKSA" name="empOutKSA" value="Out of KSA" />
                    </div>
                </div>
                { deptValue &&
                    <>
                        <h3>Dependent Details</h3>
                        {deptValue.map((depedent, index) => {
                            return(
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <label className="label-block">Dependent Name</label>
                                        <TextBox id="name" name="name" value={depedent.name} handleChange={(e) => updateDependent(e, index)} />
                                    </div>
                                    <div className="col-12 col-md-2">
                                        <label className="label-block">Age</label>
                                        <TextBox id="age" name="age" value={empDetails.age} disabled />
                                    </div>
                                </div>
                            )
                        })}
                    </>
                }
                {/* <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="label-block">Spouse name</label>
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
                    <div className="col-12 col-md-4">
                        <label className="label-block">Date of ticket</label>
                        <DateRange id="dateRange" name="dateRange" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block">Ticket clasification</label>
                        <RadioButton id="empOneway" name="empOneway" value="One way" />
                        <RadioButton id="empRound" name="empRound" value="Round trip" />
                        <RadioButton id="empExit" name="empExit" value="Final exit" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block">Ticket route</label>
                        <SelectBox id="empRouteFrom" name="empRouteFrom" inline options={[]} placeholder="From" />
                        <SelectBox id="empRouteTo" name="empRouteTo" inline options={[]} placeholder="To" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block">Present Location</label>
                        <RadioButton id="empKSA" name="empKSA" value="In KSA" />
                        <RadioButton id="empOutKSA" name="empOutKSA" value="Out of KSA" />
                    </div>
                </div>
                <h3>Child Details</h3>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="label-block">Child 1 name</label>
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
                    <div className="col-12 col-md-4">
                        <label className="label-block">Date of ticket</label>
                        <DateRange id="dateRange" name="dateRange" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block">Ticket clasification</label>
                        <RadioButton id="empOneway" name="empOneway" value="One way" />
                        <RadioButton id="empRound" name="empRound" value="Round trip" />
                        <RadioButton id="empExit" name="empExit" value="Final exit" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block">Ticket route</label>
                        <SelectBox id="empRouteFrom" name="empRouteFrom" inline options={[]} placeholder="From" />
                        <SelectBox id="empRouteTo" name="empRouteTo" inline options={[]} placeholder="To" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block">Present Location</label>
                        <RadioButton id="empKSA" name="empKSA" value="In KSA" />
                        <RadioButton id="empOutKSA" name="empOutKSA" value="Out of KSA" />
                    </div>
                </div> */}
                <div className="btn-container">
                    <div className="pull-left">
                        <Button className="primary" icon="plus" iconPlace="prefix" value="Add Child" />
                    </div>
                    <div className="pull-right">
                        <Button className="primary" icon="save" iconPlace="prefix" value="Submit" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default LeaveRequest;
