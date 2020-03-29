import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import TextBox from '../../main/Shared/FormComponents/TextBox';
import SelectBox from '../../main/Shared/FormComponents/SelectBox';
import Button from '../../main/Shared/FormComponents/Button';
import Datepicker from '../../main/Shared/FormComponents/DatePicker/Datepicker';
import { EXPENSES_DETAILS, EXP_LIST, CURRENCY_LIST } from './ExpensesClaimConst';

const PerDiemExp = ({ toggleComponent }) => {

    const { userPref } = useContext(AuthContext);

    let [perDiemExp, setPerDiemExp] = useState(EXPENSES_DETAILS.perDiemExp);

    const updatePerDiemExpenses = (e, index) => {
        const { name, value } = e.target;
        const newState = [...perDiemExp];
        newState[index][name] = value;
        setPerDiemExp(newState);
    }

    const updatePerDiemExpDate = (name, date, index) => {
        const newState = [...perDiemExp];
        newState[index][name] = date;
        setPerDiemExp(newState);
    }

    const addPerDiemExp = e => {
        e.preventDefault();
        const newExp = {
            id: 'PD' + perDiemExp.length + 1,
            expType: '',
            dateIncurred: '',
            currencyType: '',
            fcAmount: '',
            exchangeRate: '',
            totalAmount: '',
            isAttachment: false
        }

        perDiemExp = [...perDiemExp, newExp];
        console.log('newExp: ', perDiemExp, newExp);
        setPerDiemExp(perDiemExp);
    }
    return(
        <>
            {perDiemExp.length === 0 && 
                <Button className="secondary" icon="plus" iconPlace="prefix" value="Add Per Diem Expenses" handleClick={addPerDiemExp} />
            }
                
            {perDiemExp.length > 0 &&
                <>
                    <hr />
                    <h2>Per Diem Expenses Details</h2>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th width="3%">#</th>
                                <th width="22%">Expenses Type</th>
                                <th width="15%">Date Incurred</th>
                                <th width="10%">Currency</th>
                                <th width="15%">Amount (Foreien Currency)</th>
                                <th width="10%">Exchange Rate</th>
                                <th width="10%">Total Amount</th>
                                <th width="10%">Attachment(s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            { perDiemExp.map((exp, index) => {
                                return(
                                    <tr key={exp.id}>
                                        <td data-head="#">{index + 1}</td>
                                        <td data-head="Expenses Type">
                                            <SelectBox id={`${exp.expType}_${index}`} name="expType" handleChange={(e) => updatePerDiemExpenses(e, index)} value={exp.expType || ''} options={EXP_LIST} placeholder="Select Expenses Type" />
                                        </td>
                                        <td data-head="Date Incurred">
                                            <Datepicker id={`${exp.dateIncurred}_${index}`} name="dateIncurred" format={userPref.dateFormat} selected={exp.dateIncurred} value={exp.dateIncurred || ''} handleChange={(date) => updatePerDiemExpDate('dateIncurred', date, index)} />
                                        </td>
                                        <td data-head="Currency">
                                            <SelectBox id={`${exp.currencyType}_${index}`} name="currencyType" handleChange={(e) => updatePerDiemExpenses(e, index)} value={exp.currencyType || ''} options={CURRENCY_LIST} placeholder="Select Currency Type" />
                                        </td>
                                        <td data-head="Amount (Foreien Currency)">
                                            <TextBox id={`${exp.fcAmount}_${index}`} name="fcAmount" value={exp.fcAmount || ''} placeholder="Amount (Foreien Currency)" handleChange={(e) => updatePerDiemExpenses(e, index)} />
                                        </td>
                                        <td data-head="Exchange Rate">
                                            <TextBox id={`${exp.exchangeRate}_${index}`} name="exchangeRate" value={exp.exchangeRate || ''} placeholder="Exchange Rate" handleChange={(e) => updatePerDiemExpenses(e, index)} />
                                        </td>
                                        <td data-head="Total Amount">
                                            <TextBox id={`${exp.totalAmount}_${index}`} name="totalAmount" value={exp.totalAmount || ''} placeholder="Total Amount" handleChange={(e) => updatePerDiemExpenses(e, index)} />
                                        </td>
                                        <td data-head="Attachment(s)">
                                            <Button className="secondary" icon="eye" isIconOnly value="View Attachment(s)" disabled={!exp.isAttachment} />
                                            <Button className="secondary" icon="plus" isIconOnly value="Add Attachment(s)" target="attachmentModal" handleClick={toggleComponent}  />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="5">
                                    <Button className="light" icon="plus" value="Add More Expenses" handleClick={addPerDiemExp} />
                                </td>
                                <td className="text-right">Total</td>
                                <td>123</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tfoot>
                    </table>
                </>
            }
        </>
    )
}

export default PerDiemExp;