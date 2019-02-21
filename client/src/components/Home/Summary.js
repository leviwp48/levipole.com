import React, { Component } from 'react';
import AppNavbar from '../Nav/AppNavbar';
import ProjectList from '../Projects/ProjectList';
import ProjectModal from '../Projects/ProjectModal';
import { Container, Card, CardImg, CardImgOverlay,
         CardTitle, CardText, Row, Col, Jumbotron} from 'reactstrap';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {BrowserView, MobileView} from "react-device-detect";

import { Provider } from 'react-redux';
import store from '../../store';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: Figure out how to portray summary



class Summary extends Component {
    state = {
      isOpen: false
    };


    render() {
      return (
        <Jumbotron className="Header" style={{backgroundColor: '#000000', color: '#FFFFFF'}}>   
         <Row>
           <Col sm={{ size: 6, order: 2, offset: 2 }}>
             <h1 style={{fontSize: '40px'}} className="display-3">ABOUT ME</h1> 

           </Col>       
         </Row> 
         <Row>
           <Col sm={{ size: 6, order: 2, offset: 2 }}>
             <h1 style={{fontSize: '20px', marginTop: '40px'}} className="display-3">This is my resume website hey guys.</h1>       
           </Col>       
         </Row>                    
        </Jumbotron>  
       );
    }
}

export default Summary;
