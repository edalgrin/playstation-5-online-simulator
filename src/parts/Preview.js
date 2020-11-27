import React, { Component } from "react";
import Disk from "./Disk.js";
import "./Preview.scss";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.preview;

    return (
      <div className="ps5-preview ps5-animate-from-bottom" key={this.props.id}>
        <div>
          {item.logo && <img src={item.logo} alt="" />}

          {item.title && <h2>{item.title}</h2>}

          {item.text && <p>{item.text}</p>}

          {item.trailer && (
            <div className="ps5-btn-group">
              <a
                href="#play"
                className="ps5-btn ps5-btn-lg ps5-btn-primary"
                onClick={() => this.props.onClick(item.trailer)}
              >
                Play
              </a>

              <a
                href="#more"
                className="ps5-btn ps5-btn-mono  ps5-btn-lg ps5-btn-primary"
                onClick={() => this.props.onClick("more")}
              >
                <i className="material-icons">more_horiz</i>
              </a>
            </div>
          )}
        </div>

        {item.price && (
          <Disk
            item={item}
            mid
            onClick={() => this.props.onClick(item.trailer)}
          />
        )}
      </div>
    );
  }
}

export default Preview;
