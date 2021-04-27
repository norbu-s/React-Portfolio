import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Portfolio () {
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
        <div className="container">
        <div className="row">
            <div className="Portfolio-sm">
                <h1>Summary of Skills</h1>
                <div className="resume-sm">
                    <a href="../Resource/Norbu Sherpa - Resume 2020.pdf">Resume</a>
                </div>
                <h3>Programming Languages</h3>
                <ul>
                    <strong>CSS + HTML</strong>
                    <strong>Javascript</strong>
                    <strong>JQuery</strong>
                    <strong>Node.js</strong>
                    <strong>MySql</strong>
                    <strong>Sequilize</strong>
                    <strong>Express.js</strong>
                    <strong>MongoDb</strong>
                    <strong>Apex</strong>
                    <strong>React.Js</strong>
                </ul>
                <br>
                <h3>Salesforce Skills</h3>
                <strong>Certified Administrator (ADM 201 Certification) with experience in -</strong>
                </br>
                <ul>
                    <strong>Creating Flow Builder, Approval Process,Process Builder</strong>
                    <strong>Creating of Profile, Permission Sets, Objects, Fields and Queues</strong>
                    <strong>Reporting, Dashboard and SOQL query</strong>
                    <strong>Deployment using Bitbucket Pipelines and Change Sets</strong>
                </ul>
                <h3>System Administrator Skills</h3>
                <ul>
                    <strong>Okta Administrator</strong>
                    <strong>Jira and Confluence System Administrator</strong>                       
                    <strong>Office 365 System Administrator</strong>
                    <strong>Slack System Administrator</strong>
                    <strong>Zoom System Administrator</strong>
                </ul>
            </div>
         </div>
        </div>
    </div>
</header>
    )
}

export default Portfolio;