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
        I recently completed a full-time SWE internship at <a href="https://www.jpmorganchase.com/">JPMorgan Chase & Co.</a>, working
        in the Asset & Wealth Management (AWM) team to provide software tools for a private banking application. 
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
      "Python",
      "AWS",
      "Flask",
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
              <img src={"/assets/IMG_7117.jpg"} alt="A photo of Minyoung Cho. She has black hair, brown eyes, and is lightly smiling at the camera with her lips closed. She is wearing a white button-up cardigan with a light-green forest background." />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
