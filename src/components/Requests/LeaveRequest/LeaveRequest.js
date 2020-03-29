import React, { useContext, useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContextProvider';
import Label from '../../../main/Shared/FormComponents/Label';
import Datepicker from '../../../main/Shared/FormComponents/DatePicker/Datepicker';
import TextBox from '../../../main/Shared/FormComponents/TextBox';
import SelectBox from '../../../main/Shared/FormComponents/SelectBox';
import RadioButton from '../../../main/Shared/FormComponents/RadioButton';
import TextArea from '../../../main/Shared/FormComponents/TextArea';
import Button from '../../../main/Shared/FormComponents/Button';
import { LEAVE_REQUEST, LEAVE_TYPE, EMPLOYEE_DETAILS, CITY_LIST, ROLES, ACTION_DETAILS, ACTION_LIST, DEPT_LIST } from './leaveRequestConst';
import { LEAVE_STATUS } from '../../../constants/constants';

const LeaveRequest = props => {
    console.log('Leave Request Page');

    const { userObject, userPref } = useContext(AuthContext);

    const [currentStatus, SetCurrentStatus] = useState(ROLES);

    const [inpValue, setInpValue] = useState(LEAVE_REQUEST);

    const [empValue, setEmpValue] = useState(EMPLOYEE_DETAILS.employee[0]);
    let [deptValue, setDeptValue] = useState(EMPLOYEE_DETAILS.depedent);

    let [actionDetails, setActionDetails] = useState(ACTION_DETAILS);

    const { startDate, endDate, reportDate, contactInVacation, mobileNoInVacation, emailInVacation, leaveType, ticketStatus } = inpValue;

    const updateLeave = e => {
        const { name, value } = e.target;
        const newState = {
            ...inpValue,
            [name]: value
        }

        setInpValue(newState);

        console.log('newState: ', newState);
    }

    const updateDate = (name, date) => {
        const newState = {
            ...inpValue,
            [name]: date
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

        const newState = {
            ...empValue,
            [name]: date
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

        const newDeptValue = [...deptValue];
        newDeptValue[index][name] = date;
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
            relation: '',
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

        const newActionDetail = [...actionDetails];
        newActionDetail[index][name] = date;
        console.log('newState: ', newActionDetail);

        setDeptValue(newActionDetail);
    }

    const addAction = e => {
        e.preventDefault();
        console.log('add', actionDetails, actionDetails.length);
        let newActionRow = {
            actionNo: actionDetails.length + 1,
            createdBy: '',
            actionName: '',
            deptName: '',
            respBy: '',
            targetDate: '',
            status: ''
        }
        actionDetails = [...actionDetails, newActionRow];

        console.log('addedDept: ', actionDetails, newActionRow);
        setActionDetails(actionDetails);
    }

    const removeAction = (e, id) => {
        console.log('Remove Action');
        console.log('index:', id, actionDetails);
        e.preventDefault();

        const updatedActionDetail = actionDetails.filter( (action) => {
            console.log(parseInt(id), action.actionNo);
            return action.actionNo !== parseInt(id);
        });

        console.log('updatedActionDetail: ', updatedActionDetail);
        setActionDetails(updatedActionDetail);
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
                        <Label value="Empoyee ID #" />
                        <p>{userObject.userID}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label value="Employee Name" />
                        <p>{userObject.EmployeeName}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label value="Primary Contact #" />
                        <p>{userObject.PrimaryContactNo}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label value="Job Title & Department" />
                        <p>{userObject.jobTitle} - {userObject.dept}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label value="Hiring Date" />
                        <p>{userObject.hiringDate}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label value="Type of Work" />
                        <p>{userObject.typeOfWork}</p>
                    </div>
                </div>
            </div>

            <div className="form-container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label htmlFor="leaveType" value="Leave type" />
                        <SelectBox id="leaveType" name="leaveType" handleChange={handleLeaveType} value={leaveType[0].id || ''} options={LEAVE_TYPE} placeholder="Select Leave Type" disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label htmlFor="stateDate" value="Starting date" />
                        <Datepicker id="stateDate" name="startDate" format={userPref.dateFormat} selected={startDate} endDate={endDate} value={startDate || ''} handleChange={(date) => updateDate('startDate', date)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label htmlFor="endDate" value="Ending date" />
                        <Datepicker id="endDate" name="endDate" format={userPref.dateFormat} selected={endDate} startDate={startDate} endDate={endDate} minDate={startDate} value={endDate || ''} handleChange={(date) => updateDate('endDate', date)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label htmlFor="reportDate" value="Reporting date1" />
                        <Datepicker id="reportDate" name="reportDate" format={userPref.dateFormat} selected={reportDate} startDate={endDate} minDate={endDate} value={reportDate || ''} handleChange={(date) => updateDate('reportDate', date)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label htmlFor="ticketCompany" value="Ticket status" />
                        <RadioButton id="ticketCompany" name="ticketStatus" value="Company" handleChange={updateLeave} checked={ticketStatus.toLowerCase() === ('Company').toLowerCase()} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                        <RadioButton id="ticketEmployee" name="ticketStatus" value="Employee" handleChange={updateLeave} checked={ticketStatus.toLowerCase() === ('Employee').toLowerCase()} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label htmlFor="contactInVacation" value="Contact during vacation" />
                        <TextBox id="contactInVacation" name="contactInVacation" value={contactInVacation || ''} maxlength="100" placeholder="Enter Contact name during vacation" handleChange={updateLeave} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label htmlFor="mobileNoInVacation" value="Mobile #" />
                        <TextBox id="mobileNoInVacation" name="mobileNoInVacation" value={mobileNoInVacation || ''} placeholder="Enter mobile number during vacation" handleChange={updateLeave} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Label htmlFor="emailInVacation" value="Email address" />
                        <TextBox id="emailInVacation" name="emailInVacation" value={emailInVacation || ''} placeholder="Enter email address during vacation" handleChange={updateLeave} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                </div>
                <hr />
                <h2>Employee Details</h2>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <Label htmlFor="empName" value="Employee name" />
                        <TextBox id="empName" name="name" value={empValue.name || ''} handleChange={updateEmployee} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-2">
                        <Label htmlFor="empAge" value="Age" />
                        <TextBox id="empAge" name="age" value={empValue.age || ''} handleChange={updateEmployee} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-2">
                        <Label htmlFor="empGender" value="Gender" />
                        <RadioButton id="empGenderMale" name="empGender" value="Male" checked={empValue.empGender.toLowerCase() === ('Male').toLowerCase()} handleChange={updateEmployee} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                        <RadioButton id="empGenderFemale" name="empGender" value="Female" checked={empValue.empGender.toLowerCase() === ('Female').toLowerCase()} handleChange={updateEmployee} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Label htmlFor="dateOfTicket" value="Date of ticket" />
                        <Datepicker id="empFromDate" name="fromDate" format={userPref.dateFormat} selected={empValue.fromDate} endDate={empValue.toDate} value={empValue.fromDate || ''} handleChange={(date) => updateEmpFromToDate('fromDate', date)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                        <Datepicker id="empToDate" name="toDate" format={userPref.dateFormat} selected={empValue.toDate} startDate={empValue.fromDate} endDate={empValue.toDate} minDate={empValue.fromDate} value={empValue.toDate || ''} handleChange={(date) => updateEmpFromToDate('toDate', date)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Label htmlFor="ticketClass" value="Ticket clasification" />
                        <RadioButton id="empOneway" name="ticketClass" value="One way" checked={empValue.ticketClass.toLowerCase() === ('One way').toLowerCase()} handleChange={updateEmployee} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                        <RadioButton id="empRound" name="ticketClass" value="Round trip" checked={empValue.ticketClass.toLowerCase() === ('Round trip').toLowerCase()} handleChange={updateEmployee} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                        <RadioButton id="empExit" name="ticketClass" value="Final exit" checked={empValue.ticketClass.toLowerCase() === ('Final exit').toLowerCase()} handleChange={updateEmployee} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Label htmlFor="ticketRoute" value="Ticket route" />
                        <SelectBox id="empRouteFrom" name="fromRoute" inline value={empValue.fromRoute} options={CITY_LIST} placeholder="From" handleChange={updateEmployee} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                        <SelectBox id="empRouteTo" name="toRoute" inline value={empValue.toRoute} options={CITY_LIST} placeholder="To" handleChange={updateEmployee} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Label htmlFor="location" value="Present Location" />
                        <RadioButton id="empKSA" name="location" value="In KSA" checked={empValue.location.toLowerCase() === ('In KSA').toLowerCase()} handleChange={updateEmployee} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                        <RadioButton id="empOutKSA" name="location" value="Out of KSA" checked={empValue.location.toLowerCase() === ('Out of KSA').toLowerCase()} handleChange={updateEmployee} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                    </div>
                </div>
                { deptValue.length > 0 &&
                    <>
                        <hr />
                        <h2>Dependent Details</h2>
                        {deptValue.map((depedent, index) => {
                            return(
                                <Fragment key={depedent.id}>
                                    <h3>Dependent {index + 1}
                                        {currentStatus.role === LEAVE_STATUS.NEW && 
                                            <>
                                                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<Link to="#" onClick={removeDept} name={depedent.id} title={`Remove Dependent ${index + 1}`}>x remove</Link>
                                            </>
                                        }
                                    </h3>
                                    <div className="row">
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <Label htmlFor={`name_${index}`} value="Dependent Name" />
                                            <TextBox id={`name_${index}`} name="name" value={depedent.name || ''} handleChange={(e) => updateDependent(e, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <Label htmlFor={`relation_${index}`} value="Dependent Relation" />
                                            <TextBox id={`relation_${index}`} name="relation" value={depedent.relation || ''} handleChange={(e) => updateDependent(e, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                        </div>
                                        <div className="col-12 col-md-2 col-lg-1">
                                            <Label htmlFor={`age_${index}`} value="Age" />
                                            <TextBox id={`age_${index}`} name="age" maxlength="2" value={depedent.age || ''} handleChange={(e) => updateDependent(e, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <Label htmlFor={`gender_${depedent.id}`} value="Gender" />
                                            <RadioButton id={`gender_${index}_0`} name={`gender_${depedent.id}`} dataName="gender" value="Male" checked={depedent.gender.toLowerCase() === ('Male').toLowerCase()} handleChange={(e) => updateRadio(e, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                            <RadioButton id={`gender_${index}_1`} name={`gender_${depedent.id}`} dataName="gender" value="Female" checked={depedent.gender.toLowerCase() === ('Female').toLowerCase()} handleChange={(e) => updateRadio(e, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <Label htmlFor={`dateOfTicket_${index}`} value="Date of ticket" />
                                            <Datepicker id={`fromDate_${depedent.id}`} name="fromDate" format={userPref.dateFormat} selected={depedent.fromDate} endDate={depedent.toDate} value={depedent.fromDate || ''} handleChange={(date) => updateFromToDate('fromDate', date, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                            <Datepicker id={`toDate_${depedent.id}`} name="toDate" format={userPref.dateFormat} selected={depedent.toDate} startDate={depedent.fromDate} endDate={depedent.toDate} minDate={depedent.fromDate} value={depedent.toDate || ''} handleChange={(date) => updateFromToDate('toDate', date, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <Label htmlFor={`ticketClass_${index}`} value="Ticket clasification" />
                                            <RadioButton id={`ticketClass_${index}_0`} name={`ticketClass_${depedent.id}`} dataName="ticketClass" value="One way" checked={depedent.ticketClass.toLowerCase() === ('One way').toLowerCase()} handleChange={(e) => updateRadio(e, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                            <RadioButton id={`ticketClass_${index}_1`} name={`ticketClass_${depedent.id}`} dataName="ticketClass" value="Round trip" checked={depedent.ticketClass.toLowerCase() === ('Round trip').toLowerCase()} handleChange={(e) => updateRadio(e, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                            <RadioButton id={`ticketClass_${index}_2`} name={`ticketClass_${depedent.id}`} dataName="ticketClass" value="Final exit" checked={depedent.ticketClass.toLowerCase() === ('Final exit').toLowerCase()} handleChange={(e) => updateRadio(e, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <Label htmlFor="ticketRoute" value="Ticket route" />
                                            <SelectBox id={`fromRoute_${index}`} name="fromRoute" inline value={depedent.fromRoute} options={CITY_LIST} placeholder="From" handleChange={(e) => updateDependent(e, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                            <SelectBox id={`toRoute_${index}`} name="toRoute" inline value={depedent.toRoute} options={CITY_LIST} placeholder="To" handleChange={(e) => updateDependent(e, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <Label htmlFor="location" value="Present Location" />
                                            <RadioButton id={`location_${index}_0`} name={`location_${depedent.id}`} dataName="location" value="In KSA" checked={depedent.location.toLowerCase() === ('In KSA').toLowerCase()} handleChange={(e) => updateRadio(e, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                            <RadioButton id={`location_${index}_1`} name={`location_${depedent.id}`} dataName="location" value="Out of KSA" checked={depedent.location.toLowerCase() === ('Out of KSA').toLowerCase()} handleChange={(e) => updateRadio(e, index)} disabled={currentStatus.role !== LEAVE_STATUS.NEW} />
                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            )
                        })}
                    </>
                }

                {currentStatus.role === LEAVE_STATUS.NEW &&
                    <div className="btn-container">
                        <div className="pull-left">
                            <Button className="primary" icon="plus" iconPlace="prefix" value="Add Dependent" handleClick={addDept} />
                        </div>
                        <div className="pull-right">
                            <Button className="primary" icon="save" iconPlace="prefix" value="Submit" />
                        </div>
                    </div>
                }

                {currentStatus.role !== LEAVE_STATUS.NEW && 
                    <>
                        <h2>Action Details</h2>
                        <Button className="primary pull-right" icon="plus" iconPlace="prefix" value="Add Action" handleClick={addAction} />
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th width="5%">#</th>
                                    <th width="15%">Requested By</th>
                                    <th width="12%">Action Name</th>
                                    <th width="12%">Dept Name</th>
                                    <th width="15%">Responsible By</th>
                                    <th width="15%">Target Date</th>
                                    <th width="10%">Status</th>
                                    <th width="8%">Comments</th>
                                    <th width="8%">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { actionDetails.map((action, index) => {
                                    return(
                                        <tr key={action.actionNo}>
                                            <td data-head="#">{index + 1}</td>
                                            <td data-head="Requested By">
                                                <TextBox id={`createdBy_${index}`} name="createdBy" value={action.createdBy || ''} handleChange={(e) => updateActionDetails(e, index)} />
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
                                                <Datepicker id={`targetDate_${action.actionNo}`} name="targetDate" format={userPref.dateFormat} selected={action.targetDate} value={action.targetDate || ''} handleChange={(date) => updateActionDate('targetDate', date, index)} />
                                            </td>
                                            <td data-head="Status">{action.status || 'Pending'}</td>
                                            <td data-head="Comments">
                                                <Button className="primary" icon="comment-alt" isIconOnly value="Comments" />
                                            </td>
                                            <td data-head="Action">
                                                <Button className="primary" icon="trash-alt" isIconOnly value="Remove Action" handleClick={(e) => removeAction(e, action.actionNo)} />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        {actionDetails.length > 0 &&
                            <>
                                <div className="row">
                                    <div className="col-12">
                                        <TextArea id="actionRemark" name="actionRemark" placeholder="Enter your remark" handleChange={updateRemark} />
                                    </div>
                                </div>
                                <div className="btn-container">
                                    <Button className="secondary" icon="save" iconPlace="prefix" value="Save" />
                                    <Button className="primary" icon="check" iconPlace="prefix" value="Submit" />
                                    <Button className="primary" icon="undo" iconPlace="prefix" value="Return" />
                                    <Button className="primary" icon="forward" iconPlace="sufix" value="Forward" />
                                    <Button className="primary" icon="share" iconPlace="prefix" value="Delegate" />
                                    <Button className="danger" icon="times" iconPlace="prefix" value="Reject" />
                                </div>
                            </>
                        }
                    </>
                }

            </div>
        </>
    );
}

export default LeaveRequest;
