import React, { useState } from 'react';
import Checkbox from '../../../Shared/FormComponents/CheckBox';
import TextBox from '../../../Shared/FormComponents/TextBox';
import TextArea from '../../../Shared/FormComponents/TextArea';
import Button from '../../../Shared/FormComponents/Button';
import { CLEARANCE_FIELD, CLEARANCE_OTHERS } from '../../ClearanceConst';

const Employee = ({ clearanceValue, updateClearance }) => {

    const [deptOthersValue, setDeptOthersValue] = useState(CLEARANCE_FIELD.deptOthers);
    const [deptOtherValue, setDeptOtherValue] = useState(CLEARANCE_OTHERS);

    const updateOtherDept = e => {
        const { name, value } = e.target;
        console.log('name, value:', name, value);
        const newState = {
            ...deptOtherValue,
            [name]: value
        }
        console.log('name, value:',newState);

        setDeptOtherValue(newState);
    }

    const addDept = (e, otherType) => {
        e.preventDefault();
        let otherTypeLength;
        if(otherType === 'deptOthers'){
            otherTypeLength = deptOthersValue.length;
        }
        let newOtherType = {
            id: otherType + '_' + parseInt(otherTypeLength + 1),
            label: deptOtherValue.deptOtherValue,
            isGiven: ''
        }

        console.log('newOtherType: ', newOtherType);

        let newState = [...deptOthersValue, newOtherType];
        console.log('newState: ', newState);
        setDeptOthersValue(newState);
    }

    const updateOthers = (e, index, otherType) => {

        const { name, type, checked, value } = e.target;
        let val;
        type === 'checkbox' ? (val = checked ? 'Yes' : 'No') : val = value;
        console.log(index, otherType);

        let otherVal;

        if(otherType === 'deptOthers'){
            otherVal = [...deptOthersValue];
            otherVal[index][name] = val;
            setDeptOthersValue(otherVal);
        }
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
                { deptOthersValue.length > 0 && 
                    <>
                        {deptOthersValue.map((department, index) => {
                            return(
                                <div className="col-12 col-md-6 col-lg-4" key={department.id}>
                                    <Checkbox id={department.id} name="isGiven" value={department.isGiven} label={department.label} handleChange={(e) => updateOthers(e, index, 'deptOthers')} checked={department.isGiven === 'Yes' ? true : false} />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
            <div className="row pt-20">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="input-group">
                        <TextBox id="deptOtherValue" name="deptOtherValue" value={deptOtherValue.deptOtherValue || ''} placeholder="Enter other type" handleChange={updateOtherDept} />
                        <Button className="primary" icon="plus" iconPlace="prefix" value="Add Other" disabled={!deptOtherValue.deptOtherValue} handleClick={(e) => addDept(e, 'deptOthers')} />
                    </div>
                </div>
                <div className="col-12 pt-20">
                    <TextArea id="deptUserComment" name="deptUserComment" value={deptOtherValue.deptUserComment || ''} placeholder="Enter your comments" handleChange={updateOtherDept} />
                </div>
            </div>
        </>
    )
}

export default Employee;