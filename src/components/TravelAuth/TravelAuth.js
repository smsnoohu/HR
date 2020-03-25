import React, { useContext, useState, Fragment } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import Label from '../../main/Shared/FormComponents/Label';
import TextBox from '../../main/Shared/FormComponents/TextBox';
import TextArea from '../../main/Shared/FormComponents/TextArea';
import RadioButton from '../../main/Shared/FormComponents/RadioButton';
import Button from '../../main/Shared/FormComponents/Button';
import SelectBox from '../../main/Shared/FormComponents/SelectBox';
import File from '../../main/Shared/FormComponents/File';
import Datepicker from '../../main/Shared/FormComponents/DatePicker/Datepicker';
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
                    <div className="col-12 col-md-2">
                        <Label htmlFor="assignmentType" value="Assignment Type" />
                    </div>
                    <div className="col-12 col-md-4">
                        <SelectBox id="assignmentType" name="assignmentType" handleChange={updateAssignmentDetails} value={assignmentType || ''} options={ASSIGNMENT_TYPE} placeholder="Select Assignment Type" />
                    </div>
                    <div className="col-12 col-md-2">
                        <Label htmlFor="assignmentAttachment" value="Assignment Type" />
                    </div>
                    <div className="col-12 col-md-4">
                        <File id="assignmentAttachment" name="assignmentAttachment" value={assignmentAttachment || ''} handleChange={updateAssignmentDetails} />
                    </div>
                </div>

                <h2>To be filled by employee only</h2>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Label htmlFor="assignmentDays" value="Official Assignment Days" />
                        <TextBox id="assignmentDays" name="assignmentDays" value={assignmentDays || ''} maxlength="100" placeholder="Total Official Assignment Days" handleChange={updateAssignmentDetails} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Label htmlFor="assignmentStartDate" value="Assignment Start Date" />
                        <Datepicker id="assignmentStartDate" name="assignmentStartDate" value={assignmentStartDate || ''} handleChange={(date) => updateAssignmentDate('assignmentStartDate', date)} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Label htmlFor="assignmentEndDate" value="Assignment Start Date" />
                        <Datepicker id="assignmentEndDate" name="assignmentEndDate" value={assignmentEndDate || ''} handleChange={(date) => updateAssignmentDate('assignmentEndDate', date)} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Label htmlFor="resumeDate" value="Resume Date" />
                        <Datepicker id="resumeDate" name="resumeDate" value={resumeDate || ''} handleChange={(date) => updateAssignmentDate('resumeDate', date)} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Label htmlFor="destinationCity" value="Destination City" />
                        <SelectBox id="destinationCity" name="destinationCity" handleChange={updateAssignmentDetails} value={destinationCity || ''} options={CITY_LIST} placeholder="Select Destination City" />
                    </div>
                    <div className="col-12 col-md-4">
                        <Label htmlFor="destinationCountry" value="Destination Country" />
                        <SelectBox id="destinationCountry" name="destinationCountry" handleChange={updateAssignmentDetails} value={destinationCountry || ''} options={COUNTRY_LIST} placeholder="Select Destination Country" />
                    </div>
                    <div className="col-12">
                        <Label htmlFor="assignmentPurpose" value="Assignment Purpose" />
                        <TextArea id="assignmentPurpose" name="assignmentPurpose" value={assignmentPurpose || ''} placeholder="Enter purpose of the assignment" handleChailsange={updateAssignmentDetails} />
                    </div>
                </div>

                <div className="row">
                    { travelSecOne.map((travel, index) => {
                        return(
                            <Fragment key={travel.id}>
                                <div className="col-12 col-md-2">
                                    <Label value={travel.labelText} />
                                </div>
                                <div className="col-12 col-md-4">
                                    <RadioButton id={`${travel.id}_${index}_1`} name={`required_flag_${index}`} value="Required" handleChange={(e) => updateSecOne(e, 'isRequired', index)} checked={travel.isRequired === 'Required'} />
                                    <RadioButton id={`${travel.id}_${index}_2`} name={`required_flag_${index}`} value="Not required" handleChange={(e) => updateSecOne(e, 'isRequired', index)} checked={travel.isRequired === 'Not required'} />
                                </div>
                                <div className="col-12 col-md-2">
                                    <Label htmlFor={`${travel.id}_attachment_${index}`} value="Attachment" />
                                </div>
                                <div className="col-12 col-md-4">
                                    { travel.isAttachment && <File id={`${travel.id}_attachment_${index}`} name="attachment" handleChange={handleAssignmentType} handleChange={(e) => updateSecOne(e, 'attachment', index)} /> }
                                </div>
                            </Fragment>
                        )
                    })}

                    <div className="col-12">
                        <Label htmlFor="empComment" value="Employee Comment" />
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
                        <Label htmlFor="totalCost" value="Ticket Cost" />
                        <TextBox id="totalCost" name="totalCost" value={totalCost || ''} placeholder="Enter total cost of the trip" handleChange={updateSecTwo} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Label htmlFor="ticketClass" value="Ticket Class" />
                        <RadioButton id="ticketClass_1" name="ticketClass" value="First" handleChange={updateSecTwo} checked={ticketClass === 'First'} />
                        <RadioButton id="ticketClass_2" name="ticketClass" value="Business" handleChange={updateSecTwo} checked={ticketClass === 'Business'} />
                        <RadioButton id="ticketClass_3" name="ticketClass" value="Economy" handleChange={updateSecTwo} checked={ticketClass === 'Economy'} />
                    </div>
                    { serviceClassification.map((classification, index) => {
                        return(
                            <div className="col-12 col-md-6 col-lg-4" key={classification.id}>
                                <Label htmlFor={`${classification.id}_${index}`} value={`${classification.labelText}${classification.share && ' - ' + classification.share}`} />
                                <RadioButton id={`${classification.id}_${index}_1`} name={`isRequired_${classification.id}`} value="Yes" handleChange={(e) => updateClassification(e, 'isRequired', index)} checked={classification.isRequired === 'Yes'} />
                                <RadioButton id={`${classification.id}_${index}_2`} name={`isRequired_${classification.id}`} value="No" handleChange={(e) => updateClassification(e, 'isRequired', index)} checked={classification.isRequired === 'No'} />
                            </div>
                        )
                    })}

                    <div className="col-12">
                        <Label htmlFor="adminComment" value="Admin Comment" />
                        <TextArea id="adminComment" name="adminComment" value={adminComment || ''} placeholder="Enter your comments" handleChange={updateSecTwo}  />
                    </div>
                </div>

                <div className="btn-container text-right">
                    <Label htmlFor="assignmentType" value="Type" />
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
                                    <Label htmlFor={`cmt_${approve.id}`} value="Comment" />
                                    <TextArea id={`cmt_${approve.id}`} name="approverCmt" value={approve.approverCmt || ''} placeholder="Enter your comments" handleChange={(e) => updateApprove(e, index)}  />
                                </div>
                                <div className="col-12 col-md-4">
                                    <Label htmlFor={`name_${approve.id}`} value="Name" />
                                    <TextBox id={`name_${approve.id}`} name="approverName" value={approve.approverName || ''} placeholder="Enter Your Name" handleChange={(e) => updateApprove(e, index)} />
                                </div>
                                <div className="col-12 col-md-4">
                                    <Label htmlFor={`sign_${approve.id}`} value="Signature" />
                                    <TextBox id={`sign_${approve.id}`} name="approverSign" value={approve.approverSign || ''} placeholder="Enter Your Initial" handleChange={(e) => updateApprove(e, index)} />
                                </div>
                                <div className="col-12 col-md-4">
                                    <Label htmlFor={`sign_${approve.id}`} value="Date" />
                                    <Datepicker id={`date_${approve.id}`} name="approvedDate" value={approve.approvedDate || ''} handleChange={(date) => updateApproveDate('approvedDate', date, index)} />
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
                                <Label htmlFor={`perdiem_${perdiem.id}`} value={perdiem.label} />
                                <TextBox id={`perdiem_${perdiem.id}`} name="value" value={perdiem.value || ''} placeholder={perdiem.label} handleChange={(e) => updatePerdiem(e, index)}  />
                            </div>
                        )
                    })}
                    <div className="col-12 col-md-4">
                        <Label htmlFor="perDiemTotal" value="Per Diem Total Amount" />
                        <TextBox id="perDiemTotal" name="perDiemTotal" value={perDiemTotal || ''} placeholder="Per Diem Total Amount" handleChange={updatePerDiemDetail} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Label htmlFor="perDiemPreparedBy" value="Prepared by" />
                        <TextBox id="perDiemPreparedBy" name="perDiemPreparedBy" value={perDiemPreparedBy || ''} placeholder="Prepared by" handleChange={updatePerDiemDetail} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Label htmlFor="perDiemSubmitDate" value="Date" />
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