import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Contact () {
    return (
    <header>
        <div>
            <nav id="index-navbar" className={`navbar navbar-expand-lg navbar-light col-12 dawn-background-2`}>
          <button id="index-nav-toggler" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
                      
          <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
            <ul id="index-link" className="navbar-nav ml-auto">
              <li className={`nav-item`}>
                <Link id="aboutme-nav" className={`nav-link dawn-color dawn-underline`} to="/#/">About Me</Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/#/projects">Portfolio</Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/#/projects">Projects</Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/#/contact">Contact Me</Link>
              </li>
            </ul>
          </div>  
        </nav>
        </div>
        </header>
    )
}

export default Contact;