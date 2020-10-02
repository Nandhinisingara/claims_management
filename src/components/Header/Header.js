import React from 'react';
function Header() {
    return(
      <nav className="navbar bg-header-blue">
      <div className="container-fluid">
        
        <div className="collapse navbar-collapse" id="alignment-example">
         
          <ul className="nav navbar-nav navbar-right ">
            <li>
              <a href="#"><i className="fa fa-fw fa-info-circle"></i>About</a>
            </li>

            <li>
              <a href="#"><i className="fa fa-fw fa-envelope"></i>Contact</a>
            </li>

            <li>
            <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
    )
}
export default Header;