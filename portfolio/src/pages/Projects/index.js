import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import OkatuImg from "../../Images/Otaku.png";
import NoteImg from "../../Images/NoteTaker.png";
import WeatherImg from "../../Images/WeatherApp.png";


function Projects () {
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
<div class="project">
<h1> Projects</h1>
<div class="otaku">
    <h2>Otaku</h2>
        <li> <a href="https://github.com/norbu-s/Project-Otaku">Repo </a></li>
        <li><a href="https://norbu-s.github.io/Project-Otaku/"> Otaku App</a></li>
        <div className="sidebar">
        <div id="otaku-div">
        <img
        id="Otaku-img"
        alt=""
        src={OkatuImg}
        />  
        </div>
        </div>            
</div>
<div class="note">
    <h2>Note-Taker</h2>
        <li><a href="https://github.com/norbu-s/Project-Otaku">Repo </a></li>
        <li><a href="https://norbu-s.github.io/Project-Otaku/"> Otaku App</a> </li>
        <div className="sidebar">
        <div id="note-div">
        <img
            id="Note-img"
            alt=""
            src={NoteImg}
        />  
        </div>  
        </div> 
</div>
<div class="weather">
    <h2>Weather App</h2>
        <li> <a href="https://norbu-s.github.io/Weather-App2">Repo </a></li>
        <li><a href="https://norbu-s.github.io/Weather-App2"> Weather App</a></li>
        <div className="sidebar">
        <div id="weather-div">
        <img
            id="Weather-img"
            alt=""
            src={WeatherImg}
        />  
        </div>  
        </div> 
</div>
</div>
</div>
</header>
    )
}

export default Projects;