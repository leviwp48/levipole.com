import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col, ListGroupItem, ListGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/home/Summary.css'




class Summary extends Component {
    state = {
      isOpen: false
    };


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
          <Col sm={{size:3, offset: 2}}>
             <h1 style={{fontSize: '30px'}} className="lead">Software Engineering</h1> 
               <ListGroup flush>
                 <ListGroupItem>Implementation of datastructures and algorithms</ListGroupItem> 
                 <ListGroupItem>Multiple android applications that utilize the many tools of android
	                   along with external API's</ListGroupItem>
                 <ListGroupItem>Production of responsive web applications.</ListGroupItem>
               </ListGroup>
           </Col>     
           <Col sm={{size:3}}>
             <h1 style={{fontSize: '30px'}} className="lead">Game Development</h1> 
               <ListGroup flush>
                 <ListGroupItem>Experience using Unity to create a 2d platformer. Created a custom UI, 
                     custom scripts in C#, utilized Unity's physics environment, and 
                     made assets my own.</ListGroupItem> 
                 <ListGroupItem>Created a 2d Chess game that programmically creates the game board and pieces. 
                     Works like ches.</ListGroupItem>
               </ListGroup>
           </Col> 
           <Col sm={{size:3}}>
             <h1 style={{fontSize: '30px'}} className="lead">Languages</h1> 
               <ListGroup flush>
                 <ListGroupItem>Proficient: C++, C#, HTML, CSS, JavaScript (React, Node) </ListGroupItem> 
                 <ListGroupItem>Familiar: Java, SQL, PHP</ListGroupItem>
               </ListGroup>
           </Col> 
           <Col sm={{size:3, offset:2}}>
             <h1 style={{fontSize: '30px', marginTop: '30px'}} className="lead">Technologies</h1> 
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
