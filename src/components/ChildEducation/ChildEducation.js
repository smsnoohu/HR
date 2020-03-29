import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import Label from '../../main/Shared/FormComponents/Label';
import ChildDetails from './ChildDetails';
import HROApproval from './HROApproval';

const ChildEducation = () => {
    console.log('Children Education Page');
    const { userObject } = useContext(AuthContext);

    return(
        <>
            <h1>Children Education</h1>
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
                <ChildDetails />
                <HROApproval userObject={userObject} />
            </div>
        </>
    )
}

export default ChildEducation;