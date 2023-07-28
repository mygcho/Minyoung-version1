import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "AlgoViz": {
        title: "AlgoViz",
        desc:
          "an algorithm visualizer website to demonstrate live code rendering of a variety of search, sorting, and pathfinding algorithms.",
        techStack: "REACT REDUX, REACT.JS, DOCKER",
        link: "https://github.com/hcp-uw/algo-visualizer",
        open: "https://algo-visualizer.herokuapp.com/",
        image: "/assets/algo-viz-image.png"
      },
      "Chow Down! Mobile App": {
        title: "Chow Down! Mobile App",
        desc:
          "iOS App where UW students review, rate, and search for reviews of dishes served in campus dining halls or reviews of nearby campus restaurants.",
        techStack: "REACT NATIVE, GOOGLE FIREBASE, EXPO",
        link: "https://github.com/hcp-uw/chow-down",
        open: "hhttps://github.com/hcp-uw/chow-down",
        image: "/assets/chow-down-image.png"
      },
      "Nabi Bot": {
        title: "Nabi Bot",
        desc:
          "Nabi Bot helps users fulfill tasks and studies through its built-in study methods (such as “/pomodoro” to set timers for allotted study and break times) using Telegram API and Node NLP to distinguish user input and categorize them into intents for the bot to send a suitable response.",
        techStack: "JS, NODE NLP, TELEGRAM API",
        link: "https://github.com/mygcho/NabiBot",
        open: "https://github.com/mygcho/NabiBot",
        image: "/assets/nabipic.jpg"
      },
    };
  

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
        </div>
      </div>
    );
  }
}

export default Projects;
