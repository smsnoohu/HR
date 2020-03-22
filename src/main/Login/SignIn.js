import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';

const SignUp = () => {

    const { userObject, setUserObject, setIsAunthetic } = useContext(AuthContext);

    const [empty, setEmpty] = useState(false);
    const [invalid, setInvalid] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {

        if(username && password){
            fetch('http://3.14.66.116:200/service/api/users/' + username, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(data => {               
                
                if (data.password === password){
                    // alert("authenticated");
                    console.log('Success');
                    setEmpty(false);
                    setInvalid(false);
                    setUserObject({
                        userID: username,
                        password: password
                    });
                    setIsAunthetic(true);
                } else {
                    console.log('Failure');
                    setEmpty(false);
                    setInvalid(true);
                }
            });
        } else {
            setInvalid(false);
            setEmpty(true);
        }
    }
    
    return(
        <div className="signin-container">
            <h2 className="login-title">Sign In</h2>
            <form className="login-form" onSubmit={e => {e.preventDefault();}}>
                { empty && <p className="error-text">Please enter username and password</p> }
                { invalid && <p className="error-text">Invalid username and password</p> }
                <fieldset>
                    <label htmlFor="username" className="username login-label">User Name</label>
                    <input type="text" name="username" id="username" placeholder="Enter username" className="login-control" autoComplete="off" onChange={(e) => setUsername(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="password" className="password login-label">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password" className="login-control" autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
                </fieldset>
                <fieldset>
                    <input type="submit" value="Login" name="submit" id="login" className="login-button" onClick={handleSubmit} />
                </fieldset>
            </form>
        </div>
    );
}

export default SignUp;