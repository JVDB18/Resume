import * as React from "react";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Experiences from "../Components/Experiences";
import Learn from "../Components/Learn";
// import Badges from "../Components/Badges";
import Contact from "../Components/Contact";
import {Parallax, Background } from "react-parallax";
import Nav from "../Components/Nav";
import ParallaxImage from "../assets/img/img5.jpg";
import Down from "../assets/icons/down.png";
import {Link} from "react-scroll";


class Home extends React.Component{
    render(){
        console.warn("ParallaxImage:", ParallaxImage);
        return <div>
        <div className="ParallaxContainer">
            <Parallax 
            bgImage={ParallaxImage} 
            strength={700}
            >
                <div className="HeaderContainer" id="Header">
                    <div className="InsideParallax">                        
                        <h2 className="Header">| | |</h2>
                       <h1 className="Header">JULIE VANDERBYSE</h1>
                       <Link className="About" to="About" offset={-90} spy={true} smooth={true} duration={1000}>
                        <div className="arrow">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </Parallax>
            <Nav/>
            <About/>
            <Parallax
            bgImage={ParallaxImage}
            strength={700}
            >
                <div className="Skills">
                    <div className="InsideParallax2">
                        <Skills/>
                    </div>
                </div>
            </Parallax>
        <Experiences/>
        <Parallax
        bgImage={ParallaxImage}
        strength={700}
        >
            <div className="Learn">
                <div className="InsideParallax3">
                {/* <Badges /> */}
                    <Learn />
                </div>
            </div>
        </Parallax>
        <Contact />
        <Parallax
        bgImage={ParallaxImage}
        strenght={700}
        >
            <div  className="ContactFooter">
            </div>
        </Parallax>
        </div>
    </div>
    }
}
export default Home;