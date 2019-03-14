import * as React from "react";
import Timeline from "../assets/img/timeline.png";

class Experiences extends React.Component{

    render(){
        return <div className="SectionContainer" id="Experiences">
            <h2 className="Title5">- Experiences -</h2>
            <img className="Timeline" src={Timeline}/>
        </div>
    }
}
export default Experiences;