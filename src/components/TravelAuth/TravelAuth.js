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
import { ASSIGNMENT_TYPE, CITY_LIST, COUNTRY_LIST, ASSIGNMENT_DETAILS, TRAVEL_SEC_1 } from './TravelAuthConst';

const TravelAuth = () =>{
    console.log('TravelAuth');

    const { userObject } = useContext(AuthContext);
    const [assignmentDetails, setAssignmentDetails] = useState(ASSIGNMENT_DETAILS);
    const [travelSecOne, setTravelSecOne] = useState(TRAVEL_SEC_1);

    const { assignmentType, assignmentAttachment, assignmentDays, assignmentStartDate, assignmentEndDate, resumeDate, destinationCity, destinationCountry, assignmentPurpose } = assignmentDetails;

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
                </div>

                <div className="btn-container text-right">
                    <Button className="secondary" icon="save" iconPlace="prefix" value="Save" />
                    <Button className="primary" icon="check" iconPlace="prefix" value="Submit" />
                </div>

                <hr />

                <h2>To be filled by employee & admin</h2>
            </div>
            
        </>
    );
}

export default TravelAuth;