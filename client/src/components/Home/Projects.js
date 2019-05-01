import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardBody, 
         CardColumns, CardTitle, CardText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/home/Projects.css';

class Projects extends Component {

    render() {
        return (
        <Jumbotron fluid style={{backgroundColor: '#000000'}}>   
        <Container fluid>
        <Row>
          <Col sm={{size:12}}>
            <h1 className="lead" style={{fontSize:'40px' , color: '#FFFFFF'}}>
                Projects
            </h1>
          </Col>       
         </Row>

          <CardColumns>
              <Card>
                <CardImg top src={require("./../../images/instapix.png")} />
                  <CardBody>
                  <CardTitle> InstaPix </CardTitle>
                  <CardText> Instagram Clone that uses a Parse backend and utilizes the camera. Allows the user to see posts and submit posts to
                                                                                    the custom Parse database. 
                  </CardText>
                  <Button color="primary" href="https://github.com/leviwp48/InstaPix"> See Project </Button>
                </CardBody>
              </Card>       
            
              <Card>
                <CardImg top width="100%" src={require("./../../images/cherper.png")} />
                  <CardBody>
                  <CardTitle> Cherper </CardTitle>
                  <CardText> Twitter Clone that uses OAuth authentication. Allows a user to read and post tweets from their timeline.  </CardText>
                  <Button color="primary" href="https://github.com/leviwp48/Cherper"> See Project </Button>
                </CardBody>
              </Card>

              <Card>
                <CardImg top width="100%" src={require("./../../images/runica.png")} />
                  <CardBody>
                  <CardTitle> 2D Game </CardTitle>
                  <CardText> Mulitplayer 2D game made in Unity. </CardText>
                  <Button color="primary" href="https://github.com/leviwp48/Runica"> See Project </Button>
                </CardBody>
              </Card>       
         
              <Card>
                <CardImg top width="100%" src={require("./../../images/pr.jpg")} />
                  <CardBody>
                  <CardTitle> Planet Rocket V2 </CardTitle>
                  <CardText> Web Application that helps users find a target audience. Uses a MERN Stack(MongoDB, Express, React, Node) </CardText>
                  <Button color="primary" href="https://github.com/leviwp48/PlanetRocket-V2"> See Project </Button>
                </CardBody>
              </Card>              
            </CardColumns>
        </Container>
        </Jumbotron>
        )}
}

export default Projects;
