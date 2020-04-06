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
import { EVALUATION_INFO, RATING } from './EmployeeMonthlyEvaluationConst';
import { GetFutureDate, DateFormetter } from '../../utils/DateFormetter';


const EmployeeMonthlyEvaluation = () => {

    const { userPref } = useContext(AuthContext);
    
    const { clicked, toggleComponent } = useContext(EventContext);

    const [evalInfo, setEvalInfo] = useState(EVALUATION_INFO);

    const { empName, empID, evaluationFrom, evaluationTo } = evalInfo;

    const [empDetail, setEmpDetail] = useState({});

    const [rating, setRating] = useState(RATING);

    const [finalState, setFinalState] = useState({});

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
        setFinalState({});
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

        console.log('GetFutureDate: ', GetFutureDate(date, 30));
    }

    const updateScore = (e, index) => {
        const { name, value } = e.target;

        const newState = [...rating];

        newState[index][name] = value;

        setRating(newState);
        console.log('newState', newState);
    }

    const updateFinal = e => {
        e.preventDefault();
        const newState = {
            ...evalInfo,
            rating: [...rating]
        }
        console.log('newState: ', newState);
        setFinalState(newState);
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
                {empDetail && empDetail.length > 0 &&
                    <>
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
                        { evaluationTo &&
                            <>
                                { rating && rating.length > 0 &&
                                    <>
                                        <ul className="rating-list">
                                            <li><span>5</span>Excellent</li>
                                            <li><span>4</span>Very Good</li>
                                            <li><span>3</span>Good</li>
                                            <li><span>2</span>Fair</li>
                                            <li><span>1</span>Poor</li>
                                        </ul>
                                        <table className="data-table">
                                            <thead>
                                                <tr>
                                                    <th width="5%">#</th>
                                                    <th width="40%">Critical Factors</th>
                                                    <th width="15%">Score</th>
                                                    <th width="40%">Comments (if any)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { rating.map((rate, index) => {
                                                    return(
                                                        <tr key={rate.id}>
                                                            <td data-head="#">{index + 1}</td>
                                                            <td data-head="Critical Factors">{rate.desc}</td>
                                                            <td data-head="Score">
                                                                <TextBox id={`score_${rate.id}`} name="score" value={rate.score || ''} placeholder="Score" handleChange={(e) => updateScore(e, index)} />
                                                            </td>
                                                            <td data-head="Comments (If any)">
                                                                <TextBox id={`comment_${rate.id}`} name="comment" value={rate.comment || ''} placeholder="Comment (if any)" handleChange={(e) => updateScore(e, index)} />
                                                            </td>
                                                        </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </>
                                }

                                <div className="btn-container text-right">
                                    <Button className="secondary" icon="save" iconPlace="prefix" value="Save" handleClick={updateFinal} />
                                    <Button className="primary" icon="save" iconPlace="prefix" value="Submit" handleClick={updateFinal} />
                                </div>

                                <hr />

                                <Approval />
                                </>
                            }
                    </>
                }
            </div>
        </>
    )
}

export default EmployeeMonthlyEvaluation;