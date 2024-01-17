import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
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
      "Drawsome": {
        title: "Drawsome",
        desc:
          "Coop drawing",
        techStack: "NODE.JS, REACT.JS, MONGODB, SOCKET.IO",
        link: "https://github.com/leviwp48/drawsome",
        open: "TBD",
        image: "/assets/chatting.png"
      },
      "Whats on my menu": {
        title: "What's on my menu",
        desc:
          "Menu app",
        techStack: "PYTHON (FAST.API), REACT.JS, SQLITE",
        link: "https://github.com/leviwp48/whats-on-my-menu",
        open: "TBD",
        image: "/assets/chatting.png"
      },
      "template saver": {
        title: "template saver",
        desc:
          "template saver discord bot",
        techStack: "PYTHON",
        link: "https://github.com/leviwp48/template-saver",
        open: "TBD",
        image: "/assets/chatting.png"
      },
      "video chat": {
        title: "video chat",
        desc:
          "video chat app",
        techStack: "NODE.JS (EXPRESS.JS)",
        link: "https://github.com/leviwp48/video-chat",
        open: "TBD",
        image: "/assets/chatting.png"
      },
      "Planet Rocket": {
        title: "Planet Rocket",
        desc:
          "idea finding app",
        techStack: "NODE.JS (EXPRESS.JS)",
        link: "https://github.com/leviwp48/PlanetRocket-V2",
        open: "TBD",
        image: "/assets/pr.jpg"
      }
    };
    const projects = {
      "py sandbox": {
        desc:
          "collection of python projects",
        techStack: "Python (FLask), tkinter",
        link: "https://github.com/leviwp48/py-sandbox",
      },
      "js sandbox": {
        desc:
          "collection of javascript projects",
        techStack: "Javascript, HTML / CSS, React.JS",
        link: "https://github.com/leviwp48/js-sandbox",
      },
      "poke merge": {
        desc:
          "merges pokemon images",
        techStack: "Python (Flask), React.JS",
        link:
          "https://github.com/leviwp48/poke_merge"
      },
      "Planet Rocket": {
        desc:
          "Website to do idea finding",
        techStack: "Node.JS, React.JS, Express.JS, MongoDB",
        link: "https://github.com/leviwp48/PlanetRocket-V2",
        open: ""
      },
      "Cherper": {
        desc:
          "Twitter clone",
        techStack: "Java (Android Studio)",
        link: "https://github.com/leviwp48/Cherper",
        open: ""
      },
      "InstaPix": {
        desc:
          "Instagram clone",
        techStack: "Java (Android Studio)",
        link: "https://github.com/leviwp48/InstaPix",
        open: ""
      },
      "TodoList": {
        desc:
          "A TodoList app",
        techStack: "Java (Android Studio)",
        link: "https://github.com/leviwp48/TodoListApp",
        open: ""
      },
      "Runica": {
        desc:
          "Turn based 2D game",
        techStack: "C# (Unity)",
        link: "https://github.com/leviwp48/Runica",
        open: ""
      },
      "Game Centre": {
        desc:
          "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
        techStack: "Java (Android Studio)",
        link: "https://github.com/gazijarin/gamecentre",
        open: ""
      },
      "Flicks": {
        desc:
          "Movie listings",
        techStack: "Java (Android Studio)",
        link: "https://github.com/leviwp48/Flicks",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
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
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;