import * as React from "react";
import "../assets/icons/git2.png";
import "../assets/icons/gmail.png";
import "../assets/icons/smartphone.svg";
import "../assets/icons/linkedin.png";

class Contact extends React.Component{
    render(){ return <div className="SectionContainer">
            <h2 className="Title2">Contact</h2>
            <div className="Contact1">
                <img src={require("../assets/icons/linkedin.png")} className="ContactIcon"/>
                <a href="https://www.linkedin.com/in/julie-vanderbyse/" className="LinkText"><p className="LinkText">LinkedIn</p></a>
                <p className="PhoneText">+32.498.41.54.32</p>
                <img src={require("../assets/icons/smartphone.svg")} className="ContactIcon"/>
            </div>
            <div className="Contact2">
                <p className="MailText">vanderbysej@gmail.com</p>
                <img src={require("../assets/icons/gmail.png")} className="ContactIcon"/>
                <img src={require("../assets/icons/git2.png")} className="ContactIcon"/>
                <a href="https://github.com/JVDB18/" className="GitText">GitHub</a>
            </div>
            </div>
    }
}

export default Contact;