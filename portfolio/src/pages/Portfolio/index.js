import React from 'react'
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Portfolio () {
    return (
        <div>
            <Header />
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
               <Footer />
        </div>
    )
}

export default Portfolio
