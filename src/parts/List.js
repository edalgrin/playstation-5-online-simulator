import React, { Component } from "react";
import Disk from "./Disk.js";
import "./List.scss";
const classNames = require("classnames");

class List extends Component {
  render() {
    const list = this.props.list;

    return list.map((item, i) => {
      const gallery = item.type === "gallery";
      const activities = item.type === "activities";

      return (
        <div className="ps5-lists" key={i}>
          {item.title && <h3>{item.title}</h3>}

          <div
            className={classNames("ps5-list", {
              "ps5-list-shrink": gallery,
              "ps5-list-extend": activities,
            })}
          >
            {item.items.map((item, i) => {
              return (
                <Disk
                  key={i}
                  item={item}
                  className={item.tag === "Locked" ? "ps5-disk-locked" : ""}
                  hover={activities ? "" : "min"}
                  onClick={() =>
                    gallery
                      ? this.props.onClickModal({
                          type: "image",
                          element: item.cover,
                        })
                      : activities
                      ? {}
                      : this.props.onClickMenu({
                          apps: [item],
                          top: undefined,
                          appSelected: 0,
                        })
                  }
                />
              );
            })}
          </div>
        </div>
      );
    });
  }
}

export default List;
