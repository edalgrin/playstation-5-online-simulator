import React, { Component } from "react";
import "./Top.scss";

class Top extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "--:--",
    };
  }

  componentDidMount() {
    this.tick();

    this.clock = setInterval(() => this.tick(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  tick() {
    let today = new Date();
    let minutes = today.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    this.setState({
      time: today.getHours() + ":" + minutes,
    });
  }

  render() {
    return (
      <div className="ps5-top">
        <ul>
          {this.props.topLeftMenu.map((item, i) => {
            return (
              <li key={i}>
                <a
                  href={item.url}
                  title={item.label}
                  className={
                    "ps5-top-btn" + (this.props.top === i ? " active" : "")
                  }
                  onClick={() => this.props.handleClick(i)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <ul>
          {this.props.topRightMenu.map((item, i) => {
            let clock = item.content === "clock";

            return (
              <li key={i}>
                <a
                  href={item.url}
                  title={item.label}
                  className={clock ? "ps5-top-btn active" : "ps5-btn ps5-btn-mono"}
                >
                  {clock ? this.state.time : item.content}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Top;
