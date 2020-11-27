import React, { Component } from "react";
import Canvas from "./Canvas.js";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ps5-home">
        <Canvas />

        <div>
          <p>Click the button on your screen</p>

          <a
            href="#start"
            className="ps5-btn ps5-btn-mono ps5-btn-lg focus"
            onClick={() => this.props.handleClick()}
          >
            <i className="material-icons">power_settings_new</i>
            <div className="ps5-shine focus"></div>
            <div className="ps5-shine focus"></div>
            <div className="ps5-shine focus"></div>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
