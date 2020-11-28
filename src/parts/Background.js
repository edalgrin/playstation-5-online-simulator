import React, { Component } from "react";
import "./Background.scss";

const classNames = require("classnames");

class Background extends Component {
  render() {
    const apps = this.props.apps;

    return apps ? (
      <div className="ps5-bg">
        {apps.map((item, i) => {
          return (
            <div
              key={i}
              style={{ backgroundImage: "url(" + item.bg + ")" }}
              className={classNames("ps5-bg-item", {
                active: this.props.appSelected === i,
              })}
            ></div>
          );
        })}
      </div>
    ) : (
      false
    );
  }
}

export default Background;
