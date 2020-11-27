import React, { Component } from "react";
import Disk from "./Disk.js";
import "./Menu.scss";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menu = this.props.menu;

    return (
      <ul
        className="ps5-menu"
        style={{ transform: "translateX(-" + menu * 80 + "px)" }}
      >
        {this.props.menus.map((item, i) => {
          return (
            <li key={i}>
              <Disk
                item={item}
                className={menu === i ? "active focus" : ""}
                onClick={() => this.props.onClick(i)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Menu;
