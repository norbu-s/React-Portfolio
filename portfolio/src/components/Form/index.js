import React from 'react'
import "./style.css"

function Form() {
    return (
        <form>
            <div className="grid-item page-header">
                <div class="row">
                <div class="col-sm">
                <h1> Contact Us</h1>
                <div className="form-group">
                    <label for="name"><strong>Name</strong></label>
                    <input type="Name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name"/>
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label for="email"><strong>Email</strong></label>
                    <input type="Email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email"/>
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label for="message"><strong>Message</strong></label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
            </div>
            </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
  };

export default Form
