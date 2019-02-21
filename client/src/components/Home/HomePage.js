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
import './Home.css';
import Summary from './Summary';
import Intro from './Intro';
import Contact from './Contact';

// TODO: Set up the layout of the page
//       Style and add data and media
//       Maybe show off skills in react or some nice css



class HomePage extends Component {
    state = {
      isOpen: false
    };

    render() {
      return (
        <Container className="Header">
          <Intro />
          <Summary />
          <Contact />
        </Container>    
       );
    }
}

export default HomePage;
