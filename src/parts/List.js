import React, { Component } from "react";
import Disk from "./Disk.js";
import "./List.scss";
const classNames = require("classnames");

class List extends Component {
  render() {
    const list = this.props.list;

    return list.map((item, i) => {
      const gallery = item.type === "gallery";

      return (
        <div className="ps5-lists" key={i}>
          <h3>{item.title}</h3>

          <div
            className={classNames("ps5-list", {
              "ps5-list-shrink": gallery,
            })}
          >
            {item.items.map((item, i) => {
              return (
                <Disk
                  key={i}
                  item={item}
                  hover="min"
                  href={!gallery ? item.purchase : false}
                  onClick={() =>
                    gallery ? this.props.onClick(item.modal) : {}
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
