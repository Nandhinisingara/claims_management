import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';
import '../../../public/CSS/main.css';
import HeaderMenu from '../Header/HeaderMenu';
import Footer from '../Footer/Footer';

class Home extends Component {

  
  render() {
    return (
       <div>
        <HeaderMenu />
        <div id="about" className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <h2>About Company Page</h2><br />
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <br /><button className="btn btn-default btn-lg">Get in Touch</button>
            </div>
            <div className="col-sm-4">
              <span className="fa fa-fw fa-signal"></span>
            </div>
          </div>
        </div>
        
        {/* Container (Services Section) */}
        <div id="contact" className="container-fluid bg-grey">
          <h2 className="text-center">CONTACT</h2>
          <div className="row">
            <div className="col-sm-5">
              <p>Contact us and we'll get back to you within 24 hours.</p>
              <p><span className="glyphicon glyphicon-map-marker" /> Chicago, US</p>
              <p><span className="glyphicon glyphicon-phone" /> +00 1515151515</p>
              <p><span className="glyphicon glyphicon-envelope" /> myemail@something.com</p>
            </div>
            <div className="col-sm-7 slideanim">
              <div className="row">
                <div className="col-sm-6 form-group">
                  <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                </div>
                <div className="col-sm-6 form-group">
                  <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                </div>
              </div>
              <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows={5} defaultValue={""} /><br />
              <div className="row">
                <div className="col-sm-12 form-group">
                  <button className="btn btn-default pull-right" type="submit">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
<Footer />
    </div>    
    );
  }
}

export default withRouter(Home);;
