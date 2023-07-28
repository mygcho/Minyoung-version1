import React from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi i'm "}
            <span className="intro-name">{"minyoung!"}</span>
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">currently based in Seattle.</div>
          <div className="intro-desc">
            I have growing interest in software development and human-computer interactions. 
            I provide outreach and support within the tech space through my roles
            as an Allen School Ambassador and as a Co-Chair of the Husky Coding Project RSO @ UW.
          </div>
          <a
            href="mgcho@cs.washington.edu"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Send a message :)"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
