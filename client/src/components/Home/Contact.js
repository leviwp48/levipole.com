import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Media } from 'reactstrap';

class Contact extends Component {
    render() {
      return (
        <Jumbotron fluid style={{backgroundColor: '#FFFFFF', paddingTop:"10px"}}>   
        <Container fluid>     
        <Row>
           <Col sm={{size:12}}>
              <h1 className="lead" style={{fontSize:'40px' , color: '#000000'}}>
                  Contact
              </h1>
           </Col>       
         </Row>

         <Row>
            <Col sm={{size:10, offset:1}}>
              <hr className="my-2" />
            </Col>
         </Row>

          <Row>
            <Col sm={{size:3, offset:4}}>
              <Media middle href="https://www.linkedin.com/in/polelevi/">
                <Media object src={require('../../images/linkedInLogo.png')} style={{maxWidth:"150px", maxHeight:"150px"}} alt="LinkedIn" />
              </Media>
            </Col>

            <Col>
              <Media middle href="https://github.com/leviwp48">
                <Media object src={require("../../images/gitHubLogo.png")} style={{maxWidth:"150px", maxHeight:"150px"}} alt="GitHub" />
              </Media>
            </Col>

          </Row>

          </Container>
        </Jumbotron>
       );
    }
}

export default Contact;
