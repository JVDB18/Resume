import * as React from "react";
import "../assets/img/pic2.png";

class About extends React.Component{
    render(){
        return <div className="SectionContainer">

                            {/* <h1 className="Title">| | |</h1> */}
                            <h2 className="Title2" id="#About">- About -</h2>
                            <img src={require("../assets/img/pic2.png")} className="ProfilePic"/>
                            <p className="AboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni sint numquam hic. Illo impedit cumque quia accusantium recusandae cupiditate odio quos dignissimos? Fugit, nobis modi! Quis vitae nihil repudiandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni sint numquam hic. Illo impedit cumque quia accusantium recusandae cupiditate odio quos dignissimos? Fugit, nobis modi! Quis vitae nihil repudiandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni sint numquam hic. Illo impedit cumque quia accusantium recusandae cupiditate odio quos dignissimos? Fugit, nobis modi! Quis vitae nihil repudiandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni sint numquam hic. Illo impedit cumque quia accusantium recusandae cupiditate odio quos dignissimos? Fugit, nobis modi! Quis vitae nihil repudiandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni sint numquam hic. Illo impedit cumque quia accusantium recusandae cupiditate odio quos dignissimos? Fugit, nobis modi! Quis vitae nihil repudiandae.
                            </p>
                </div>
        
    }
}
export default About;