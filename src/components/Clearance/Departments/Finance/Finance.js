import React, { useState } from 'react';
import Checkbox from '../../../../main/Shared/FormComponents/CheckBox';
import TextBox from '../../../../main/Shared/FormComponents/TextBox';
import TextArea from '../../../../main/Shared/FormComponents/TextArea';
import RadioButton from '../../../../main/Shared/FormComponents/RadioButton';
import Button from '../../../../main/Shared/FormComponents/Button';
import { CLEARANCE_FIELD } from '../../ClearanceConst';

const Finance = ({ clearanceValue, updateClearance, approve, updateApprove }) => {

    const [othersValue, setOthersValue] = useState(CLEARANCE_FIELD.financeOthers);
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
            <h2>Finance Department</h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="input-group">
                        <Checkbox id="isSalaryAdvance" name="isSalaryAdvance" value={clearanceValue.isSalaryAdvance} label="Salary Advance" handleChange={updateClearance} checked={clearanceValue.isSalaryAdvance === 'Yes' ? true : false} />
                        <TextBox id="salaryAdvance" name="salaryAdvance" value={clearanceValue.salaryAdvance || ''} placeholder="Enter salary advance" handleChange={updateClearance} disabled={clearanceValue.isSalaryAdvance !== 'Yes'} />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="input-group">
                        <Checkbox id="isPayable" name="isPayable" value={clearanceValue.isPayable} label="Payables" handleChange={updateClearance} checked={clearanceValue.isPayable === 'Yes' ? true : false} />
                        <TextBox id="payable" name="payable" value={clearanceValue.payable || ''} placeholder="Payable" handleChange={updateClearance} disabled={clearanceValue.isPayable !== 'Yes'} />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="input-group">
                        <Checkbox id="isHouseAdvance" name="isHouseAdvance" value={clearanceValue.isHouseAdvance} label="Housing Advance" handleChange={updateClearance} checked={clearanceValue.isHouseAdvance === 'Yes' ? true : false} />
                        <TextBox id="houseAdvance" name="houseAdvance" value={clearanceValue.houseAdvance || ''} placeholder="Enter housing advance" handleChange={updateClearance} disabled={clearanceValue.isHouseAdvance !== 'Yes'} />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="input-group">
                        <Checkbox id="isCashAdvance" name="isCashAdvance" value={clearanceValue.isCashAdvance} label="Cash Advance" handleChange={updateClearance} checked={clearanceValue.isCashAdvance === 'Yes' ? true : false} />
                        <TextBox id="cashAdvance" name="cashAdvance" value={clearanceValue.cashAdvance || ''} placeholder="Enter cash advance" handleChange={updateClearance} disabled={clearanceValue.isCashAdvance !== 'Yes'} />
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
                        <TextBox id="financeOtherText" name="otherText" value={otherText.otherText || ''} placeholder="Enter other type" handleChange={updateOtherVal} />
                        <Button className="secondary" icon="plus" iconPlace="prefix" value="Add Other" disabled={!otherText.otherText} handleClick={(e) => addOther(e, 'financeOthers')} />
                    </div>
                </div>
                <div className="col-12 pt-20">
                    <TextArea id="financeUserComment" name="financeUserComment" value={clearanceValue.financeUserComment || ''} placeholder="Enter your comments" handleChange={updateClearance} />
                </div>
            </div>
            <h2>Finance Manager's Approval</h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div>
                        <RadioButton id="financeManagerApprove" name="financeManagerApprove" value="Approve" handleChange={updateApprove} checked={approve.financeManagerApprove.toLowerCase() === ('Approve').toLowerCase()} />
                    </div>
                    <div>
                        <RadioButton id="financeManagerReject" name="financeManagerApprove" value="Reject" handleChange={updateApprove} checked={approve.financeManagerApprove.toLowerCase() === ('Reject').toLowerCase()} />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <TextArea id="financeManagerApproveCmt" name="financeManagerApproveCmt" value={approve.financeManagerApproveCmt || ''} placeholder="Enter your comments" handleChange={updateApprove} disabled={!approve.financeManagerApprove} />
                </div>
            </div>

            <div className="btn-container text-right">
                <Button className="secondary" icon="save" iconPlace="prefix" value="Save" disabled={!approve.financeManagerApproveCmt} />
                <Button className="primary" icon="save" iconPlace="prefix" value="Submit" disabled={!approve.financeManagerApproveCmt} />
            </div>
            <hr />
        </>
    )
}

export default Finance;