import React, { Component } from 'react';
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import FadeInSection from './FadeInSection';
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import '../styles/Intro.css';

// Componenet renders intro Image and text
class Intro extends Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
      return ( 
        <div id="intro">
          <img src={"./assets/planet.svg"} alt="planet image" />
          <Typist avgTypingDelay={120}>
            <span className="intro-title">
              {"hi, "}
              <span className="intro-name">{"levi"}</span>
              {" here."}
            </span>
          </Typist>
          <FadeInSection>
            <div className="intro-title"> stuff stuff </div>
            <div className="intro-desc"> 
              Hi my name is Levi 
            </div>  
            <a href="mailto:leviwp48@gmail.com" className="intro-contact">
            <EmailRoundedIcon></EmailRoundedIcon>
              Say hi!
            </a>
          </FadeInSection>
        </div>
    )
  }
}

export default Intro;
