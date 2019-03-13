import * as React from "react";
import "../assets/icons/css.png";
import "../assets/icons/docker.png";
import "../assets/icons/figma.png";
import "../assets/icons/html.png";
import "../assets/icons/js.png";
import "../assets/icons/laravel.png";
import "../assets/icons/mongo.png";
import "../assets/icons/node.png";
import "../assets/icons/php.png";
import "../assets/icons/react.png";
import "../assets/icons/sql.png";
import "../assets/icons/vue.png";

class Skills extends React.Component{
    render(){
        return <div className="SectionContainer" id="Skills">
        {/* <h1 className="Title3">|||</h1> */}
        <h2 className="Title4">- Skills -</h2>
        <div className="IconsContainer">
        <div className="SkillsContainer1">
            <img className="Icons1" src={require("../assets/icons/js.png")}/>
            <img className="Icons1" src={require("../assets/icons/vue.png")}/>
            <img className="Icons1" src={require("../assets/icons/react.png")}/>
        </div>
        <div className="SkillsContainer2">
            <img className="Icons" src={require("../assets/icons/node.png")}/>
            <img className="Icons" src={require("../assets/icons/php.png")}/>
            <img className="Icons" src={require("../assets/icons/laravel.png")}/>
        </div>
        <div className="SkillsContainer3">
            <img className="Icons1" src={require("../assets/icons/docker.png")}/>
            <img className="Icons1" src={require("../assets/icons/sql.png")}/>
            <img className="Icons1" src={require("../assets/icons/git.png")}/>
        </div>
        <div className="SkillsContainer4">
            <img className="Icons" src={require("../assets/icons/html.png")}/>
            <img className="Icons" src={require("../assets/icons/css.png")}/>
            <img className="IconsMongo" src={require("../assets/icons/mongo.png")}/>
        </div>
        <div className="SkillsContainer5">
            <img className="Icons" src={require("../assets/icons/figma.png")}/>
        </div>
        </div>
        <div className="SoftText">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni sint numquam hic. Illo impedit cumque quia accusantium recusandae cupiditate odio quos dignissimos? Fugit, nobis modi! Quis vitae nihil repudiandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni sint numquam hic. Illo impedit cumque quia accusantium recusandae cupiditate odio quos dignissimos? Fugit, nobis modi! Quis vitae nihil repudiandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni sint numquam hic. Illo impedit cumque quia accusantium recusandae cupiditate odio quos dignissimos? Fugit, nobis modi! Quis vitae nihil repudiandae.
                            </p>
        </div>
        </div>
    }
}
export default Skills;