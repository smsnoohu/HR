import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import Label from '../../main/Shared/FormComponents/Label';
import SelectBox from '../../main/Shared/FormComponents/SelectBox';
import Datepicker from '../../main/Shared/FormComponents/DatePicker/Datepicker';
import { DateFormetter } from '../../utils/DateFormetter';
import TextArea from '../../main/Shared/FormComponents/TextArea';
import Button from '../../main/Shared/FormComponents/Button';
import { APPROVAL_INFO, SHIFT_LIST } from './WorkScheduleConst';
import Approval from '../../main/Shared/Approval/Approval';
import UserInfo from '../../main/Shared/UserInfo/UserInfo';

const WorkSchedule = () => {
    console.log('Shift Approval Page');
    const { userPref } = useContext(AuthContext);

    const defaultInfo = APPROVAL_INFO;
    const initialInfo = APPROVAL_INFO;

    let [approvalInfo, setApprovalInfo] = useState(initialInfo);

    const [processStarted, setProcessStarted] = useState(false);

    const [dateError, setDateError] = useState(false);

    const { fromDate, toDate, days, comment } = approvalInfo;

    const updateApprovalInfoDate = (name, date) => {
        const newState = {
            ...approvalInfo,
            [name]: date
        }
        setApprovalInfo(newState);
    }

    const updateApprovalInfo = e => {
        const { name, value } = e.target;

        const newState = {
            ...approvalInfo,
            [name]: value
        }
        setApprovalInfo(newState);
    }

    const startProcess = function(e, startDate, endDate, dateFormat) {
        let daysArray = new Array();
        let date = new Date(startDate);
        if(date <= endDate){
            setDateError(false);
            while (date <= endDate) {
                let formatDate = new Date(date);
                let formettedDate = DateFormetter(formatDate, dateFormat);
                let dateID = new Date(formatDate).getTime();
                let day = {
                    id: 'date_' + days.length + '_' + dateID,
                    day: formettedDate,
                    shift: ''
                }
                daysArray.push(day);
                date.setDate(date.getDate() + 1);
            }
            const newState = {
                ...approvalInfo,
                days: daysArray
            }
            setApprovalInfo(newState);
            setProcessStarted(true);
        }else{
            setDateError(true);
            resetProcess(e);
        }
    }

    const resetProcess = e => {
        e.preventDefault();
        setApprovalInfo(defaultInfo);
        setProcessStarted(false);
    }

    const updateApprovalInfoDays = (e, index) => {
        const { name, value } = e.target;
        let newState = [...days];
        newState[index][name] = value;
        newState = {
            ...approvalInfo,
            newState
        }
        setApprovalInfo(newState);
    }

    return(
        <>
            <h1>Shift Approval</h1>
            
            <UserInfo />

            <div className="form-container">
                <div className="row">
                    {dateError && <div className="col-12 error-text">From date should not be after To date</div> }
                    <div className="col-12 col-md-3">
                        <Label htmlFor="fromDate" value="From Date" />
                        <Datepicker id="fromDate" name="fromDate" format={userPref.dateFormat} selected={fromDate} endDate={toDate} value={fromDate || ''} handleChange={(date) => updateApprovalInfoDate('fromDate', date)} />
                    </div>
                    <div className="col-12 col-md-3">
                        <Label htmlFor="toDate" value="To Date" />
                        <Datepicker id="toDate" name="toDate" format={userPref.dateFormat} selected={toDate} startDate={fromDate} endDate={toDate} minDate={fromDate} value={fromDate || ''} handleChange={(date) => updateApprovalInfoDate('toDate', date)} />
                    </div>
                    <div className="col-12 col-md-6">
                        <Label value="&nbsp;" />
                        <Button className="secondary mb-20" iconPlace="prefix" icon="check" value="Start Process" disabled={!fromDate || !toDate || processStarted} handleClick={(e) => startProcess(e, fromDate, toDate, userPref.dateFormat)} />
                        <Button className="secondary mb-20" iconPlace="prefix" icon="redo" value="Reset" disabled={!processStarted} handleClick={resetProcess}  />
                    </div>
                </div>
                { days.length > 0 &&
                    <>
                        <h2>Please Select Your Shift</h2>
                        <div className="row">
                            { days.map((day, index) => {
                                return(
                                    <div className="col-12 col-md-4 col-lg-3" key={day.id}>
                                        <Label htmlFor={day.id} value={`Date - ${day.day}`} />
                                        <SelectBox id={day.id} name="shift" handleChange={(e) => updateApprovalInfoDays(e, index)} value={day.shift || ''} options={SHIFT_LIST} placeholder="Select Shift Type" />
                                    </div>
                                )
                            })}
                            <div className="col-12">
                                <TextArea id="comment" name="comment" value={comment || ''} placeholder="Enter your comments" handleChange={updateApprovalInfo} />
                            </div>
                        </div>

                        <div className="btn-container text-right">
                            <Button className="secondary" icon="save" iconPlace="prefix" value="Save" />
                            <Button className="primary" icon="save" iconPlace="prefix" value="Submit" />
                        </div>

                        <hr />

                        <Approval />
                    </>
                }
            </div>
        </>
    )
}

export default WorkSchedule;