import React, { Component } from "react";
import Canvas from "./Canvas.js";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationStopped: false,
    };
  }

  render() {
    return (
      <div className="ps5-home">
        {!this.state.animationStopped && <Canvas />}

        <div>
          <p>Click the button on your screen</p>

          <a
            href="#start"
            className="ps5-btn ps5-btn-mono ps5-btn-lg focus"
            onReady={(e) => this.handleReady(e)}
            onClick={() => {
              // this.setState({ animationStopped: !this.state.animationStopped });
              this.props.onClick();
            }}
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
