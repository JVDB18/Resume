import * as React from "react";
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Nav = () => {
        return <div className="NavHeader">
        <div className="NavContainer">
               <Link activeClass="active" className="About" to="About" offset={-200} spy={true} smooth={true} duration={1500} >About</Link>
               <Link activeClass="active" className="Skills" to="Skills" offset={-200} spy={true} smooth={true} duration={1500}>Skills</Link>
                {/*<Link activeClass="active" className="Badges" to="Badgr" offset={-200} spy={true} smooth={true} duration={500} >Badges</Link> */}
               <Link activeClass="active" className="Experiences" to="Experiences" offset={-200} spy={true} smooth={true} duration={700}>Experiences</Link>
               <Link activeClass="active" className="Learn" to="Learn" offset={-50} spy={true} smooth={true} duration={1500}>Learn More</Link>
               <Link activeClass="active" className="Contact" to="Contact" offset={-50} spy={true} smooth={"easeOutQuint"} duration={1500}>Contact</Link>
      </div>
      </div>

}
export default Nav;