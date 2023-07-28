import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a full-time student at the <a href="https://www.washington.edu/about/?utm_source=whitebar&utm_medium=click&utm_campaign=about&utm_term=about">University of Washington</a> studying computer science within the <a href="https://www.cs.washington.edu/">Paul G. Allen School of Computer Science & Engineering</a>, and minoring in business. 
        I am a full-time SWE intern at <a href="https://www.principal.com/about-us">Principal Financial Group</a>, working
        in the RIS team to provide software tools for risk-free investment solutions. 
      </p>
    );
    const two = (
      <p>
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:mgcho@cs.washington.edu">
          mgcho@cs.washington.edu
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "React.js",
      "Java",
      "Node.js",
      "HTML & CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/IMG_7117.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
