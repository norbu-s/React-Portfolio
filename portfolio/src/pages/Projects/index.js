import React from "react";
import "./style.css";
import OkatuImg from "../../Images/Otaku.png";
import NoteImg from "../../Images/NoteTaker.png";
import WeatherImg from "../../Images/WeatherApp.png";
import EntertainMeImg from "../../Images/Entertain-Me.png";
import EmployeeDirectoryImg from "../../Images/EmployeeDirectory.png";
import BudgetTrackerImg from "../../Images/budgetTracker.png";


function Projects () {
    return (
<div className="project">
<h1> Projects</h1>
<strong><p> A few projects that I've completed worked on during my bootcamp course</p></strong>
<div className="otaku">
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
<div className="note">
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
<div className="weather">
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
<div className="budget-tracker">
    <h2>Budget Tracker</h2>
        <li> <a href="https://github.com/norbu-s/BudgetTracker">Repo </a></li>
        <li><a href="https://norbu-s.github.io/Weather-App2"> Budget Tracker</a></li>
        <div className="sidebar">
        <div id="budgetTracker-div">
        <img
            id="budgetTracker-img"
            alt=""
            src={BudgetTrackerImg}
        />  
        </div>  
        </div> 
</div>
<div className="Entertain-Me">
    <h2>Entertain-Me</h2>
        <li> <a href="https://github.com/norbu-s/Entertain-Me">Repo </a></li>
        <li><a href="https://arcane-badlands-48936.herokuapp.com/"> Entertain-Me</a></li>
        <div className="sidebar">
        <div id="entertain-me">
        <img
            id="entertainMe-img"
            alt=""
            src={EntertainMeImg}
        />  
        </div>  
        </div> 
</div>
<div className="Employee-Directory">
    <h2>Employee-Directory-Me</h2>
        <li> <a href="https://github.com/norbu-s/Entertain-Me">Repo </a></li>
        <li><a href="https://arcane-badlands-48936.herokuapp.com/"> Entertain-Me</a></li>
        <div className="sidebar">
        <div id="employee-directory">
        <img
            id="employeedirectory-img"
            alt=""
            src={EmployeeDirectoryImg}
        />  
        </div>  
        </div> 
</div>
</div>
    )
}

export default Projects;