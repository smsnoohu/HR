import React, { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = props => {
    const [userObject, setUserObject] = useState({
        userID: 'u123456',
        EmployeeName: 'Mohamed Noohu',
        hiringDate: '02/11/2017',
        jobTitle: 'Business Executive',
        shiftGroup: 'General',
        costCenter: 'Test',
        dept: 'HR Admin',
        password: '',
        role: 'level1'
    });

    const [isAunthetic, setIsAunthetic] = useState(false);

    console.log('userObject123: ', userObject, isAunthetic);

    // if(userObject.userID != '' && userObject.userID != null && userObject.password != '' && userObject.password != null){
    //     setIsAunthetic(true);
    //     console.log('true');
    // }else{
    //     setIsAunthetic(false);
    //     console.log('false');
    // }

    useEffect(() => {
        if(userObject.userID != '' && userObject.userID != null && userObject.password != '' && userObject.password != null){
            setIsAunthetic(true);
            console.log('true');
        }else{
            setIsAunthetic(false);
            console.log('false');
        }
    }, []);

    return(
        <AuthContext.Provider
            value={{
                userObject,
                setUserObject,
                isAunthetic,
                setIsAunthetic
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;