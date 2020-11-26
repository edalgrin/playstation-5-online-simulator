import React, { Component } from "react";
import "./Disk.scss";

class Disk extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    return (
      <a
        href={item.url}
        title={item.label}
        className={
          "ps5-disk " +
          (this.props.mid ? "ps5-disk-mid " : "") +
          (this.props.min ? "ps5-disk-min " : "") +
          this.props.className
        }
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
