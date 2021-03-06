import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import NewsUpdates from '../components/NewsUpdates/NewsUpdates';
import Framework from './Framework/Framework';
import LeaveRequest from '../components/Requests/LeaveRequest/LeaveRequest';
import Clearance from '../components/Clearance/Clearance';
import TravelAuth from '../components/TravelAuth/TravelAuth';
import ExpensesClaim from '../components/ExpensesClaim/ExpensesClaim';
import ChildEducation from '../components/ChildEducation/ChildEducation';
import OvertimeApproval from '../components/OvertimeApproval/OvertimeApproval';
import WorkSchedule from '../components/WorkSchedule/WorkSchedule';
import EmployeeAction from '../components/EmployeeAction/EmployeeAction';
import EmployeeMonthlyEvaluation from '../components/EmployeeEvaluation/EmployeeMonthlyEvaluation';

const ContainerNav = () => {
    return(
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/NewsUpdates" component={NewsUpdates} />
            <Route path="/Framework" component={Framework} />
            <Route path="/LeaveRequest" component={LeaveRequest} />
            <Route path="/Clearance" component={Clearance} />
            <Route path="/TravelAuth" component={TravelAuth} />
            <Route path="/ExpensesClaim" component={ExpensesClaim} />
            <Route path="/ChildEducation" component={ChildEducation} />
            <Route path="/OvertimeApproval" component={OvertimeApproval} />
            <Route path="/WorkSchedule" component={WorkSchedule} />
            <Route path="/EmployeeAction" component={EmployeeAction} />
            <Route path="/EmployeeMonthlyEvaluation" component={EmployeeMonthlyEvaluation} />
        </Switch>
    );
}

export default ContainerNav;