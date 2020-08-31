import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../../../public/CSS/main.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Login extends Component {

   submitForm = (e) => {
      //e.preventDefault();
      this.props.history.push('home');    
   }

  
  render() {
    return (
       <div>
        <Header />
        <div className="login-form">
        <form onSubmit={this.submitForm.bind(this)} method="post">
   <img src="../../../img/logo.jpg" alt="Avatar" className="avatar mb-3" />
   
      <div className="form-group">
         <input
            type="text"
            className="form-control"
            placeholder="Username"
            required="required"
            />
      </div>
      <div className="form-group">
         <input
            type="password"
            className="form-control"
            placeholder="Password"
            required="required"
            />
      </div>
      <div className="form-group">
         <button type="submit" className="btn btn-primary btn-block bg-header-blue">
         Log in
         </button>
      </div>
        </form>
   
</div>
<Footer />
    </div>    
    );
  }
}

export default withRouter(Login);
