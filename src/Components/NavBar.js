import React from 'react';
import { NavLink } from "react-router-dom";
import "./Home.css";



function NavBar() {
    return (
    <div >
         
      <div >
        <div className="navbar">
          <div className="logo">
            <h1 className="texttit">Basketball Teams</h1>
          </div>  
           
          <div className="navopt">
          <NavLink  to="/">Home</NavLink>
          </div>
          <div className="navopt">
          <NavLink  to="/TeamContainer">
            Team
          </NavLink>
          </div>
          <div className="navopt">
          <NavLink  to="/PlayerContainer">
            Player
          </NavLink>
          </div>
          <div className="navopt">
          <NavLink  to="/PlayerContainer">
            Games
          </NavLink>
          </div>
        </div>
      </div>

      
    </div>
  
    )
}
export default NavBar;