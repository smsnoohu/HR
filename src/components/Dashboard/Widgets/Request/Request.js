import React from 'react';
import './request.scss';
import CheckBox from '../../../../main/Shared/FormComponents/CheckBox';

const Request = () =>{

    const handleChange = e =>{
        let { checked } = e.target;
        console.log('checked: ', checked);
        checked = !checked;

    }
    return(
        <div className="widget-container">
            <div className="dashboard-tab">
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-tab -request active">Your request</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-tab -pending">Pending approval</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-tab -action">Actions to be taken</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-tab -involve">Request involved</button>
                    </div>
                </div>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th width="20%">Employee</th>
                            <th width="20%">Leave type</th>
                            <th width="20%">From</th>
                            <th width="20%">To</th>
                            <th width="15%"># working days</th>
                            <th width="5%"><CheckBox id="selectAll" name="selectAll" handleChange={handleChange} checked={true} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-head="Employee">Mohamed Noohu</td>
                            <td data-head="Leave type">Paid Leave</td>
                            <td data-head="From">02/02/2020, 8:00</td>
                            <td data-head="To">02/02/2020, 18:00</td>
                            <td data-head="# working days">1</td>
                            <td data-head="Action"><CheckBox id="check1" name="check1" handleChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td data-head="Employee">Mohamed Noohu</td>
                            <td data-head="Leave type">Paid Leave</td>
                            <td data-head="From">02/02/2020, 8:00</td>
                            <td data-head="To">02/02/2020, 18:00</td>
                            <td data-head="# working days">1</td>
                            <td data-head="Action"><CheckBox id="check2" name="check2" handleChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td data-head="Employee">Mohamed Noohu</td>
                            <td data-head="Leave type">Paid Leave</td>
                            <td data-head="From">02/02/2020, 8:00</td>
                            <td data-head="To">02/02/2020, 18:00</td>
                            <td data-head="# working days">1</td>
                            <td data-head="Action"><CheckBox id="check3" name="check3" handleChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Request;