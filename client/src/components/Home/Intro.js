import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/home/Intro.css';

// Componenet renders intro Image and text
class Intro extends Component {

    render() {
        return (  
              <section className="s1-intro">
                  <h1 className="intro-title"> 

                  </h1>
                  <div className="intro-container">
                    <div className="intro-summary-wrapper">
                      <div className="left-summary">
                        words sdfasfdsfsdaffd toosdfsafds ftoosdfsafds fsadfsdfsd  asdfdsf                          maybe an image toosdfsafds fsadfsdfsd  asdfdsf  
                        maybe an image toosdfsafds fsadfsdfsd  asdfdsf  
                        maybe an image toosdfsafds fsadfsdfsd  asdfdsf 
                      </div>    
                      <div className="separator">ssdfsd</div>
                      <div className="right-summary">
                        maybe an image toosdfsafds fsadfsdfsd  asdfdsf                          maybe an image toosdfsafds fsadfsdfsd  asdfdsf  
                        maybe an image toosdfsafds fsadfsdfsd  asdfdsf  
                        maybe an image toosdfsafds fsadfsdfsd  asdfdsf  

                      </div>                  
                    </div>
                  </div>
                  
              </section>
        )}
}

export default Intro;
