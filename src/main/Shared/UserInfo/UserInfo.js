import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContextProvider';
import Label from '../FormComponents/Label';

const UserInfo = () => {
    const { userObject } = useContext(AuthContext);
    return(
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
    )
}

export default UserInfo;