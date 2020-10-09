import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardBody, 
         CardColumns, CardTitle, CardText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/home/Projects.css';

// Holds Project images and text.
// TODO: Pull data from DB and dynamically add projects.
class Projects extends Component {

    render() {
        return (
          <section className="s3-projects">
            <h1 className="title">My Projects</h1>
            <div className="project-container">
              <div className="project-wrapper">
                <div className="project"> 
                  <img class="thumbnail" src={require("./../../images/instapix.png")} />
                  <div className="project-preview">
                    <h6 class="project-title">Instapix</h6>
                    <p class="project-intro"> Instagram Clone that uses a Parse backend and utilizes the camera. Allows the user to see posts and submit posts to
                                                                                    the custom Parse database.  
                    </p>
                  </div>
                </div>
                <div className="project"> 
                  <img class="thumbnail" src={require("./../../images/cherper.png")} />
                  <div className="project-preview">
                    <h6 class="project-title">Cherper</h6>
                    <p class="project-intro"> Twitter Clone that uses OAuth authentication. Allows a user to read and post tweets from their timeline.
                    </p>
                  </div>
                </div>
                <div className="project"> 
                  <img class="thumbnail" src={require("./../../images/runica.png")} />
                  <div className="project-preview">
                    <h6 class="project-title">Runica</h6>
                    <p class="project-intro"> Mulitplayer 2D game made in Unity. </p>
                  </div>
                </div> 
                <div className="project"> 
                  <img class="thumbnail" src={require("./../../images/pr.jpg")} />
                  <div className="project-preview">
                    <h6 class="project-title">Planet Rocket</h6>
                    <p class="project-intro">  Web Application that helps users find a target audience. Uses a MERN Stack(MongoDB, Express, React, Node) </p>
                  </div>
                </div>                
              </div>
            </div>
          </section>
        )}
}

export default Projects;

/*
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
                <CardImg top src={require("./../../images/instapix.png")} style={{maxHeight:"300px", maxWidth:"200px", height:"auto"}} />
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
*/