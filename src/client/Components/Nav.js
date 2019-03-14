import * as React from "react";
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Nav = () => {
        return <div className="NavHeader">
        <div className="NavContainer">
        {/* <h1 class="Navlogo"><a href="#Top">J. VANDERBYSE</a></h1> */}
  
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link activeClass="active" className="About" to="About" offset={-200} spy={true} smooth={true} duration={1500} >About</Link></li>
                <li><Link activeClass="active" className="Skills" to="Skills" offset={-200} spy={true} smooth={true} duration={1500}>Skills</Link></li>
                {/* <li><Link activeClass="active" className="Badges" to="Badgr" offset={-200} spy={true} smooth={true} duration={500} >Badges</Link></li> */}
                <li><Link activeClass="active" className="Experiences" to="Experiences" offset={-200} spy={true} smooth={true} duration={700}>Experiences</Link></li>
                <li><Link activeClass="active" className="Learn" to="Learn" offset={-50} spy={true} smooth={true} duration={1500}>Learn More</Link></li>
                <li><Link activeClass="active" className="Contact" to="Contact" offset={-50} spy={true} smooth={"easeOutQuint"} duration={1500}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      </div>

}
export default Nav;