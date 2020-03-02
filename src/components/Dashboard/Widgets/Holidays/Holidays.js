import React from 'react';

const Holidays = () =>{
    return(
        <div className="widget-container">
            <h2><em className="fa fa-calendar-alt" aria-hidden="true"></em> Holidays</h2>
            <table className="data-table">
                <thead>
                    <tr>
                        <th width="75%">Description</th>
                        <th width="75%"># of Days</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-head="Description">New Year (01/01/2020)</td>
                        <td data-head="# of Days">1 day(s)</td>
                    </tr>
                    <tr>
                        <td data-head="Description">President Day (20/01/2020)</td>
                        <td data-head="# of Days">1 day(s)</td>
                    </tr>
                    <tr>
                        <td data-head="Description">Labor Day (01/04/2020)</td>
                        <td data-head="# of Days">1 day(s)</td>
                    </tr>
                    <tr>
                        <td data-head="Description">Eid-Ul-Fitr (04/06/2020 - 04/10/2020)</td>
                        <td data-head="# of Days">5 day(s)</td>
                    </tr>
                    <tr>
                        <td data-head="Description">Eid-Ul-Adha (08/01/2020 - 08/15/2020)</td>
                        <td data-head="# of Days">5 day(s)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Holidays;