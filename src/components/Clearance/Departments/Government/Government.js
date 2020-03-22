import React, { useState } from 'react';
import Checkbox from '../../../../main/Shared/FormComponents/CheckBox';
import TextBox from '../../../../main/Shared/FormComponents/TextBox';
import TextArea from '../../../../main/Shared/FormComponents/TextArea';
import RadioButton from '../../../../main/Shared/FormComponents/RadioButton';
import Button from '../../../../main/Shared/FormComponents/Button';
import { CLEARANCE_FIELD } from '../../ClearanceConst';

const Government = ({ clearanceValue, updateClearance, approve, updateApprove }) => {

    const [othersValue, setOthersValue] = useState(CLEARANCE_FIELD.govOthers);
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
            <h2>Government Department</h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isIqama" name="isIqama" value={clearanceValue.isIqama} label="Iqama" handleChange={updateClearance} checked={clearanceValue.isIqama === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isGovCards" name="isGovCards" value={clearanceValue.isGovCards} label="Government Cards" handleChange={updateClearance} checked={clearanceValue.isGovCards === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isPortPass" name="isPortPass" value={clearanceValue.isPortPass} label="Port Pass" handleChange={updateClearance} checked={clearanceValue.isPortPass === 'Yes' ? true : false} />
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
                        <TextBox id="govOtherText" name="otherText" value={otherText.otherText || ''} placeholder="Enter other type" handleChange={updateOtherVal} />
                        <Button className="secondary" icon="plus" iconPlace="prefix" value="Add Other" disabled={!otherText.otherText} handleClick={(e) => addOther(e, 'govOthers')} />
                    </div>
                </div>
                <div className="col-12 pt-20">
                    <TextArea id="govUserComment" name="govUserComment" value={clearanceValue.govUserComment || ''} placeholder="Enter your comments" handleChange={updateClearance} />
                </div>
            </div>
            <h2>Government Manager's Approval</h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div>
                        <RadioButton id="govManagerApprove" name="govManagerApprove" value="Approve" handleChange={updateApprove} checked={approve.govManagerApprove.toLowerCase() === ('Approve').toLowerCase()} />
                    </div>
                    <div>
                        <RadioButton id="govManagerReject" name="govManagerApprove" value="Reject" handleChange={updateApprove} checked={approve.govManagerApprove.toLowerCase() === ('Reject').toLowerCase()} />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <TextArea id="govManagerApproveCmt" name="govManagerApproveCmt" value={approve.govManagerApproveCmt || ''} placeholder="Enter your comments" handleChange={updateApprove} disabled={!approve.govManagerApprove} />
                </div>
            </div>

            <div className="btn-container text-right">
                <Button className="secondary" icon="save" iconPlace="prefix" value="Save" disabled={!approve.govManagerApproveCmt} />
                <Button className="primary" icon="save" iconPlace="prefix" value="Submit" disabled={!approve.govManagerApproveCmt} />
            </div>
            <hr />
        </>
    )
}

export default Government;