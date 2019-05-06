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
            <Col sm={{size:12}}>
              <hr className="my-2" />
            </Col>
         </Row>

          <Row>
            <Col xs={{size:1}} sm={{size:1, offset:2}} md={{size:2, offset:3}} lg={{size:3, offset:3}}>
              <Media middle href="https://www.linkedin.com/in/polelevi/">
                <Media object src={require('../../images/linkedInLogo.png')} style={{maxWidth:"150px", maxHeight:"150px"}} alt="LinkedIn" />
              </Media>
            </Col>

            <Col xs={{size:1, offset:4}} sm={{size:1, offset:4}} md={{size:2, offset:2}} lg={{size:2, offset:2}}>
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
