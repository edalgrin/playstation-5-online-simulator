import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import iconUser from "./assets/icon-user.png";
import iconStore from "./assets/icon-store.png";
import iconExplore from "./assets/icon-explore.png";
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
import logoSackboy from "./assets/logo-sackboy.png";
import logoDestruction from "./assets/logo-destruction.png";

const Game = ({ logo, text, title, cover, tag, price }) => {
  return (
    <>
      <div className="ps5-content-left">
        <img className="ps5-content-logo" src={logo} alt="" />
        <p className="ps5-content-text">{text}</p>
        <div className="ps5-content-options">
          <a href="#2" className="ps5-button">
            Play
          </a>
          <a href="#3" className="ps5-button ps5-button-mono">
            <i class="material-icons">more_horiz</i>
          </a>
        </div>
      </div>

      <a href="#1" className="ps5-content-right">
        <img src={cover} className="ps5-content-cover" alt="" />
        <div className="ps5-content-labels">
          <span className="ps5-content-tag">{tag}</span>
          <p className="ps5-content-text">{title}</p>
          <p className="ps5-content-price">{price}</p>
        </div>
      </a>
    </>
  );
};

const Page1 = () => {
  return (
    <div className="ps5-content-left">
      <p className="ps5-content-text">Page 1</p>
      <div className="ps5-content-options">
        <a href="#2" className="ps5-button">
          Discover
        </a>
        {/* <a href="#3" className="ps5-button ps5-button-mono">
          <i class="material-icons">more_horiz</i>
        </a> */}
      </div>
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="ps5-content-left">
      <p className="ps5-content-text">Page 2</p>
      <div className="ps5-content-options">
        <a href="#2" className="ps5-button">
          Discover 2
        </a>
        {/* <a href="#3" className="ps5-button ps5-button-mono">
        <i class="material-icons">more_horiz</i>
      </a> */}
      </div>
    </div>
  );
};

const menu = [
  {
    url: "#playstation-store",
    icon: iconStore,
    label: "PlayStation Store",
    bg: bgRatchet,
    content: <Page1 />,
  },
  {
    url: "#explore",
    icon: iconExplore,
    label: "Explore",
    bg: bgSpider,
    content: <Page2 />,
  },
  {
    url: "#astros-playroom",
    cover: coverAstro,
    label: "Astro's Playroom",
    bg: bgAstro,
    logo: logoAstro,
    content: (
      <Game
        logo={logoAstro}
        text="Discover the future of play with intergalactic platforming hero -
        ASTRO!"
        title="Astro's Playroom"
        cover={coverAstro}
        tag="Full Game"
        price="Free"
      />
    ),
  },
  {
    url: "#destruction-allstars",
    cover: coverDestruction,
    label: "Destruction Allstars",
    bg: bgDestruction,
    logo: logoDestruction,
    content: (
      <Game
        logo={logoDestruction}
        text="Lorem"
        title="Destruction Allstars"
        cover={coverDestruction}
        tag="Full Game"
        price="€ 39,99"
      />
    ),
  },
  {
    url: "#sackboy-a-big-adventure",
    cover: coverSackboy,
    label: "Sackboy: A Big Adventure",
    bg: bgSackboy,
    logo: logoSackboy,
    content: (
      <Game
        logo={logoSackboy}
        text="Ipsum"
        title="Sackboy: A Big Adventure"
        cover={coverSackboy}
        tag="Full Game"
        price="€ 19,99"
      />
    ),
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
              {
                label: "search",
                content: <i class="material-icons">search</i>,
              },
              {
                label: "settings",
                content: <i class="material-icons">settings</i>,
              },
              {
                label: "user",
                content: <img src={iconUser} alt="" />,
              },
              {
                label: "clock",
                content: this.state.time,
              },
            ].map((item, i) => {
              return (
                <li key={i}>
                  <a
                    href={"#" + item.label}
                    title={item.label}
                    // className="ps5-button ps5-button-mono"
                  >
                    {item.content}
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
          {menu.map((item, i) => {
            return (
              <div
                key={i}
                className={"ps5-content-item" + (active === i ? " active" : "")}
              >
                {item.content}
              </div>
            );
          })}
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
