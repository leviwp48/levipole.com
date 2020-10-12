import React, { Component } from 'react';
import { Card, Media, CardTitle, CardText, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/home/Home.css';

// Componenet renders intro Image and text
class Intro extends Component {

    render() {
        return (  
              <section className="s1-intro">
                  <h1 className="intro-title"> 
                    Hi I'm Levi Pole 
                  </h1>
                  <div className="intro-container">
                    <div className="intro-summary-wrapper">
                      <div className="intro-summary">
                        Summary goes here. 
                      </div>
                      <img className="intro-profile-pic"  src={require('../../images/profile.jpg')} style={{borderRadius: "50%", maxWidth: "150%", maxHeight: "150%"}} alt="Self Image" />
                    </div>
                  </div>
                  
              </section>
        )}
}

export default Intro;
