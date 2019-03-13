import * as React from "react";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Experiences from "../Components/Experiences";
import Learn from "../Components/Learn";
import Contact from "../Components/Contact";
import {Parallax, Background } from "react-parallax";
import Nav from "../Components/Nav";
import ParallaxImage from "../assets/img/img5.jpg";

const font= {
    fontFamily: "'Roboto Condensed', sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "normal",
    letterSpacing: "0.3em",
    textTransform: "capitalize",
    fontVariant: "small-caps",
    fontFeatureSettings: "'pnum' on, 'onum' on",
    marginTop: -10
}
class Home extends React.Component{
    render(){
        console.warn("ParallaxImage:", ParallaxImage);
        return <div>
        <div className="ParallaxContainer">
            <Parallax 
            bgImage={ParallaxImage} 
            strength={700}
            >
                <div style={{ height: 600 }}>
                    <div style={{height: 350, backgroundColor: "rgba(14, 21, 20, 0.78)",top: "50%", left:"50%", width:"100%",position:"absolute", transform:"translate(-50%, -50%)", color:"white", fontSize:"50px", alignItems:"center"}} className="inside_parallax1">                        
                        <h2 className="Header">| | |</h2>
                       <h1 className="Julie"style={font}>JULIE VANDERBYSE test 6</h1>
                    </div>
                </div>
            </Parallax>
            <Nav/>
            <About/>
        <Parallax
        bgImage={ParallaxImage}
        strength={700}
        >
        <div style={{height: 800}} className="Skills" id="Skills">
        <div style={{height: 400, backgroundColor: "white",top: "50%", left:"50%", width:"100%",position:"absolute", transform:"translate(-50%, -50%)"}} className="inside_parallax2">
        <Skills/>
        </div>
        </div>
        </Parallax>
        <Experiences id={"Experiences"}/>
        {/* <Parallax
        bgImage={require('../assets/img/img5.jpg')}
        strength={700}
        >
        <div style={{height: 1000}} className="Learn More" id="Learn">
        <div style={{height: 300,backgroundColor: "white",top: "30%", left:"50%", width:"100%",position:"absolute", transform:"translate(-50%, -40%)" }} className="inside_parallax3">
        <Learn />
        </div>
        <div className="inside_parallax3b" id="Contact" style={{height: 400, backgroundColor: "white",top: "75%", left:"50%", width:"100%",position:"absolute", transform:"translate(-50%, -50%)"}}>
        <Contact />
        </div>
        </div>
        </Parallax> */}
        <Parallax
        bgImage={ParallaxImage}
        strength={700}
        >
        <div style={{height: 700}} className="Bdgr"id="Badgr">
        <div className="inside_parallax3b" id="Contact" style={{height: 400, backgroundColor: "white",top: "50%", left:"50%", width:"100%",position:"absolute", transform:"translate(-50%, -50%)"}}>
        <h2>Badges</h2>
        </div>
        </div>
        </Parallax>
        <Learn />
        <Parallax
        bgImage={require('../assets/img/img5.jpg')}
        strenght={700}
        >
        <div style={{height: 700}} className="Contact" id="Contact">
        <div className="inside_parallax3b" id="Contact" style={{height: 300, backgroundColor: "white",top: "50%", left:"50%", width:"100%",position:"absolute", transform:"translate(-50%, -50%)"}}>
        <Contact />
        </div>
        </div>
        </Parallax>
        </div>
    </div>
    }
}
export default Home;