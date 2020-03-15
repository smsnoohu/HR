import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import NewsUpdates from './NewsUpdates/NewsUpdates';
import Framework from './Framework/Framework';
import LeaveRequest from './Requests/LeaveRequest/LeaveRequest';
import Clearance from './Clearance/Clearance';

const ContainerNav = () => {
    return(
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/NewsUpdates" component={NewsUpdates} />
            <Route path="/Framework" component={Framework} />
            <Route path="/LeaveRequest" component={LeaveRequest} />
            <Route path="/Clearance" component={Clearance} />
        </Switch>
    );
}

export default ContainerNav;