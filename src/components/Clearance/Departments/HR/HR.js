import React, { useState } from 'react';
import Checkbox from '../../../../main/Shared/FormComponents/CheckBox';
import TextBox from '../../../../main/Shared/FormComponents/TextBox';
import TextArea from '../../../../main/Shared/FormComponents/TextArea';
import Button from '../../../../main/Shared/FormComponents/Button';
import RadioButton from '../../../../main/Shared/FormComponents/RadioButton';
import { CLEARANCE_FIELD } from '../../ClearanceConst';

const HR = ({ clearanceValue, updateClearance, approve, updateApprove }) => {

    const [othersValue, setOthersValue] = useState(CLEARANCE_FIELD.hrOthers);
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
            <h2>Human Resources Department</h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isUpdateRecruitment" name="isUpdateRecruitment" value={clearanceValue.isUpdateRecruitment} label="Update Recruitment Master List" handleChange={updateClearance} checked={clearanceValue.isUpdateRecruitment === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isUpdateOrgChart" name="isUpdateOrgChart" value={clearanceValue.isUpdateOrgChart} label="Update Organization Chart" handleChange={updateClearance} checked={clearanceValue.isUpdateOrgChart === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isMedicalCardCacel" name="isMedicalCardCacel" value={clearanceValue.isMedicalCardCacel} label="Medical Cards Cancelled (see cancelation e-mail)" handleChange={updateClearance} checked={clearanceValue.isMedicalCardCacel === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Checkbox id="isGOSICancel" name="isGOSICancel" value={clearanceValue.isGOSICancel} label="GOSI Cancelled" handleChange={updateClearance} checked={clearanceValue.isGOSICancel === 'Yes' ? true : false} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="input-group">
                        <Checkbox id="isHRSalaryAdvance" name="isHRSalaryAdvance" value={clearanceValue.isHRSalaryAdvance} label="Salary Advance" handleChange={updateClearance} checked={clearanceValue.isHRSalaryAdvance === 'Yes' ? true : false} />
                        <TextBox id="hrSalaryAdvance" name="hrSalaryAdvance" value={clearanceValue.hrSalaryAdvance || ''} placeholder="Enter salary advance" handleChange={updateClearance} disabled={clearanceValue.isHRSalaryAdvance !== 'Yes'} />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="input-group">
                        <Checkbox id="isHRHousingAdvance" name="isHRHousingAdvance" value={clearanceValue.isHRHousingAdvance} label="Housing Advance" handleChange={updateClearance} checked={clearanceValue.isHRHousingAdvance === 'Yes' ? true : false} />
                        <TextBox id="hrHousingAdvace" name="hrHousingAdvace" value={clearanceValue.hrHousingAdvace || ''} placeholder="Enter housing advace" handleChange={updateClearance} disabled={clearanceValue.isHRHousingAdvance !== 'Yes'} />
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
                        <TextBox id="hrOtherText" name="otherText" value={otherText.otherText || ''} placeholder="Enter other type" handleChange={updateOtherVal} />
                        <Button className="secondary" icon="plus" iconPlace="prefix" value="Add Other" disabled={!otherText.otherText} handleClick={(e) => addOther(e, 'hrOthers')} />
                    </div>
                </div>
                <div className="col-12 pt-20">
                    <TextArea id="hrUserComment" name="hrUserComment" value={clearanceValue.hrUserComment || ''} placeholder="Enter your comments" handleChange={updateClearance} />
                </div>
            </div>
            <h2>Human Resources Manager's Approval</h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div>
                        <RadioButton id="hrManagerApprove" name="hrManagerApprove" value="Approve" handleChange={updateApprove} checked={approve.hrManagerApprove.toLowerCase() === ('Approve').toLowerCase()} />
                    </div>
                    <div>
                        <RadioButton id="hrManagerReject" name="hrManagerApprove" value="Reject" handleChange={updateApprove} checked={approve.hrManagerApprove.toLowerCase() === ('Reject').toLowerCase()} />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <TextArea id="hrManagerApproveCmt" name="hrManagerApproveCmt" value={approve.hrManagerApproveCmt || ''} placeholder="Enter your comments" handleChange={updateApprove} disabled={!approve.hrManagerApprove} />
                </div>
            </div>

            <div className="btn-container text-right">
                <Button className="secondary" icon="save" iconPlace="prefix" value="Save" disabled={!approve.hrManagerApproveCmt} />
                <Button className="primary" icon="save" iconPlace="prefix" value="Submit" disabled={!approve.hrManagerApproveCmt} />
            </div>
            <hr />
        </>
    )
}

export default HR;