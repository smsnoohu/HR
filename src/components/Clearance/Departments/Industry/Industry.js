import React, { useState } from 'react';
import Checkbox from '../../../Shared/FormComponents/CheckBox';
import TextBox from '../../../Shared/FormComponents/TextBox';
import TextArea from '../../../Shared/FormComponents/TextArea';
import Button from '../../../Shared/FormComponents/Button';
import RadioButton from '../../../Shared/FormComponents/RadioButton';
import { CLEARANCE_FIELD } from '../../ClearanceConst';

const Industry = ({ clearanceValue, updateClearance, approve, updateApprove }) => {

    const [othersValue, setOthersValue] = useState(CLEARANCE_FIELD.indusOthers);
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
            <h2>Industrial Security Department</h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isID" name="isID" value={clearanceValue.isID} label="ID" handleChange={updateClearance} checked={clearanceValue.isID === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isCarSticker" name="isCarSticker" value={clearanceValue.isCarSticker} label="Car Sticker" handleChange={updateClearance} checked={clearanceValue.isCarSticker === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isRadio" name="isRadio" value={clearanceValue.isRadio} label="Radio/Hand Tools/etc." handleChange={updateClearance} checked={clearanceValue.isRadio === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isIndKeys" name="isIndKeys" value={clearanceValue.isIndKeys} label="Keys" handleChange={updateClearance} checked={clearanceValue.isIndKeys === 'Yes' ? true : false} />
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
                        <TextBox id="industryOtherText" name="otherText" value={otherText.otherText || ''} placeholder="Enter other type" handleChange={updateOtherVal} />
                        <Button className="secondary" icon="plus" iconPlace="prefix" value="Add Other" disabled={!otherText.otherText} handleClick={(e) => addOther(e, 'indusOthers')} />
                    </div>
                </div>
                <div className="col-12 pt-20">
                    <TextArea id="indusUserComment" name="indusUserComment" value={clearanceValue.indusUserComment || ''} placeholder="Enter your comments" handleChange={updateClearance} />
                </div>
            </div>
            <h2>Industrial Security Manager's Approval</h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div>
                        <RadioButton id="industryManagerApprove" name="industryManagerApprove" value="Approve" handleChange={updateApprove} checked={approve.industryManagerApprove.toLowerCase() === ('Approve').toLowerCase()} />
                    </div>
                    <div>
                        <RadioButton id="industryManagerReject" name="industryManagerApprove" value="Reject" handleChange={updateApprove} checked={approve.industryManagerApprove.toLowerCase() === ('Reject').toLowerCase()} />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <TextArea id="industryManagerApproveCmt" name="industryManagerApproveCmt" value={approve.industryManagerApproveCmt || ''} placeholder="Enter your comments" handleChange={updateApprove} disabled={!approve.industryManagerApprove} />
                </div>
            </div>

            <div className="btn-container text-right">
                <Button className="secondary" icon="save" iconPlace="prefix" value="Save" disabled={!approve.industryManagerApproveCmt} />
                <Button className="primary" icon="save" iconPlace="prefix" value="Submit" disabled={!approve.industryManagerApproveCmt} />
            </div>
            <hr />
        </>
    )
}

export default Industry;