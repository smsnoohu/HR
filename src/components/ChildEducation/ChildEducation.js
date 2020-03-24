import React, { useContext, useState, Fragment } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import Checkbox from '../../main/Shared/FormComponents/CheckBox';
import TextBox from '../../main/Shared/FormComponents/TextBox';
import Datepicker from '../../main/Shared/FormComponents/DatePicker/Datepicker';
import TextArea from '../../main/Shared/FormComponents/TextArea';
import RadioButton from '../../main/Shared/FormComponents/RadioButton';
import Button from '../../main/Shared/FormComponents/Button';
import { DateFormetter } from '../../utils/DateFormetter';
import { CHILD_DETAILS } from './ChildEducationConst';

const ChildEducation = () => {
    console.log('Children Education Page');
    const { userObject } = useContext(AuthContext);

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
        const formettedDate = DateFormetter(date);
        const newState = [...childDetail];
        newState[index][name] = formettedDate;
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

    return(
        <>
            <h1>Children Education</h1>
            <div className="card">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Empoyee ID #</label>
                        <p>{userObject.userID}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Employee Name</label>
                        <p>{userObject.EmployeeName}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Primary Contact #</label>
                        <p>{userObject.PrimaryContactNo}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Job Title & Department</label>
                        <p>{userObject.jobTitle} - {userObject.dept}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Hiring Date</label>
                        <p>{userObject.hiringDate}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <label className="label-block" htmlFor="">Type of work</label>
                        <p>{userObject.typeOfWork}</p>
                    </div>
                </div>
            </div>

            <div className="form-container">
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
                                        <Datepicker id={`${child.id}_childDOB_${index}`} name="childDOB" value={child.childDOB || ''} handleChange={(date) => updateChildDate('childDOB', date, index)} />
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
                { childDetail.map((child, index) => {
                    return(
                        <Fragment key={child.id}>
                            { child.childName && child.isInclude === 'Yes' &&
                                <>
                                    <h3>{child.childName}</h3>
                                    <div className="row">
                                        <div className="col-12 col-md-6"></div>
                                    </div>
                                </>
                            }
                        </Fragment>
                    )
                })}
            </div>
        </>
    )
}

export default ChildEducation;