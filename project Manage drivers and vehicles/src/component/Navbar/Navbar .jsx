import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar .css"
const Navbar  = () => {
   
    return (
        <nav className="navbar">
          <ul className="navbar-menu">
            <li className="navbar-item dropdown">
              <span>Account Settings</span>
              <ul className="dropdown-menu">
              <li><Link to={`/user-details/${localStorage.getItem("id")}`}>Current User Info</Link></li>
                <li><Link to={`/change-password/${localStorage.getItem("id")}`}>Change Password</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              
              </ul>
            </li>
            <li className="navbar-item"><Link to="/drivers">Drivers</Link></li>
            <li className="navbar-item"><Link to="/all-people">People</Link></li>
            <li className="navbar-item"><Link to="/all-users">Users</Link></li>
            <li className="navbar-item"><Link to="/application">Applications</Link></li>
          </ul>
        </nav>
      );
}

export default Navbar 