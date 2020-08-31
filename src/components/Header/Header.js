import React from 'react';
function Header() {
    return(
        <nav className="navbar navbar-expand-sm bg-header-blue navbar-dark">
        {/* Brand */}
        <a className="navbar-brand" href="#">
        
        </a>
        {/* Links */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link fa  fa-info-circle" href="#"><span className="ml-1">
            About</span>
              
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fa  fa-envelope" href="#"><span className="ml-1">
            Contact</span>
              
            </a>
          </li>          
        <li>
        <form className="navbar-form navbar-left" action="/action_page.php">
  <div className="input-group">
    <input
      type="text"
      className="form-control"
      placeholder="Search"
      name="search"
    />
    <div className="input-group-btn">
      <button className="btn btn-default" type="submit">
        <i className="fa fa-search" />
      </button>
    </div>
  </div>
</form>
</li>
</ul>
      </nav>
      
    )
}
export default Header;