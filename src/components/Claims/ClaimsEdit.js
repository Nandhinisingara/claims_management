import React, { Component } from 'react';
import {withRouter, matchPath} from 'react-router-dom';
import HeaderMenu from '../Header/HeaderMenu';
import validate from "./ValidateInfo";
import Footer from '../Footer/Footer';
import '../../../public/CSS/main.css';
import axios from 'axios';
import moment from 'moment';
import Regex from 'regex';


class ClaimsEdit extends Component {  
  constructor(props){
    super(props);
    
    this.state = {
        errors : {},
        emp_id : null,
        emp_name: null,
        claim_no: null,
        claim_type: null,
        claim_program: null,
        start_date: null,
        end_date: null,
        successMessage: null     
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    
  }


  
  handleSubmit(e) {    
    e.preventDefault();   
    let validationErrors = validate(this.state);
    if(Object.keys(validationErrors).length > 0) { 
      this.setState({errors :validationErrors});  
    }  else {
      this.setState({errors :''});
      var data = {};
      data.claim_no = this.state.claim_no;
      data.claim_type = this.state.claim_type;
      data.claim_program = this.state.claim_program;
      data.start_date = this.state.start_date;
      data.end_date = this.state.end_date;
      console.log(data)
      axios.post(`http://localhost:3001/claims/update`, { data })
         .then(res => {
            if (res == "success") {
              this.setState({successMessage :"Claims details updated successfully"});
            } else {
              this.setState({successMessage :'Error while updating data.'});
            }           
         })
      
    }
  }

  redirect () {    
    this.props.history.push('/claims'); 
  }

  


  
  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }

  handleInputChange(event) {
    
    var key = event.target.name;      
    var value = event.target.value;
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  }

   componentDidMount(){   
     const claimId =  this.props.match.params.id;  
    axios.get(`http://localhost:3001/claims/`+claimId)    
    .then(
        // handle the result
        (result) => {
            this.setState({               
                emp_id : result[0].emp_id,
                emp_name: result[0].emp_name,
                claim_no: result[0].claim_no,
                claim_type: result[0].claim_type,
                claim_program:result[0].claim_program,
                start_date: result[0].start_date ? moment(result[0].start_date).format('YYYY-MM-DD') : '' ,
                end_date: result[0].end_date ? moment(result[0].end_date).format('YYYY-MM-DD') : '' 
            }); 
            
        },

        // Handle error 
        (error) => {
            this.setState({                
                error
            })
        },
    )
}

  render() {
    
    return (
       <div>
        <HeaderMenu />
      
  <div className="container claims-container claims-edit-form">
  <form
    className="well form-horizontal"    
    id="contact_form"
  >
    <fieldset>
      {/* Text input*/}
      <span className="text-success">{this.state.successMessage}</span>
      <span className="text-danger">{this.state.errorMessage}</span>
      <div className="form-group">
        <label className="col-md-4 control-label">Employee ID</label>
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <input
              name="emp_id"
              placeholder="Employee ID"
              className="form-control"
              type="text"
              value={this.state.emp_id}
              readOnly
            />
          </div>
         
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">Employee Name</label>
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <input
              name="emp_name"
              placeholder="Employee Name"
              className="form-control"
              type="text"
              value={this.state.emp_name}
              readOnly
            />
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">Claim Number</label>
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <input
              id="claim_no"
              name="claim_no"
              placeholder="XXX-XXX-XXX"
              maxLength="9"
              className="form-control"
              type="text"
              value={this.state.claim_no}
              onChange={this.handleInputChange}
            />
             <small id="claimHelp" className="text-danger">
                {this.state.errors? this.state.errors.claim_no ? this.state.errors.claim_no :'' :''}
              </small>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-4 control-label">Claim Type</label>
        <div className="col-md-4 selectContainer">
          <div className="input-group">
            <select name="claim_type" className="form-control selectpicker" value={this.state.claim_type} onChange={this.handleInputChange}>                           
              <option value="Submitted">Submitted</option>
              <option value="Received">Received</option>
              <option value="Pending">Pending</option>
              <option value="More Info Required">More Info Required</option>
              <option value="Denied">Denied</option>
              <option value="Rejected">Rejected</option>
              <option value="Paid">Paid</option>
            </select>
            <small id="claimHelp" className="text-danger">
            {this.state.errors? this.state.errors.claim_type ? this.state.errors.claim_type :'' :''}
            </small>
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">Claim Program</label>
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <input
              name="claim_program"
              placeholder="Claim Program"
              className="form-control"
              type="text"
              maxLength="20"
              value={this.state.claim_program}
              onChange={this.handleInputChange}
            />
             <small id="claimHelp" className="text-danger">
             {this.state.errors? this.state.errors.claim_program ? this.state.errors.claim_program :'' :''}
             </small>
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">Claim Start Date</label>
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <input
              id="date"             
              type="date"
              name="start_date"
              className="form-control datepicker"
              InputLabelProps={{
                shrink: true
              }}
              onChange={(event)=>this.handleInputChange(event)}
              value={this.state.start_date}
              
            />
             <small id="claimHelp" className="text-danger">
            {this.state.errors? this.state.errors.start_date ? this.state.errors.start_date :'' :''}
            </small>
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">Claim End Date</label>
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <input
              id="date"             
              type="date"
              name="end_date"
              className="form-control datepicker"
              InputLabelProps={{
                shrink: true
              }}
              onChange={(event)=>this.handleInputChange(event)}
              value={this.state.end_date}
             
            />
             <small id="claimHelp" className="text-danger">
              {this.state.errors? this.state.errors.end_date ? this.state.errors.end_date :'' :''}
              </small>
          </div>
        </div>
      </div>
      {/* Select Basic */}
      {/* Button */}
      <div className="form-group">
        <label className="col-md-4 control-label" />
        <div className="col-sm-1">
          <button type="submit" className="btn btn-success" id="update" onClick={this.handleSubmit}>
            Update
          </button>
        </div>
        <div className="col-sm-1">
        <button type="button" className="btn btn-danger" onClick={this.redirect}>
          Cancel
        </button>
        </div>
      </div>
    </fieldset>
  </form>
</div>

<Footer />
    </div>    
    );
  }
}

export default withRouter(ClaimsEdit);
