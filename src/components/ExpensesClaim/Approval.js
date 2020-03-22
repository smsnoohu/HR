import React, { useState, Fragment } from 'react';
import TextBox from '../../main/Shared/FormComponents/TextBox';
import TextArea from '../../main/Shared/FormComponents/TextArea';
import Button from '../../main/Shared/FormComponents/Button';
import Datepicker from '../../main/Shared/FormComponents/DatePicker/Datepicker';
import { DateFormetter } from '../../utils/DateFormetter';
import { EXPENSES_APPROVAL } from './ExpensesClaimConst';

const Approval = () => {
    const [approval, setApproval] = useState(EXPENSES_APPROVAL);

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
    return(
        <>
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
        </>
    )
}

export default Approval;