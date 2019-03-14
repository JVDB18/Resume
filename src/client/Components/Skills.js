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
import PDF from "../assets/CV.pdf";

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
                <img className="Icons" src={Node}/>
                <img className="Icons" src={PHP}/>
                <img className="Icons" src={Laravel}/>
            </div>
            <div className="SkillsContainer3">
                <img className="Icons1" src={Docker}/>
                <img className="Icons1" src={SQL}/>
                <img className="Icons1" src={GIT}/>
            </div>
            <div className="SkillsContainer4">
                <img className="Icons" src={HTML}/>
                <img className="Icons" src={CSS}/>
                <img className="IconsMongo" src={Mongo}/>
            </div>
            <div className="SkillsContainer5">
                <img className="Icons" src={Figma}/>
            </div>
        </div>
        <div className="SoftText">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni sint numquam hic. Illo impedit cumque quia accusantium recusandae cupiditate odio quos dignissimos? Fugit, nobis modi! Quis vitae nihil repudiandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni sint numquam hic. Illo impedit cumque quia accusantium recusandae cupiditate odio quos dignissimos? Fugit, nobis modi! Quis vitae nihil repudiandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni sint numquam hic. Illo impedit cumque quia accusantium recusandae cupiditate odio quos dignissimos? Fugit, nobis modi! Quis vitae nihil repudiandae.
                            </p>
        </div>
        <div className="BadgrLink"><a href="https://api.badgr.io/public/collections/65e9d39f03b194bfc85ba0d47588badb" target="blank">View Badges's Collection</a></div>
        <div className="PDFLink"><a href={PDF} target="blank">Download Resume in PDF</a></div>

        </div>
    }
}
export default Skills;