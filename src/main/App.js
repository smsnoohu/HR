import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../assets/stylesheets/App.scss';
import Login from './Login/Login';
import Container from './Container';
import EventContextProvider from '../context/EventContextProvider';
import { AuthContext } from '../context/AuthContextProvider';

const App = () => {
  const { isAunthetic } = useContext(AuthContext);
  // const [isLogin, setLogin] = useState(false);
  return (
    <>
      { isAunthetic && <Login /> }
      <Router>
        <EventContextProvider>
          { !isAunthetic && <Container /> }
        </EventContextProvider>
      </Router>
    </>
  );
}

export default App;