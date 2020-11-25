import React, { Component } from "react";
import "./Disk.scss";

class Disk extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        href={this.props.url}
        className="ps5-disk"
        style={{ backgroundImage: "url(" + this.props.cover + ")" }}
      >
        <span>{this.props.tag}</span>
        <h3>{this.props.label}</h3>
        <p>{this.props.price}</p>
      </a>
    );
  }
}

export default Disk;
