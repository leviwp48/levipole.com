import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import '../styles/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Levi Pole</Navbar.Brand>      
        </Container>
      </Navbar>    
    );
  }
}

export default NavBar;
