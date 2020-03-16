import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import Button from '../Shared/FormComponents/Button';
import { CLEARANCE_FIELD, CLEARANCE_APPROVAL, ROLE } from './ClearanceConst';
import Employee from './Departments/Employee/Employee';
import Admin from './Departments/Admin/Admin';
import Finance from './Departments/Finance/Finance';
import IT from './Departments/IT/IT';
import Government from './Departments/Government/Government';
import Industry from './Departments/Industry/Industry';
import Health from './Departments/Health/Health';
import Training from './Departments/Training/Training';
import HR from './Departments/HR/HR';

const Clearance = () =>{
    console.log('Clearance');

    let role;

    const { userObject } = useContext(AuthContext);

    const [clearanceValue, setClearanceValue] = useState(CLEARANCE_FIELD);

    const [approve, setApprove] = useState(CLEARANCE_APPROVAL);

    const updateClearance = e => {
        const { name, type, checked, value } = e.target;
        let val;
        type === 'checkbox' ? (val = checked ? 'Yes' : 'No') : val = value;
        console.log('val, ', name, val);
        const newState = {
            ...clearanceValue,
            [name]: val
        }
        setClearanceValue(newState);

        console.log('clearanceValue: ', newState, clearanceValue);
    }

    const updateApprove = e => {
        const { name, value } = e.target;
        const newState = {
            ...approve,
            [name]: value
        }
        setApprove(newState);

        console.log('approve: ', newState);
    }

    const settingRole = e => {
        if(ROLE.role === 'Manager' && ROLE.dept === 'Admin'){
            role = 'adminManager'
            console.log('role', ROLE, role);
        }
    }

    useEffect(() => {
        settingRole();
        console.log('role', ROLE, role);
    }, []);

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

            <div className="form-container">
                <Employee clearanceValue={clearanceValue} updateClearance={updateClearance} approve={approve} updateApprove={updateApprove} />
                <Admin clearanceValue={clearanceValue} updateClearance={updateClearance} approve={approve} updateApprove={updateApprove} />
                <Finance clearanceValue={clearanceValue} updateClearance={updateClearance} approve={approve} updateApprove={updateApprove} />
                <IT clearanceValue={clearanceValue} updateClearance={updateClearance} approve={approve} updateApprove={updateApprove} />
                <Government clearanceValue={clearanceValue} updateClearance={updateClearance} approve={approve} updateApprove={updateApprove} />
                <Industry clearanceValue={clearanceValue} updateClearance={updateClearance} approve={approve} updateApprove={updateApprove} />
                <Health clearanceValue={clearanceValue} updateClearance={updateClearance} approve={approve} updateApprove={updateApprove} />
                <Training clearanceValue={clearanceValue} updateClearance={updateClearance} approve={approve} updateApprove={updateApprove} />
                <HR clearanceValue={clearanceValue} updateClearance={updateClearance} approve={approve} updateApprove={updateApprove} />
            </div>

            <div className="btn-container text-right">
                <Button className="secondary" icon="save" iconPlace="prefix" value="Save" />
                <Button className="primary" icon="save" iconPlace="prefix" value="Submit" />
            </div>
        </>
    );
}

export default Clearance;