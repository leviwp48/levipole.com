import React, { Component } from 'react';
import {Card, CardImgOverlay, CardTitle, CardText, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/home/Home.css';

class Intro extends Component {

    render() {
        return (     
          <Row>
            <Col>
           <Card body inverse style={{backgroundColor: "#000000", borderColor: "#000000", height: "100vh"}}>
              <CardImgOverlay >
                <Row className="display-3">
                  <Col sm="12" md={{ size: 10, offset: 3}} style = {{marginTop:"10vh"}}>
                      <CardTitle style = {{fontSize: "40px", letterSpacing: '40px'}}>LEVI POLE</CardTitle>
                      <CardText style = {{width:"800px", fontSize: "30px"}}>
                          I'm a creator at heart. I have a passion 
                          for software engineering, and a guilty pleasure 
                          for game development. B.S. in Computer Science. Let's build change. 
                          <Row>
                              <img style={{ marginLeft: "37vh", marginTop:"10vh", borderRadius: "50%", maxWidth: "200px", height: "200px"}} src={require('../../images/profile.jpg')} />
                          </Row>
                      </CardText>
                  </Col>
                </Row>
              </CardImgOverlay>
            </Card>
            </Col>
          </Row> 
        )}
}

export default Intro;
