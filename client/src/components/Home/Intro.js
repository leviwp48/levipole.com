import React, { Component } from 'react';
import { Card, Media, CardTitle, CardText, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/home/Home.css';

class Intro extends Component {

    render() {
        return (  
              <Card body inverse className="text-center" style={{backgroundColor: "#000000", borderColor: "#000000", height: "80vh"}}>
                  <Row className="display-3">
                    <Col xs={{ size: 10, offset: 1}} style = {{marginTop:"10vh"}}>
                        <CardTitle style = {{fontSize: "40px", letterSpacing: '40px'}}>LEVI POLE</CardTitle>
                        <CardText style = {{fontSize: "30px"}}>
                            I'm a creator at heart. I have a passion 
                            for software engineering, and a guilty pleasure 
                            for game development. B.S. in Computer Science. Let's build change. 
                            <Row>
                              <Col style={{marginTop:"20px"}}>
                                <Media object src={require('../../images/profile.jpg')} style={{borderRadius: "50%", maxWidth: "200px", maxHeight: "200px"}} alt="Self Image" />
                              </Col>
                            </Row>
                        </CardText>
                    </Col>
                  </Row>
              </Card>
        )}
}

export default Intro;
