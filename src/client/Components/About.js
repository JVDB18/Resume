import * as React from "react";
import Pic2 from "../assets/img/pic2.png";
import BurgerNav from "./BurgerNav.js";

class About extends React.Component{
    render(){
        return <div className="SectionContainer">

                            {/* <h1 className="Title">| | |</h1> */}
                            <h2 className="Title2" id="About">- About -</h2>
                            <BurgerNav/>
                            <img src={Pic2} className="ProfilePic"/>
                            <p className="AboutText">
                            <h3>Hi fellow human!</h3><br/>
                            Let me introduce myself: Julie, Junior Front-End Developer currently looking for a fresh new internship / hiring opportunity.
                            I am a former nursing student who's taking a career move by pursuing a programming cursus at BeCode, a coding school based on peer-learning and learning by doing (Group's projects on a daily schedule, Hackatons, Coder Dojos).
                                <br/>
                                <br/>
                            At this point you are questionning yourself: <i>"What a freshman junior dev / former nurse can do in my company? "</i>
                                
                                <br/>
                                First thing i would tell you is that with enthusiasm, passion, and a little bit of ambition's adrenaline, you can accomplish anything. <p className="whisper">- Thanks to the little chemist in your head - </p>
                            And i have plenty of it.
                            Perpetual learner, not affraid about working hard and late, when i started my transition in october, i barely had some HTML5 and CSS3 skills, back to this day  I could not imagine the path that would be traveled, nor the number of Hard and Soft skills that i would gain.
                            These last months have been for me a total mind-blowing revolution:
                            I have learned to learn, in a fast and efficient way, making of my time a valuable product. Isn't it the coolest superpower an employe could have?
                                <br/>
                            Did i catch your attention? Just scroll down!
                            </p>
                </div>
        
    }
}
export default About;