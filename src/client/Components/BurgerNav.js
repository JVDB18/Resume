import * as React from "react";
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import PDF from "../assets/CV.pdf"

class BurgerNav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            className: 'not-active',
            box:"box"
        };

        this.handleClick=this.handleClick.bind(this);
    }
        handleClick()
        {
            if(this.state.className === 'not-active'){
                this.setState({
                    className: 'active',
                    box:"box-active"
                }); 
            }
            else{
                this.setState({
                    className: 'not-active',
                    box:"box",
                })
            }

        }
        

    render(){
        return <div className={this.state.box}>
        <div id="btn" className={this.state.className} onClick={this.handleClick}>
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </div>
        <div id="NavLink" className={this.state.className}>
          <Link to="About" offset={-90}className="Links" onClick={this.handleClick}>About</Link>
          <Link to="Skills" offset={-100}className="Links" onClick={this.handleClick}>Skills</Link>
          <Link to="Experiences" offset={-50}className="Links" onClick={this.handleClick}>Experiences</Link>
          <Link to="Learn" offset={60}className="Links" onClick={this.handleClick}>Learn More</Link>
          <Link to="Contact"className="Links" onClick={this.handleClick}>Contact</Link>
          <a href={PDF} target="blank" className="Links" id="Download" onClick={this.handleClick}>
               Download in PDF</a>
          <Link to="HeaderContainer" className="Links" onClick={this.handleClick}>Back to top</Link>
          </div>
      </div>
    }

}
export default BurgerNav;