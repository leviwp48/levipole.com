import React, { Component } from 'react';
import './../../styles/Navbar.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarToggler,
  Collapse
} from 'reactstrap';

class AppNavbar extends Component {
  constructor(props) {
    super(props);

    // TODO: Have navbar transition from 0 opacity to full when user scrolls from start position
    this.state = {
      collapsed: true,
      navHeight: 254.3,
      opacityValue: 0,
      isVisible: true,
    };
  }


  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  // Adds a scroll event to the window
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
   }

   // Sets the opacity of the navbar with a given value
   setOpacity = (value) => {
      this.setState({
          opacityValue: value
      });
      console.log(this.state.opacityValue)
   }

   // If the user scrolls we check in the Y coordinnate of the window
   // Is past the starting position. 
   // If it is: set opacity to 1. Else: set opacity to 0.
   handleScroll = () => {
    if(window.scrollY >= this.state.navHeight && this.state.isVisible){
      this.setOpacity(1);
      this.setState({
        isVisible: false
      });
    }
    else if(window.scrollY < this.state.navHeight && !this.state.isVisible){
      this.setOpacity(0);
      this.setState({
        isVisible: true
      });
    }
   }

  render() {

    //Trying to make navbar transparent until scrolling. Navbar ( think cuz of reactstrap) isn't letting me use background color
    return (  
      <section className="s0-nav">
        <div className="nav-container">      
          <div className="nav-wrapper">
            <div className="nav-name">
              <h4> Levi Pole </h4>
            </div>
            <ul id="nav-links">
              <li><a href="mailto:levi@levipole.com"> levi@levipole.com </a></li>
              <li><a href="/Resume.pdf"> Resume </a></li>
              <li><a href="https://github.com/leviwp48"> Github </a></li>
              <li><a href="https://www.linkedin.com/in/polelevi/"> LinkedIn </a></li>
            </ul>
          </div>
           
          </div>
        </section> 
    );
  }
}

export default AppNavbar;

/*
 <NavbarBrand href="/"> Levi Pole {this.state.screenPosition}</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="mailto:levi@levipole.com"> levi@levipole.com </NavLink> 
                </NavItem> 
                <NavItem>  
                  <NavLink rel="noopener noreferrer" href="/Resume.pdf" target="_blank"> 
                    Resume
                  </NavLink>
                </NavItem>  
                <NavItem>  
                  <NavLink href="https://github.com/leviwp48"> 
                      Github
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/polelevi/"> 
                      LinkedIn
                  </NavLink>
                </NavItem>              
              </Nav>
            </Collapse>

*/