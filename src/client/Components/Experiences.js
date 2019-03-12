import * as React from "react";
import "../assets/img/timeline.png";

class Experiences extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: {props},
        }
    }
    render(){
        return <div className="SectionContainer" id={this.state.id}>
            <h2 className="Title5">- Experiences -</h2>
            <img className="Timeline" src={require("../assets/img/timeline.png")}/>
        </div>
    }
}
export default Experiences;