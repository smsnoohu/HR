import React, { useContext, useState, Fragment } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import { EventContext } from '../../context/EventContextProvider';
import Label from '../../main/Shared/FormComponents/Label';
import TextBox from '../../main/Shared/FormComponents/TextBox';
import TextArea from '../../main/Shared/FormComponents/TextArea';
import RadioButton from '../../main/Shared/FormComponents/RadioButton';
import Datepicker from '../../main/Shared/FormComponents/DatePicker/Datepicker';
import Button from '../../main/Shared/FormComponents/Button';
import { MonthYearFormetter } from '../../utils/DateFormetter';
import { OT_INFO, OT_DETAIL } from './OvertimeApprovalConst';
import Approval from './Approval';

const OvertimeApproval = () => {
    console.log('Overtime Approval Page');
    const { userObject } = useContext(AuthContext);
    const { clicked, toggleComponent } = useContext(EventContext);

    const [overtimeInfo, setOvertimeInfo] = useState(OT_INFO);

    let [approvalData, setApprovalData] = useState(OT_DETAIL);

    const { monthYear, approvalType, otComment } = overtimeInfo;

    const [type, setType] = useState([]);

    console.log('approvalData: ', approvalData);

    const updateApprovalInfoDate = (name, date) => {
        const formettedDate = MonthYearFormetter(date);
        const newState = {
            ...overtimeInfo,
            [name]: formettedDate
        }
        setOvertimeInfo(newState);
        console.log('newState: ', newState);
        const month = formettedDate.split('/')[0];
        const year = formettedDate.split('/')[1];

        const days = new Date(year, month, 0).getDate();

        console.log('month & year & days: ', month, year, days);

        createType(days);

    }

    const updateApprovalInfo = e => {
        const { name, value } = e.target;

        const newState = {
            ...overtimeInfo,
            [name]: value
        }
        setOvertimeInfo(newState);
    }

    const createType = (days) => {

        let typeArr = [];

        for(let i = 1; i <= days; i++){
            let t = {
                id: 'day_' + [i],
                day: i,
                shift: '',
                wh: '',
                ot: ''
            }
            typeArr = [...typeArr, t]
        }
        console.log('type: ', typeArr);
        setType(typeArr);
    }

    const addApprovalDetails = e => {
        e.preventDefault();
        const newApproval = {
            id: 'OT_' + approvalData.length + 1,
            empID: '',
            empName: '',
            empPosition: '',
            prevTotalOT: '',
            prevOTCost: '',
            totalWorkHrs: '',
            totalSingleOTHrs: '',
            totalDoubleOTHrs: '',
            totalOTCOst: '',
            compType: '',
            type: type
        }

        approvalData = [...approvalData, newApproval];
        setApprovalData(approvalData);
    }

    const updateApprovalDetails = (e, index) => {
        const { name, value } = e.target;
        const newState = [...approvalData];
        newState[index][name] = value;
        setApprovalData(newState);
    }

    const updateApprovalHrs = (e, index, innerIndex) => {
        const { name, type, checked, value } = e.target;
        let val;
        type === 'checkbox' ? (val = checked ? 'Yes' : 'No') : val = value;

        let newState = [...approvalData];
        let newHrs = newState[index]['type'];
        newHrs[innerIndex][name] = val;
        newState[index]['type'] = newHrs;
        setApprovalData(newState);
    }

    const removeApprovalRow = (e, index) => {
        approvalData.splice(index, 1);
        const newState = [...approvalData];
        setApprovalData(newState);
    }

    return(
        <>
            <h1>Overtime Pre & Post Approval</h1>
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
                    <div className="col-12 col-md-4">
                        <Label htmlFor="monthYear" value="Month & Year" />
                        <Datepicker id="monthYear" name="monthYear" value={monthYear || ''} showMonthYearPicker handleChange={(date) => updateApprovalInfoDate('monthYear', date)} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Label htmlFor="approvalType" value="Type of Approval" />
                        <RadioButton id="approvalType_Pre" name="approvalType" value="Pre Approval" handleChange={updateApprovalInfo} checked={approvalType.toLowerCase() === ('Pre Approval').toLowerCase()} />
                        <RadioButton id="approvalType_Post" name="approvalType" value="Post Approval" handleChange={updateApprovalInfo} checked={approvalType.toLowerCase() === ('Post Approval').toLowerCase()} />
                    </div>
                </div>

                <Button className="secondary mb-20" iconPlace="prefix" icon="plus" value="Add New Employee" disabled={!monthYear || !approvalType} handleClick={addApprovalDetails} />

                { approvalData.length > 0 && 
                    <>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th width="10%">Time</th>
                                    <th width="8%">ID #</th>
                                    <th width="25%">Name</th>
                                    <th width="14%">Position</th>
                                    <th width="14%">Prev Month Total OT</th>
                                    <th width="14%">Prev Month Total OT Cost</th>
                                    <th width="5%">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                { approvalData.map((approve, index) => {
                                    return(
                                        <Fragment key={approve.id}>
                                            <tr>
                                                <td data-head="Time">
                                                    <Button className="secondary btn-sm btn-full" target={approve.id} iconPlace="prefix" icon={`${clicked[approve.id] ? 'minus': 'plus'}`} value="Add Hrs" handleClick={toggleComponent} />
                                                </td>
                                                <td data-head="ID #">
                                                    <TextBox id={`${approve.empID}_empID`} name="empID" value={approve.empID || ''} placeholder="Emp ID" handleChange={(e) => updateApprovalDetails(e, index)} />
                                                </td>
                                                <td data-head="Name">
                                                    <TextBox id={`${approve.empName}_empName`} name="empName" value={approve.empName || ''} placeholder="Employee Name" handleChange={(e) => updateApprovalDetails(e, index)} />
                                                </td>
                                                <td data-head="Position">
                                                    <TextBox id={`${approve.empPosition}_empPosition`} name="empPosition" value={approve.empPosition || ''} placeholder="Employee Name" handleChange={(e) => updateApprovalDetails(e, index)} />
                                                </td>
                                                <td data-head="Prev Month Total OT">
                                                    <TextBox id={`${approve.prevTotalOT}_prevTotalOT`} name="prevTotalOT" value={approve.prevTotalOT || ''} placeholder="Employee Name" handleChange={(e) => updateApprovalDetails(e, index)} />
                                                </td>
                                                <td data-head="Prev Month Total OT Cost">
                                                    <TextBox id={`${approve.prevOTCost}_prevOTCost`} name="prevOTCost" value={approve.prevOTCost || ''} placeholder="Employee Name" handleChange={(e) => updateApprovalDetails(e, index)} />
                                                </td>
                                                <td data-head="Delete">
                                                    <Button className="danger" icon="trash-alt" isIconOnly value="Delete" handleClick={(e) => removeApprovalRow(e, index)} />
                                                </td>
                                            </tr>
                                            { clicked[approve.id] &&
                                                <>
                                                    <tr className="child-row">
                                                        <td colSpan="7">
                                                            <div className="row">
                                                                <div className="col-12 col-md-4">
                                                                    <Label htmlFor={`${approve.totalWorkHrs}_totalWorkHrs`} value="Total Working Hrs" />
                                                                    <TextBox id={`${approve.totalWorkHrs}_totalWorkHrs`} name="totalWorkHrs" value={approve.totalWorkHrs || ''} placeholder="Employee Name" handleChange={(e) => updateApprovalDetails(e, index)} />
                                                                </div>
                                                                <div className="col-12 col-md-4">
                                                                    <Label htmlFor={`${approve.totalSingleOTHrs}_totalSingleOTHrs`} value="Total Single OT Hours" />
                                                                    <TextBox id={`${approve.totalSingleOTHrs}_totalSingleOTHrs`} name="totalSingleOTHrs" value={approve.totalSingleOTHrs || ''} placeholder="Employee Name" handleChange={(e) => updateApprovalDetails(e, index)} />
                                                                </div>
                                                                <div className="col-12 col-md-4">
                                                                    <Label htmlFor={`${approve.totalDoubleOTHrs}_totalDoubleOTHrs`} value="Total Double OT Hours" />
                                                                    <TextBox id={`${approve.totalDoubleOTHrs}_totalDoubleOTHrs`} name="totalDoubleOTHrs" value={approve.totalDoubleOTHrs || ''} placeholder="Employee Name" handleChange={(e) => updateApprovalDetails(e, index)} />
                                                                </div>
                                                                <div className="col-12 col-md-4">
                                                                    <Label htmlFor={`${approve.totalOTCOst}_totalOTCOst`} value="Total OT Cost" />
                                                                    <TextBox id={`${approve.totalOTCOst}_totalOTCOst`} name="totalOTCOst" value={approve.totalOTCOst || ''} placeholder="Employee Name" handleChange={(e) => updateApprovalDetails(e, index)} />
                                                                </div>
                                                                <div className="col-12 col-md-4">
                                                                    <Label value="Compensation Type" />
                                                                    <RadioButton id="compType_OT" name="compType" value="OT" handleChange={(e) => updateApprovalDetails(e, index)} checked={approve.compType.toLowerCase() === ('OT').toLowerCase()} />
                                                                    <RadioButton id="compType_OFF" name="compType" value="OFF" handleChange={(e) => updateApprovalDetails(e, index)} checked={approve.compType.toLowerCase() === ('OFF').toLowerCase()} />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="child-row scroll-row">
                                                        <td colSpan="7">
                                                            <table className="data-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th width="5%">Type</th>
                                                                        { approve.type.map(
                                                                            (type, typeIndex) => <th width="3%" key={`type_${type.id}`}>{type.day}</th>
                                                                        )}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td data-head="Type"><Label value="Shift" /></td>
                                                                        { approve.type.map((type, shiftIndex) => {
                                                                            return(
                                                                                <td data-head={`Day ${type.day}`} key={`shift_${type.id}`}>
                                                                                    <TextBox id={`${type.day}_shift`} name="shift" value={type.shift || ''} placeholder="Hrs" handleChange={(e) => updateApprovalHrs(e, index, shiftIndex)} />
                                                                                </td>
                                                                            ) 
                                                                        })}
                                                                    </tr>
                                                                    <tr>
                                                                        <td data-head="Type"><Label value="WH" /></td>
                                                                        { approve.type.map((type, whIndex) => {
                                                                            return(
                                                                                <td data-head={`Day ${type.day}`} key={`wh_${type.id}`}>
                                                                                    <TextBox id={`${type.day}_wh`} name="wh" value={type.wh || ''} placeholder="Hrs" handleChange={(e) => updateApprovalHrs(e, index, whIndex)} />
                                                                                </td>
                                                                            ) 
                                                                        })}
                                                                    </tr>
                                                                    <tr>
                                                                        <td data-head="Type"><Label value="OT" /></td>
                                                                        { approve.type.map((type, otIndex) => {
                                                                            return(
                                                                                <td data-head={`Day ${type.day}`} key={`ot_${type.id}`}>
                                                                                    <TextBox id={`${type.day}_ot`} name="ot" value={type.ot || ''} placeholder="Hrs" handleChange={(e) => updateApprovalHrs(e, index, otIndex)} />
                                                                                </td>
                                                                            ) 
                                                                        })}
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </>
                                            }
                                        </Fragment>
                                    )
                                })}
                            </tbody>
                        </table>

                        <TextArea id="otComment" name="otComment" value={otComment || ''} placeholder="Enter your comments" handleChange={updateApprovalInfo} />

                        <div className="btn-container text-right">
                            <Button className="secondary" icon="save" iconPlace="prefix" value="Save" />
                            <Button className="primary" icon="save" iconPlace="prefix" value="Submit" />
                        </div>

                        <hr />

                        <Approval userObject={userObject} />
                    </>
                }
            </div>
        </>
    )
}

export default OvertimeApproval;