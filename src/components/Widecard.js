import React, { Component } from "react";
import { Link } from "react-router-dom";

class Widecard extends Component {
  render() {
    return (
      <div class="widecard">
        <div class="compdet">
          <h3>{this.props.title}</h3>
          <h4 class="secondtext">
            <Link to={this.props.url}>{this.props.url}</Link>
          </h4>
        </div>
      </div>
    );
  }
}

export default Widecard;
