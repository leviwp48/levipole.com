import React, { Component } from 'react';
import AppNavbar from './components/Nav/AppNavbar';
import ProjectList from './components/Projects/ProjectList';
import ProjectModal from './components/Projects/ProjectModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ProjectModal />
            <ProjectList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
