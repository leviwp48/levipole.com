import React, { Component } from 'react';
import AppNavbar from '../Nav/AppNavbar';
import ProjectList from '../Projects/ProjectList';
import ProjectModal from '../Projects/ProjectModal';
import { Container, Card, CardImg, CardImgOverlay,
         CardTitle, CardText, Row, Col, Jumbotron} from 'reactstrap';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {BrowserView, MobileView} from "react-device-detect";

import { Provider } from 'react-redux';
import store from '../../store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/home/Summary.css'

// TODO: Figure out how to portray summary



class Summary extends Component {
    state = {
      isOpen: false
    };


    render() {
      return (
        <Jumbotron className="Header" style={{backgroundColor: '#FFFFFF', color: '#000000', height: '95vh'}}>   
         <Row>
           <Col xs = "auto">
             <h1 style={{fontSize: '40px', marginLeft: '125px'}} className="display-3">ABOUT ME</h1> 
           </Col>       
         </Row>

         <Row>
         <Col sm={{size:'3', offset: 1}}>
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
           <Col sm={{size:'3'}}>
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
           <Col sm={{size:'3'}}>
             <h1 style={{fontSize: '20px', marginTop: '50px'}} className="display-3">Languages</h1> 
             <Row>
               <ul>
                 <li>Proficient: C++, C#, HTML, CSS, JavaScript (React, Node) </li> 
                 <li>Familiar: C, Java, SQL, PHP</li>
               </ul>
             </Row>      
           </Col> 
           <Col sm={{size:'3', offset: 1}}>
             <h1 style={{fontSize: '20px', marginTop: '10px'}} className="display-3">Technologies</h1> 
             <Row>
               <ul>
                 <li>Proficient: Android Studio, Unity, phpMyAdmin, Git, Unix Bash, MERN, MySQL, MongoDB, AWS</li> 
                 <li>Familiar: Oracle, Laravel, LAMP, Heroku </li>
               </ul>
             </Row>      
           </Col>   
         </Row>                    
        </Jumbotron>  
       );
    }
}

export default Summary;
