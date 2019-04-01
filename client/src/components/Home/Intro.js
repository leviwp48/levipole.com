import React, { Component } from 'react';
import AppNavbar from '../Nav/AppNavbar';
import ProjectList from '../Projects/ProjectList';
import ProjectModal from '../Projects/ProjectModal';
import { Container, Card, CardImg, CardImgOverlay,
         CardTitle, CardText, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {BrowserView, MobileView} from "react-device-detect";

import { Provider } from 'react-redux';
import store from '../../store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/home/Home.css';
import Summary from './Summary';

class Intro extends Component {
    state = {
      isOpen: false
    };

    render() {
        return (     
           <Card inverse className="Card" style={{height:"90vh", marginTop: "54.3px"}}>
            <CardImgOverlay >
              <Row className="display-3">
               <Col sm="12" md={{ size: 10, offset: 3}} style = {{marginTop:"10vh"}}>
                  <CardTitle style = {{fontSize: "40px", letterSpacing: '40px'}}>LEVI POLE</CardTitle>
                  <CardText style = {{width:"800px", fontSize: "30px"}}>
                      I'm a creator at heart. I have a passion 
                      for software engineering, and a guilty pleasure for game development.
                      My work is my spark. 
                  </CardText>
               </Col>
              </Row>
            </CardImgOverlay>
          </Card> 
        )}
}

export default Intro;