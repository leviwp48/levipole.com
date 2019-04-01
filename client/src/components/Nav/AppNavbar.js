import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Media,
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
          <NavbarBrand href="/" style= {{marginLeft: "-90px", fontSize: "25px"}}>Levi Pole {this.state.screenPosition}</NavbarBrand>
          {/*<img style={{ marginLeft: "50px", borderRadius: "50%", maxWidth: "65px", height: "65px"}} src={require('../../images/profile.jpg')} /> */}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav style={{marginRight: "-170px"}} className="ml-auto" navbar>
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
                  <NavLink style={{marginRight: "-100px", marginLeft:"-150px"}} href="https://github.com/Leviwp48/personal-website"> 
                    <a  href="https://github.com/leviwp48" id="github"><img  style={{marginLeft: "px", borderRadius: "50%", maxWidth: "65px", height: "65px"}} src={require('../../images/gitHubLogo.png')}/></a>

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
