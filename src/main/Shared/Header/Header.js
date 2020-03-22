import React from 'react';
import './header.scss';

const Header = () => {
    return(
        <header>
            <div className="logo">
                <img src={require('../../../assets/images/logo.png')} alt="Mohamed Noohu" />
            </div>
            <div className="header-right">
                <span className="header-date">16 February 2020</span>
                <button className="header-alert btn"><em className="fa fa-bell header-alert-icon"></em> 15</button>
            </div>
        </header>
    );
}

export default Header;