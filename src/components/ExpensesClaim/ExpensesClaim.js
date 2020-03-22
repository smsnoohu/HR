import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import { EventContext } from '../../context/EventContextProvider';
import Button from '../../main/Shared/FormComponents/Button';
import SelectBox from '../../main/Shared/FormComponents/SelectBox';
import Modal from '../../main/Shared/Modal/Modal';
import { EMP_LIST, REQ_LIST, SELECTED_EMP_INFO } from './ExpensesClaimConst';

import Approval from './Approval';
import PerDiemExp from './PerDiemExp';
import OtherExp from './OtherExp';
import RequestDetail from './RequestDetail';
import AttachmentModalContent from './AttachmentModalContent';

const ExpensesClaim = () => {
    console.log('Expenses Claim Page');
    const { userObject } = useContext(AuthContext);
    const [selectedEmpInfo, setSelectedEmpInfo] = useState(SELECTED_EMP_INFO);
    const { clicked, toggleComponent } = useContext(EventContext);

    const { selectedEmp, requestType } = selectedEmpInfo;

    const updateEmpList = e => {
        const { name, value } = e.target;
        const newState = {
            ...selectedEmpInfo,
            [name]: value
        }
        console.log(name, value, newState);

        setSelectedEmpInfo(newState);
    }

    return(
        <>
            <h1>Expenses Claim</h1>
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
                    <div className="col-12 col-md-3">
                        <label className="label-block" htmlFor="requestFor">Request for</label>
                        <SelectBox id="requestFor" name="selectedEmp" handleChange={updateEmpList} value={selectedEmp || ''} options={EMP_LIST} placeholder="Select employee to raise request" />
                    </div>
                    <div className="col-12 col-md-3">
                        <label className="label-block" htmlFor="requestType">Request Type</label>
                        <SelectBox id="requestType" name="requestType" handleChange={updateEmpList} value={requestType || ''} options={REQ_LIST} placeholder="Select Request Type" />
                    </div>
                    <div className="col-12 col-md-3 col-lg-3">
                        <label className="label-block" htmlFor="">&nbsp;</label>
                        <Button className="primary" icon="play" iconPlace="prefix" value="Start Process" />
                    </div>
                </div>
                
                <RequestDetail userObject={userObject} selectedEmp={selectedEmp} />

                <PerDiemExp toggleComponent={toggleComponent} />

                <OtherExp toggleComponent={toggleComponent} />

                <div className="btn-container text-right">
                    <Button className="secondary" icon="save" iconPlace="prefix" value="Save" />
                    <Button className="primary" icon="check" iconPlace="prefix" value="Submit" />
                </div>

                <hr />

                <Approval />
            </div>
            {clicked["attachmentModal"] && (
                <Modal modalTitle="View & Attach Documents" escapeClose="true" modalID="attachmentModal" modalSize="modal-lg" isClose="true" modalContent={<AttachmentModalContent />} />
            )}
        </>
    );
}

export default ExpensesClaim;