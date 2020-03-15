import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import Button from '../Shared/FormComponents/Button';
import { CLEARANCE_FIELD, CLEARANCE_OTHERS } from './ClearanceConst';
import Employee from './Departments/Employee/Employee';

const Clearance = () =>{
    console.log('Clearance');

    const { userObject } = useContext(AuthContext);

    const [clearanceValue, setClearanceValue] = useState(CLEARANCE_FIELD);

    const updateClearance = e => {
        const { name, type, checked, value } = e.target;
        let val;
        type === 'checkbox' ? (val = checked ? 'Yes' : 'No') : val = value;
        const newState = {
            ...clearanceValue,
            [name]: val
        }
        setClearanceValue(newState);
    }

    return(
        <>
            <h1>Clearance</h1>
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

            <Employee clearanceValue={clearanceValue} updateClearance={updateClearance} />

            <div className="btn-container">
                <Button className="primary" icon="save" iconPlace="prefix" value="Save" />
                <Button className="primary" icon="save" iconPlace="prefix" value="Submit" />
            </div>
        </>
    );
}

export default Clearance;