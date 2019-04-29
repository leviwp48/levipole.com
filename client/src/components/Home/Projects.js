import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/home/Projects.css';

class Projects extends Component {

    render() {
        return (
        <Container fluid="true" className="header" style={{color: '#FFFFFF'}}>  
          <Col sm={{ size: 6, order: 2}} style={{marginLeft: '80px'}}>
           <h1 style={{fontSize: '40px'}} className="display-3">Projects</h1> 
           </Col>
           <Row className="rectangle" >
            <Col className="boxPortrait" >
              <img src={require("./../../images/instapix.png")}/>
              <span>InstaPix</span>            
              <Row>
                <h1 style={{fontSize:"20px", padding:"20px", paddingLeft:"30px"}}>Instagram Clone that uses a Parse backend and utilizes the camera. Allows the user to see posts and submit posts to
                                                                                  the custom Parse database. <a  href="https://github.com/leviwp48/InstaPix"> View Here </a> </h1>
              </Row>
            </Col>
            <Col className="boxLandscape">
              <img src={require("./../../images/runica.png")}/>
              <span>2D Game</span>
              <Row>
                <h1 style={{fontSize:"20px",padding:"20px", paddingLeft:"50px"}}>Mulitplayer 2D game made in Unity. <a  href="https://github.com/leviwp48/Runica"> View Here </a> </h1>
              </Row>
            </Col>
            <Col className="boxLandscape">
              <img src={require("./../../images/pr.jpg")}/>
              <span>Planet Rocket V2</span>
              <Row>
                <h1 style={{fontSize:"20px", padding:"20px", paddingLeft:"40px"}}>Web Application that helps users find a target audience. Uses a MERN Stack(MongoDB, Express, React, Node)
                                                                                  <a  href="https://github.com/leviwp48/PlanetRocket-V2"> View Here </a> </h1>
              </Row>
            </Col>
            <Col className="boxPortrait">
              <img src={require("./../../images/cherper.png")}/>
              <span>Cherper</span>
              <Row>
                <h1 style={{fontSize:"20px", padding:"20px", paddingLeft:"40px"}}>Twitter Clone that uses OAuth authentication. Allows a user to read and post tweets from their timeline. 
                                                                                  <a  href="https://github.com/leviwp48/Cherper"> View Here </a> </h1>
              </Row>
            </Col>
          </Row>
        </Container>
        )}
}

export default Projects;
