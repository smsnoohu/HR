import React, { useState } from 'react';
import TextBox from '../../main/Shared/FormComponents/TextBox';
import RadioButton from '../../main/Shared/FormComponents/RadioButton';
import SelectBox from '../../main/Shared/FormComponents/SelectBox';
import Datepicker from '../../main/Shared/FormComponents/DatePicker/Datepicker';
import { DateFormetter } from '../../utils/DateFormetter';
import { CITY_LIST, COUNTRY_LIST, REQ_DETAIL } from './ExpensesClaimConst';

const RequestDetail = ( { userObject, selectedEmp } ) => {
    const [reqDetail, setReqDetail] = useState(REQ_DETAIL);

    const { reqEmpName, reqEmpID, reqEmpContact, reqJobTitle, reqDept, reqTravelStartDate, reqTravelEndDate, reqTtotalDays, reqTravelPurpose, reqTravelCity, reqTravelCountry, reqTotalAmount, reqIsAdvace, reqAdvace } = reqDetail;

    const updateReqDetail = e => {
        const { name, value } = e.target;
        const newState = {
            ...reqDetail,
            [name]: value
        }
        console.log(name, value, newState);

        setReqDetail(newState);
    }

    const updateReqDate = (name, date) => {
        const formettedDate = DateFormetter(date);
        const newState = {
            ...reqDetail,
            [name]: formettedDate
        }

        setReqDetail(newState);
    }
    return(
        <>
            <h2>Request Detail</h2>
            <div className="row">
                { selectedEmp !== '' && selectedEmp !== null && userObject.userID.toLowerCase() !== selectedEmp.toLowerCase()  &&
                    <>
                        <div className="col-12 col-md-4 col-lg-3">
                            <label className="label" htmlFor="reqEmpName">Employee Name</label>
                            <TextBox id="reqEmpName" name="reqEmpName" value={reqEmpName || ''} placeholder="Employee Name" handleChange={updateReqDetail} />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <label className="label" htmlFor="reqEmpID">Employee ID</label>
                            <TextBox id="reqEmpID" name="reqEmpID" value={reqEmpID || ''} placeholder="Employee ID" handleChange={updateReqDetail} />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <label className="label" htmlFor="reqEmpContact">Contact #</label>
                            <TextBox id="reqEmpContact" name="reqEmpContact" value={reqEmpContact || ''} placeholder="Contact Number" handleChange={updateReqDetail} />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <label className="label" htmlFor="reqJobTitle">Job Title</label>
                            <TextBox id="reqJobTitle" name="reqJobTitle" value={reqJobTitle || ''} placeholder="Job Title" handleChange={updateReqDetail} />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <label className="label" htmlFor="reqDept">Department</label>
                            <TextBox id="reqDept" name="reqDept" value={reqDept || ''} placeholder="Department" handleChange={updateReqDetail} />
                        </div>
                    </>
                }
                <div className="col-12 col-md-4 col-lg-3">
                    <label className="label-block" htmlFor="reqTravelStartDate">Travel Start Date</label>
                    <Datepicker id="reqTravelStartDate" name="reqTravelStartDate" value={reqTravelStartDate || ''} handleChange={(date) => updateReqDate('reqTravelStartDate', date)} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <label className="label-block" htmlFor="reqTravelEndDate">Travel End Date</label>
                    <Datepicker id="reqTravelEndDate" name="reqTravelEndDate" value={reqTravelEndDate || ''} handleChange={(date) => updateReqDate('reqTravelEndDate', date)} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <label className="label" htmlFor="reqTtotalDays"># of Days</label>
                    <TextBox id="reqTtotalDays" name="reqTtotalDays" value={reqTtotalDays || ''} placeholder="Number of Days" handleChange={updateReqDetail} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <label className="label" htmlFor="reqTravelPurpose">Travel Purpose</label>
                    <TextBox id="reqTravelPurpose" name="reqTravelPurpose" value={reqTravelPurpose || ''} placeholder="Travel Purpose" handleChange={updateReqDetail} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <label className="label" htmlFor="reqTravelCountry">Travel Country</label>
                    <SelectBox id="reqTravelCountry" name="reqTravelCountry" handleChange={updateReqDetail} value={reqTravelCountry || ''} options={CITY_LIST} placeholder="Select Country" />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <label className="label" htmlFor="reqTravelCity">Travel City</label>
                    <SelectBox id="reqTravelCity" name="reqTravelCity" handleChange={updateReqDetail} value={reqTravelCity || ''} options={COUNTRY_LIST} placeholder="Select Country" />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <label className="label" htmlFor="reqTotalAmount">Total Amount (SAR)</label>
                    <TextBox id="reqTotalAmount" name="reqTotalAmount" value={reqTotalAmount || ''} placeholder="Total Amount (SAR)" handleChange={updateReqDetail} />
                </div>
            </div>

            <h2>Per Diem Detail</h2>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    <label className="label-block" htmlFor="reqIsAdvace">Advance Received</label>
                    <RadioButton id="reqIsAdvace_Yes" name="reqIsAdvace" value="Yes" handleChange={updateReqDetail} checked={reqIsAdvace === 'Yes'} />
                    <RadioButton id="reqIsAdvace_No" name="reqIsAdvace" value="No" handleChange={updateReqDetail} checked={reqIsAdvace === 'No'} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <label className="label" htmlFor="reqAdvace">Advace Amount (SAR)</label>
                    <TextBox id="reqAdvace" name="reqAdvace" value={reqAdvace || ''} placeholder="Advace Amount (SAR)" handleChange={updateReqDetail} />
                </div>
            </div>
        </>
    )
}

export default RequestDetail;