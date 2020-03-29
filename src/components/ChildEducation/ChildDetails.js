import React, { useContext, useState, Fragment } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import Label from '../../main/Shared/FormComponents/Label';
import Checkbox from '../../main/Shared/FormComponents/CheckBox';
import TextBox from '../../main/Shared/FormComponents/TextBox';
import File from '../../main/Shared/FormComponents/File';
import SelectBox from '../../main/Shared/FormComponents/SelectBox';
import Datepicker from '../../main/Shared/FormComponents/DatePicker/Datepicker';
import Button from '../../main/Shared/FormComponents/Button';
import { CHILD_DETAILS, CITY_LIST, COUNTRY_LIST } from './ChildEducationConst';

const ChildDetails = () => {
    const { userPref } = useContext(AuthContext);
    let [childDetail, setChildDetail] = useState(CHILD_DETAILS);

    const updateChildDetail = (e, index) => {
        const { name, type, checked, value } = e.target;
        let val;
        type === 'checkbox' ? (val = checked ? 'Yes' : 'No') : val = value;

        const newState = [...childDetail];
        newState[index][name] = val;
        setChildDetail(newState);
    }

    const updateChildDate = (name, date, index) => {
        const newState = [...childDetail];
        newState[index][name] = date;
        setChildDetail(newState);
    }

    const removeChild = (e, index) => {
        childDetail.splice(index, 1);
        const newState = [...childDetail];
        setChildDetail(newState);
    }

    const addAnotherChild = e => {
        e.preventDefault();
        const newExp = {
            id: 'CE_' + childDetail.length + 1,
            isInclude: 'No',
            childName: '',
            childDOB: '',
            childAge: '',
            childClass: '',
            childSemester: '',
            childAcademicYear: ''
        }

        childDetail = [...childDetail, newExp];
        setChildDetail(childDetail);
    }

    const updateChildAttachment = (e, index, innerIndex) => {
        const { name, type, checked, value } = e.target;
        let val;
        type === 'checkbox' ? (val = checked ? 'Yes' : 'No') : val = value;

        let newState = [...childDetail];
        let newAttachment = newState[index]['attachment'];
        newAttachment[innerIndex][name] = val;
        newState[index]['attachment'] = newAttachment;
        setChildDetail(newState);

        console.log(newAttachment);
    }

    return(
        <>
            <table className="data-table">
                <thead>
                    <tr>
                        <th width="3%">#</th>
                        <th width="3%">Include</th>
                        <th width="31%">Name of Dependents</th>
                        <th width="14%">Date of Birth</th>
                        <th width="11%">Age</th>
                        <th width="11%">Class</th>
                        <th width="11%">Semester</th>
                        <th width="11%">Academic Year</th>
                        <th width="5%">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { childDetail.map((child, index) => {
                        return(
                            <tr key={child.id}>
                                <td data-head="#">{index + 1}</td>
                                <td data-head="Include">
                                    <Checkbox id={`${child.id}_isInclude_${index}`} name="isInclude" value={child.isInclude} label="" handleChange={(e) => updateChildDetail(e, index)} checked={child.isInclude === 'Yes' ? true : false} />
                                </td>
                                <td data-head="Name of Dependents">
                                    <TextBox id={`${child.id}_childName_${index}`} name="childName" value={child.childName || ''} placeholder="Enter Child Name" handleChange={(e) => updateChildDetail(e, index)} />
                                </td>
                                <td data-head="Date of Birth">
                                    <Datepicker id={`${child.id}_childDOB_${index}`} name="childDOB" selected={child.childDOB} format={userPref.dateFormat} value={child.childDOB || ''} handleChange={(date) => updateChildDate('childDOB', date, index)} />
                                </td>
                                <td data-head="Age">
                                    <TextBox id={`${child.id}_childAge_${index}`} name="childAge" value={child.childAge || ''} placeholder="Child Age" handleChange={(e) => updateChildDetail(e, index)} />
                                </td>
                                <td data-head="Class">
                                    <TextBox id={`${child.id}_childClass_${index}`} name="childClass" value={child.childClass || ''} placeholder="Child Class" handleChange={(e) => updateChildDetail(e, index)} />
                                </td>
                                <td data-head="Semester">
                                    <TextBox id={`${child.id}_childSemester_${index}`} name="childSemester" value={child.childSemester || ''} placeholder="Current Semester" handleChange={(e) => updateChildDetail(e, index)} />
                                </td>
                                <td data-head="Academic Year">
                                    <TextBox id={`${child.id}_childAcademicYear_${index}`} name="childAcademicYear" value={child.childAcademicYear || ''} placeholder="Current Academic Year" handleChange={(e) => updateChildDetail(e, index)} />
                                </td>
                                <td data-head="Delete">
                                    <Button className="danger full" icon="trash-alt" isIconOnly value="Delete" handleClick={(e) => removeChild(e, index)} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Button className="secondary pull-right" icon="plus" value="Add More Child" handleClick={addAnotherChild} />
            <div className="clearfix"></div>
            { childDetail.map((child, index) => {
                return(
                    <Fragment key={child.id}>
                        { child.childName && child.isInclude === 'Yes' &&
                            <>
                                <h3>{child.childName}</h3>
                                <div className="row">
                                    <div className="col-12 col-md-4 col-lg-3">
                                        <Label htmlFor={`nameOfSchool_${child.id}`} value="Name of School" />
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9">
                                        <TextBox id={`nameOfSchool_${child.id}`} name="schoolName" value={child.schoolName || ''} placeholder="Name of School" handleChange={(e) => updateChildDetail(e, index)} />
                                    </div>
                                    <div className="col-12 col-md-4 col-lg-3">
                                        <Label htmlFor={`schoolAddress_1_${child.id}`} value="Address Line 1" />
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9">
                                        <TextBox id={`schoolAddress_1_${child.id}`} name="schoolAddress_1" value={child.schoolAddress_1 || ''} placeholder="Address Line 1" handleChange={(e) => updateChildDetail(e, index)} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <Label htmlFor={`schoolAddress_2_${child.id}`} value="Address Line 2" />
                                        <TextBox id={`schoolAddress_2_${child.id}`} name="schoolAddress_2" value={child.schoolAddress_2 || ''} placeholder="Address Line 2" handleChange={(e) => updateChildDetail(e, index)} />
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <Label htmlFor={`country_${child.id}`} value="Country" />
                                        <SelectBox id={`country_${child.id}`} name="schoolCountry" handleChange={(e) => updateChildDetail(e, index)} value={child.schoolCountry || ''} options={COUNTRY_LIST} placeholder="Select Country" />
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <Label htmlFor={`city_${child.id}`} value="City" />
                                        <SelectBox id={`city_${child.id}`} name="schoolCity" handleChange={(e) => updateChildDetail(e, index)} value={child.schoolCity || ''} options={CITY_LIST} placeholder="Select City" />
                                    </div>
                                    { child.attachment.map((attach, innerIndex) =>{
                                        return(
                                            <Fragment key={attach.attachmentID}>
                                                <div className="col-12 col-md-4">
                                                    <Label htmlFor={`attachmentTitle_${child.id}_${innerIndex}`} value="Attachment Title" />
                                                    <TextBox id={`attachmentTitle_${child.id}`} name="attachmentName" value={attach.attachmentName || ''} placeholder="Attachment Title" handleChange={(e) => updateChildAttachment(e, index, innerIndex)} />
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <Label htmlFor={`attachment_${child.id}_${innerIndex}`} value="Attachment" />
                                                    <File id={`attachment_${child.id}`} name="attachmentValue" value={attach.attachmentValue || ''} placeholder="Attachment" handleChange={(e) => updateChildAttachment(e, index, innerIndex)} />
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <Label value="&nbsp;" />
                                                    <Button className="danger full" icon="trash-alt" isIconOnly value="Delete" handleClick={(e) => removeChild(e, index)} />
                                                    {child.attachment.length === innerIndex + 1 && <Button className="secondary" isIconOnly icon="plus" value="Add Attachment" handleClick={addAnotherChild} /> }
                                                </div>
                                            </Fragment>
                                        )
                                    })}
                                    <div className="col-12">
                                        <Checkbox id={`${child.id}_isStayMostInYear_${index}`} name="isStayMostInYear" value={child.isStayMostInYear} label="Is this child staying inside Saudi Arabia most of the year." handleChange={(e) => updateChildDetail(e, index)} checked={child.isStayMostInYear === 'Yes' ? true : false} />
                                    </div>
                                </div>
                                <hr />
                            </>
                        }
                    </Fragment>
                )
            })}
            <div className="btn-container text-right">
                <Button className="secondary" icon="save" iconPlace="prefix" value="Save" />
                <Button className="primary" icon="save" iconPlace="prefix" value="Submit" />
            </div>
            <hr />
        </>
    )
}

export default ChildDetails;