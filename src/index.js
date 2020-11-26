import React, { Component } from "react";
import ReactDOM from "react-dom";
import Background from "./parts/Background.js";
import Top from "./parts/Top.js";
import Menu from "./parts/Menu.js";
import Preview from "./parts/Preview.js";
import List from "./parts/List.js";
import apps from "./apps.js";
import "./index.scss";
// const iconUser = "http://eduardoallegrini.com/static/media/logo.9ba6744a.svg";
import iconUser from "./assets/icon-user.png";

const topLeftMenu = [
  {
    label: "Games",
    url: "#games",
    content: [apps.astro, apps.destruction, apps.sackboy],
  },
  {
    label: "Media",
    url: "#media",
    content: [apps.store, apps.explore],
  },
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
      active: 0,
      top: 0,
    };
  }

  render() {
    let top = this.state.top;
    let content = topLeftMenu[top].content;
    let active = this.state.active;
    let selected = content[active];
    let id = top + "" + active;

    let backgrounds = content.map((item) => {
      return item.bg;
    });
    let menus = content.map((item) => {
      return {
        url: item.url,
        label: item.label,
        cover: item.cover,
        icon: item.icon,
      };
    });
    let preview = {
      logo: selected.logo,
      title: selected.title,
      text: selected.text,
      btn: selected.btn,
      url: selected.url,
      tag: selected.tag,
      label: selected.label,
      price: selected.price,
      cover: selected.cover,
    };
    let lists = selected.lists
      ? selected.lists.map((list) => {
          return {
            shrink: list.shrink,
            title: list.title,
            apps: list.apps.map((app) => {
              return apps[app];
            }),
          };
        })
      : false;

    return (
      <>
        <Background active={active} backgrounds={backgrounds} />

        <div className="ps5-page">
          <div
            className={
              "ps5-hero ps5-container" + (lists ? "" : " ps5-hero-fullscreen")
            }
          >
            <Top
              top={top}
              topRightMenu={topRightMenu}
              topLeftMenu={topLeftMenu}
              handleClick={(e) => this.setState({ top: e, active: 0 })}
            />

            <Menu
              active={active}
              content={content}
              menus={menus}
              handleClick={(e) => this.setState({ active: e })}
            />

            <Preview id={id} preview={preview} />
          </div>

          <div
            className="ps5-content ps5-container ps5-animate-from-bottom"
            key={id}
          >
            {lists &&
              lists.map((list, i) => {
                return (
                  <div className="ps5-lists" key={i}>
                    <h3>{list.title}</h3>

                    <List apps={list.apps} shrink={list.shrink} />
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById("root")
);
