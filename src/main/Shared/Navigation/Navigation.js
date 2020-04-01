import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navigation.scss';
import { EventContext } from '../../../context/EventContextProvider';

const Navigation = () => {

    const { clicked, toggleComponent } = useContext(EventContext);

    return(
        <aside id="left-nav">
            <Link to="#" className="toggle-nav" data-target="left-nav" onClick={toggleComponent}></Link>
            <div className="nav-profile">
                <div className="user-img"><img src={require('../../../assets/images/profile.jpg')} alt="Mohamed Noohu" /></div>
                <div className="user-profile-details">
                    <h4>Mohamed Noohu</h4>
                    <p>UI Engineer</p>
                    <Link to="#" className="nav-profile-link"><em className="fa fa-user-cog"></em>Profile</Link>
                    <Link to="#" className="nav-profile-link"><em className="fa fa-sign-out-alt"></em>Logout</Link>
                </div>
            </div>
            <ul className="left-nav">
                <li className={ clicked['nav-dashboard'] ? 'open-sub-menu' : ''}>
                    <Link to="#" className="fa-th" data-target="nav-dashboard" onClick={toggleComponent}><span>Dashboard</span></Link>
                    { clicked['nav-dashboard'] &&
                        <ul className="sub-nav">
                            <li><NavLink to="/">Sub Nav 1</NavLink></li>
                            <li><Link to="#">Sub Nav 2</Link></li>
                            <li><Link to="#">Sub Nav 3</Link></li>
                            <li><Link to="#">Sub Nav 4</Link></li>
                        </ul>
                    }
                </li>
                <li><NavLink to="/Framework" className="fa-laptop-code"><span>Framework</span></NavLink></li>
                <li><NavLink to="/LeaveRequest" className="fa-plane-departure"><span>Leave Request</span></NavLink></li>
                <li><NavLink to="/Clearance" className="fa-door-open"><span>Clearance</span></NavLink></li>
                <li><NavLink to="/TravelAuth" className="fa-plane"><span>Travel Authorization</span></NavLink></li>
                <li><NavLink to="/ExpensesClaim" className="fa-file-invoice-dollar"><span>Expenses Claim</span></NavLink></li>
                <li><NavLink to="/ChildEducation" className="fa-university"><span>Childred Education</span></NavLink></li>
                <li><NavLink to="/OvertimeApproval" className="fa-user-clock"><span>Overtime Approval</span></NavLink></li>
                <li><NavLink to="/WorkSchedule" className="fa-clock"><span>Work Schedule</span></NavLink></li>
                <li><NavLink to="/EmployeeAction" className="fa-user-cog"><span>Employee Action</span></NavLink></li>
            </ul>
        </aside>
    );
}

export default Navigation;