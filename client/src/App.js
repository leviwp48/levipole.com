import React, { Component } from 'react';
import AppNavbar from './components/Nav/AppNavbar';
import ProjectList from './components/Projects/ProjectList';
import ProjectModal from './components/Projects/ProjectModal';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {BrowserView, MobileView} from "react-device-detect";

import Main from './components/Main';

import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Main /> 
      </Provider>
    );
  }
}

export default App;
