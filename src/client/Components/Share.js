import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    GooglePlusIcon,
    LinkedinIcon,
    WhatsappIcon,
    EmailIcon,
  } from 'react-share';
  import * as React from "react";
  import Close from "../assets/icons/close.png";
  import Sharing from "../assets/icons/share.png";

  class Share extends React.Component{
      constructor(props){
          super(props);
          this.state={
              className: "not-active",
              shareUrl: "https://jvdb18.github.io/Resume"
          }
          this.handleClick= this.handleClick.bind(this);
      }
      handleClick(){
          if(this.state.className === "not-active"){
            this.setState({
                className: "active",
            })
          }
          else {
              this.setState({
                  className: "not-active",
              })
          }
      }
      render(){
          const shareUrl="https://jvdb18.github.io/Resume";
          const title= "Julie Vanderbyse";

          return <div id="Share" className="ShareButton" onClick={this.handleClick}>
          <img src={Sharing} className="Sharing"/>
          <a className="LinksB">Share this website</a>
          <div id="ShareModal"className={this.state.className}>
          <div className="closeButton" onClick={this.handleClick}>
                <img src={Close} className="closeButton"/>
          </div>
          <LinkedinShareButton 
                      url={shareUrl}
                      quote={title}
                      className="ShareIcon"
                      >
                      <LinkedinIcon
                      size={32}
                      round
                      />
         </LinkedinShareButton>
          <FacebookShareButton 
                      url={shareUrl}
                      quote={title}
                      className="ShareIcon"
          >
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
          <EmailShareButton 
                      url={shareUrl}
                      quote={title}
                      className="ShareIcon"
                      >
                <EmailIcon
                size={32}
                round />
            </EmailShareButton>
          <WhatsappShareButton 
                      url={shareUrl}
                      quote={title}
                      className="ShareIcon">
                <WhatsappIcon
                size={32}
                round />
            </WhatsappShareButton>
          <TwitterShareButton 
                      url={shareUrl}
                      quote={title}
                      className="ShareIcon">
                <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>
          <GooglePlusShareButton 
                      url={shareUrl}
                      quote={title}
                      className="ShareIcon">
                <GooglePlusIcon
                size={32}
                round />
            </GooglePlusShareButton>
          </div>
          </div>
      }
  }
  export default Share;