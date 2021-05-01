import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import BioImg from "../../Images/Self.jpeg";
import Resume from "../../assets/Resume.pdf";

function AboutMe () {
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
                <Link id="aboutme-nav" className={`nav-link dawn-color dawn-underline`} to="/">About Me</Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/projects">Projects</Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>  
        </nav>
        <div className="portfolio">
            <h1><strong>Bio</strong></h1>
            <div className="sidebar">
            <div id="self-div">
              <img
                id="Self-img"
                alt=""
                src={BioImg}
              />
            </div>
            </div>
            <p>
            Hi, my name is Norbu Sherpa.I'm currently working as a Salesforce Engineer at Athena Home Loan. I migrated to Sydney 12 years ago to complete my Master in Accounting Studies. My fasication of technology motivated me to change my career path. A few years
                ago I was working as an operations supervisor for a litigation support firm. I resigned from that position and started preparing for Salesforce certification, I was successful in acquiring the Salesforce Administrator Certification. Three
                weeks later I got an opportunity to interview with Athena Home loans and the rest is history. Working in a fintech has broadended my knowledge and understanding of how technology works.This made me realise programming was an essential
                skill set to have. So I enrolled for the coding boot camp and embarked on my journey as become a developer.            </p>
            <br/>
            
            <div className="Portfolio-sm">
                <h1>Summary of Skills</h1>
                <h3><strong>Programming Languages</strong></h3>
                <ul>
                    <li>CSS + HTML</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>Node.js</li>
                    <li>MySql</li>
                    <li>Sequilize</li>
                    <li>Express.js</li>
                    <li>MongoDb</li>
                    <li>Apex</li>
                    <li>React.Js</li>
                </ul>
                <h3><strong>Salesforce Skills</strong></h3>
                <p>Certified Administrator (ADM 201 Certification) with experience in -</p>
                <ul>
                    <li>Creating Flow Builder, Approval Process,Process Builder</li>
                    <li>Creating of Profile, Permission Sets, Objects, Fields and Queues</li>
                    <li>Reporting, Dashboard and SOQL query</li>
                    <li>Deployment using Bitbucket Pipelines and Change Sets</li>
                </ul>
                </div>
                <h3><strong>System Administrator Skills</strong></h3>
                <ul>
                    <li>Okta Administrator</li>
                    <li>Jira and Confluence System Administrator</li>                       
                    <li>Office 365 System Administrator</li>
                    <li>Slack System Administrator</li>
                    <li>Zoom System Administrator</li>
                </ul>
                <div className="grid-item interests">
            <h2><strong>Interest</strong></h2>
            <ul>
                <li>
                    <h4>Travelling</h4>
                </li>
                <li>
                    <h4>Technology</h4>
                </li>
                <li>
                    <h4>Motor Racing</h4>
                </li>
                <li>
                    <h4>Soccer</h4>
                </li>
                </ul>
            </div>
        </div>
     </div> 
  </header> 
    )
}


export default AboutMe;