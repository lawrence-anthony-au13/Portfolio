import React, { Component } from "react";

class Widecard extends Component {
  render() {
    return (
      <div class="widecard">
        <div class="compdet">
          <h3>{this.props.title}</h3>
          <h4 class="secondtext">
            <a class="red_url" href={this.props.url}>
              {this.props.url}
            </a>
          </h4>
        </div>
      </div>
    );
  }
}

export default Widecard;
