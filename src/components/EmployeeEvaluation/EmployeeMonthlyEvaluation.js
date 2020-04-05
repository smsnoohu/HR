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
import Approval from '../../main/Shared/Approval/Approval';
import UserInfo from '../../main/Shared/UserInfo/UserInfo';
import EmployeeListModalContent from './EmployeeListModalContent';
import { EVALUATION_INFO } from './EmployeeMonthlyEvaluationConst';
import { GetFutureDate, DateFormetter } from '../../utils/DateFormetter';


const EmployeeMonthlyEvaluation = () => {

    const { userPref } = useContext(AuthContext);
    
    const { clicked, toggleComponent } = useContext(EventContext);

    const [evalInfo, setEvalInfo] = useState(EVALUATION_INFO);

    const { empName, empID, evaluationFrom, evaluationTo } = evalInfo;

    const [empDetail, setEmpDetail] = useState({});

    const updateEmpName = (e, emp) => {
        const newState = {
            ...evalInfo,
            actionType: '',
            empID: emp.empID,
            empName: emp.empName
        }
        setEvalInfo(newState);

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

        // setSelectedEmp(emp);
        // setFinalState({});
    }

    const updateEvaluationInfo = e => {
        const { name, value } = e.target;

        const newState = {
            ...evalInfo,
            [name]: value
        }

        setEvalInfo(newState);

        console.log('newState: ', newState);
    }

    const updateEvaluationDate = (name, date) => {

        const evaluationToDate = DateFormetter(GetFutureDate(date, 30), userPref.dateFormat);

        const newState = {
            ...evalInfo,
            [name]: date,
            evaluationTo: evaluationToDate
        }

        setEvalInfo(newState);

        console.log('newState: ', newState);

        console.log('GetFutureDate: ', GetFutureDate(date, 30))
    }
    return (
        <>
            <h1>Employee Monthly Evaluation</h1>
            <UserInfo />
            <div className="form-container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Label htmlFor="empList" value="Employee Name" />
                        <a href="#" data-target="attachmentModal" onClick={toggleComponent} className="pick-link fa fa-search"></a>
                        <p>{evalInfo.empName}</p>
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
                <h3>This report covers the period</h3>
                <div className="row">
                    <div className="col-12 col-md-2 col-lg-3">
                        <Label htmlFor="evaluationFrom" value="Evaluation Start Date" />
                        <Datepicker id="evaluationFrom" name="evaluationFrom" selected={evaluationFrom} format="MM/yyyy" showMonthYearPicker value={evaluationFrom || ''} handleChange={(date) => updateEvaluationDate('evaluationFrom', date)} />
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                        <Label htmlFor="evaluationTo" value="Evaluation End Date" />
                        <p>{evaluationTo}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeMonthlyEvaluation;