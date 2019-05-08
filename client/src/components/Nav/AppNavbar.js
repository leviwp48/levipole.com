import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
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

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
   }

   setOpacity = (value) => {
      this.setState({
          opacityValue: value
      });
      console.log(this.state.opacityValue)
   }

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
      <Container fluid>
        <Navbar light color="white" fixed="top" expand="md">      
            <NavbarBrand href="/"> Levi Pole {this.state.screenPosition}</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="mailto:leviwp48@gmail.com"> leviwp48@gmail.com </NavLink> 
                </NavItem> 
                <NavItem>  
                  <NavLink rel="noopener noreferrer" href="/Levi_Pole_Resume.pdf" target="_blank"> 
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
          </Navbar>
        </Container> 
    );
  }
}

export default AppNavbar;
