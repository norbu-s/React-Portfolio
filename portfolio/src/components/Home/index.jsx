import { Link } from "react-router-dom";
import React from 'react'

 const Home = () => {
    return (
        <div className="home">
            <div className ="title">
							<h1>
								<p> Hi, </p>
								<p> I am Norbu</p>
								<p> Salesforce Engineer</p>
							</h1>
							<Link to="about">
								<button>More Info</button>
							</Link>
						</div>
						<div className="person">
							<img
							src={`${process.env.PUBLIC_URL}/Self.jpeg`}
							alt="photo"/>
						</div>
        </div>
    )
};

export default Home;
