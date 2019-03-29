import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    navHeight: 254.3,
    opacityValue: 0,
    isVisible: true
  };

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
      <div>
        <Navbar fixed="top" color="light" light className="mb-5" light expand="md" style={{backgroundColor: "#00000000"}}>
          <Container>
            <NavbarBrand href="/" style= {{marginLeft: "-70px"}}>Levi Pole {this.state.screenPosition}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              {/*
                <NavItem>
                  <NavLink >Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink >Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink >Academics</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink >Projects</NavLink>
                </NavItem>
              */}
                <NavItem>
                  <NavLink href="https://github.com/Leviwp48/personal-website">
                    Github Repo
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
