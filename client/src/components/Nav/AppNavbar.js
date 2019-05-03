import React, { Component } from 'react';
import {
  Navbar,
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
      <Container fluid>
        <Navbar light color="white" fixed="top" expand="md">      
            <NavbarBrand href="/"> Levi Pole {this.state.screenPosition}</NavbarBrand>
            <h1 style={{fontSize: '15px', marginTop:"12px"}} className="lead"> <NavLink href="mailto:leviwp48@gmail.com"> leviwp48@gmail.com </NavLink></h1>      
          {/*<img style={{ marginLeft: "50px", borderRadius: "50%", maxWidth: "65px", height: "65px"}} src={require('../../images/profile.jpg')} /> */}
              <Nav className="ml-auto" navbar>
              {/*
                <NavItem>
                  <NavLink >Home</NavLink>
                </NavItem>npm 
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
          </Navbar>
        </Container> 
    );
  }
}

export default AppNavbar;
