import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import BioImage from "./images/Self.jpeg";

function AboutMe () {
    return (
        <div>
            <header>
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
                <Link className={`nav-link dawn-color`} to="/#/contact">Contact Me</Link>
              </li>
            </ul>
          </div>  
        </nav>
        <div className="portfolio">
            <h1>Bio</h1>
            <p>
            Hi, my name is Norbu Sherpa.I'm currently working as a Salesforce Engineer at Athena Home Loan. I migrated to Sydney 12 years ago to complete my Master in Accounting Studies. My fasication of technology motivated me to change my career path. A few years
                ago I was working as an operations supervisor for a litigation support firm. I resigned from that position and started preparing for Salesforce certification, I was successful in acquiring the Salesforce Administrator Certification. Three
                weeks later I got an opportunity to interview with Athena Home loans and the rest is history. Working in a fintech has broadended my knowledge and understanding of how technology works.This made me realise programming was an essential
                skill set to have. So I enrolled for the coding boot camp and embarked on my journey as become a developer.            </p>
            <br/>
            <div className="grid-item interests">
            <h2><strong>Interest</strong></h2>
            <ul>
                <li>
                    <h3><strong>Travelling</strong></h3>
                </li>
                <li>
                    <h3><strong>Technology</strong></h3>
                </li>
                <li>
                    <h3><strong>Motor Racing</strong></h3>
                </li>
                <li>
                    <h3> <strong>Soccer</strong></h3>
                </li>
                </ul>
            </div>
        </div>
     </div>
     <header/>
</div>
    )
}


export default AboutMe;