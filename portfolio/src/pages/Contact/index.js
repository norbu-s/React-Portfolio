import React from "react";
import "./style.css";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Contact () {
  return (
<div>
      <Header />
      <div>
      <Form />
      <div className="contact">
         <div class="row">
           <div class="col-sm">
        <div className="details">
          <h2>Contact</h2>
        <br></br>
            <ul>
                <li><h3><strong>Email:</strong><a href="mailto:norbu@norbu.com"> norbuts@hotmail.com</a></h3></li>
                <li><h3><strong>Github:</strong><a href="https://github.com/norbu-s"> www.github.com/norbu-s</a></h3></li>
                <li><h3><strong>LinkedIn:</strong><a href="https://www.linkedin.com/in/norbu-sherpa-b3802854/"> LinkedIn Profile</a></h3></li>
                <li><h3><strong>Phone No:</strong><a href="tel:+1-555-555-1212">+1-555-555-1212</a></h3></li>
            </ul> 
          </div>
          </div>
          </div>
      </div>
      </div> 
      <Footer />
</div>

  )
}

export default Contact;