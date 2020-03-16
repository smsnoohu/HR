import React, { useState } from 'react';
import Checkbox from '../../../Shared/FormComponents/CheckBox';
import TextBox from '../../../Shared/FormComponents/TextBox';
import TextArea from '../../../Shared/FormComponents/TextArea';
import RadioButton from '../../../Shared/FormComponents/RadioButton';
import Button from '../../../Shared/FormComponents/Button';
import { CLEARANCE_FIELD } from '../../ClearanceConst';

const IT = ({ clearanceValue, updateClearance, approve, updateApprove }) => {

    const [othersValue, setOthersValue] = useState(CLEARANCE_FIELD.itOthers);
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
            <h2>Information Technology Department</h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isComputer" name="isComputer" value={clearanceValue.isComputer} label="Computer" handleChange={updateClearance} checked={clearanceValue.isComputer === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isLaptop" name="isLaptop" value={clearanceValue.isLaptop} label="Laptop" handleChange={updateClearance} checked={clearanceValue.isLaptop === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isPCAcc" name="isPCAcc" value={clearanceValue.isPCAcc} label="PC Accessories" handleChange={updateClearance} checked={clearanceValue.isPCAcc === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isCompBook" name="isCompBook" value={clearanceValue.isCompBook} label="Computer Books/CD’s" handleChange={updateClearance} checked={clearanceValue.isCompBook === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isPassword" name="isPassword" value={clearanceValue.isPassword} label="Passwords" handleChange={updateClearance} checked={clearanceValue.isPassword === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isManual" name="isManual" value={clearanceValue.isManual} label="Manuals" handleChange={updateClearance} checked={clearanceValue.isManual === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isSoftware" name="isSoftware" value={clearanceValue.isSoftware} label="Software/Hardware" handleChange={updateClearance} checked={clearanceValue.isSoftware === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isClearUID" name="isClearUID" value={clearanceValue.isClearUID} label="Clearing User ID’s" handleChange={updateClearance} checked={clearanceValue.isClearUID === 'Yes' ? true : false} />
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
                        <TextBox id="itOtherText" name="otherText" value={otherText.otherText || ''} placeholder="Enter other type" handleChange={updateOtherVal} />
                        <Button className="secondary" icon="plus" iconPlace="prefix" value="Add Other" disabled={!otherText.otherText} handleClick={(e) => addOther(e, 'itOthers')} />
                    </div>
                </div>
                <div className="col-12 pt-20">
                    <TextArea id="itUserComment" name="itUserComment" value={clearanceValue.itUserComment || ''} placeholder="Enter your comments" handleChange={updateClearance} />
                </div>
            </div>
            <h2>Information Technology Manager's Approval</h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div>
                        <RadioButton id="itManagerApprove" name="itManagerApprove" value="Approve" handleChange={updateApprove} checked={approve.itManagerApprove.toLowerCase() === ('Approve').toLowerCase()} />
                    </div>
                    <div>
                        <RadioButton id="itManagerReject" name="itManagerApprove" value="Reject" handleChange={updateApprove} checked={approve.itManagerApprove.toLowerCase() === ('Reject').toLowerCase()} />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <TextArea id="itManagerApproveCmt" name="itManagerApproveCmt" value={approve.itManagerApproveCmt || ''} placeholder="Enter your comments" handleChange={updateApprove} disabled={!approve.itManagerApprove} />
                </div>
            </div>

            <div className="btn-container text-right">
                <Button className="secondary" icon="save" iconPlace="prefix" value="Save" disabled={!approve.itManagerApproveCmt} />
                <Button className="primary" icon="save" iconPlace="prefix" value="Submit" disabled={!approve.itManagerApproveCmt} />
            </div>
            <hr />
        </>
    )
}

export default IT;