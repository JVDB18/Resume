import * as React from "react";
import "../assets/icons/git2.png";
import "../assets/icons/gmail.png";
import "../assets/icons/smartphone.svg";
import "../assets/icons/linkedin.png";

class Contact extends React.Component{
    render(){ return <div className="SectionContainer">
            <h2 className="Title2">- Contact -</h2>
            <div className="Contact1">
                <img src={require("../assets/icons/linkedin.png")} className="ContactIcon"/>
                <div className="LinkText"><a href="https://www.linkedin.com/in/julie-vanderbyse/">LinkedIn</a></div>
                </div>
            <div className="Contact2">
                <img src={require("../assets/icons/smartphone.svg")} className="ContactIcon"/>
                <p className="PhoneText">+32.498.41.54.32</p>
            </div>
            <div className="Contact3">
                <img src={require("../assets/icons/git2.png")} className="ContactIcon"/>
                <div className="LinkText"><a href="https://github.com/JVDB18/">GitHub</a></div>
            </div>
            <div className="Contact4">
                <img src={require("../assets/icons/gmail.png")} className="ContactIcon"/>
                <p className="MailText">vanderbysej@gmail.com</p>
            </div>
            </div>
    }
}

export default Contact;