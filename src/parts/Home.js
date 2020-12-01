import React, { Component } from "react";
import Canvas from "./Canvas.js";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: false,
    };
  }

  render() {
    return (
      <div className="ps5-home">
        {this.state.animation ? (
          <>
            <Canvas />

            <div>
              <p>Click the button to Start</p>

              <a
                href="#start"
                className="ps5-btn ps5-btn-mono ps5-btn-lg focus"
                onClick={() => this.props.onClick()}
              >
                <i className="material-icons">power_settings_new</i>
                <div className="ps5-shine focus"></div>
                <div className="ps5-shine focus"></div>
                <div className="ps5-shine focus"></div>
              </a>
            </div>
          </>
        ) : (
          <div>
            <div>
              <p>This website is a study project about</p>
              <p>PlayStation 5 User Experience</p>
              <p>All the texts, images and links belong to them</p>
            </div>

            <a
              href="#next"
              className="ps5-btn ps5-btn-primary focus"
              onClick={() => this.setState({ animation: true })}
            >
              Continue
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
