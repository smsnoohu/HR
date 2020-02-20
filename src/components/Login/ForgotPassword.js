import React from 'react';

const ForgotPassword = () => {

    return(
        <div className="forgot-password-container">
            <h2 className="login-title">Forgot Password?</h2>
            <p>Please enter your registered email address to reset your password.</p>
            <form className="login-form">
                <fieldset>
                    <label htmlFor="forgotpassword" className="email login-label">User Name</label>
                    <input type="text" name="forgotpassword" id="forgotpassword" placeholder="Enter your email" className="login-control" autoComplete="off" />
                </fieldset>
                <fieldset>
                    <input type="submit" value="Send" name="submit" id="forgotPass" className="login-button" />
                </fieldset>
            </form>
        </div>
    );
}

export default ForgotPassword;