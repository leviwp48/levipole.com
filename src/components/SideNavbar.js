import React, { Component } from 'react';
import BorderColorIcon from "@material-ui/icons/BorderColor";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/SideNavbar.css';

class SideNavbar extends Component {
  render() {
    //Trying to make navbar transparent until scrolling. Navbar ( think cuz of reactstrap) isn't letting me use background color
    return (
      <div className="nav-container">   
        <nav className="side-navbar">
          <div className="page-links">
            <a href="#intro">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
          <div id="external-links">
            <a href="mailto:leviwp48@gmail.com">
              <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
            </a>
            <a href="https://github.com/leviwp48" target="_blank">
              <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
            </a>
            <a href="https://www.linkedin.com/in/polelevi" target="_blank">
              <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
            </a>
          </div>
          
        </nav>


      </div>
    );
  }
}

export default SideNavbar;



/*

<a href="/Resume.pdf" target="none"> Resume </a>
            <a href="https://github.com/leviwp48"> Github </a>
            <a href="https://www.linkedin.com/in/polelevi/"> LinkedIn </a>
      <Navbar className="nav-container">
        <Container className="navbar">
          <Navbar.Brand href="#">Levi Pole</Navbar.Brand>
          <Nav className="nav-links">
            <Nav.Link className="nav-links" href="#intro">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
*/
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