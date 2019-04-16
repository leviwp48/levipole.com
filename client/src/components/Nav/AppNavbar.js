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
  Container,
  Row,
  Col
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
    const imgSize = {
       height: '60px',
       width: '60px'
    };

    const rowWidth = {
      width: '50%'
    }
  

    //Trying to make navbar transparent until scrolling. Navbar ( think cuz of reactstrap) isn't letting me use background color
    return (
      <Container fluid>
        <Navbar fixed="top" color="light" light className="mb-5" light expand="md" style={{backgroundColor: "#00000000"}}>
        <Row style={{rowWidth}}>
          <Col sm={{ size: 2, offset: 12}}>
          <NavbarBrand href="/">Levi Pole {this.state.screenPosition}</NavbarBrand>
          </Col>
        </Row>
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
                  <NavLink > 
                    <Media right href="https://github.com/leviwp48" id="github">
                       <Media object style={imgSize} src={require('../../images/gitHubLogo.png')}/>
                    </Media>

                  </NavLink>
              </Nav>
          </Navbar>
        </Container>
    );
  }
}

export default AppNavbar;
