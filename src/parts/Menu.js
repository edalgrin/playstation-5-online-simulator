import React, { Component } from "react";
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
        style={{ transform: "translateX(" + (120 - active * 80) + "px)" }}
      >
        {this.props.content.map((item, i) => {
          return (
            <li key={i}>
              <a
                href={item.url}
                title={item.label}
                className={"ps5-menu-item" + (active === i ? " active on" : "")}
                style={{ backgroundImage: "url(" + item.cover + ")" }}
                onClick={() => this.props.handleClick(i)}
              >
                {item.icon && <img src={item.icon} alt="" />}
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Menu;
