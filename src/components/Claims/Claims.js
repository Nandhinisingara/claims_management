import React, { Component } from 'react';
import '../../../public/CSS/main.css';
import {withRouter} from 'react-router-dom';
import HeaderMenu from '../Header/HeaderMenu';
import Footer from '../Footer/Footer';

class Claims extends Component {

  
  render() {
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
        <tr>
          <td>710001</td>
          <td>Maria Anders</td>
          <td>567890</td>
        <td>test</td>
      <td>test</td>
      <td>1/1/2020</td>
      <td>1/1/2030</td>
      <td><a href="/edit"><i className="fa fa-edit" > Edit</i></a></td>
        </tr>
        <tr>
          <td>710001</td>
          <td>Maria Anders</td>
          <td>567890</td>
        <td>test</td>
      <td>test</td>
      <td>1/1/2020</td>
      <td>1/1/2030</td>
     <td><a href="/edit"><i className="fa fa-edit" > Edit</i></a></td>
        </tr>
       
      <tr>
         <td>710001</td>
        <td>Maria Anders</td>
        <td>567890</td>
      <td>test</td>
    <td>test</td>
    <td>1/1/2020</td>
    <td>1/1/2030</td>
   <td><a href="/edit"><i className="fa fa-edit" > Edit</i></a></td>
      </tr>
      <tr>
         <td>710001</td>
        <td>Maria Anders</td>
        <td>567890</td>
      <td>test</td>
    <td>test</td>
    <td>1/1/2020</td>
    <td>1/1/2030</td>
   <td><a href="/edit"><i className="fa fa-edit" > Edit</i></a></td>
      </tr>
      <tr>
         <td>710001</td>
        <td>Maria Anders</td>
        <td>567890</td>
      <td>test</td>
    <td>test</td>
    <td>1/1/2020</td>
    <td>1/1/2030</td>
   <td><a href="/edit"><i className="fa fa-edit" > Edit</i></a></td>
      </tr>
      <tr>
        <td>710001</td>
        <td>Maria Anders</td>
        <td>567890</td>
      <td>test</td>
    <td>test</td>
    <td>1/1/2020</td>
    <td>1/1/2030</td>
   <td><a href="/edit"><i className="fa fa-edit" > Edit</i></a></td>
      </tr>
      <tr>
         <td>710001</td>
        <td>Maria Anders</td>
        <td>567890</td>
      <td>test</td>
    <td>test</td>
    <td>1/1/2020</td>
    <td>1/1/2030</td>
   <td><a href="/edit"><i className="fa fa-edit" > Edit</i></a></td>
      </tr>
      <tr>
         <td>710001</td>
        <td>Maria Anders</td>
        <td>567890</td>
      <td>test</td>
    <td>test</td>
    <td>1/1/2020</td>
    <td>1/1/2030</td>
   <td><a href="/edit"><i className="fa fa-edit" > Edit</i></a></td>
      </tr>
        <tr>
           <td>710001</td>
          <td>Maria Anders</td>
          <td>567890</td>
        <td>test</td>
      <td>test</td>
      <td>1/1/2020</td>
      <td>1/1/2030</td>
     <td><a href="/edit"><i className="fa fa-edit" > Edit</i></a></td>
        </tr>
        <tr>
           <td>710001</td>
          <td>Maria Anders</td>
          <td>567890</td>
        <td>test</td>
      <td>test</td>
      <td>1/1/2020</td>
      <td>1/1/2030</td>
     <td><a href="/edit"><i className="fa fa-edit" > Edit</i></a></td>
        </tr>
        <tr>
           <td>710001</td>
          <td>Maria Anders</td>
          <td>567890</td>
        <td>test</td>
      <td>test</td>
      <td>1/1/2020</td>
      <td>1/1/2030</td>
     <td><a href="/edit"><i className="fa fa-edit" > Edit</i></a></td>
        </tr>
        <tr>
           <td>710001</td>
          <td>Maria Anders</td>
          <td>567890</td>
        <td>test</td>
      <td>test</td>
      <td>1/1/2020</td>
      <td>1/1/2030</td>
     <td><a href="/edit"><i className="fa fa-edit" > Edit</i></a></td>
        </tr>
        </tbody>
        
          </table>
          
 </div>

<Footer />
    </div>    
    );
  }
}

export default withRouter(Claims);
