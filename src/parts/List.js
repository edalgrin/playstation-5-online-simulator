import React, { Component } from "react";
import Disk from "./Disk.js";
import "./List.scss";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={"ps5-list " + (this.props.shrink ? "ps5-list-shrink" : "")}
      >
        {this.props.apps.map((item, i) => {
          return <Disk key={i} item={item} min />;
        })}
      </div>
    );
  }
}

export default List;
