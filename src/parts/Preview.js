import React, { Component } from "react";
import "./Preview.scss";
import Disk from "./Disk.js";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.content.map((item, i) => {
          return (
            this.props.active === i && (
              <div key={i} className="ps5-preview">
                <div>
                  {item.logo && <img src={item.logo} alt="" />}

                  {item.title && <h2>{item.title}</h2>}

                  {item.text && <p>{item.text}</p>}

                  {item.btn && (
                    <div className="ps5-btn-group">
                      <a
                        href="#play"
                        className="ps5-btn ps5-btn-lg ps5-btn-primary"
                      >
                        {item.btn}
                      </a>

                      <a
                        href="#more"
                        className="ps5-btn ps5-btn-mono  ps5-btn-lg ps5-btn-primary"
                      >
                        <i className="material-icons">more_horiz</i>
                      </a>
                    </div>
                  )}
                </div>

                {item.tag && item.label && item.price && (
                  <Disk
                    url={item.url}
                    tag={item.tag}
                    label={item.label}
                    price={item.price}
                    cover={item.cover}
                  />
                )}
              </div>
            )
          );
        })}
      </>
    );
  }
}

export default Preview;
