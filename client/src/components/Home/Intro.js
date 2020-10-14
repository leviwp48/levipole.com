import React, { Component } from 'react';
import './../../styles/home/Intro.css';

// Componenet renders intro Image and text
class Intro extends Component {

    render() {
        return (  
              <section className="s1-intro">

                  <h1 className="intro-title"> 
                    Welcome to the garden, oh reader mine.
                  </h1>
                  <img className="cover-image" src={require("./../../images/garden.jpg")}>
                    
                  </img>
                  
                  <div className="intro-container">
                    <div className="intro-summary-wrapper">
                      <p> doo doo doo</p>
                    </div>
                  </div>
                  
              </section>
        )}
}

export default Intro;
