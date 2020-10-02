import React, { Component } from 'react';
import '../../../public/CSS/main.css';
import {withRouter, matchPath} from 'react-router-dom';
import HeaderMenu from '../Header/HeaderMenu';
import Footer from '../Footer/Footer';
import axios from 'axios';
import moment from 'moment';

class Claims extends Component {

  constructor(props){
    super(props);
    this.state = {
        error : null,
        isLoaded : false,
        claims : [],
        active: false          
    };
  }

  componentDidMount(){    
    
    axios.get(`http://localhost:3001/claims/list`)    
    .then(
        // handle the result
        (result) => {
            this.setState({
                isLoaded : true,
                claims : result
            });            
        },

        // Handle error 
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        },
    )
}

  
  render() {
    const {error, isLoaded, claims} = this.state;
    if(error){
      return ( <div>
      <HeaderMenu />
      <div className="container">
      <div>Error in loading</div>
      </div>
      <Footer />
      </div>);
    }else if (!isLoaded) {
      return ( <div>
      <HeaderMenu />
      <div className="container">
     <div>Loading ...</div>
     </div>
     <Footer />
     </div>);
    } else {

    return (
       <div>
        <HeaderMenu />
        <div className="container">      
                    
          <table id="customers" className="mt-4">
      <thead>
        <tr>
          <th>Employee Id</th>
          <th>Employee Name</th>
          <th>Claim Number</th>
          <th>Claim Type</th>
          <th>Claim Program</th>
          <th>Claim Start Date</th>
          <th>Claim End Date</th>
      <th className="edit-col">Action</th>
      </tr>
      </thead>
      <tbody>
        {
      claims.map((claim, index) => (   
     
        <tr key = {index}>
          <td>{claim.emp_id}</td>
          <td>{claim.emp_name}</td>
          <td>{claim.claim_no}</td>
          <td>{claim.claim_type}</td>
          <td>{claim.claim_program}</td>
          <td>{claim.start_date ? moment(claim.start_date).format('MM-DD-YYYY') : '' }</td>
          <td>{claim.end_date ? moment(claim.end_date).format('MM-DD-YYYY') : ''}</td>
          <td><a href={'/claims/' + claim.claim_no}><i className="fa fa-edit" > Edit</i></a></td>          
        </tr>
        ))
      }
      </tbody>
      
          </table>
  
 </div>

<Footer />
    </div>  
    
    );
    }
  }
}

export default withRouter(Claims);
