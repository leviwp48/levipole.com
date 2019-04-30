import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/home/Summary.css'




class Summary extends Component {
    state = {
      isOpen: false
    };


    render() {
      return (
        <Container fluid="true" className="Header" style={{backgroundColor: '#FFFFFF', color: '#000000', height: '100vh'}}>   
         <Row>
           <Col md = "auto">
             <h1 style={{fontSize: '40px', marginLeft: '125px', marginTop: "10vh"}} className="display-3">
                ABOUT ME  
             </h1>     
           </Col>       
         </Row>
         <Row>
         <Col md={{size:'3', offset: 1}}>
             <h1 style={{fontSize: '20px', marginTop: '50px'}} className="display-3">Software Engineering</h1> 
             <Row>
               <ul>
                 <li>Implementation of datastructures and algorithms</li> 
                 <li>Multiple android applications that utilize the many tools of android
	                   along with external API's</li>
                 <li>Production of responsive web applications.</li>
               </ul>
             </Row>      
           </Col>     
           <Col md={{size:'3'}}>
             <h1 style={{fontSize: '20px', marginTop: '50px'}} className="display-3">Game Development</h1> 
             <Row>
               <ul>
                 <li>Experience using Unity to create a 2d platformer. Created a custom UI, 
                     custom scripts in C#, utilized Unity's physics environment, and 
                     made assets my own.</li> 
                 <li>Created a 2d Chess game that programmically creates the game board and pieces. 
                     Works like ches.</li>
               </ul>
             </Row>      
           </Col> 
           <Col md={{size:'3'}}>
             <h1 style={{fontSize: '20px', marginTop: '50px'}} className="display-3">Languages</h1> 
             <Row>
               <ul>
                 <li>Proficient: C++, C#, HTML, CSS, JavaScript (React, Node) </li> 
                 <li>Familiar: Java, SQL, PHP</li>
               </ul>
             </Row>      
           </Col> 
           <Col sm={{size:'3', offset: 1}}>
             <h1 style={{fontSize: '20px', marginTop: '10px'}} className="display-3">Technologies</h1> 
             <Row>
               <ul>
                 <li>Proficient: Android Studio, Unity, phpMyAdmin, Git, Unix Bash, MERN, MySQL, MongoDB, AWS</li> 
                 <li>Familiar: Oracle, Laravel, LAMP, Heroku, Tensor Flow </li>
               </ul>
             </Row>      
           </Col>   
         </Row>                    
        </Container>  
       );
    }
}

export default Summary;
