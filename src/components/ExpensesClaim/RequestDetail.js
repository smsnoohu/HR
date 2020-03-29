import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import Label from '../../main/Shared/FormComponents/Label';
import TextBox from '../../main/Shared/FormComponents/TextBox';
import RadioButton from '../../main/Shared/FormComponents/RadioButton';
import SelectBox from '../../main/Shared/FormComponents/SelectBox';
import Datepicker from '../../main/Shared/FormComponents/DatePicker/Datepicker';
import { CITY_LIST, COUNTRY_LIST, REQ_DETAIL } from './ExpensesClaimConst';

const RequestDetail = ( { userObject, selectedEmp } ) => {

    const { userPref } = useContext(AuthContext);
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
        const newState = {
            ...reqDetail,
            [name]: date
        }
        console.log('date: ', date);
        setReqDetail(newState);
    }
    return(
        <>
            <h2>Request Detail</h2>
            <div className="row">
                { selectedEmp !== '' && selectedEmp !== null && userObject.userID.toLowerCase() !== selectedEmp.toLowerCase()  &&
                    <>
                        <div className="col-12 col-md-4 col-lg-3">
                            <Label htmlFor="reqEmpName" value="Employee Name" />
                            <TextBox id="reqEmpName" name="reqEmpName" value={reqEmpName || ''} placeholder="Employee Name" handleChange={updateReqDetail} />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <Label htmlFor="reqEmpID" value="Employee ID" />
                            <TextBox id="reqEmpID" name="reqEmpID" value={reqEmpID || ''} placeholder="Employee ID" handleChange={updateReqDetail} />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <Label htmlFor="reqEmpContact" value="Contact #" />
                            <TextBox id="reqEmpContact" name="reqEmpContact" value={reqEmpContact || ''} placeholder="Contact Number" handleChange={updateReqDetail} />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <Label htmlFor="reqJobTitle" value="Job Title" />
                            <TextBox id="reqJobTitle" name="reqJobTitle" value={reqJobTitle || ''} placeholder="Job Title" handleChange={updateReqDetail} />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <Label htmlFor="reqDept" value="Department" />
                            <TextBox id="reqDept" name="reqDept" value={reqDept || ''} placeholder="Department" handleChange={updateReqDetail} />
                        </div>
                    </>
                }
                <div className="col-12 col-md-4 col-lg-3">
                    <Label htmlFor="reqTravelStartDate" value="Travel Start Date" />
                    <Datepicker id="reqTravelStartDate" name="reqTravelStartDate" format={userPref.dateFormat} selected={reqTravelStartDate} endDate={reqTravelEndDate} value={reqTravelStartDate || ''} handleChange={(date) => updateReqDate('reqTravelStartDate', date)} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Label htmlFor="reqTravelEndDate" value="Travel End Date" />
                    <Datepicker id="reqTravelEndDate" name="reqTravelEndDate" format={userPref.dateFormat} selected={reqTravelEndDate} startDate={reqTravelStartDate} endDate={reqTravelEndDate} minDate={reqTravelStartDate} value={reqTravelEndDate || ''} handleChange={(date) => updateReqDate('reqTravelEndDate', date)} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Label htmlFor="reqTtotalDays" value="# of Days" />
                    <TextBox id="reqTtotalDays" name="reqTtotalDays" value={reqTtotalDays || ''} placeholder="Number of Days" handleChange={updateReqDetail} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Label htmlFor="reqTravelPurpose" value="Travel Purpose" />
                    <TextBox id="reqTravelPurpose" name="reqTravelPurpose" value={reqTravelPurpose || ''} placeholder="Travel Purpose" handleChange={updateReqDetail} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Label htmlFor="reqTravelCountry" value="Travel Country" />
                    <SelectBox id="reqTravelCountry" name="reqTravelCountry" handleChange={updateReqDetail} value={reqTravelCountry || ''} options={CITY_LIST} placeholder="Select Country" />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Label htmlFor="reqTravelCity" value="Travel City" />
                    <SelectBox id="reqTravelCity" name="reqTravelCity" handleChange={updateReqDetail} value={reqTravelCity || ''} options={COUNTRY_LIST} placeholder="Select Country" />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Label htmlFor="reqTotalAmount" value="Total Amount (SAR)" />
                    <TextBox id="reqTotalAmount" name="reqTotalAmount" value={reqTotalAmount || ''} placeholder="Total Amount (SAR)" handleChange={updateReqDetail} />
                </div>
            </div>

            <h2>Per Diem Detail</h2>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    <Label htmlFor="reqIsAdvace" value="Advance Received" />
                    <RadioButton id="reqIsAdvace_Yes" name="reqIsAdvace" value="Yes" handleChange={updateReqDetail} checked={reqIsAdvace === 'Yes'} />
                    <RadioButton id="reqIsAdvace_No" name="reqIsAdvace" value="No" handleChange={updateReqDetail} checked={reqIsAdvace === 'No'} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Label htmlFor="reqAdvace" value="Advace Amount (SAR)" />
                    <TextBox id="reqAdvace" name="reqAdvace" value={reqAdvace || ''} placeholder="Advace Amount (SAR)" handleChange={updateReqDetail} />
                </div>
            </div>
        </>
    )
}

export default RequestDetail;