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

import "./index.scss";

const classNames = require("classnames");

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      top: undefined,
      apps: undefined,
      appSelected: undefined,
      lists: false,
      player: false,
      modal: false,
      modalContent: "",
      scrolled: false,
    };
    this.keydownFunction = this.keydownFunction.bind(this);
    this.scrollFunction = this.scrollFunction.bind(this);
  }

  keydownFunction(e) {
    if (e.keyCode === 27) {
      this.modalClose();
    }
  }

  scrollFunction(e) {
    if (window.scrollY > 100) {
      this.setState({
        scrolled: true,
      });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keydownFunction, false);
    window.addEventListener("scroll", this.scrollFunction);
    // this.setState({ apps: [Games.spider], top: 0, appSelected: 0 });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownFunction, false);
    window.removeEventListener("scroll", this.scrollFunction);
  }

  modalClose() {
    this.setState({ modal: false });
    if (this.state.player) {
      this.state.player.pauseVideo();
    }
  }

  modalOpen(data) {
    this.setState({ modal: true, modalContent: data });
    if (this.state.player) {
      this.state.player.playVideo();
    }
  }

  navUpdate(data) {
    this.setState({
      apps: data.apps,
      top: data.top,
      appSelected: 0,
      lists: data.lists,
    });
    this.modalClose();
  }

  render() {
    const apps = this.state.apps;
    const appSelected = this.state.appSelected;
    const lists = this.state.lists;
    let app = false;
    let list = false;
    if (apps != undefined) {
      app = apps[appSelected];
    }
    if (lists != undefined) {
      list = lists[appSelected];
    }

    return (
      <>
        <CSSTransition in={!this.state.home} timeout={1800}>
          <div
            className={classNames("ps5-page", {
              "ps5-page-scroll": this.state.scrolled,
            })}
          >
            <Background apps={apps} appSelected={appSelected} />

            <div className={"ps5-sheet"}>
              <div
                className={classNames("ps5-hero", "ps5-container", {
                  "ps5-hero-fullscreen": !list,
                })}
              >
                <Top
                  top={this.state.top}
                  onClickMenu={(e) => this.navUpdate(e)}
                  onClickModal={(e) => this.modalOpen(e)}
                />

                <Menu
                  apps={apps}
                  appSelected={appSelected}
                  onClick={(e) => this.setState({ appSelected: e })}
                />

                {app && (
                  <Preview app={app} onClick={(e) => this.modalOpen(e)} />
                )}
              </div>
            </div>

            {list && (
              <div
                className="ps5-content"
                key={appSelected}
                >
                <div className="ps5-container ps5-animate-from-bottom">
                <List
                  list={list}
                  onClickMenu={(e) => this.navUpdate(e)}
                  onClickModal={(e) => this.modalOpen(e)}
                /></div>
              </div>
            )}
          </div>
        </CSSTransition>

        <CSSTransition in={this.state.home} timeout={1000} unmountOnExit>
          <Home onClick={() => this.setState({ home: false })} />
        </CSSTransition>

        <CSSTransition in={this.state.modal} timeout={400}>
          <Modal
            modalContent={this.state.modalContent}
            onClick={() => this.modalClose()}
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
