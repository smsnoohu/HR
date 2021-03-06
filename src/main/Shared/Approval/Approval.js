import React, { useContext, useState, Fragment } from 'react';
import { AuthContext } from '../../../context/AuthContextProvider';
import Label from '../FormComponents/Label';
import Datepicker from '../FormComponents/DatePicker/Datepicker';
import Button from '../FormComponents/Button';
import TextArea from '../FormComponents/TextArea';
import { APPROVAL } from './ApprovalConst';

const Approval = () => {

    const { userObject, userPref } = useContext(AuthContext);

    const [approval, setApproval] = useState(APPROVAL);

    const updateApprove = (e, index) => {
        const { name, type, checked, value } = e.target;
        let val;
        type === 'checkbox' ? (val = checked ? 'Yes' : 'No') : val = value;

        const newState = [...approval];
        newState[index][name] = val;
        setApproval(newState);
    }

    const updateApproveDate = (name, date, index) => {
        const newState = [...approval];
        newState[index][name] = date;
        setApproval(newState);
    }

    return(
        <>
            { approval.map((approve, index) => {
                return(
                    <Fragment key={approve.id}>
                        <h3>{approve.approverContext} {approve.approverName}</h3>
                        <div className="card">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <Label value="Approver ID" />
                                    <p>{approve.approverID}</p>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <Label value="Job Title & Department" />
                                    <p>{approve.approverPosition} & {approve.approverDept}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-20">
                            <div className="col-12 col-md-9">
                                <Label htmlFor={`cmt_${approve.id}`} value="Comment" />
                                <TextArea id={`cmt_${approve.id}`} name="approverCmt" value={approve.approverCmt || ''} placeholder="Enter your comments" handleChange={(e) => updateApprove(e, index)} disabled={userObject.userID.toLowerCase() !== approve.approverID.toLowerCase()} />
                            </div>
                            <div className="col-12 col-md-3">
                                <Label htmlFor={`date_${approve.id}`} value="Date" />
                                <Datepicker id={`date_${approve.id}`} name="approvedDate" format={userPref.dateFormat} selected={approve.approvedDate} value={approve.approvedDate || ''} handleChange={(date) => updateApproveDate('approvedDate', date, index)} disabled={userObject.userID.toLowerCase() !== approve.approverID.toLowerCase()} />
                            </div>
                        </div>
                        <div className="btn-container text-right">
                            <Button className="secondary" icon="save" iconPlace="prefix" value="Save" disabled={userObject.userID.toLowerCase() !== approve.approverID.toLowerCase()} />
                            <Button className="primary" icon="save" iconPlace="prefix" value="Submit" disabled={userObject.userID.toLowerCase() !== approve.approverID.toLowerCase()} />
                        </div>
                        <hr />
                    </Fragment>
                )
            })}
        </>
    )
}

export default Approval;