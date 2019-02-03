import React, { Component } from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import HomePage from './components/Home/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Root = ({ store }) => (
    <Provider store={store}>
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/:filter?" component={HomePage} />
      </Router>
    </Provider>
  )

  Root.propTypes = {
    store: PropTypes.object.isRequired
  }

  export default Root;