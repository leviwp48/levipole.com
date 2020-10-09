import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col, ListGroupItem, ListGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Summary extends Component {

  // I think that this could be much better. Something more than what I currently have. 
  render() {
      return (
        <Jumbotron fluid  style={{backgroundColor: '#FFFFFF', color: '#000000'}}>   
        <Container fluid>
         <Row>
           <Col sm={{size:12}}>
              <h1 className="lead" style={{fontSize:'40px'}}>
                ABOUT ME  
              </h1>
           </Col>       
         </Row>
         
         <Row>
            <Col sm={{size:12}}>
              <hr className="my-2" />
            </Col>
         </Row>

         <Row>
          <Col xs="12" sm={{size:10, offset: 1}} md={{size:5, offset:1}} lg={{size:4, offset:1}}>
             <h1 style={{fontSize: '30px'}} className="lead">Software Engineering</h1> 
               <ListGroup flush>
                 <ListGroupItem>Implementation of datastructures and algorithms</ListGroupItem> 
                 <ListGroupItem>Multiple android applications that utilize the many tools of android
	                   along with external API's</ListGroupItem>
                 <ListGroupItem>Developed two Full Stack web applications for a startup company</ListGroupItem>
               </ListGroup>
           </Col>     
           <Col xs="12" sm={{size:10, offset: 1}} md={{size:5}} lg={{size:4, offset:2}}>
             <h1 style={{fontSize: '30px'}} className="lead">Game Development</h1> 
               <ListGroup flush>
                 <ListGroupItem>Experience using Unity to create a 2d platformer. Created a custom UI, 
                     custom scripts in C#, utilized Unity's physics environment, and 
                     made assets my own.</ListGroupItem> 
                 <ListGroupItem>Created a 2d Chess game that programmically creates the game board and pieces. 
                     Works like ches.</ListGroupItem>
               </ListGroup>
           </Col> 
          </Row>

          <Row>
            <Col xs="12" sm={{size:10, offset: 1}} md={{size:5}} lg={{size:4, offset:1}}>
              <h1 style={{fontSize: '30px'}} className="lead">Skills</h1> 
                <ListGroup flush>
                  <ListGroupItem>C++, C#, HTML, HTML5, CSS, JavaScript, React, Node, Java, SQL, PHP, XML</ListGroupItem> 
                </ListGroup>
            </Col> 
            <Col xs="12" sm={{size:10, offset: 1}} md={{size:5, offset:1}} lg={{size:4, offset:2}}>
              <h1 style={{fontSize: '30px'}} className="lead">Technologies</h1> 
                <ListGroup flush>
                  <ListGroupItem>Proficient: Android Studio, Unity, phpMyAdmin, Git, Unix Bash, MERN, MySQL, MongoDB, AWS</ListGroupItem> 
                  <ListGroupItem>Familiar: Oracle, Laravel, LAMP, Heroku, Tensor Flow </ListGroupItem>
                </ListGroup>
            </Col>  
          </Row>
 
         </Container>                
        </Jumbotron>  
       );
    }
}

export default Summary;
