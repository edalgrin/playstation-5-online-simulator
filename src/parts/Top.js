import React, { Component, useState } from "react";
import Search from "./Search.js";
import Social from "./Social.js";
import "./Top.scss";
import { menuPrimary } from "../navigation.js";

const classNames = require("classnames");

class Top extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "--:--",
    };
  }

  componentDidMount() {
    this.handleClick(0);
    this.tick();
    this.clock = setInterval(() => this.tick(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  tick() {
    const today = new Date();
    let minutes = today.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    this.setState({
      time: today.getHours() + ":" + minutes,
    });
  }

  handleClick(current) {
    const content = menuPrimary[current].content;

    if (content) {
      let apps = [];
      let lists = [];

      content.map((item, i) => {
        let app = item.app;
        let list = item.lists;
        if (app) {
          apps.push(item.app);
        }
        if (list) {
          lists.push(item.lists);
        }
      });

      if (!apps.length) {
        apps = false;
      }

      if (!lists.length) {
        lists = false;
      }

      this.props.onClickMenu({
        apps: apps,
        lists: lists,
        top: current,
      });
    }
  }

  render() {
    const menuSecondary = [
      {
        label: "search",
        url: "#search",
        content: <i className="material-icons">search</i>,
        modalContent: <Search onClickMenu={(e) => this.props.onClickMenu(e)} />,
      },
      {
        label: "settings",
        url: "#settings",
        content: <i className="material-icons">settings</i>,
        modalContent: (
          <div className="ps5-modal-dialog">
            <h2>Settings</h2>
          </div>
        ),
      },
      {
        label: "user",
        url: "#user",
        content: <img src="http://eduardoallegrini.com/logo192.png" alt="" />,
        modalContent: <Social />,
      },
      {
        label: "clock",
        url: "#clock",
        content: "clock",
        modalContent: (
          <div className="ps5-modal-dialog">
            <h2>Clock</h2>
          </div>
        ),
      },
    ];

    return (
      <div className="ps5-top">
        <ul>
          {menuPrimary.map((item, i) => {
            return (
              <li key={i}>
                <a
                  href={item.url}
                  className={classNames("ps5-top-btn", {
                    active: this.props.top === i,
                  })}
                  onClick={() => this.handleClick(i)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <ul>
          {menuSecondary.map((item, i) => {
            let clock = item.content === "clock";

            return (
              <li key={i}>
                <a
                  href={item.url}
                  title={item.label}
                  className={
                    clock ? "ps5-top-btn active" : "ps5-btn ps5-btn-mono"
                  }
                  onClick={() => {
                    this.props.onClickModal(item.modalContent);
                  }}
                >
                  {clock ? this.state.time : item.content}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Top;
