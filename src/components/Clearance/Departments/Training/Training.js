import React, { useState } from 'react';
import Checkbox from '../../../../main/Shared/FormComponents/CheckBox';
import TextBox from '../../../../main/Shared/FormComponents/TextBox';
import TextArea from '../../../../main/Shared/FormComponents/TextArea';
import RadioButton from '../../../../main/Shared/FormComponents/RadioButton';
import Button from '../../../../main/Shared/FormComponents/Button';
import { CLEARANCE_FIELD } from '../../ClearanceConst';

const Training = ({ clearanceValue, updateClearance, approve, updateApprove }) => {

    const [othersValue, setOthersValue] = useState(CLEARANCE_FIELD.trainingOthers);
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

        console.log('othersValue: ', othersValue);
    }

    return(
        <>
            <h2>Training & Development Department</h2>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="input-group">
                        <Checkbox id="isCompanyTrainingID" name="isCompanyTrainingID" value={clearanceValue.isCompanyTrainingID} label="Submission of Company Training ID" handleChange={updateClearance} checked={clearanceValue.isCompanyTrainingID === 'Yes' ? true : false} />
                        <TextBox id="companyTrainingID" name="companyTrainingID" value={clearanceValue.companyTrainingID || ''} placeholder="Enter company trainingIDs" handleChange={updateClearance} disabled={clearanceValue.isCompanyTrainingID !== 'Yes'} />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="input-group">
                        <Checkbox id="isAmountDeduct" name="isAmountDeduct" value={clearanceValue.isAmountDeduct} label="Submission of any amount to be deducted as per training record" handleChange={updateClearance} checked={clearanceValue.isAmountDeduct === 'Yes' ? true : false} />
                        <TextBox id="amountDeduct" name="amountDeduct" value={clearanceValue.amountDeduct || ''} placeholder="Enter amount to be deductable" handleChange={updateClearance} disabled={clearanceValue.isAmountDeduct !== 'Yes'} />
                    </div>
                </div>
                { othersValue.length > 0 && 
                    <>
                        {othersValue.map((other, index) => {
                            return(
                                <div className="col-12 col-md-6 col-lg-4" key={other.id}>
                                    <div className="input-group">
                                        <Checkbox id={other.id} name="isGiven" value={other.isGiven} label={other.label} handleChange={(e) => updateOthers(e, index)} checked={other.isGiven === 'Yes' ? true : false} />
                                        <TextBox id={`${other.id}_val`} name="val" value={other.val || ''} placeholder={other.label} handleChange={(e) => updateOthers(e, index)} disabled={other.isGiven !== 'Yes'} />
                                    </div>
                                </div>
                            )
                        })}
                    </>
                }
            </div>
            <div className="row pt-20">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="input-group">
                        <TextBox id="trainingOtherText" name="otherText" value={otherText.otherText || ''} placeholder="Enter other type" handleChange={updateOtherVal} />
                        <Button className="secondary" icon="plus" iconPlace="prefix" value="Add Other" disabled={!otherText.otherText} handleClick={(e) => addOther(e, 'trainingOthers')} />
                    </div>
                </div>
                <div className="col-12 pt-20">
                    <TextArea id="trainingUserComment" name="trainingUserComment" value={clearanceValue.trainingUserComment || ''} placeholder="Enter your comments" handleChange={updateClearance} />
                </div>
            </div>
            <h2>Training & Development Manager's Approval</h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div>
                        <RadioButton id="trainingManagerApprove" name="trainingManagerApprove" value="Approve" handleChange={updateApprove} checked={approve.trainingManagerApprove.toLowerCase() === ('Approve').toLowerCase()} />
                    </div>
                    <div>
                        <RadioButton id="trainingManagerReject" name="trainingManagerApprove" value="Reject" handleChange={updateApprove} checked={approve.trainingManagerApprove.toLowerCase() === ('Reject').toLowerCase()} />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <TextArea id="trainingManagerApproveCmt" name="trainingManagerApproveCmt" value={approve.trainingManagerApproveCmt || ''} placeholder="Enter your comments" handleChange={updateApprove} disabled={!approve.trainingManagerApprove} />
                </div>
            </div>

            <div className="btn-container text-right">
                <Button className="secondary" icon="save" iconPlace="prefix" value="Save" disabled={!approve.trainingManagerApproveCmt} />
                <Button className="primary" icon="save" iconPlace="prefix" value="Submit" disabled={!approve.trainingManagerApproveCmt} />
            </div>
            <hr />
        </>
    )
}

export default Training;