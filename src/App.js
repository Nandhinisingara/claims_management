import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route  
} from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Claims from './components/Claims/Claims';
import EditClaims from './components/Claims/ClaimsEdit';

import './App.css';


const LoginPage = () => (
  <Login />
);

const HomePage = () => (
  <Home />
);

const ClaimsList = () => (
  <Claims />
);

const ClaimsEdit = () => (
<EditClaims />
);



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route exact path="/claims" component={ClaimsList} />
          <Route exact path="/claims/:id" component={ClaimsEdit} />
         
        </div>
      </Router>
    );
  }
}

export default App;
