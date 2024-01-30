import React, { Component }  from "react";
import '../styles/About.css';
import FadeInSection from "./FadeInSection";

class About extends Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey){
        this.setState({
            activeKey: eventKey
        });
    }

    render() {
        const one = (
            <p>
                here's some stuff
            </p>
        );
        const two = (
            <p>
              other stuff
            </p>
        );
        const tech_stack = [
            "Python",
            "Node.js",
            "React.js",
            "Javascript ES6+"
        ];
      
        return (
            <div id="about">
                <FadeInSection>
                    <div className="section-header">
                        <span className="section-title">/ about me</span>
                    </div>
                    <div className="about-content">
                        <div className="about-description">
                            {[one]}
                            {"Here are some technologies I have been working with:"}
                            <ul className="tech-stack">
                                {tech_stack.map(function (tech_item, i) {
                                return (
                                    <FadeInSection delay={`${i + 1}00ms`}>
                                    <li>{tech_item}</li>
                                    </FadeInSection>
                                );
                                })}
                            </ul>
                            {[two]}
                        </div>
                        <div className="about-image">
                        {/* <img alt="Levi Pole" src={"/assets/me2.jpg"} /> */}
                        </div>
                    </div>
                </FadeInSection>
            </div>
        )
    }
}

export default About;