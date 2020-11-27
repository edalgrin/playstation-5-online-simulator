import React, { Component } from "react";
import "./Background.scss";

class Background extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ps5-bg">
        {this.props.backgrounds.map((item, i) => {
          return (
            <div
              key={i}
              style={{ backgroundImage: "url(" + item + ")" }}
              className={
                "ps5-bg-item" + (this.props.menu === i ? " active" : "")
              }
            ></div>
          );
        })}
      </div>
    );
  }
}

export default Background;
