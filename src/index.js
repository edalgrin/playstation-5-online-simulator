import React, { Component } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Home from "./parts/Home.js";
import Background from "./parts/Background.js";
import Top from "./parts/Top.js";
import Menu from "./parts/Menu.js";
import Preview from "./parts/Preview.js";
import List from "./parts/List.js";
import Modal from "./parts/Modal.js";
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
    label: "search",
    url: "#search",
    content: <i className="material-icons">search</i>,
  },
  {
    label: "settings",
    url: "#settings",
    content: <i className="material-icons">settings</i>,
  },
  {
    label: "user",
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
      home: true,
      menu: 0,
      top: 0,
      player: false,
      modal: false,
      modalContent: "",
      scrollTop: 0,
    };
    this.keydownFunction = this.keydownFunction.bind(this);
    this.scrollFunction = this.scrollFunction.bind(this);
  }

  keydownFunction(e) {
    if (e.keyCode === 27) {
      this.setState({ modal: false });
      if (this.state.player) {
        this.state.player.pauseVideo();
      }
    }
  }

  scrollFunction(e) {
    this.setState({
      scrollTop: window.scrollY,
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keydownFunction, false);
    window.addEventListener("scroll", this.scrollFunction);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownFunction, false);
    window.removeEventListener("scroll", this.scrollFunction);
  }

  render() {
    let top = this.state.top;
    let content = topLeftMenu[top].content;
    let menu = this.state.menu;
    let selected = content[menu];
    let id = top + "" + menu;
    let player = this.state.player;

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
    let preview = selected;
    // preview["bg"] = undefined;
    // delete preview.lists;
    // delete preview.bg;
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
        <CSSTransition in={!this.state.home} timeout={1800} unmountOnExit>
          <div
            className={
              "ps5-page" + (this.state.scrollTop > 0 ? " ps5-page-scroll" : "")
            }
          >
            <Background menu={menu} backgrounds={backgrounds} />

            <div className={"ps5-sheet"}>
              <div
                className={
                  "ps5-hero ps5-container" +
                  (lists ? "" : " ps5-hero-fullscreen")
                }
              >
                <Top
                  top={top}
                  topRightMenu={topRightMenu}
                  topLeftMenu={topLeftMenu}
                  onClickMenu={(e) => this.setState({ top: e, menu: 0 })}
                  onClickModal={(e) =>
                    this.setState({ modal: true, modalContent: e })
                  }
                />

                <Menu
                  menu={menu}
                  content={content}
                  menus={menus}
                  onClick={(e) => this.setState({ menu: e })}
                />

                <Preview
                  id={id}
                  preview={preview}
                  onClick={(e) => {
                    this.setState({ modal: true, modalContent: e });
                    if (player) {
                      player.playVideo();
                    }
                  }}
                />
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
          </div>
        </CSSTransition>

        <CSSTransition in={this.state.home} timeout={1000} unmountOnExit>
          <Home handleClick={() => this.setState({ home: false })} />
        </CSSTransition>

        <CSSTransition in={this.state.modal} timeout={400}>
          <Modal
            modalContent={this.state.modalContent}
            onClick={() => {
              this.setState({ modal: false });
              if (player) {
                player.pauseVideo();
              }
            }}
            onReady={(e) => this.setState({ player: e })}
          />
        </CSSTransition>
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
