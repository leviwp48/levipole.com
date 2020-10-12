import React, { Component } from 'react';
import { Container} from 'reactstrap';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Summary from './Summary';
import Intro from './Intro';
import Contact from './Contact';
import Projects from './Projects';
import AppNavbar from '../Nav/AppNavbar';
import ReactGA from 'react-ga';

// Hub component that renders all other HomePage components

class HomePage extends Component {
    state = {
      isOpen: false
    };

    // Initializes Google analytics on the Home page
    componentWillMount = () => {
      ReactGA.initialize('UA-139378471-1'); 
      ReactGA.pageview("./HomePage.js");
    }

    render() {
      return (
        <div style={{overflow: "hidden"}}>
          <AppNavbar />
          <Helmet>
              <title> Levi Pole </title>
          </Helmet>
          <Intro />
          <Summary />
          <Projects />
          <Contact />
        </div>        
      );
    }
}

export default HomePage;
