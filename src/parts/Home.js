import React, { Component } from "react";
import Canvas from "./Canvas.js";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: false,
      animation: undefined,
    };
  }

  handleReady(cycle) {
    console.log(cycle);
    // let animation = setInterval(function () {
    //   cycle;
    // }, 16);
  }

  render() {
    return (
      <div className="ps5-home">
        <Canvas
          canvas={this.state.canvas}
          onReady={(e) => this.handleReady(e)}
        />

        <div>
          <p>Click the button on your screen</p>

          <a
            href="#start"
            className="ps5-btn ps5-btn-mono ps5-btn-lg focus"
            onReady={(e) => this.handleReady(e)}
            onClick={() => {
              this.setState({ canvas: !this.state.canvas });
              // this.props.onClick();
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
