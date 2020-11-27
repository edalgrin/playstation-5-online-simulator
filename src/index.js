import React, { Component } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import YouTube from "react-youtube";

import Background from "./parts/Background.js";
import Top from "./parts/Top.js";
import Menu from "./parts/Menu.js";
import Preview from "./parts/Preview.js";
import List from "./parts/List.js";
import Home from "./parts/Home.js";
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
  // state: { active: number, top: number, home: boolean, modal: boolean };
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      top: 0,
      home: false,
      modal: false,
      videoId: "",
      player: false,
    };
    this.keydownFunction = this.keydownFunction.bind(this);
  }

  keydownFunction(e) {
    if (e.keyCode === 27) {
      this.setState({ modal: false });
      if (this.state.player) {
        this.state.player.pauseVideo();
      }
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keydownFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownFunction, false);
  }

  render() {
    let top = this.state.top;
    let content = topLeftMenu[top].content;
    let active = this.state.active;
    let selected = content[active];
    let id = top + "" + active;
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
          <div className="ps5-page">
            <Background active={active} backgrounds={backgrounds} />

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
                  onClickMenu={(e) => this.setState({ top: e, active: 0 })}
                  onClickModal={(e) => this.setState({ modal: true })}
                />

                <Menu
                  active={active}
                  content={content}
                  menus={menus}
                  onClick={(e) => this.setState({ active: e })}
                />

                <Preview
                  id={id}
                  preview={preview}
                  onClick={(e) => {
                    this.setState({ modal: true, videoId: e });
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
          <div className="ps5-modal">
            <YouTube
              videoId={this.state.videoId}
              containerClassName="ps5-video"
              opts={{
                height: "100%",
                width: "100%",
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                  mute: 1,
                  // controls: 0,
                },
              }}
              // onStateChange={() => alert()}
              onReady={(e) => this.setState({ player: e.target })}
            />

            <a
              href="#modal-close"
              className="ps5-btn ps5-btn-mono focus"
              onClick={() => {
                this.setState({ modal: false });
                if (player) {
                  player.pauseVideo();
                }
              }}
            >
              <i className="material-icons">close</i>
            </a>
          </div>
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
