import * as React from "react";
import GIT2 from "../assets/icons/git2.png";
import Gmail from "../assets/icons/gmail.png";
import Phone from "../assets/icons/smartphone.svg";
import LinkedIN from "../assets/icons/linkedin.png";
import {Link} from "react-scroll";

class Contact extends React.Component{
    render(){ return <div className="SectionContainer3" id="Contact">
            <h2 className="Title2">- Contact -</h2>
            <div className="FormContainer">
            <form action="https://formspree.io/vanderbysej@gmail.com" method="POST">
                <h3 className="FormTitle">Leave me a message!</h3>
                <input type="email" className="Mail"placeholder="email" name="_replyto" required/>
                <textarea type="text" className="Text" placeholder="text"name="name" required/>
                <input type="submit" className="Send"value="Send" target="blank" required/>
            </form>
            </div>
            <div className="Contact1">
            <img src={Gmail} className="ContactIcon"/>
                <p className="MailText">vanderbysej@gmail.com</p>
                </div>
            <div className="Contact2">
                <img src={Phone} className="ContactIcon"/>
                <p className="PhoneText">+32.498.41.54.32</p>
            </div>
            <div className="Contact3">
                <img src={GIT2} className="ContactIcon"/>
                <div className="LinkText"><a href="https://github.com/JVDB18/" target="blank">GitHub</a></div>
            </div>
            <div className="Contact4">
                <img src={LinkedIN} className="ContactIcon"/>
                <div className="LinkText"><a href="https://www.linkedin.com/in/julie-vanderbyse/" target="blank">LinkedIn</a></div>
                
            </div>
            <Link className="HeadLink" to="Header" offset={-90} spy={true} smooth={true} duration={1000}>
                        <div className="arrow2">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
            </div>
    }
}

export default Contact;