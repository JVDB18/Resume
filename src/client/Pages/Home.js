import * as React from "react";
import About from "../Components/About";
import {Parallax, Background } from "react-parallax";
import Nav from "../Components/Nav"

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    width: "100%",
  };
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
    constructor(props){
        super(props);
        this.state = {
            img1:'../assets/img/img1.jpg',
        };
    }
    render(){
        return <div>
        <div className="parallax-container" style={styles}>
            <Parallax 
            bgImage={require('../assets/img/img1.jpg')} 
            strength={400}
            >
                <div style={{ height: 750 }}>
                    <div style={{height: 350, backgroundColor: "rgba(106, 176, 227, 0.67)",top: "50%", left:"50%", width:"100%",position:"absolute", transform:"translate(-50%, -50%)", color:"white", fontSize:"50px", alignItems:"center"}} className="inside_parallax1">                        
                        <h2>| | |</h2>
                       <h1 style={font}>JULIE VANDERBYSE</h1>
                    </div>
                </div>
            </Parallax>
            <Nav/>
            <div className="About" id="About" style={{height:500}}>
            <h1>| | |</h1>
            <h2>About</h2>
            <About/>
            </div>
        <Parallax
        bgImage={require('../assets/img/img4.jpg')}
        strength={300}
        >
        <div style={{height: 1200}} className="Skills" id="Skills">
        <div style={{height: 600, backgroundColor: "white",top: "40%", left:"50%", width:"100%",position:"absolute", transform:"translate(-50%, -50%)"}} className="inside_parallax2">
        <h1>|||</h1>
        <h2>Skills</h2>
        </div>
        </div>
        </Parallax>
        <div className="Experiences" style={{height: 700}} id="Experiences">
        <h1>|||</h1>
        <h2>Experiences</h2>
        </div>
        <Parallax
        bgImage={require('../assets/img/img3.jpg')}
        strength={400}
        >
        <div style={{height: 1300}} className="Learn More" id="Learn">
        <div style={{height: 400,backgroundColor: "white",top: "30%", left:"50%", width:"100%",position:"absolute", transform:"translate(-50%, -40%)" }} className="inside_parallax3">
        <h1>|||</h1>
        <h2>Learn More</h2>
        </div>
        <div className="inside_parallax3b" id="Contact" style={{height: 400, backgroundColor: "white",top: "75%", left:"50%", width:"100%",position:"absolute", transform:"translate(-50%, -50%)"}}>
        <h1>|||</h1>
        <h2>Contact</h2>
        </div>
        </div>
        </Parallax>
        </div>
    </div>
    }
}
export default Home;