import React, { useContext } from 'react';
import './dashboard.scss';
import FeatureVideo from './Widgets/FeatureVideo/FeatureVideo';
import NewsUpdates from './Widgets/NewsUpdates/NewsUpdates';
import Request from './Widgets/Request/Request';
import Performance from './Widgets/Performance/Performance';
import PayRoll from './Widgets/PayRoll/PayRoll';
import Holidays from './Widgets/Holidays/Holidays';
import MyTeam from './Widgets/MyTeam/MyTeam';
import { AuthContext } from '../../context/AuthContextProvider';

const Dashboard = () =>{
    const { userObject } = useContext(AuthContext);

    console.log('userObject: ', userObject);
    return(
        <>
            <h1>Dashboard</h1>
            <div className="row dashboard-row">
                <div className="col-12 col-md-6">
                    <FeatureVideo />
                </div>
                <div className="col-12 col-md-6">
                    <NewsUpdates />
                </div>
                <div className="col-12 col-lg-8">
                    <Request />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Performance />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <PayRoll />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Holidays />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <MyTeam />
                </div>
            </div>
        </>
    );
}

export default Dashboard;