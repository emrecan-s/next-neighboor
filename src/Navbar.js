
import logo from "./logo.png"
import React, { useEffect, useState } from "react";
function Navbar() {
 const [isActive, setisActive] = React.useState(false);

return(
 <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
              <a className="navbar-item" href="/">
      <img src={logo} ></img>
    </a>
          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
      
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <a className="navbar-item" href="/">Home</a>
            <a className="navbar-item" href="/listing">Listing</a>
          </div>
        </div>
   </nav>

)}

export default Navbar;