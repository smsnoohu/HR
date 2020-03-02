import React from 'react';
import { Link } from 'react-router-dom';
import './myteam.scss';

const MyTeam = () =>{
    return(
        <div className="widget-container">
            <h2><em className="fa fa-users" aria-hidden="true"></em> MyTeam</h2>
            <ul className="myteam-list">
                <li>
                    <img src={require('../../../../assets/images/profile.jpg')} alt="Mohamed Noohu" />
                    <h4>Mohamed Noohu</h4>
                    <p>UI Engineer</p>
                    <p><Link to="mailto:Mohamed.Noohu@FirstOneSystsmes.com">Mohamed.Noohu@FirstOneSystsmes.com</Link></p>
                </li>
                <li>
                    <img src={require('../../../../assets/images/profile.jpg')} alt="Mohamed Noohu" />
                    <h4>Mohamed Noohu</h4>
                    <p>UI Engineer</p>
                    <p><Link to="mailto:Mohamed.Noohu@FirstOneSystsmes.com">Mohamed.Noohu@FirstOneSystsmes.com</Link></p>
                </li>
                <li>
                    <img src={require('../../../../assets/images/profile.jpg')} alt="Mohamed Noohu" />
                    <h4>Mohamed Noohu</h4>
                    <p>UI Engineer</p>
                    <p><Link to="mailto:Mohamed.Noohu@FirstOneSystsmes.com">Mohamed.Noohu@FirstOneSystsmes.com</Link></p>
                </li>
                <li>
                    <img src={require('../../../../assets/images/profile.jpg')} alt="Mohamed Noohu" />
                    <h4>Mohamed Noohu</h4>
                    <p>UI Engineer</p>
                    <p><Link to="mailto:Mohamed.Noohu@FirstOneSystsmes.com">Mohamed.Noohu@FirstOneSystsmes.com</Link></p>
                </li>
            </ul>
        </div>
    );
}

export default MyTeam;