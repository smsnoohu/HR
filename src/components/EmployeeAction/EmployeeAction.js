import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import { EventContext } from '../../context/EventContextProvider';
import Label from '../../main/Shared/FormComponents/Label';
import SelectBox from '../../main/Shared/FormComponents/SelectBox';
import TextBox from '../../main/Shared/FormComponents/TextBox';
import RadioButton from '../../main/Shared/FormComponents/RadioButton';
import CheckBox from '../../main/Shared/FormComponents/CheckBox';
import Datepicker from '../../main/Shared/FormComponents/DatePicker/Datepicker';
import Modal from '../../main/Shared/Modal/Modal';
import Button from '../../main/Shared/FormComponents/Button';
import { EMP_ACTION_INFO, ACTION_TYPE_LIST, DEPARTMENT_LIST, SECTION_LIST, JOB_TITLE_LIST, COST_CENTER_LIST, GRADE_LIST, ALLOWANCE_LIST } from './EmployeeActionConst';
import Approval from '../../main/Shared/Approval/Approval';
import UserInfo from '../../main/Shared/UserInfo/UserInfo';
import EmployeeListModalContent from './EmployeeListModalContent';

const EmployeeAction = () => {
    console.log('Employee Action Page');

    const { userPref } = useContext(AuthContext);

    const { clicked, toggleComponent } = useContext(EventContext);

    // const [empList, setEmpList] = useState([]);

    const [empInfo, setEmpInfo] = useState(EMP_ACTION_INFO);

    const [empDetail, setEmpDetail] = useState({});

    let [actionVal, setActionVal] = useState([]);

    const [selectedEmp, setSelectedEmp] = useState([]);

    const [finalState, setFinalState] = useState({});

    const [allowance, setAllowance] = useState(ALLOWANCE_LIST)

    const { empName, empID, actionType, otherActionVal, effectiveFrom } = empInfo;

    // const { hireDate, department, nationality, idNo } = empDetail;

    const { newDept, newSec, newJobTitle, newPositionNo, newCostCenter, newMarriageStatus, newGrade, newSalary, securityAllowance, houseAllowance, transportAllowance, shiftAllowance } = actionVal;

    const updateEmpName = (e, emp) => {
        const newState = {
            ...empInfo,
            actionType: '',
            empID: emp.empID,
            empName: emp.empName
        }
        setEmpInfo(newState);

        let empDetail = [];

        if(newState.empID !== ''){
            empDetail = [
                {
                    id: 'idNo',
                    label: 'ID #',
                    value: emp.idNo
                },
                {
                    id: 'dept',
                    label: 'Department',
                    value: emp.department
                },
                {
                    id: 'nationality',
                    label: 'Nationality',
                    value: emp.nationality
                },
                {
                    id: 'hireDate',
                    label: 'Hire Date',
                    value: emp.hireDate
                }
            ]
        }else{
            empDetail = [];
        }
        
        setEmpDetail(empDetail);

        setSelectedEmp(emp);
        setFinalState({});
    }

    const updateActionType = e => {
        const { name, value } = e.target;

        let newState = {};

        if(value === 'other'){
            newState = {
                ...empInfo, 
                [name]: value
            }
        }else{
            newState = {
                ...empInfo,
                otherActionVal: '',
                [name]: value
            } 
        }
        setEmpInfo(newState);
        setActionVal([]);
        console.log('newState123: ', newState, allowance);
        setFinalState({});
        let resetAllowance = [];
        allowance.map((a) => {
            let ra = {
                ...a,
                isSelected: ''
            }
            resetAllowance.push(ra);
        });
        setAllowance(resetAllowance);
    }

    const updateActionDate = (name, date) => {
        const newState = {
            ...empInfo,
            [name]: date
        }
        setEmpInfo(newState);

        console.log('newState: ', newState);
    }

    const updateActionVal = e => {
        const { name, type, checked, value } = e.target;
        let val;
        type === 'checkbox' ? (val = checked ? 'Yes' : 'No') : val = value;

        const newState = {
            ...actionVal,
            [name]: val
        }

        console.log('actionVal: ', name, val, actionVal);

        setActionVal(newState);
        setFinalState({});
    }

    const updateSalaryAction = (e, index) => {
        const { name, type, checked, value } = e.target;
        let val;
        type === 'checkbox' ? (val = checked ? 'Yes' : 'No') : val = value;

        const newState = [...allowance];
        newState[index][name] = val

        console.log('actionVal: ', name, val, newState);

        setAllowance(newState);
        setFinalState({});
    }

    const updateFinal = e => {
        e.preventDefault();
        console.log('empInfo: ', empInfo);
        console.log('actionVal: ', actionVal);
        console.log('allowance: ', allowance);

        const salaryVal = {
            salaryAllowances: allowance
        }
        if(empInfo.actionType === 'salary'){
            actionVal = [...actionVal, salaryVal]
        }
        const newState = {
            ...empInfo,
            actionValue: [actionVal]
        }

        console.log('newState: ', salaryVal, newState);
        setFinalState(newState)
    }

    useEffect(() => {
        // buildEmpList();
    }, []);

    return(
        <>
            <h1>Employee Action</h1>
            
            <UserInfo />

            <div className="form-container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Label htmlFor="empList" value="Employee Name" />
                        <a href="#" data-target="attachmentModal" onClick={toggleComponent} className="pick-link fa fa-search"></a>
                        <p>{empInfo.empName}</p>
                    </div>
                    {clicked["attachmentModal"] && (
                        <Modal modalTitle="Select Employee Name" escapeClose="true" modalID="attachmentModal" modalSize="modal-xl" isClose="true" modalContent={<EmployeeListModalContent updateEmpName={updateEmpName} />} />
                    )}
                    {empDetail && empDetail.length > 0 &&
                        <>
                            {empDetail.map((emp, index) => {
                                return(
                                    <div className="col-12 col-md-4" key={emp.id}>
                                        <Label value={emp.label} />
                                        <p>{emp.value}</p>
                                    </div>
                                )
                            })}
                        </>
                    }
                </div>
                
                {empDetail && empDetail.length > 0 &&
                    <>
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <Label htmlFor="actionType" value="Action Type" />
                                <SelectBox id="actionType" name="actionType" handleChange={updateActionType} value={actionType || ''} options={ACTION_TYPE_LIST} placeholder="Select Action Type" />
                            </div>
                            { actionType === 'other' &&
                                <div className="col-12 col-md-4">
                                    <Label htmlFor="otherActionVal" value="Please Specify" />
                                    <TextBox id="otherActionVal" name="otherActionVal" value={otherActionVal || ''} placeholder="Please Specify Action Type" handleChange={updateActionType} />
                                </div>
                            }
                            <div className="col-12 col-md-4">
                                <Label htmlFor="effectiveFrom" value="Effective Date" />
                                <Datepicker id="effectiveFrom" name="effectiveFrom" format={userPref.dateFormat} selected={effectiveFrom} value={effectiveFrom || ''} handleChange={(date) => updateActionDate('effectiveFrom', date)} disabled={!actionType || (actionType === 'other' && !otherActionVal)} />
                            </div>
                        </div>
                    </>
                }

                {actionType !== '' &&
                    <>
                        <div className="row">

                            { actionType === 'transfer' &&
                                <>
                                    <div className="col-12 col-md-4 col-lg-3">
                                        <Label htmlFor="newDept" value="Department" />
                                        <p><em>Current: </em> <strong>{selectedEmp.department}</strong></p>
                                        <p className="pt-5"><em><strong>Proposal</strong></em></p>
                                        <SelectBox id="newDept" name="newDept" handleChange={updateActionVal} value={newDept || ''} options={DEPARTMENT_LIST} placeholder="Select New Department" />
                                    </div>
                                    <div className="col-12 col-md-4 col-lg-3">
                                        <Label htmlFor="newSec" value="Section" />
                                        <p><em>Current: </em> <strong>{selectedEmp.section}</strong></p>
                                        <p className="pt-5"><em><strong>Proposal</strong></em></p>
                                        <SelectBox id="newSec" name="newSec" handleChange={updateActionVal} value={newSec || ''} options={SECTION_LIST} placeholder="Select New Section" />
                                    </div>
                                </>
                            }

                            { actionType === 'promotion' &&
                                <div className="col-12 col-md-4 col-lg-3">
                                    <Label htmlFor="newGrade" value="Grade" />
                                    <p><em>Current: </em> <strong>{selectedEmp.grade}</strong></p>
                                    <p className="pt-5"><em><strong>Proposal</strong></em></p>
                                    <SelectBox id="newGrade" name="newGrade" handleChange={updateActionVal} value={newGrade || ''} options={GRADE_LIST} placeholder="Select New Cost Center" />
                                </div>
                            }

                            { actionType === 'job' &&
                                <div className="col-12 col-md-4 col-lg-3">
                                    <Label htmlFor="newJobTitle" value="Position No & Job Title" />
                                    <p><em>Current: </em> <strong>{selectedEmp.jobTitle} & {selectedEmp[0].positionNo}</strong></p>
                                    <p className="pt-5"><em><strong>Proposal</strong></em></p>
                                    <SelectBox id="newJobTitle" name="newJobTitle" handleChange={updateActionVal} value={newJobTitle || ''} options={JOB_TITLE_LIST} placeholder="Select New Job Title" />
                                </div>
                            }

                            { actionType === 'cost' &&
                                <div className="col-12 col-md-4 col-lg-3">
                                    <Label htmlFor="newCostCenter" value="Cost Center" />
                                    <p><em>Current: </em> <strong>{selectedEmp.costCenter}</strong></p>
                                    <p className="pt-5"><em><strong>Proposal</strong></em></p>
                                    <SelectBox id="newCostCenter" name="newCostCenter" handleChange={updateActionVal} value={newCostCenter || ''} options={COST_CENTER_LIST} placeholder="Select New Cost Center" />
                                </div>
                            }
                            
                            { actionType === 'marriage' &&
                                <div className="col-12 col-md-4 col-lg-3">
                                    <Label htmlFor="newMarriageStatus" value="Marriage Status" />
                                    <p><em>Current: </em> <strong>{selectedEmp.marriageStatus}</strong></p>
                                    <p className="pt-5"><em><strong>Proposal</strong></em></p>
                                    <RadioButton id="single" name="newMarriageStatus" value="Single" handleChange={updateActionVal} />
                                    <RadioButton id="married" name="newMarriageStatus" value="Married" handleChange={updateActionVal} />
                                </div>
                            }
                        </div>
                        { actionType === 'salary' &&
                            <div className="row">
                                { allowance.map((allowance, index) => {
                                    return(
                                        <div className="col-12 col-md-4 col-lg-3" key={allowance.id}>
                                            <CheckBox id={allowance.id} name="isSelected" value="Yes" label={allowance.value} handleChange={(e) => updateSalaryAction(e, index)} checked={allowance.isSelected === 'Yes' ? true : false} />{allowance.id}
                                        </div>
                                    )
                                })}
                            </div>
                        }
                        <div className="btn-container text-right">
                            <Button className="secondary" icon="save" iconPlace="prefix" value="Save" handleClick={updateFinal} />
                            <Button className="primary" icon="save" iconPlace="prefix" value="Submit" handleClick={updateFinal} />
                        </div>
                    </>
                }

                { finalState.actionValue && finalState.actionValue.length > 0 &&
                    <>
                        <hr />
                        <Approval />
                    </>
                }

            </div>
        </>
    )
}

export default EmployeeAction;