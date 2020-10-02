import React from 'react';


    




function HeaderMenu() {
    return(

      <nav className="navbar bg-header-blue">
      <div className="container-fluid">
        
        <div className="collapse navbar-collapse" id="alignment-example">
         
          <ul className="nav navbar-nav navbar-left ">
          <li className="nav-item">
            <a className="nav-link active fa  fa-home" href="/home"><span className="ml-2 nav-icon-padding">
            Home</span>
               
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fa {} fa-list" href="/claims"><span className="ml-2 nav-icon-padding">
            Claims</span>              
            </a>
          </li>              
          </ul>
          <ul className="nav navbar-nav navbar-right ">
          <li className="dropdown">
  <a
    href="#"
    className="dropdown-toggle"
    data-toggle="dropdown"
    role="button"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Welcome Nandhini <span className="caret" />
  </a>
  <ul className="dropdown-menu" aria-labelledby="about-us">
    <li>
      <a href="#">Profile Settings</a>
    </li>
    <li>
      <a href="/">Logout</a>
    </li>
    
  </ul>
</li>
          </ul>
        </div>
      </div>
    </nav>
      
         
        
        
      
      
    )
}
export default HeaderMenu;