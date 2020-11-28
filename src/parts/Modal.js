import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { CSSTransition } from "react-transition-group";
import YouTube from "react-youtube";
import "./Modal.scss";

class Modal extends Component {
  render() {
    const modalContent = this.props.modalContent;
    const modalType = modalContent.type;

    return (
      <div className={"ps5-modal"} onClick={() => this.props.onClick()}>
        <div className="ps5-modal-wrapper" onClick={(e) => e.stopPropagation()}>
          {modalType === "youtube" ? (
            <YouTube
              videoId={modalContent.element}
              containerClassName="ps5-modal-video"
              opts={{
                height: "100%",
                width: "100%",
                playerVars: {
                  autoplay: 1,
                  // mute: 1,
                },
              }}
              onReady={(e) => this.props.onReady(e.target)}
              onEnd={() => this.props.onClick()}
            />
          ) : modalType === "image" ? (
            <div
              className="ps5-modal-image"
              style={{ backgroundImage: "url(" + modalContent.element + ")" }}
            />
          ) : (
            modalContent
          )}

          <a
            href="#modal-close"
            title="Close"
            className="ps5-btn ps5-btn-mono ps5-modal-btn"
            onClick={() => this.props.onClick()}
          >
            <i className="material-icons">close</i>
          </a>
        </div>
      </div>
    );
  }
}

export default Modal;
