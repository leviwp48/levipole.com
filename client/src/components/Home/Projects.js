import React, { Component } from 'react';
import AppNavbar from '../Nav/AppNavbar';
import ProjectList from '../Projects/ProjectList';
import ProjectModal from '../Projects/ProjectModal';
import { Container, Card, CardImg, CardImgOverlay,
         CardTitle, CardText, Row, Col, Jumbotron } from 'reactstrap';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {BrowserView, MobileView} from "react-device-detect";

import { Provider } from 'react-redux';
import store from '../../store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/home/Projects.css';
import Summary from './Summary';

class Projects extends Component {
    state = {
      isOpen: false
    };

    render() {
        return (
        <Jumbotron className="header" style={{color: '#FFFFFF'}}>  
          <Col sm={{ size: 6, order: 2}} style={{marginLeft: '80px'}}>
           <h1 style={{fontSize: '40px'}} className="display-3">Projects</h1> 
           </Col>
           <Row className="rectangle" >
            <Col className="boxPortrait" >
              <img src={require("./../../images/instapix.png")}/>
              <span>InstaPix</span>
            </Col>
            <Col className="boxLandscape">
              <img src={require("./../../images/runica.png")}/>
              <span>2D Game</span>
            </Col>
            <Col className="boxLandscape">
              <img src={require("./../../images/pr.jpg")}/>
              <span>Planet Rocket V2</span>
            </Col>
            <Col className="boxPortrait">
              <img src={require("./../../images/cherper.png")}/>
              <span>Cherper</span>
            </Col>
          </Row>
        </Jumbotron>
        )}
}

export default Projects;
