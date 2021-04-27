import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import OkatuImg from "../../Images/Otaku.png";

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
                <Link className={`nav-link dawn-color`} to="/#/contact">Contact Me</Link>
              </li>
            </ul>
          </div>  
        </nav>
        <div class="container">
        <div class="row">
            <div class="Portfolio-sm">
                <h1>Summary of Skills</h1>
                <div class="resume-sm">
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
                    <li>
                        <strong>Creating Flow Builder, Approval Process,Process Builder</strong>
                    </li>
                    <li>
                        <strong>Creating of Profile, Permission Sets, Objects, Fields and Queues</strong>
                    </li>
                    <li>
                        <strong>Reporting, Dashboard and SOQL query</strong>
                    </li>
                    <li>
                        <strong>Deployment using Bitbucket Pipelines and Change Sets</strong>
                    </li>
                </ul>
                <h3>System Administrator Skills</h3>
                <ul>
                    <li>
                        <strong>Okta Administrator</strong>
                    </li>
                    <li>
                        <strong>Jira and Confluence System Administrator</strong>
                    </li>
                    <li>
                        <strong>Office 365 System Administrator</strong>
                    </li>
                    <li>
                        <strong>Slack System Administrator</strong>
                    </li>
                    <li>
                        <strong>Zoom System Administrator</strong>
                    </li>
                </ul>
            </div>
            <div class="project">
                <h1> Projects</h1>
                <div class="otaku">
                    <h2>Otaku</h2>
                        <li> <a href="https://github.com/norbu-s/Project-Otaku">Repo </a></li>
                        <li><a href="https://norbu-s.github.io/Project-Otaku/"> Otaku App</a></li>
                        <div className="sidebar">
            <div id="self-div">
              <img
                id="Self-img"
                alt=""
                src={OkatuImg}
              />  
                </div>
                </div>            
            
            </div>
         </div>
         </div>
    </div>
    </div>
</header>
    )
}

export default Portfolio;