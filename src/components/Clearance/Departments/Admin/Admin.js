import React, { useState } from 'react';
import Checkbox from '../../../Shared/FormComponents/CheckBox';
import TextBox from '../../../Shared/FormComponents/TextBox';
import TextArea from '../../../Shared/FormComponents/TextArea';
import RadioButton from '../../../Shared/FormComponents/RadioButton';
import Button from '../../../Shared/FormComponents/Button';
import { CLEARANCE_FIELD } from '../../ClearanceConst';

const Admin = ({ clearanceValue, updateClearance, approve, updateApprove }) => {

    const [othersValue, setOthersValue] = useState(CLEARANCE_FIELD.adminOthers);
    const [otherText, setOtherText] = useState({});

    const updateOtherVal = e => {
        const { name, value } = e.target;
        console.log('name, value:', name, value);
        const newState = {
            ...otherText,
            [name]: value
        }
        console.log('name, value:',otherText);

        setOtherText(newState);
    }

    const addOther = (e, otherType) => {
        e.preventDefault();
        let otherTypeLength = othersValue.length;
        let newOtherType = {
            id: otherType + '_' + parseInt(otherTypeLength + 1),
            label: otherText.otherText,
            isGiven: ''
        }

        console.log('newOtherType: ', newOtherType);

        let newState = [...othersValue, newOtherType];
        console.log('newState: ', newState);
        setOthersValue(newState);
        otherText.otherText = '';
    }

    const updateOthers = (e, index) => {

        const { name, type, checked, value } = e.target;
        let val;
        type === 'checkbox' ? (val = checked ? 'Yes' : 'No') : val = value;
        let otherVal = [...othersValue];
        otherVal[index][name] = val;
        setOthersValue(otherVal);
    }

    return(
        <>
            <h2>Administration Services Department</h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isTelephone" name="isTelephone" value={clearanceValue.isTelephone} label="Telephone" handleChange={updateClearance} checked={clearanceValue.isTelephone === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isVehicle" name="isVehicle" value={clearanceValue.isVehicle} label="Vehicle" handleChange={updateClearance} checked={clearanceValue.isVehicle === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isMobile" name="isMobile" value={clearanceValue.isMobile} label="Mobile" handleChange={updateClearance} checked={clearanceValue.isMobile === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isTicket" name="isTicket" value={clearanceValue.isTicket} label="Ticket/Ticket Cancellation Fees" handleChange={updateClearance} checked={clearanceValue.isTicket === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isSimCard" name="isSimCard" value={clearanceValue.isSimCard} label="Sim Card" handleChange={updateClearance} checked={clearanceValue.isSimCard === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isAdminKeys" name="isAdminKeys" value={clearanceValue.isAdminKeys} label="Keys (house/office)" handleChange={updateClearance} checked={clearanceValue.isAdminKeys === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isFurniture" name="isFurniture" value={clearanceValue.isFurniture} label="Furniture" handleChange={updateClearance} checked={clearanceValue.isFurniture === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isUtilities" name="isUtilities" value={clearanceValue.isUtilities} label="Utilities" handleChange={updateClearance} checked={clearanceValue.isUtilities === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isCourier" name="isCourier" value={clearanceValue.isCourier} label="Courier Service" handleChange={updateClearance} checked={clearanceValue.isCourier === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isTelBill" name="isTelBill" value={clearanceValue.isTelBill} label="Telephone Bill" handleChange={updateClearance} checked={clearanceValue.isTelBill === 'Yes' ? true : false} />
                </div>
                { othersValue.length > 0 && 
                    <>
                        {othersValue.map((other, index) => {
                            return(
                                <div className="col-12 col-md-6 col-lg-4" key={other.id}>
                                    <Checkbox id={other.id} name="isGiven" value={other.isGiven} label={other.label} handleChange={(e) => updateOthers(e, index)} checked={other.isGiven === 'Yes' ? true : false} />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
            <div className="row pt-20">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="input-group">
                        <TextBox id="adminOtherText" name="otherText" value={otherText.otherText || ''} placeholder="Enter other type" handleChange={updateOtherVal} />
                        <Button className="secondary" icon="plus" iconPlace="prefix" value="Add Other" disabled={!otherText.otherText} handleClick={(e) => addOther(e, 'adminOthers')} />
                    </div>
                </div>
                <div className="col-12 pt-20">
                    <TextArea id="adminUserComment" name="adminUserComment" value={clearanceValue.adminUserComment || ''} placeholder="Enter your comments" handleChange={updateClearance} />
                </div>
            </div>
            <h2>Administration Services Manager's Approval</h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div>
                        <RadioButton id="adminManagerApprove" name="adminManagerApprove" value="Approve" handleChange={updateApprove} checked={approve.adminManagerApprove.toLowerCase() === ('Approve').toLowerCase()} />
                    </div>
                    <div>
                        <RadioButton id="adminManagerReject" name="adminManagerApprove" value="Reject" handleChange={updateApprove} checked={approve.adminManagerApprove.toLowerCase() === ('Reject').toLowerCase()} />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <TextArea id="adminManagerApproveCmt" name="adminManagerApproveCmt" value={approve.adminManagerApproveCmt || ''} placeholder="Enter your comments" handleChange={updateApprove} disabled={!approve.adminManagerApprove} />
                </div>
            </div>

            <div className="btn-container text-right">
                <Button className="secondary" icon="save" iconPlace="prefix" value="Save" disabled={!approve.adminManagerApproveCmt} />
                <Button className="primary" icon="save" iconPlace="prefix" value="Submit" disabled={!approve.adminManagerApproveCmt} />
            </div>
            <hr />
        </>
    )
}

export default Admin;