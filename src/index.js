import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import Background from "./parts/Background.js";
import Top from "./parts/Top.js";
import Menu from "./parts/Menu.js";
import Preview from "./parts/Preview.js";
import Disk from "./parts/Disk.js";
import "./index.scss";

// const iconUser = "http://eduardoallegrini.com/static/media/logo.9ba6744a.svg";
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

const games = [
  {
    url: "#playstation-store",
    icon: iconStore,
    label: "PlayStation Store",
    bg: bgRatchet,
    title: "Welcome to the next generation",
    text:
      "From the freshnest releases to curated collection, there's something for everyone.",
    list: true,
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
    logo: logoAstro,
    btn: "Play",
    text:
      "Discover the future of play with intergalactic platforming hero - ASTRO!",
    tag: "Full Game",
    price: "Free",
  },
  {
    url: "#destruction-allstars",
    cover: coverDestruction,
    label: "Destruction Allstars",
    bg: bgDestruction,
    logo: logoDestruction,
    btn: "Play",
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim officiis",
    tag: "Full Game",
    price: "€ 39,99",
  },
  {
    url: "#sackboy-a-big-adventure",
    cover: coverSackboy,
    label: "Sackboy: A Big Adventure",
    bg: bgSackboy,
    logo: logoSackboy,
    btn: "Play",
    text:
      "Dolores hic deleniti ut natus tempora earum, provident debitis obcaecati et est",
    tag: "Full Game",
    price: "€ 19,99",
  },
];

const topLeftMenu = [
  { label: "Games", url: "#games" },
  { label: "Media", url: "#media" },
];

const topRightMenu = [
  {
    label: "Search",
    url: "#search",
    content: <i className="material-icons">search</i>,
  },
  {
    label: "Settings",
    url: "#settings",
    content: <i className="material-icons">settings</i>,
  },
  {
    label: "User",
    url: "#user",
    content: <img src={iconUser} alt="" />,
  },
  {
    label: "clock",
    url: "#clock",
    content: "clock",
  },
];

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 2,
      top: 0,
    };
  }

  render() {
    let top = this.state.top;
    let content = games;
    let active = this.state.active;

    return (
      <div>
        <Background
          active={active}
          backgrounds={content.map((item) => {
            return item.bg;
          })}
        />

        <div className="ps5-hero">
          <Top
            top={top}
            topRightMenu={topRightMenu}
            topLeftMenu={topLeftMenu}
            handleClick={(e) => this.setState({ top: e })}
          />

          <Menu
            active={active}
            content={content}
            handleClick={(e) => this.setState({ active: e })}
          />

          <Preview active={active} content={content} />
        </div>

        <div className="ps5-content">
          <h3>List 1</h3>
          <div className="ps5-list">
            {content.map((item, i) => {
              return (
                <Disk
                  key={i}
                  url={item.url}
                  tag={item.tag}
                  label={item.label}
                  price={item.price}
                  cover={item.cover}
                />
              );
            })}
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
