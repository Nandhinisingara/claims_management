import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../../../public/CSS/main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';

class Login extends Component {

   constructor(props){
      super(props);
      this.state = {
          user_name : '',
          password: '' ,
          errorMessage: ''            
      }; 
          
    }

    handleChange = event => {      
       this.setState({ [event.target.name]: event.target.value });      
    }

    handleSubmit = (e) => {
      e.preventDefault();        
   
       axios.post(`http://localhost:3001/claims/auth`, { userName: this.state.user_name,
       password: this.state.password })
         .then(res => {
            if (res == "true") {
               this.props.history.push('home'); 
            } else {
               this.setState({errorMessage :"Invalid Username or Password"});
            }            
         })

       
   }

  
  render() {
   
    return (
       <div>
        <Header />
        <div className="login-form">
        <form onSubmit={this.handleSubmit}>
   <img src="../../../img/logo.jpg" alt="Avatar" className="avatar mb-3" />
        
      <div className="form-group">
      <span className="text-danger">{this.state.errorMessage}</span>
         <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="user_name"
            required="required"            
            onChange={this.handleChange}
            />
      </div>
      <div className="form-group">
         <input
            type="password"
            className="form-control"
            placeholder="Password"
            required="required"
            name="password"
            onChange={this.handleChange}
            />
      </div>
      <div className="form-group">
         <button type="submit" className="btn btn-block bg-header-blue">
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
