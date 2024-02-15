import NavBar from "./components/NavBar";
import './Contact.css';

import {useRef} from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
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
    };


    return (
        <>
        <NavBar />
        <section className="container">
            <form ref={form} onSubmit={sendEmail}>
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
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </section>
        
        </>
    )
}

export default Contact;