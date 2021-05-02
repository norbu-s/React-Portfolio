import React from "react";
import "./style.css";
import OkatuImg from "../../Images/Otaku.png";
import NoteImg from "../../Images/NoteTaker.png";
import WeatherImg from "../../Images/WeatherApp.png";
import EntertainMeImg from "../../Images/Entertain-Me.png";
import EmployeeDirectoryImg from "../../Images/EmployeeDirectory.png";
import BudgetTrackerImg from "../../Images/budgetTracker.png";
import Header from "../../components/Header"
import Footer from "../../components/Footer";


function Projects () {
    return (
<div>
        <Header />
<div className="project">
<h1>Projects</h1>
<strong><p> A list of projects that I've worked on during my bootcamp course</p></strong>
<div className="otaku">
    <h2>Otaku</h2>
        <p><strong>Title:</strong> Resturant Otaku</p>
        <p>Descrtiption:This project is a responsive and user-friendly web application that allows users to search for nearby restaurants in either an Australian suburb or city. It also includes a save function in which users can save a list of their favourite restaurants and add notes and images for personal reference.</p>
        <li><strong> Github Link:</strong> <a href="https://github.com/norbu-s/Project-Otaku">Resturant Otaku</a></li>
        <li><strong> Deployed App Link:</strong> <a href="https://norbu-s.github.io/Project-Otaku/"> Otaku App</a></li>
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
    <p><strong>Title:</strong> Note-Taker</p>
        <p>Descrtiption:A command-line application with functionalities  create, save and delete notes.</p>
        <li><strong> Github Link:</strong> <a href="https://github.com/norbu-s/Project-Otaku">Note-Taker </a></li>
        <li><strong> Deployed App Link:</strong> <a href="https://norbu-s.github.io/Project-Otaku/"> Note-Taker App</a> </li>
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
        <p><strong>Title:</strong> Weather-App</p>
        <p>Descrtiption: Application to provide weather forecast based on the location entered in the search by the user.</p>
        <li><strong>Github Link:</strong> <a href="https://norbu-s.github.io/Weather-App2">Weather-App</a></li>
        <li><strong>Deployed App Link:</strong> <a href="https://norbu-s.github.io/Weather-App2"> Weather App</a></li>
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
        <p><strong>Title:</strong> Budget Tracker</p>
        <p>Descrtiption: A full stack application that offers an offline functionality for end user to track their budget.</p>
        <li><strong>Github Link:</strong>  <a href="https://github.com/norbu-s/BudgetTracker">Budget Traker</a></li>
        <li><strong>Deployed App Link:</strong> <a href="https://norbu-s.github.io/Weather-App2"> Budget Tracker-App</a></li>
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
        <p><strong>Title:</strong> Entertain-Me</p>
        <p>Descrtiption: EntertainMe is a website for movie enthusiasts to be able to access key information about movies and leave their personal review for films they have watched.
        The benefit of the site is that it is an easy way for users to keep a log of movies they have watched. The simple search functionality means users can also quickly find and recall key movie information including actors and year of release. Having a log of your personal movie reviews is beneficial in a time when more of us are spending more time in front of our screens. You can easily recommend movies to friends based on your own personal review list.
        Search for, save and review your must-see movies all with one, easy-to-use site - EntertainMe.</p>
        <li><strong>Github Link:</strong> <a href="https://github.com/norbu-s/Entertain-Me">Entertain-Me</a></li>
        <li><strong>Deployed App Link:</strong><a href="https://arcane-badlands-48936.herokuapp.com/"> Entertain-Me App</a></li>
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
    <h2>Employee-Directory</h2>
        <p><strong>Title:</strong> Employee-Directory</p>
        <p>A React application which offers a search functionality for end users to serach through the employee database. </p>
        <li><strong>Github Link:</strong>  <a href="https://github.com/norbu-s/Entertain-Me">Employee-Directory</a></li>
        <li><strong>Deployed App Link:</strong><a href="https://arcane-badlands-48936.herokuapp.com/"> Entertain-Me App</a></li>
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
    <Footer />
</div>
    )
}

export default Projects;