import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import React from 'react';
import "./contact.css"
import {ReactComponent as Logo} from "../../assets/crown.svg";
export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_00it3kc', "template_9yjnagn" , e.target, "user_7EV5ZVrZzP2a4cLHtWL26")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(

        <div>
            <div className="container">
                <Link to='/'>
                     <Logo className='logo' />   
                </Link>


            <form onSubmit={sendEmail} className="forms">
                    <div className="main">
                        <div className="sub">
                            <input type="text" className="form-control" placeholder="Name" name="name" required/>
                        </div>
                        <div className="sub">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required />
                        </div>
                        <div className="sub">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required />
                        </div>
                        <div className="sub">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="sub">
                            <input type="submit" className="form-control" value="Send Message" required />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}