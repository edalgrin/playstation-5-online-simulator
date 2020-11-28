import React, { Component } from "react";
import "./Disk.scss";

const classNames = require("classnames");

class Disk extends Component {
  render() {
    const item = this.props.item;
    const href = this.props.href;
    const hover = this.props.hover;

    return (
      <a
        href={href || item.url}
        target={href ? "_blank" : ""}
        rel={href ? "noopener noreferrer" : ""}
        title={item.label}
        className={classNames(
          "ps5-disk",
          { "ps5-disk-mid": hover === "mid" },
          { "ps5-disk-min": hover === "min" },
          this.props.className
        )}
        style={{ backgroundImage: "url(" + item.cover + ")" }}
        onClick={this.props.onClick}
      >
        <div>
          {item.tag && <span>{item.tag}</span>}
          {item.label && <h3>{item.label}</h3>}
          {item.price && <p>{item.price}</p>}
        </div>
      </a>
    );
  }
}

export default Disk;
