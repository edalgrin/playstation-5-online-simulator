import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import iconSearch from "./assets/icon-search.png";
import iconSettings from "./assets/icon-settings.png";
import iconUser from "./assets/icon-user.png";
import iconStore from "./assets/icon-store.png";
import iconExplore from "./assets/icon-explore.png";
import iconEllipsis from "./assets/icon-ellipsis.png";
import coverRatchet from "./assets/cover-ratchet.jpg";
import coverDestruction from "./assets/cover-destruction.jpg";
import coverSpider from "./assets/cover-spider.jpg";
import coverSackboy from "./assets/cover-sackboy.jpg";
import coverAstro from "./assets/cover-astro.jpg";
import bgRatchet from "./assets/bg-ratchet.jpg";
import bgDestruction from "./assets/bg-destruction.jpg";
import bgSpider from "./assets/bg-spider.jpg";
import bgSackboy from "./assets/bg-sackboy.jpg";
import bgAstro from "./assets/bg-astro.jpg";
import logoAstro from "./assets/logo-astro.png";

const menu = [
  {
    url: "#playstation-store",
    icon: iconStore,
    label: "PlayStation Store",
    bg: bgRatchet,
  },
  {
    url: "#explore",
    icon: iconExplore,
    label: "Explore",
    bg: bgSpider,
  },
  {
    url: "#astros-playroom",
    cover: coverAstro,
    label: "Astro's Playroom",
    bg: bgAstro,
  },
  {
    url: "#destruction-allstars",
    cover: coverDestruction,
    label: "Destruction Allstars",
    bg: bgDestruction,
  },
  {
    url: "#sackboy-a-big-adventure",
    cover: coverSackboy,
    label: "Sackboy: A Big Adventure",
    bg: bgSackboy,
  },
];

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "--:--",
      active: 2,
    };
  }

  componentDidMount() {
    this.tick();
    this.clock = setInterval(() => this.tick(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  tick() {
    let today = new Date();
    let minutes = today.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    this.setState({
      time: today.getHours() + ":" + minutes,
    });
  }

  render() {
    let active = this.state.active;

    return (
      <div>
        <div>
          {menu.map((item, i) => {
            return (
              <div
                key={i}
                className="ps5-bg-item"
                style={{ backgroundImage: "url(" + item.bg + ")" }}
                className={"ps5-bg-item" + (active === i ? " active" : "")}
              ></div>
            );
          })}
        </div>

        <div className="ps5-top">
          <ul>
            {["Games", "Media"].map((item, i) => {
              return (
                <li key={i}>
                  <a
                    href={"#" + item}
                    className={active === i ? "active" : ""}
                    title={item}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul>
            {[
              { icon: iconSearch, label: "search" },
              { icon: iconSettings, label: "settings" },
              { icon: iconUser, label: "user" },
              { label: this.state.time },
            ].map((item, i) => {
              return (
                <li key={i}>
                  <a href={"#" + item.label} title={item.label}>
                    {item.icon ? <img src={item.icon} alt="" /> : item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="ps5-menu" style={{ marginLeft: 120 - active * 80 }}>
          {menu.map((item, i) => {
            return (
              <li key={i} className="">
                <a
                  href={item.url}
                  className={"ps5-menu-item" + (active === i ? " active" : "")}
                  title={item.label}
                  style={{ backgroundImage: "url(" + item.cover + ")" }}
                  onClick={() => this.setState({ active: i })}
                >
                  {item.icon && <img src={item.icon} alt="" />}
                  <h3>{item.label}</h3>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="ps5-content">
          <div className="ps5-content-left">
            <img className="ps5-content-logo" src={logoAstro} alt="" />
            <p className="ps5-content-text">
              Discover the future of play with intergalactic platforming hero -
              ASTRO!
            </p>
            <div className="ps5-content-options">
              <button className="ps5-button">Play</button>
              <button className="ps5-button ps5-button-mono">
                <img src={iconEllipsis} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById("root")
);
