import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from './components/NavBar';
import SideNavbar from './components/SideNavbar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Summary from './components/Summary';
import Contact from './components/Contact';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./styles/Global.css";


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

function App() {
    return (
      <div className="App">
        <Helmet>
            <title> Levi Pole </title>
        </Helmet>
        <NavBar />
        <SideNavbar />
        <div id="Content">
          <Intro />
          <About />
          <Experience /> 
          <Projects />
          <Summary />
          <Contact />
        </div>
      </div>        
      );
  }

export default App;
