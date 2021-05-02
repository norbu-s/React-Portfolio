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
               <ul>
                   <li>Creating Flow Builder, Approval Process,Process Builder</li>
                   <li>Creating of Profile, Permission Sets, Objects, Fields and Queues</li>
                   <li>Reporting, Dashboard and SOQL query</li>
                   <li>Using Data loader to extract, insert and bulk update records.</li>
                   <li>Working with managed package, Cloud lending (Skuid)</li>
                   <li>Setting up single sign on</li>
                   <li>Nintex DocGen to create documents.</li>
                   <li>SOQL query using Dev console.</li>
                   <li>Creating and working with scratch orgs.</li>
                   <li>Updating Apex methods and lightning web components.</li>
               </ul>
               <h3><strong>Integration</strong></h3>
               <ul>
                    <li>Worked on Salesforce and Okta integration to enable Single Sign On.</li>
                    <li>Vonage integration for telephony system.</li>
                </ul> 
                <h3><strong>Testing</strong></h3>
                <ul>  
                   <li>Unit testing, SIT, UAT and End to end regression testing of new features.</li>
                   <li>Go Live Support: Providing go live support for weekly /fortnightly release to production.</li>
                   <li>Salesforce Sandbox maintenance.</li>
                   <li>Deployment: deploying through bitbucket pipelines and Change Sets</li>
                   <li>Updating Apex methods and lightning web components.</li>
                </ul> 
               <h3><strong>System Administrator Skills</strong></h3>
               <ul>
                   <li>Okta Administrator</li>
                   <li>Jira and Confluence System Administrator</li>                       
                   <li>Office 365 System Administrator</li>
                   <li>Slack System Administrator</li>
                   <li>Zoom System Administrator</li>
                   <li>Vonage Administrator</li>
                   <li>Front Administrator</li>
               </ul>
               </div>
               <Footer />
        </div>
    )
}

export default Portfolio
