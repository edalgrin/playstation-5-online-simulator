import React, { Component } from "react";
import Disk from "./Disk.js";
import "./Menu.scss";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const active = this.props.active;

    return (
      <ul
        className="ps5-menu"
        style={{ transform: "translateX(-" + active * 80 + "px)" }}
      >
        {this.props.menus.map((item, i) => {
          return (
            <li key={i}>
              <Disk
                item={item}
                className={active === i ? "active on" : ""}
                onClick={() => this.props.handleClick(i)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Menu;
