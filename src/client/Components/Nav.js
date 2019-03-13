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
                <li><Link activeClass="active" className="About" to="About" spy={true} smooth={true} duration={500} >About</Link></li>
                <li><Link activeClass="active" className="Skills" to="Skills" spy={true} smooth={true} duration={500}>Skills</Link></li>
                <li><Link activeClass="active" className="Badges" to="Badgr" spy={true} smooth={true} duration={500} >Badges</Link></li>
                <li><Link activeClass="active" className="Experiences" to="Experiences" spy={true} smooth={true} duration={500}>Experiences</Link></li>
                <li><Link activeClass="active" className="Learn" to="Learn" spy={true} smooth={true} duration={500}>Learn More</Link></li>
                <li><Link activeClass="active" className="Contact" to="Contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      </div>

}
export default Nav;