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
       
<Footer />
    </div>    
    );
  }
}

export default withRouter(Home);;
