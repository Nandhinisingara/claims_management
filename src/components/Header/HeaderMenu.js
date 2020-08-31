import React from 'react';
function HeaderMenu() {
    return(
        <nav className="navbar navbar-expand-sm bg-header-blue navbar-dark">
        
       
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link active fa  fa-home" href="/home"><span className="ml-2">
            Home</span>
              
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fa  fa-list" href="/claims"><span className="ml-2">
            Claims</span>
              
            </a>
          </li>  
          </ul>
          
         <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <a className="nav-link fa  fa-list" href="/claims"><span className="ml-2">
            Claims</span>
              
            </a>
          </li>        
        </ul>
        </nav>
        
        
        
      
      
    )
}
export default HeaderMenu;