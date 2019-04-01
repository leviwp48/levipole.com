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
import './../../styles/home/Home.css';
import Summary from './Summary';
import Intro from './Intro';

// TODO: Set up the layout of the page
//       Style and add data and media
//       Maybe show off skills in react or some nice css



class Contact extends Component {
    state = {
      isOpen: false
    };

    render() {
      return (
        <Jumbotron className="Header" style={{backgroundColor: '#FFFFFF', color:'#000000', height:'40vh', marginTop:"-5vh",marginBottom:"-5vh"}}>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>
            <Row>
              <h1 style={{fontSize: '40px', marginLeft: '-3vh'}} className="display-3">Stay Connected</h1> 
            </Row>
            <Row style={{marginLeft: "", marginRight:"auto"}}>
              <a  href="https://www.linkedin.com/in/polelevi/" id="linked"><img style={{ display: "block", marginLeft: "600px", marginRight: "auto", width:"150px", height:"150px"}} src={require('../../images/linkedInLogo.png')}/></a>
              <a  href="https://github.com/leviwp48" id="github"><img  style={{ display: "block", marginLeft: "auto", marginRight: "auto", width:"150px", height:"150px"}} src={require('../../images/gitHubLogo.png')}/></a>
            </Row>
          </Col>
        </Jumbotron>
       );
    }
}

export default Contact;
