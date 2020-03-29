import React, { useContext, useState, Fragment } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import Label from '../../main/Shared/FormComponents/Label';
import TextBox from '../../main/Shared/FormComponents/TextBox';
import Datepicker from '../../main/Shared/FormComponents/DatePicker/Datepicker';
import Button from '../../main/Shared/FormComponents/Button';
import TextArea from '../../main/Shared/FormComponents/TextArea';
import { HR_DEPT, APPROVAL } from './ChildEducationConst';

const HROApproval = ({ userObject }) => {

    const { userPref } = useContext(AuthContext);

    const [hrUpdate, setHrUpdate] = useState(HR_DEPT);

    const { maxEligibility, noOfEligibleChild, totalEligibility, feeDurationFromDate, feeDurationToDate, empPaid, reminingAmount, totalFees } = hrUpdate;

    const [approval, setApproval] = useState(APPROVAL);

    const updateHRO = e => {
        const { name, type, checked, value } = e.target;
        let val;
        type === 'checkbox' ? (val = checked ? 'Yes' : 'No') : val = value;

        const newState = {
            ...hrUpdate,
            [name]: val
        };
        setHrUpdate(newState);
    }

    const updateHRODate = (name, date) => {
        const newState = {
            ...hrUpdate,
            [name]: date
        };
        setHrUpdate(newState);
    }

    const updateApprove = (e, index) => {
        const { name, type, checked, value } = e.target;
        let val;
        type === 'checkbox' ? (val = checked ? 'Yes' : 'No') : val = value;

        const newState = [...approval];
        newState[index][name] = val;
        setApproval(newState);
    }

    const updateApproveDate = (name, date, index) => {
        const newState = [...approval];
        newState[index][name] = date;
        setApproval(newState);
    }

    return(
        <>
            <h2>To be completed by HRO department</h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <Label htmlFor="maxEligibility" value="Maximum Eligibility Per Child" />
                    <TextBox id="maxEligibility" name="maxEligibility" value={maxEligibility || ''} placeholder="Maximum Eligibility Per Child" handleChange={updateHRO} />
                </div>
                <div className="col-12 col-md-4">
                    <Label htmlFor="noOfEligibleChild" value="No. of Eligible Children" />
                    <TextBox id="noOfEligibleChild" name="noOfEligibleChild" value={noOfEligibleChild || ''} placeholder="No. of Eligible Children" handleChange={updateHRO} />
                </div>
                <div className="col-12 col-md-4">
                    <Label htmlFor="totalEligibility" value="Total of Eligibility Per Year" />
                    <TextBox id="totalEligibility" name="totalEligibility" value={totalEligibility || ''} placeholder="Total of Eligibility Per Year" handleChange={updateHRO} />
                </div>
                <div className="col-12 col-md-12">
                    <Label value="Duration of Fees" />
                    <Label className="label-inline" htmlFor="feeDurationFromDate" value="From Date" />
                    <Datepicker id="feeDurationFromDate" name="feeDurationFromDate" format={userPref.dateFormat} selected={feeDurationFromDate} endDate={feeDurationToDate} value={feeDurationFromDate || ''} handleChange={(date) => updateHRODate('feeDurationFromDate', date)} />
                    <Label className="label-inline pl-20" htmlFor="feeDurationToDate" value="To Date" />
                    <Datepicker id="feeDurationToDate" name="feeDurationToDate" format={userPref.dateFormat} selected={feeDurationToDate} startDate={feeDurationFromDate} endDate={feeDurationToDate} minDate={feeDurationFromDate} value={feeDurationToDate || ''} handleChange={(date) => updateHRODate('feeDurationToDate', date)} />
                </div>
                <div className="col-12 col-md-4">
                    <Label htmlFor="empPaid" value="Emp. Paid Amount" />
                    <TextBox id="empPaid" name="empPaid" value={empPaid || ''} placeholder="Emp. Paid Amount" handleChange={updateHRO} />
                </div>
                <div className="col-12 col-md-4">
                    <Label htmlFor="reminingAmount" value="Remaining Amount" />
                    <TextBox id="reminingAmount" name="reminingAmount" value={reminingAmount || ''} placeholder="Remaining Amount" handleChange={updateHRO} />
                </div>
                <div className="col-12 col-md-4">
                    <Label htmlFor="totalFees" value="Total Eligible Children Education Assistance Fees (SAR)" />
                    <TextBox id="totalFees" name="totalFees" value={totalFees || ''} placeholder="Total Eligible Children Education Assistance Fees (SAR)" handleChange={updateHRO} />
                </div>
            </div>
            <hr />
            { approval.map((approve, index) => {
                return(
                    <Fragment key={approve.id}>
                        <h3>{approve.approverContext} {approve.approverName}</h3>
                        <div className="card">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <Label value="Approver ID" />
                                    <p>{approve.approverID}</p>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <Label value="Job Title & Department" />
                                    <p>{approve.approverPosition} & {approve.approverDept}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-20">
                            <div className="col-12 col-md-9">
                                <Label htmlFor={`cmt_${approve.id}`} value="Comment" />
                                <TextArea id={`cmt_${approve.id}`} name="approverCmt" value={approve.approverCmt || ''} placeholder="Enter your comments" handleChange={(e) => updateApprove(e, index)} disabled={userObject.userID.toLowerCase() !== approve.approverID.toLowerCase()} />
                            </div>
                            <div className="col-12 col-md-3">
                                <Label htmlFor={`date_${approve.id}`} value="Date" />
                                <Datepicker id={`date_${approve.id}`} name="approvedDate" format={userPref.dateFormat} selected={approve.approvedDate} value={approve.approvedDate || ''} handleChange={(date) => updateApproveDate('approvedDate', date, index)} disabled={userObject.userID.toLowerCase() !== approve.approverID.toLowerCase()} />
                            </div>
                        </div>
                        <div className="btn-container text-right">
                            <Button className="secondary" icon="save" iconPlace="prefix" value="Save" disabled={userObject.userID.toLowerCase() !== approve.approverID.toLowerCase()} />
                            <Button className="primary" icon="save" iconPlace="prefix" value="Submit" disabled={userObject.userID.toLowerCase() !== approve.approverID.toLowerCase()} />
                        </div>
                        <hr />
                    </Fragment>
                )
            })}
        </>
    )
}

export default HROApproval;