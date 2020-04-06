import React, { useContext, useState } from 'react';
import { EventContext } from '../../context/EventContextProvider';
import Label from '../../main/Shared/FormComponents/Label';
import Button from '../../main/Shared/FormComponents/Button';
import TextBox from '../../main/Shared/FormComponents/TextBox';
import { EMPLOYEE_INFO } from './EmployeeMonthlyEvaluationConst';

const EmployeeListModalContent = ({ updateEmpName }) => {
    const { setLoader, toggleComponent } = useContext(EventContext);

    const [empInfo, setEmpInfo] = useState({});
    const [empList, setEmpList] = useState([]);

    const { empName, empID } = empInfo;

    const updateEmpInfo = e => {
        const { name, value } = e.target;

        const newState = {
            ...empInfo,
            [name]: value
        }

        setEmpInfo(newState);
    }

    const filterBy = (list, criteria) => {
        return list.filter(candidate =>
            Object.keys(criteria).every(key => candidate[key].toLowerCase().indexOf(criteria[key].toLowerCase()) !== -1)
        );
    }
    
    const removeFalsy = obj => {
        let newObj = {};
        Object.keys(obj).forEach((prop) => {
            if (obj[prop]) { newObj[prop] = obj[prop]; }
        });
        return newObj;
    };

    const searchEmpInfo = e => {
        let filterArray = [];
        setLoader(true);
        const tempEmpInfo = removeFalsy(empInfo);
        if(Object.entries(tempEmpInfo).length > 0){
            filterArray = filterBy(EMPLOYEE_INFO, tempEmpInfo);
        }
        setTimeout(() => {
            setLoader(false);
            setEmpList(filterArray);
        }, 2000);
    }
    return(
        <>
            <div className="row">
                <div className="col-12 col-md-4">
                    <Label htmlFor="empID" value="Employee ID" />
                    <TextBox id="empID" name="empID" value={empID || ''} placeholder="Employee ID" handleChange={updateEmpInfo} />
                </div>
                <div className="col-12 col-md-4">
                    <Label htmlFor="empName" value="Employee Name" />
                    <TextBox id="empName" name="empName" value={empName || ''} placeholder="Employee Name" handleChange={updateEmpInfo} />
                </div>
                <div className="col-12 col-md-4">
                    <Label value="&nbsp;" />
                    <Button className="primary" id="search" icon="search" iconPlace="prefix" value="Search" disabled={!empID && !empName} handleClick={searchEmpInfo} />
                </div>
            </div>
            {empList && empList.length > 0 &&
                <>
                    <h3>Select Employee</h3>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th width="15%">Employee ID</th>
                                <th width="25%">Employee Name</th>
                                <th width="25%">Department</th>
                                <th width="15%">Job Title</th>
                                <th width="10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empList.map((emp, index) => {
                                return(
                                    <tr key={emp.empID}>
                                        <td data-head="Employee ID">{emp.empID}</td>
                                        <td data-head="Employee Name">{emp.empName}</td>
                                        <td data-head="Department">{emp.department}</td>
                                        <td data-head="Job Title">{emp.jobTitle}</td>
                                        <td data-head="Action">
                                            <Button className="secondary" icon="check" iconPlace="prefix" value="Select" target="attachmentModal" handleClick={(e) => {updateEmpName(e, emp); toggleComponent(e);}} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </>
            }
        </>
    )
}

export default EmployeeListModalContent;