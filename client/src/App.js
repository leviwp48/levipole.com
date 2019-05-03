import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {BrowserView, MobileView} from "react-device-detect";
import { Provider } from 'react-redux';
import HomePage from './components/Home/HomePage';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* TODO: Implement redux with react router

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

*/

class App extends Component {

  render() {
    return (
      <Provider store={store}>
            <Router>
              <Switch>
                <Route path="/" component={HomePage}/> 
              </Switch>
            </Router>
      </Provider>
    );
  }
}

export default App;
