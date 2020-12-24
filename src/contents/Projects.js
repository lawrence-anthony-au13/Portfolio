import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Projects extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Projects</h1>
        <Widecard
          title="Responsive website using HTML, CSS and JS"
          url="https://lawrence-anthony-au9.github.io/Chomp-Champ/"
        />
        <Widecard
          title="Currency Exchange Calculator"
          url="https://lawrence-anthony-au9.github.io/Currency-Exchange-Calculator/"
        />
      </div>
    );
  }
}

export default Projects;
