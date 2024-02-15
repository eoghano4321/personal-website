import NavBar from "./components/NavBar";
import './Contact.css';

import {state, useRef, useState, Component, createRef} from 'react';
import React from "react";
import emailjs from '@emailjs/browser';

import Reaptcha from 'reaptcha';

class Contact extends Component {
    state = {
        verified: false
      };

    form = createRef();
    captchaRef = createRef();
    

    onVerify = (recaptchaResponse) => {
        this.setState({
          verified: true
        });
    };

    sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, this.form.current, {
                publicKey: process.env.REACT_APP_PUBLIC_KEY,
            })
            .then(
                () => {
                console.log('SUCCESS!');
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
            
            // Clears the form after sending the email
            e.target.reset();
            this.captchaRef.current.reset();
            this.setState({
                verified: false
            });
    };


    render() {
        return (
            <>
            <NavBar />
            <section className="container">
                <form ref={this.form} onSubmit={this.sendEmail}>
                    <div className="row">
                        <div className="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="fname" placeholder="Your name.."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="lname">Last Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lname" placeholder="Your last name.."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="email">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="email" name="email" placeholder="someone@example.com"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="subject">Subject</label>
                        </div>
                        <div className="col-75">
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <Reaptcha sitekey={process.env.REACT_APP_SITE_KEY} ref={this.captchaRef} onVerify={this.onVerify} theme="dark"/>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" disabled={!this.state.verified}/>
                    </div>
                </form>
            </section>
            
            </>
        );
    }
}

export default Contact;