import React, { useState } from 'react';
import Checkbox from '../../../Shared/FormComponents/CheckBox';
import TextBox from '../../../Shared/FormComponents/TextBox';
import TextArea from '../../../Shared/FormComponents/TextArea';
import Button from '../../../Shared/FormComponents/Button';
import RadioButton from '../../../Shared/FormComponents/RadioButton';
import { CLEARANCE_FIELD } from '../../ClearanceConst';

const Health = ({ clearanceValue, updateClearance, approve, updateApprove }) => {

    const [othersValue, setOthersValue] = useState(CLEARANCE_FIELD.healthOthers);
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
            <h2>Health & Safety Department</h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isPPE" name="isPPE" value={clearanceValue.isPPE} label="PPE" handleChange={updateClearance} checked={clearanceValue.isPPE === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isPlans" name="isPlans" value={clearanceValue.isPlans} label="Plans/Drawings/Manuals" handleChange={updateClearance} checked={clearanceValue.isPlans === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isSafetyEquip" name="isSafetyEquip" value={clearanceValue.isSafetyEquip} label="Safety/Fire Equipment" handleChange={updateClearance} checked={clearanceValue.isSafetyEquip === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isTesting" name="isTesting" value={clearanceValue.isTesting} label="Testing & Measuring Equipment" handleChange={updateClearance} checked={clearanceValue.isTesting === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isHealthTools" name="isHealthTools" value={clearanceValue.isHealthTools} label="Tools" handleChange={updateClearance} checked={clearanceValue.isHealthTools === 'Yes' ? true : false} />
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
                        <TextBox id="healthOtherText" name="otherText" value={otherText.otherText || ''} placeholder="Enter other type" handleChange={updateOtherVal} />
                        <Button className="secondary" icon="plus" iconPlace="prefix" value="Add Other" disabled={!otherText.otherText} handleClick={(e) => addOther(e, 'healthOthers')} />
                    </div>
                </div>
                <div className="col-12 pt-20">
                    <TextArea id="healthUserComment" name="healthUserComment" value={clearanceValue.healthUserComment || ''} placeholder="Enter your comments" handleChange={updateClearance} />
                </div>
            </div>
            <h2>Health & Safety Manager's Approval</h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div>
                        <RadioButton id="healthManagerApprove" name="healthManagerApprove" value="Approve" handleChange={updateApprove} checked={approve.healthManagerApprove.toLowerCase() === ('Approve').toLowerCase()} />
                    </div>
                    <div>
                        <RadioButton id="healthManagerReject" name="healthManagerApprove" value="Reject" handleChange={updateApprove} checked={approve.healthManagerApprove.toLowerCase() === ('Reject').toLowerCase()} />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <TextArea id="healthManagerApproveCmt" name="healthManagerApproveCmt" value={approve.healthManagerApproveCmt || ''} placeholder="Enter your comments" handleChange={updateApprove} disabled={!approve.healthManagerApprove} />
                </div>
            </div>

            <div className="btn-container text-right">
                <Button className="secondary" icon="save" iconPlace="prefix" value="Save" disabled={!approve.healthManagerApproveCmt} />
                <Button className="primary" icon="save" iconPlace="prefix" value="Submit" disabled={!approve.healthManagerApproveCmt} />
            </div>
            <hr />
        </>
    )
}

export default Health;