import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import BioImg from "../../Images/Self.jpeg";
import Footer from "../../components/Footer"
// import Resume from "../../assets/Resume.pdf";

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
                <Link id="aboutme-nav" className={`nav-link dawn-color dawn-underline`} to="/">About Me</Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/portfolio">Portfolio</Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/projects">Projects</Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/contact">Contact</Link>
              </li>
            </ul>
          </div>  
        </nav>
        </header>
    <div className="container">
      <div className="about-me">
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
           Hi, I'm Norbu Sherpa, currently working as a Salesforce Engineer. I moved to Sydney about 12 years ago to complete my Master in Accounting Studies.
            After completeing my Masters my fascination for technology motivated me to change my career. I got certified as a Salesforce Administrator and have been working in a fintech,
            for the last couple of years. I've been working with developer closly during my time with my current employeer, which made me more curious about undersatanding code. So I enrolled
            for a full stack coding program in University oo Sydney to embark on my journey as a developer.
            </p>
      </div> 
        <div className="interests">
          <div className="all-interests">
           <h2><strong>Interest</strong></h2>
           <p> Besides technology I am here are my few other interests</p>
           <ul>
               <h4>Travelling</h4>
               <h4>Automotive enthusiast</h4>
               <h4>Motor Racing</h4>
               <h4>Soccer</h4>
               </ul>
           </div>
           </div>
          </div> 
          <Footer />
        </div>     
    )
}


export default AboutMe;