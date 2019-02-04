import React, { Component } from 'react';
import AppNavbar from '../Nav/AppNavbar';
import ProjectList from '../Projects/ProjectList';
import ProjectModal from '../Projects/ProjectModal';
import { Container, Card, CardImg, CardImgOverlay,
         CardTitle, CardText } from 'reactstrap';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {BrowserView, MobileView} from "react-device-detect";

import { Provider } from 'react-redux';
import store from '../../store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

// TODO: Set up the layout of the page
//       Style and add data and media



class HomePage extends Component {
    state = {
      isOpen: false
    };

    render() {
      return (
        <Container className="Header">
          <Card inverse className="Card">
            <CardImgOverlay>
              <CardTitle>Build something better</CardTitle>
                <CardText>What ever is out there, there's always something better</CardText>
                <CardText>
                  <small className="text-muted">Let's build it</small>
                </CardText>
            </CardImgOverlay>
          </Card>
        </Container>
       );
    }
}

export default HomePage;
