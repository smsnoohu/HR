import React, { useState } from 'react';
import Checkbox from '../../../../main/Shared/FormComponents/CheckBox';
import TextBox from '../../../../main/Shared/FormComponents/TextBox';
import TextArea from '../../../../main/Shared/FormComponents/TextArea';
import RadioButton from '../../../../main/Shared/FormComponents/RadioButton';
import Button from '../../../../main/Shared/FormComponents/Button';
import { CLEARANCE_FIELD } from '../../ClearanceConst';

const Employee = ({ clearanceValue, updateClearance, approve, updateApprove }) => {

    const [othersValue, setOthersValue] = useState(CLEARANCE_FIELD.empOthers);
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
            <h2>Employee Department</h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isBook" name="isBook" value={clearanceValue.isBook} label="Books / Drawings / Documents" handleChange={updateClearance} checked={clearanceValue.isBook === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isKeys" name="isKeys" value={clearanceValue.isKeys} label="Keys" handleChange={updateClearance} checked={clearanceValue.isKeys === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isTools" name="isTools" value={clearanceValue.isTools} label="Tools" handleChange={updateClearance} checked={clearanceValue.isTools === 'Yes' ? true : false} />
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
                        <TextBox id="empOtherText" name="otherText" value={otherText.otherText || ''} placeholder="Enter other type" handleChange={updateOtherVal} />
                        <Button className="secondary" icon="plus" iconPlace="prefix" value="Add Other" disabled={!otherText.otherText} handleClick={(e) => addOther(e, 'empOthers')} />
                    </div>
                </div>
                <div className="col-12 pt-20">
                    <TextArea id="empUserComment" name="empUserComment" value={clearanceValue.empUserComment || ''} placeholder="Enter your comments" handleChange={updateClearance} />
                </div>
            </div>
            <h2>Employee’s Department Manager's Approval</h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div>
                        <RadioButton id="empManagerApprove" name="empManagerApprove" value="Approve" handleChange={updateApprove} checked={approve.empManagerApprove.toLowerCase() === ('Approve').toLowerCase()} />
                    </div>
                    <div>
                        <RadioButton id="empManagerReject" name="empManagerApprove" value="Reject" handleChange={updateApprove} checked={approve.empManagerApprove.toLowerCase() === ('Reject').toLowerCase()} />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <TextArea id="empManagerApproveCmt" name="empManagerApproveCmt" value={approve.empManagerApproveCmt || ''} placeholder="Enter your comments" handleChange={updateApprove} disabled={!approve.empManagerApprove} />
                </div>
            </div>

            <div className="btn-container text-right">
                <Button className="secondary" icon="save" iconPlace="prefix" value="Save" disabled={!approve.empManagerApproveCmt} />
                <Button className="primary" icon="save" iconPlace="prefix" value="Submit" disabled={!approve.empManagerApproveCmt} />
            </div>
            <hr />
        </>
    )
}

export default Employee;