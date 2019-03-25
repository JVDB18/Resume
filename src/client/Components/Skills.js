import * as React from "react";
import CSS from "../assets/icons/css.png";
import Docker from "../assets/icons/docker.png";
import Figma from "../assets/icons/figma.png";
import HTML from "../assets/icons/html.png";
import JS from "../assets/icons/js.png";
import Laravel from "../assets/icons/laravel.png";
import Mongo from "../assets/icons/mongo.png";
import Node from "../assets/icons/node.png";
import PHP from "../assets/icons/php.png";
import Reactpng from "../assets/icons/react.png";
import SQL from "../assets/icons/sql.png";
import VUE from "../assets/icons/vue.png";
import GIT from "../assets/icons/git.png";


class Skills extends React.Component{
    render(){
        return <div className="SectionContainer" id="Skills">
        {/* <h1 className="Title3">|||</h1> */}
        <h2 className="Title4">- Skills -</h2>
        <div className="IconsContainer">
            <div className="SkillsContainer1">
                <img className="Icons1" src={JS}/>
                <img className="Icons1" src={VUE}/>
                <img className="Icons1" src={Reactpng}/>
            </div>
            <div className="SkillsContainer2">
                <img className="Icons1" src={Node}/>
                <img className="Icons1" src={PHP}/>
                <img className="Icons1" src={Laravel}/>
            </div>
            <div className="SkillsContainer3">
                <img className="Icons1" src={Docker}/>
                <img className="Icons1" src={SQL}/>
                <img className="Icons1" src={GIT}/>
            </div>
            <div className="SkillsContainer4">
                <img className="Icons1" src={HTML}/>
                <img className="Icons1" src={CSS}/>
                <img className="IconsMongo" src={Mongo}/>
            </div>
            <div className="SkillsContainer5">
                <img className="Icons1" src={Figma}/>
            </div>
        </div>
        <div className="HardText">
            <h4>Day-to-day comfort</h4>
            <p>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Vue.js</li>
                    <li>Agiles methodologies</li>
                    <li>Git</li>
                    <li>HTML5/CSS3</li>
                    <li>Figma / GravitDesigner / Gimp / Adobe Suite</li>
                    <li>Responsive layout and design</li>
                </ul>
            </p>
        </div>
        <div className="SoftText">
        <h4>Experience with</h4>
            <p>
                <ul>      
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>Docker</li>
                    <li>Webpack</li>
                    <li>MongoDB / MariaDB / SQL</li>
                </ul>
        <h4>Actually learning</h4>
            <ul>
                    <li>Angular 7</li>
                    <li>Ruby</li>
                    <li>Node Red</li>
                    <li>Sass/less</li>
                    <li>Bootstrap</li>
            </ul>
                    {/* <li></li>
                    <li>Deep Work and Pomodoro addict</li>
                    <li>Positive mindset</li>
                    <li>Peer-Programming</li>
                    <li>Team spirit</li>
                    <li>Hungry of knowledge</li>
                    <li>Big load of curiosity</li>
                    <li>Creativity</li>
                    <li>Resourcefulness</li>
                    <li>Dedication</li>
                    </ul>
                </p> */}
                </p>
        </div>
        <div className="BadgrLink"><a className="LinksB" href="https://api.badgr.io/public/collections/65e9d39f03b194bfc85ba0d47588badb" target="blank">View Badges's Collection</a></div>

        </div>
    }
}
export default Skills;