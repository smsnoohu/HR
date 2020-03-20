import React, { useContext, useState, Fragment } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import Checkbox from '../Shared/FormComponents/CheckBox';
import TextBox from '../Shared/FormComponents/TextBox';
import TextArea from '../Shared/FormComponents/TextArea';
import RadioButton from '../Shared/FormComponents/RadioButton';
import Button from '../Shared/FormComponents/Button';
import SelectBox from '../Shared/FormComponents/SelectBox';
import File from '../Shared/FormComponents/File';
import Datepicker from '../Shared/FormComponents/DatePicker/Datepicker';
import { DateFormetter } from '../../utils/DateFormetter';
import { ASSIGNMENT_TYPE, CITY_LIST, COUNTRY_LIST, ASSIGNMENT_DETAILS, TRAVEL_SEC_1, TRAVEL_SEC_2, TRAVEL_APPROVAL, PERDIEM_INFO } from './TravelAuthConst';

const TravelAuth = () =>{
    console.log('TravelAuth');

    const { userObject } = useContext(AuthContext);
    const [assignmentDetails, setAssignmentDetails] = useState(ASSIGNMENT_DETAILS);
    const [travelSecOne, setTravelSecOne] = useState(TRAVEL_SEC_1.empRequirement);
    const [travelSecOneComment, setTravelSecOneComment] = useState(TRAVEL_SEC_1);
    const [travelSecSec, setTravelSecSec] = useState(TRAVEL_SEC_2);
    const [serviceClassification, setServiceClassification] = useState(TRAVEL_SEC_2.serviceClassification);
    const [approval, setApproval] = useState(TRAVEL_APPROVAL);
    const [perDiem, setPerDiem] = useState(PERDIEM_INFO.perDiemDetails);
    const [perDiemDetail, setPerDiemDetail] = useState(PERDIEM_INFO);

    const { empComment } = travelSecOneComment

    const { assignmentType, assignmentAttachment, assignmentDays, assignmentStartDate, assignmentEndDate, resumeDate, destinationCity, destinationCountry, assignmentPurpose } = assignmentDetails;

    const { totalCost, ticketClass, adminComment } = travelSecSec;

    const { perDiemTotal, perDiemPreparedBy, perDiemSubmitDate } = perDiemDetail;

    const handleAssignmentType = e => {

    }

    const updateAssignmentDetails = e => {
        const { name, value } = e.target;

        const newState = {
            ...assignmentDetails,
            [name]: value
        }

        setAssignmentDetails(newState);
    }

    const updateAssignmentDate = (name, date) => {
        const formettedDate = DateFormetter(date);
        const newState = {
            ...assignmentDetails,
            [name]: formettedDate
        }
        setAssignmentDetails(newState);
    }

    const updateSecOne = (e, name, index) => {
        const { value } = e.target;

        const newState = [...travelSecOne];

        newState[index][name] = value;

        setTravelSecOne(newState);
    }

    const updateTravelSecOneComment = e => {
        const { name, value } = e.target;
        const newState = {
            ...travelSecOneComment,
            [name]: value
        }
        setTravelSecOneComment(newState);
    }

    const updateSecTwo = e => {
        const { name, value } = e.target;

        const newState = {
            ...travelSecSec,
            [name]: value
        }

        setTravelSecSec(newState);
    }

    const updateClassification = (e, name, index) => {
        const { value } = e.target;

        const newState = [...serviceClassification];

        newState[index][name] = value;

        setServiceClassification(newState);
    }

    const updateApprove = (e, index) => {
        
        const { name, value } = e.target;
        
        const newState = [...approval];
        newState[index][name] = value;
        setApproval(newState);
    }

    const updateApproveDate = (name, date, index) => {
        const formettedDate = DateFormetter(date);
        const newState = [...approval];
        newState[index][name] = formettedDate;
        setApproval(newState);
    } 

    const updatePerdiem = (e, index) => {
        const { name, value } = e.target;
        
        const newState = [...perDiem];
        newState[index][name] = value;
        setPerDiem(newState);
    }

    const updatePerDiemDetail = e => {
        const { name, value } = e.target;

        const newState = {
            ...perDiemDetail,
            [name]: value
        }
        setPerDiemDetail(newState);
    }

    const updatePerDiemDate = (name, date) => {
        const formettedDate = DateFormetter(date);

        const newState = {
            ...perDiemDetail,
            [name]: formettedDate
        }
        setPerDiemDetail(newState);
    }

    return(
        <>
            <h1>TravelAuth</h1>
            <div className="card">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Empoyee ID #</label>
                        <p>{userObject.userID}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Employee Name</label>
                        <p>{userObject.EmployeeName}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Primary Contact #</label>
                        <p>{userObject.PrimaryContactNo}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Job Title & Department</label>
                        <p>{userObject.jobTitle} - {userObject.dept}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Hiring Date</label>
                        <p>{userObject.hiringDate}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Type of work</label>
                        <p>{userObject.typeOfWork}</p>
                    </div>
                </div>
            </div>

            <div className="form-container">
                <div className="row">
                    <div className="col-12 col-md-2">
                        <label className="label" htmlFor="assignmentType">Assignment Type</label>
                    </div>
                    <div className="col-12 col-md-4">
                        <SelectBox id="assignmentType" name="assignmentType" handleChange={updateAssignmentDetails} value={assignmentType || ''} options={ASSIGNMENT_TYPE} placeholder="Select Assignment Type" />
                    </div>
                    <div className="col-12 col-md-2">
                        <label className="label" htmlFor="assignmentAttachment">Assignment Type</label>
                    </div>
                    <div className="col-12 col-md-4">
                        <File id="assignmentAttachment" name="assignmentAttachment" value={assignmentAttachment || ''} handleChange={updateAssignmentDetails} />
                    </div>
                </div>

                <h2>To be filled by employee only</h2>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="assignmentDays">Official Assignment Days</label>
                        <TextBox id="assignmentDays" name="assignmentDays" value={assignmentDays || ''} maxlength="100" placeholder="Total Official Assignment Days" handleChange={updateAssignmentDetails} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="assignmentStartDate">Assignment Start Date</label>
                        <Datepicker id="assignmentStartDate" name="assignmentStartDate" value={assignmentStartDate || ''} handleChange={(date) => updateAssignmentDate('assignmentStartDate', date)} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="assignmentEndDate">Assignment Start Date</label>
                        <Datepicker id="assignmentEndDate" name="assignmentEndDate" value={assignmentEndDate || ''} handleChange={(date) => updateAssignmentDate('assignmentEndDate', date)} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="resumeDate">Assignment End Date</label>
                        <Datepicker id="resumeDate" name="resumeDate" value={resumeDate || ''} handleChange={(date) => updateAssignmentDate('resumeDate', date)} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="destinationCity">Destination City</label>
                        <SelectBox id="destinationCity" name="destinationCity" handleChange={updateAssignmentDetails} value={destinationCity || ''} options={CITY_LIST} placeholder="Select Destination City" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="destinationCountry">Destination Country</label>
                        <SelectBox id="destinationCountry" name="destinationCountry" handleChange={updateAssignmentDetails} value={destinationCountry || ''} options={COUNTRY_LIST} placeholder="Select Destination Country" />
                    </div>
                    <div className="col-12">
                        <label className="label-block" htmlFor="assignmentPurpose">Assignment Purpose</label>
                        <TextArea id="assignmentPurpose" name="assignmentPurpose" value={assignmentPurpose || ''} placeholder="Enter purpose of the assignment" handleChailsange={updateAssignmentDetails} />
                    </div>
                </div>

                <div className="row">
                    { travelSecOne.map((travel, index) => {
                        return(
                            <Fragment key={travel.id}>
                                <div className="col-12 col-md-2">
                                    <label className="label" htmlFor={travel.id}>{travel.labelText}</label>
                                </div>
                                <div className="col-12 col-md-4">
                                    <RadioButton id={`${travel.id}_${index}_1`} name={`required_flag_${index}`} value="Required" handleChange={(e) => updateSecOne(e, 'isRequired', index)} checked={travel.isRequired === 'Required'} />
                                    <RadioButton id={`${travel.id}_${index}_2`} name={`required_flag_${index}`} value="Not required" handleChange={(e) => updateSecOne(e, 'isRequired', index)} checked={travel.isRequired === 'Not required'} />
                                </div>
                                <div className="col-12 col-md-2">
                                    <label className="label" htmlFor={`${travel.id}_attachment_${index}`}>Attachment</label>
                                </div>
                                <div className="col-12 col-md-4">
                                    <File id={`${travel.id}_attachment_${index}`} name="attachment" handleChange={handleAssignmentType} handleChange={(e) => updateSecOne(e, 'attachment', index)} />
                                </div>
                            </Fragment>
                        )
                    })}

                    <div className="col-12">
                        <label className="label-block" htmlFor="empComment">Employee Comment</label>
                        <TextArea id="empComment" name="empComment" value={empComment || ''} placeholder="Enter your comments" handleChange={updateTravelSecOneComment}  />
                    </div>
                </div>

                <div className="btn-container text-right">
                    <Button className="secondary" icon="save" iconPlace="prefix" value="Save" />
                    <Button className="primary" icon="check" iconPlace="prefix" value="Submit" />
                </div>

                <hr />

                <h2>To be filled by employee & admin</h2>

                <p>Type of services rendered by company</p>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="label-block" htmlFor="totalCost">Ticket Cost</label>
                        <TextBox id="totalCost" name="totalCost" value={totalCost || ''} placeholder="Enter total cost of the trip" handleChange={updateSecTwo} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="label-block" htmlFor="ticketClass">Ticket Class</label>
                        <RadioButton id="ticketClass_1" name="ticketClass" value="First" handleChange={updateSecTwo} checked={ticketClass === 'First'} />
                        <RadioButton id="ticketClass_2" name="ticketClass" value="Business" handleChange={updateSecTwo} checked={ticketClass === 'Business'} />
                        <RadioButton id="ticketClass_3" name="ticketClass" value="Economy" handleChange={updateSecTwo} checked={ticketClass === 'Economy'} />
                    </div>
                    { serviceClassification.map((classification, index) => {
                        return(
                            <div className="col-12 col-md-6 col-lg-4" key={classification.id}>
                                <label className="label-block" htmlFor={`${classification.id}_${index}`}>{classification.labelText}{classification.share && ' - ' + classification.share}</label>
                                <RadioButton id={`${classification.id}_${index}_1`} name={`isRequired_${classification.id}`} value="Yes" handleChange={(e) => updateClassification(e, 'isRequired', index)} checked={classification.isRequired === 'Yes'} />
                                <RadioButton id={`${classification.id}_${index}_2`} name={`isRequired_${classification.id}`} value="No" handleChange={(e) => updateClassification(e, 'isRequired', index)} checked={classification.isRequired === 'No'} />
                            </div>
                        )
                    })}

                    <div className="col-12">
                        <label className="label-block" htmlFor="adminComment">Admin Comment</label>
                        <TextArea id="adminComment" name="adminComment" value={adminComment || ''} placeholder="Enter your comments" handleChange={updateSecTwo}  />
                    </div>
                </div>

                <div className="btn-container text-right">
                    <Button className="secondary" icon="save" iconPlace="prefix" value="Save" />
                    <Button className="primary" icon="check" iconPlace="prefix" value="Submit" />
                </div>

                <hr />

                <h2>Review & Approve</h2>
                { approval.map((approve, index) => {
                    return(
                        <Fragment key={approve.id}>
                            <h3>{approve.approverContext} {approve.approverPosition}</h3>
                            <div className="row">
                                <div className="col-12">
                                    <label className="label-block" htmlFor={`cmt_${approve.id}`}>Comment</label>
                                    <TextArea id={`cmt_${approve.id}`} name="approverCmt" value={approve.approverCmt || ''} placeholder="Enter your comments" handleChange={(e) => updateApprove(e, index)}  />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label className="label-block" htmlFor={`name_${approve.id}`}>Name</label>
                                    <TextBox id={`name_${approve.id}`} name="approverName" value={approve.approverName || ''} placeholder="Enter Your Name" handleChange={(e) => updateApprove(e, index)} />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label className="label-block" htmlFor={`sign_${approve.id}`}>Signature</label>
                                    <TextBox id={`sign_${approve.id}`} name="approverSign" value={approve.approverSign || ''} placeholder="Enter Your Initial" handleChange={(e) => updateApprove(e, index)} />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label className="label-block" htmlFor={`sign_${approve.id}`}>Signature</label>
                                    <Datepicker id="approvedDate" name="approvedDate" value={approve.approvedDate || ''} handleChange={(date) => updateApproveDate('approvedDate', date, index)} />
                                </div>
                            </div>
                            <div className="btn-container text-right">
                                <Button className="secondary" icon="save" iconPlace="prefix" value="Save" />
                                <Button className="primary" icon="check" iconPlace="prefix" value="Submit" />
                            </div>
                            <hr />
                        </Fragment>
                    )
                })}

                <h2>Per Diem Info</h2>
                <div className="row">
                    { perDiem.map((perdiem, index) => {
                        return(
                            <div className="col-12 col-md-4" key={perdiem.id}>
                                <label className="label-block" htmlFor={`perdiem_${perdiem.id}`}>{perdiem.label}</label>
                                <TextBox id={`perdiem_${perdiem.id}`} name="value" value={perdiem.value || ''} placeholder={perdiem.label} handleChange={(e) => updatePerdiem(e, index)}  />
                            </div>
                        )
                    })}
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="perDiemTotal">Per Diem Total Amount</label>
                        <TextBox id="perDiemTotal" name="perDiemTotal" value={perDiemTotal || ''} placeholder="Per Diem Total Amount" handleChange={updatePerDiemDetail} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="perDiemPreparedBy">Prepared by</label>
                        <TextBox id="perDiemPreparedBy" name="perDiemPreparedBy" value={perDiemPreparedBy || ''} placeholder="Prepared by" handleChange={updatePerDiemDetail} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="label-block" htmlFor="perDiemSubmitDate">Date</label>
                        <Datepicker id="perDiemSubmitDate" name="perDiemSubmitDate" value={perDiemSubmitDate || ''} handleChange={(date) => updatePerDiemDate('perDiemSubmitDate', date)} />
                    </div>
                </div>
                <div className="btn-container text-right">
                    <Button className="secondary" icon="save" iconPlace="prefix" value="Save" />
                    <Button className="primary" icon="check" iconPlace="prefix" value="Submit" />
                </div>
            </div>
            
        </>
    );
}

export default TravelAuth;