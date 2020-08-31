import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import HeaderMenu from '../Header/HeaderMenu';
import Footer from '../Footer/Footer';

class ClaimsEdit extends Component {  
  render() {
    return (
       <div>
        <HeaderMenu />
      
  <div className="container claims-container claims-edit-form mt-4">
  <div className="bs-example">
        <form action="/examples/actions/confirmation.php" className="needs-validation" method="post" noValidate>
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" required />
            <div className="invalid-feedback">Please enter a valid email address.</div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" required />
            <div className="invalid-feedback">Please enter your password to continue.</div>
          </div>
          <div className="form-group">
            <label className="form-check-label"><input type="checkbox" /> Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>



      
  </div>
  
  

          

<Footer />
    </div>    
    );
  }
}

export default withRouter(ClaimsEdit);
