import React from "react"
import "./style.css"

const Footer = () => {
    return (
        <footer> 
            <p> Norbu Sherpa</p>
            <p>Copyright 2021</p>
            {/* <a href="https://github.com/norbu-s"> */}
            {/* <img src={`${process.env.PUBLIC_URL}/github.png`} alt="Github-icon"/> */}
            {/* </a> */}
            <a href="https://www.linkedin.com/in/norbu-sherpa-b3802854/">
            <img src="https://cdn.exclaimer.com/Handbook%20Images/linkedin-icon_square_32x32.png?_ga=2.4752115.1543827992.1619151308-1583862240.1619151308" alt="LinkedIn-icon"/>
            </a>
        </footer>
    )
}

export default Footer
