import React, { Component } from 'react';
import { Container} from 'reactstrap';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/home/Home.css';
import Summary from './Summary';
import Intro from './Intro';
import Contact from './Contact';
import Projects from './Projects';
import AppNavbar from '../Nav/AppNavbar';

// TODO: Set up the layout of the page
//       Style and add data and media
//       Maybe show off skills in react or some nice css



class HomePage extends Component {
    state = {
      isOpen: false
    };

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
