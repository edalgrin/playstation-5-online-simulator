import React, { Component } from "react";
import Disk from "./Disk.js";
import "./Menu.scss";

const classNames = require("classnames");

class Menu extends Component {
  render() {
    const apps = this.props.apps;
    const appSelected = this.props.appSelected;

    return apps ? (
      <ul
        className="ps5-menu"
        style={{ transform: "translateX(-" + appSelected * 80 + "px)" }}
      >
        {apps.map((item, i) => {
          // delete item.tag;
          // delete item.price;
          return (
            <li key={i}>
              <Disk
                item={item}
                className={classNames({ "active focus": appSelected === i })}
                onClick={() => this.props.onClick(i)}
              />
            </li>
          );
        })}
      </ul>
    ) : (
      false
    );
  }
}

export default Menu;
