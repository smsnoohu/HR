import React, { useContext, useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContextProvider';
import Datepicker from '../../Shared/FormComponents/DatePicker/Datepicker';
import DateRange from '../../Shared/FormComponents/DatePicker/DateRange';
import { DateFormetter } from '../../../utils/DateFormetter';
import TextBox from '../../Shared/FormComponents/TextBox';
import SelectBox from '../../Shared/FormComponents/SelectBox';
import RadioButton from '../../Shared/FormComponents/RadioButton';
import TextArea from '../../Shared/FormComponents/TextArea';
import Button from '../../Shared/FormComponents/Button';
import { LEAVE_REQUEST, LEAVE_TYPE, EMPLOYEE_DETAILS, CITY_LIST, LEAVE_STATUS, ACTION_DETAILS, ACTION_LIST, DEPT_LIST } from './leaveRequestConst';

const LeaveRequest = props => {
    console.log('Leave Request Page');

    const { userObject } = useContext(AuthContext);

    const [currentStatus, SetCurrentStatus] = useState(LEAVE_STATUS);

    const [inpValue, setInpValue] = useState(LEAVE_REQUEST);

    const [empValue, setEmpValue] = useState(EMPLOYEE_DETAILS.employee[0]);
    let [deptValue, setDeptValue] = useState(EMPLOYEE_DETAILS.depedent);

    let [actionDetails, setActionDetails] = useState(ACTION_DETAILS);

    const { startDate, endDate, reportDate, contactInVacation, mobileNoInVacation, emailInVacation, leaveType, ticketStatus } = inpValue;

    const updateLeave = e => {
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

    const updateEmployee = e => {
        const { name, value } = e.target;

        const newState = {
            ...empValue,
            [name]: value
        }

        setEmpValue(newState);
    }

    const updateEmpFromToDate = (name, date) => {
        const formettedDate = DateFormetter(date);

        const newState = {
            ...empValue,
            [name]: formettedDate
        }

        setEmpValue(newState);
    }

    const updateDependent = (e, index) => {
        console.log('index:', index);
        e.preventDefault();
        const { name, value } = e.target;

        const newDeptValue = [...deptValue];
        newDeptValue[index][name] = value;
        console.log('newState: ', newDeptValue);

        setDeptValue(newDeptValue);
    }

    const updateRadio = (e, index) => {
        console.log('index:', e, index);
        const { value } = e.target;

        console.log('dataName:', e.target.dataset.name, value);

        const newDeptValue = [...deptValue];
        newDeptValue[index][e.target.dataset.name] = value;
        console.log('newState: ', newDeptValue);

        setDeptValue(newDeptValue);
    }

    const updateFromToDate = (name, date, index) => {
        const formettedDate = DateFormetter(date);

        const newDeptValue = [...deptValue];
        newDeptValue[index][name] = formettedDate;
        console.log('newState: ', newDeptValue);

        setDeptValue(newDeptValue);
    }

    const removeDept = e => {
        e.preventDefault();
        console.log('removed', deptValue);

        const { name } = e.target;

        const updatedDeptValue = deptValue.filter( (value) => {
            console.log(parseInt(name), value.id);
            return value.id !== parseInt(name);
        });

        
        console.log('removed', name, updatedDeptValue);

        setDeptValue(updatedDeptValue);

    }

    const addDept = e => {
        e.preventDefault();
        console.log('add', deptValue, deptValue.length);
        let newDept = {
            id: deptValue.length + 1,
            name: '',
            relationToEmployee: '',
            age: null,
            gender: '',
            fromDate: '',
            toDate: '',
            ticketClass: '',
            fromRoute: '',
            toRoute: '',
            location: ''
        }
        deptValue = [...deptValue, newDept];

        console.log('addedDept: ', deptValue, newDept);
        setDeptValue(deptValue);
    }

    const updateActionDetails = (e, index) => {
        console.log('index:', index);
        e.preventDefault();
        const { name, value } = e.target;

        const newActionDetail = [...actionDetails];
        newActionDetail[index][name] = value;
        console.log('newActionDetail: ', newActionDetail);

        setActionDetails(newActionDetail);
    }

    const updateActionDate = (name, date, index) => {
        const formettedDate = DateFormetter(date);

        const newActionDetail = [...actionDetails];
        newActionDetail[index][name] = formettedDate;
        console.log('newState: ', newActionDetail);

        setDeptValue(newActionDetail);
    }

    const updateAction = (e, status, index) => {
        console.log('index:', index);
        e.preventDefault();
        const { name } = e.target;

        const newActionDetail = [...actionDetails];
        newActionDetail[index][name] = status;
        console.log('newActionDetail: ', newActionDetail);

        setActionDetails(newActionDetail);
    }

    const addAction = e => {
        console.log('Add Action');
    }

    const removeAction = e => {
        console.log('Remove Action');
    }

    const updateRemark = e => {
        console.log('Update Remark');
    }


    return (
        <>
            <h1>Leave Request</h1>
            <div className="card">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">ID #</label>
                        <p>{userObject.userID}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Employee Name</label>
                        <p>{userObject.EmployeeName}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Hiring Date</label>
                        <p>{userObject.hiringDate}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Job Title & Department</label>
                        <p>{userObject.jobTitle} - {userObject.dept}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Shift Group</label>
                        <p>{userObject.shiftGroup}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Cost Center</label>
                        <p>{userObject.costCenter}</p>
                    </div>
                </div>
            </div>

            <div className="request-container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="leaveType">Leave type</label>
                        <SelectBox id="leaveType" name="leaveType" handleChange={handleLeaveType} value={leaveType[0].id || ''} options={LEAVE_TYPE} placeholder="Select Leave Type" disabled={currentStatus.status !== 'requester'} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="stateDate">Starting date</label>
                        <Datepicker id="stateDate" name="startDate" value={startDate || ''} handleChange={(date) => updateDate('startDate', date)} disabled={currentStatus.status !== 'requester'} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="endDate">Ending date</label>
                        <Datepicker id="endDate" name="endDate" value={endDate || ''} handleChange={(date) => updateDate('endDate', date)} disabled={currentStatus.status !== 'requester'} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="reportDate">Reporting date</label>
                        <Datepicker id="reportDate" name="reportDate" value={reportDate || ''} handleChange={(date) => updateDate('reportDate', date)} disabled={currentStatus.status !== 'requester'} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="ticketCompany">Ticket status</label>
                        <RadioButton id="ticketCompany" name="ticketStatus" value="Company" handleChange={updateLeave} checked={ticketStatus === 'Company'} />
                        <RadioButton id="ticketEmployee" name="ticketStatus" value="Employee" handleChange={updateLeave} checked={ticketStatus === 'Employee'} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="contactInVacation">Contact during vacation</label>
                        <TextBox id="contactInVacation" name="contactInVacation" value={contactInVacation || ''} maxlength="100" placeholder="Enter Contact name during vacation" handleChange={updateLeave} disabled={currentStatus.status !== 'requester'} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="mobileNoInVacation">Mobile #</label>
                        <TextBox id="mobileNoInVacation" name="mobileNoInVacation" value={mobileNoInVacation || ''} placeholder="Enter mobile number during vacation" handleChange={updateLeave} disabled={currentStatus.status !== 'requester'} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="emailInVacation">Email address</label>
                        <TextBox id="emailInVacation" name="emailInVacation" value={emailInVacation || ''} placeholder="Enter email address during vacation" handleChange={updateLeave} disabled={currentStatus.status !== 'requester'} />
                    </div>
                </div>
                <hr />
                <h2>Employee Details</h2>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="label-block" htmlFor="empName">Employee name</label>
                        <TextBox id="empName" name="name" value={empValue.name || ''} handleChange={updateEmployee} />
                    </div>
                    <div className="col-12 col-md-2">
                        <label className="label-block" htmlFor="empAge">Age</label>
                        <TextBox id="empAge" name="age" value={empValue.age || ''} handleChange={updateEmployee} />
                    </div>
                    <div className="col-12 col-md-2">
                        <label className="label-block" htmlFor="empGender">Gender</label>
                        <RadioButton id="empGenderMale" name="empGender" value="Male" checked={empValue.empGender === 'Male'} handleChange={updateEmployee} />
                        <RadioButton id="empGenderFemale" name="empGender" value="Female" checked={empValue.empGender === 'Female'} handleChange={updateEmployee} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="dateOfTicket">Date of ticket</label>
                        <Datepicker id="empFromDate" name="fromDate" value={empValue.fromDate || ''} handleChange={(date) => updateEmpFromToDate('fromDate', date)} />
                        <Datepicker id="empToDate" name="toDate" value={empValue.toDate || ''} handleChange={(date) => updateEmpFromToDate('toDate', date)} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="ticketClass">Ticket clasification</label>
                        <RadioButton id="empOneway" name="ticketClass" value="One way" checked={empValue.ticketClass === 'One way'} handleChange={updateEmployee} disabled={currentStatus.status !== 'requester'} />
                        <RadioButton id="empRound" name="ticketClass" value="Round trip" checked={empValue.ticketClass === 'Round trip'} handleChange={updateEmployee} disabled={currentStatus.status !== 'requester'} />
                        <RadioButton id="empExit" name="ticketClass" value="Final exit" checked={empValue.ticketClass === 'Final exit'} handleChange={updateEmployee} disabled={currentStatus.status !== 'requester'} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="ticketRoute">Ticket route</label>
                        <SelectBox id="empRouteFrom" name="fromRoute" inline value={empValue.fromRoute} options={CITY_LIST} placeholder="From" handleChange={updateEmployee} disabled={currentStatus.status !== 'requester'} />
                        <SelectBox id="empRouteTo" name="toRoute" inline value={empValue.toRoute} options={CITY_LIST} placeholder="To" handleChange={updateEmployee} disabled={currentStatus.status !== 'requester'} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="location">Present Location</label>
                        <RadioButton id="empKSA" name="location" value="In KSA" checked={empValue.location === 'In KSA'} handleChange={updateEmployee} disabled={currentStatus.status !== 'requester'} />
                        <RadioButton id="empOutKSA" name="location" value="Out of KSA" checked={empValue.location === 'Out of KSA'} handleChange={updateEmployee} disabled={currentStatus.status !== 'requester'} />
                    </div>
                </div>
                { deptValue.length > 0 &&
                    <>
                        <hr />
                        <h2>Dependent Details</h2>
                        {deptValue.map((depedent, index) => {
                            return(
                                <Fragment key={depedent.id}>
                                    <h3>Dependent {index + 1}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<Link to="#" onClick={removeDept} name={depedent.id} title={`Remove Dependent ${index + 1}`}>x remove</Link></h3>
                                    <div className="row">
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <label className="label-block" htmlFor={`name_${index}`}>Dependent Name</label>
                                            <TextBox id={`name_${index}`} name="name" value={depedent.name || ''} handleChange={(e) => updateDependent(e, index)} />
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <label className="label-block" htmlFor={`relation_${index}`}>Dependent Relation</label>
                                            <TextBox id={`relation_${index}`} name="relation" value={depedent.relation || ''} handleChange={(e) => updateDependent(e, index)} />
                                        </div>
                                        <div className="col-12 col-md-2 col-lg-1">
                                            <label className="label-block" htmlFor={`age_${index}`}>Age</label>
                                            <TextBox id={`age_${index}`} name="age" maxlength="2" value={depedent.age || ''} handleChange={(e) => updateDependent(e, index)} />
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <label className="label-block" htmlFor={`gender_${depedent.id}`}>Gender</label>
                                            <RadioButton id={`gender_${index}_0`} name={`gender_${depedent.id}`} dataName="gender" value="Male" checked={depedent.gender === 'Male'} handleChange={(e) => updateRadio(e, index)} />
                                            <RadioButton id={`gender_${index}_1`} name={`gender_${depedent.id}`} dataName="gender" value="Female" checked={depedent.gender === 'Female'} handleChange={(e) => updateRadio(e, index)} />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <label className="label-block" htmlFor="dateOfTicket">Date of ticket</label>
                                            <Datepicker id={`fromDate_${depedent.id}`} name="fromDate" value={depedent.fromDate || ''} handleChange={(date) => updateFromToDate('fromDate', date, index)} />
                                            <Datepicker id={`toDate_${depedent.id}`} name="toDate" value={depedent.toDate || ''} handleChange={(date) => updateFromToDate('toDate', date, index)} />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <label className="label-block" htmlFor={`ticketClass_${index}`}>Ticket clasification</label>
                                            <RadioButton id={`ticketClass_${index}_0`} name={`ticketClass_${depedent.id}`} dataName="ticketClass" value="One way" checked={depedent.ticketClass === 'One way'} handleChange={(e) => updateRadio(e, index)} />
                                            <RadioButton id={`ticketClass_${index}_1`} name={`ticketClass_${depedent.id}`} dataName="ticketClass" value="Round trip" checked={depedent.ticketClass === 'Round trip'} handleChange={(e) => updateRadio(e, index)} />
                                            <RadioButton id={`ticketClass_${index}_2`} name={`ticketClass_${depedent.id}`} dataName="ticketClass" value="Final exit" checked={depedent.ticketClass === 'Final exit'} handleChange={(e) => updateRadio(e, index)} />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <label className="label-block" htmlFor="ticketRoute">Ticket route</label>
                                            <SelectBox id={`fromRoute_${index}`} name="fromRoute" inline value={depedent.fromRoute} options={CITY_LIST} placeholder="From" handleChange={(e) => updateDependent(e, index)} />
                                            <SelectBox id={`toRoute_${index}`} name="toRoute" inline value={depedent.toRoute} options={CITY_LIST} placeholder="To" handleChange={(e) => updateDependent(e, index)} />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <label className="label-block" htmlFor="location">Present Location</label>
                                            <RadioButton id={`location_${index}_0`} name={`location_${depedent.id}`} dataName="location" value="In KSA" checked={depedent.location === 'In KSA'} handleChange={(e) => updateRadio(e, index)} />
                                            <RadioButton id={`location_${index}_1`} name={`location_${depedent.id}`} dataName="location" value="Out of KSA" checked={depedent.location === 'Out of KSA'} handleChange={(e) => updateRadio(e, index)} />
                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            )
                        })}
                    </>
                }

                {actionDetails.length <= 0 &&
                    <div className="btn-container">
                        <div className="pull-left">
                            <Button className="primary" icon="plus" iconPlace="prefix" value="Add Dependent" handleClick={addDept} />
                        </div>
                        <div className="pull-right">
                            <Button className="primary" icon="save" iconPlace="prefix" value="Submit" />
                        </div>
                    </div>
                }

                {actionDetails.length > 0 && 
                    <>
                        <h2>Action Details</h2>
                        <Button className="primary pull-right" icon="plus" iconPlace="prefix" value="Add Action" handleClick={addAction} />
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th width="5%">#</th>
                                    <th width="15%">Requested By</th>
                                    <th width="15%">Action Name</th>
                                    <th width="15%">Dept Name</th>
                                    <th width="15%">Responsible By</th>
                                    <th width="15%">Target Date</th>
                                    <th width="10%">Status</th>
                                    <th width="10%">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { actionDetails.map((action, index) => {
                                    return(
                                        <tr key={action.actionNo}>
                                            <td data-head="#">{index + 1}</td>
                                            <td data-head="Requested By">
                                                <TextBox id={`requestedBy_${index}`} name="requestedBy" value={action.requestedBy || ''} handleChange={(e) => updateActionDetails(e, index)} />
                                            </td>
                                            <td data-head="Action Name">
                                                <SelectBox id={`actionName_${index}`} name="actionName" inline value={action.actionName} options={ACTION_LIST} placeholder="Select Action" handleChange={(e) => updateActionDetails(e, index)} />
                                            </td>
                                            <td data-head="Dept Name">
                                                <SelectBox id={`deptName_${index}`} name="deptName" inline value={action.deptName} options={DEPT_LIST} placeholder="Select Department" handleChange={(e) => updateActionDetails(e, index)} />
                                            </td>
                                            <td data-head="Responsible By">
                                                <TextBox id={`respBy_${index}`} name="respBy" value={action.respBy || ''} handleChange={(e) => updateActionDetails(e, index)} />
                                            </td>
                                            <td data-head="Target Date">
                                                <Datepicker id={`targetDate_${action.actionNo}`} name="targetDate" value={action.targetDate || ''} handleChange={(date) => updateActionDate('targetDate', date, index)} />
                                            </td>
                                            <td data-head="Status">{action.status || 'Pending'}</td>
                                            <td data-head="Action">
                                                {action.status === '' && <Button className="primary" icon="check" isIconOnly value="Assign" name="status" handleClick={(e) => updateAction(e, 'submitted', index)} />}
                                                {action.status === 'submitted' && <Button className="primary" icon="pencil-alt" isIconOnly value="Edit" handleClick={addDept} disabled={action.status === 'finished'} />}
                                                <Button className="primary" icon="trash-alt" isIconOnly value="Remove Action" handleClick={removeAction} />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="row">
                            <div className="col-12">
                                <TextArea id="actionRemark" name="actionRemark" handleChange={updateRemark} />
                            </div>
                        </div>
                        <div className="btn-container">
                            <Button className="primary" icon="save" iconPlace="prefix" value="Save" />
                            <Button className="primary" icon="check" iconPlace="prefix" value="Submit" />
                            <Button className="primary" icon="undo" iconPlace="prefix" value="Return" />
                            <Button className="primary" icon="forward" iconPlace="sufix" value="Forward" />
                            <Button className="primary" icon="share" iconPlace="prefix" value="Delegate" />
                            <Button className="primary" icon="times" iconPlace="prefix" value="Reject" />
                        </div>
                    </>
                }

            </div>
        </>
    );
}

export default LeaveRequest;