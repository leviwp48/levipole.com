import React, { Component } from 'react';
import { Card, Media, CardTitle, CardText, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/home/Home.css';

// Componenet renders intro Image and text
class Intro extends Component {

    render() {
        return (  
              <Card body inverse className="text-center" style={{backgroundColor: "#000000", borderColor: "#000000"}}>
                  <Row className="lead">
                    <Col xs={{ size: 10, offset:1}} sm={{ size: 8, offset:2}} style = {{marginTop:"10vh"}}>
                        <CardTitle style = {{fontSize: "40px"}}>LEVI POLE</CardTitle>
                        <CardText style = {{fontSize: "30px", marginBottom: "20px", marginTop: "-10px"}}>
                           Summary goes here. 
                        </CardText>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={{size:3, offset:4}} md={{offset: 5}} lg={{size: 4, offset:4}}>
                      <Media object src={require('../../images/profile.jpg')} style={{borderRadius: "50%", maxWidth: "150%", maxHeight: "150%"}} alt="Self Image" />
                    </Col>
                  </Row>
              </Card>
        )}
}

export default Intro;
