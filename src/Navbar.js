
import logo from "./logo.png"
import React, { useEffect, useState } from "react";
import { GA4React } from "ga-4-react";
function Navbar() {
 const [isActive, setisActive] = React.useState(false);

 const ga4react = new GA4React(
  'G-FT85PNQ0Y5',
  { /* ga custom config, optional */ },
  [ /* additional code, optional */ ],
  5000 /* timeout, optional, defaults is 5000 */
  )

  ga4react.initialize().then((ga4) => {
    ga4.pageview('path')
    ga4.gtag('event','pageview','path') // or your custom gtag event
  },(err) => {
    console.error(err)
  })



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