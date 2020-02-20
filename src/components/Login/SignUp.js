import React from 'react';

const SignIn = () => {

    return(
        <div className="signup-container">
            <h2 className="login-title">New User Signup</h2>
            <form className="login-form">
                <fieldset className="required">
                    <label htmlFor="name" className="username login-label">User Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your fullname" className="login-control" autoComplete="off" />
                </fieldset>
                <fieldset className="required">
                    <label htmlFor="newuser_password" className="password login-label">Password</label>
                    <input type="password" name="newuser_password" id="newuser_password" placeholder="Enter password" className="login-control" autoComplete="off" />
                </fieldset>
                <fieldset className="required">
                    <label htmlFor="confirm_password" className="password login-label">Confirm Password</label>
                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Re-enter password" className="login-control" autoComplete="off" />
                </fieldset>
                <fieldset className="required">
                    <label htmlFor="company" className="company login-label">Company Name</label>
                    <input type="text" name="company" id="company" placeholder="Enter company name" className="login-control" autoComplete="off" />
                </fieldset>
                <fieldset className="required">
                    <label htmlFor="details" className="details login-label">Please specify your requirement Detail</label>
                    <textarea rows="" cols="" name="details" id="details" placeholder="Please specify your requirement Detail" className="login-control" autoComplete="off"></textarea>
                </fieldset>
                <fieldset>
                    <label htmlFor="phone" className="phone login-label">Phone Number</label>
                    <input type="text" name="phone" id="phone" placeholder="Enter your primary phone number" className="login-control" autoComplete="off" />
                </fieldset>
                <fieldset className="required">
                    <label htmlFor="email" className="email login-label">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="Enter your primary email address" className="login-control" autoComplete="off" />
                </fieldset>
                <fieldset>
                    <input type="submit" value="Sign Up" name="submit" id="signUp" className="login-button" />
                </fieldset>
            </form>
        </div>
    );
}

export default SignIn;