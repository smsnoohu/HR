import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';

const Login = () => {
    
    const [loginScreen, setLoginScreen] = useState({
        login: false,
        forgotPass: false,
        signUp: false
    });
    
    const showContainer = (e, type) => {
        e.preventDefault();
        Object.keys(loginScreen).forEach(v => loginScreen[v] = false);
        setLoginScreen({
            ...loginScreen,
            [type]: true
        });
    }

    useEffect(() => {
        setLoginScreen({
            ...loginScreen,
            login: true
        });
    }, []);

    return(
        <div id="login-wrapper">
            <div className="login-container">
                <div className="login-left">
                    <h1 className="login-title">Welcome to <span>HR Approva</span></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    <img src={require('../../assets/images/hrapprova-white.png')} alt="HR Approva" className="mini-logo" />
                </div>
                <div className="login-right">
                    <img className="login-image" src={require('../../assets/images/hrapprova.png')} alt="HR Approva" />
                    <img className="login-image" src={require('../../assets/images/arcelor_mittal.png')} alt="Arcellor Mittal" />
                    
                    { loginScreen.login && <SignIn /> }
                    
                    { loginScreen.forgotPass && <ForgotPassword /> }
                    
                    { loginScreen.signUp && <SignUp /> }
                    
                    <div className="login-link-container">
                        { loginScreen.login && <Link to="#" className="login-link forgotPassword" onClick={(e) => showContainer(e, 'forgotPass')}>Forgot Password</Link> }
                        
                        { (loginScreen.forgotPass || loginScreen.signUp) && <Link to="#" className="login-link signIn" onClick={(e) => showContainer(e, 'login')}>Sign In</Link> }
                        
                        { !loginScreen.signUp && <Link to="#" className="login-link signUp pull-right" onClick={(e) => showContainer(e, 'signUp')}>Sign Up</Link> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;