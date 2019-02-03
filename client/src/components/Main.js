import React, { Component } from 'react';
import AppNavbar from './Nav/AppNavbar';
import ProjectList from './Projects/ProjectList';
import ProjectModal from './Projects/ProjectModal';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {BrowserView, MobileView} from "react-device-detect";
import HomePage from "./Home/HomePage";
import { Provider } from 'react-redux';
import store from '../store';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
    state = {
      isOpen: false
    };

    render() {
      return (
      <Provider store={store}>
        <BrowserView>
        <AppNavbar />
          <Router>
            <Switch>
              <Route path="/" component={HomePage}/> 
           </Switch>
          </Router>
        </BrowserView>     
      </Provider>
       );
    }
}

export default Main;
