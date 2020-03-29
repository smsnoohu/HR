import React from 'react';

const Legend = () => {
    return(
        <>
            <div className="row">
                <div className="col-12 col-md-4">
                    <p><strong>C</strong> - <em>Central</em></p>
                    <p>7:00 AM - 4:00 PM</p>
                </div>
                <div className="col-12 col-md-4">
                    <p><strong>M</strong> - <em>Morning Shift</em></p>
                    <p>7:00 AM - 3:00 PM</p>
                </div>
                <div className="col-12 col-md-4">
                    <p><strong>E</strong> - <em>Evening Shift</em></p>
                    <p>3:00 PM - 11:00 PM</p>
                </div>
                <div className="col-12 col-md-4">
                    <p><strong>N</strong> - <em>Night Shift</em></p>
                    <p>11:00 PM - 7:00 AM</p>
                </div>
                <div className="col-12 col-md-4">
                    <p><strong>TM</strong> - <em>12 Hrs Morning</em></p>
                    <p>7:00 AM - 7:00 PM</p>
                </div>
                <div className="col-12 col-md-4">
                    <p><strong>TE</strong> - <em>12 Hrs Evening</em></p>
                    <p>7:00 PM - 7:00 AM</p>
                </div>
                <div className="col-12 col-md-4">
                    <p><strong>OFF</strong> - <em>OFF</em></p>
                    <p>Off Day</p>
                </div>
                <div className="col-12 col-md-4">
                    <p><strong>OT</strong> - <em>Over Time</em></p>
                    <p>Overtime</p>
                </div>
                <div className="col-12 col-md-4">
                    <p><strong>H</strong> - <em>Holiday</em></p>
                    <p>Holiday</p>
                </div>
            </div>
            
            <hr />
        </>
    )
}

export default Legend;