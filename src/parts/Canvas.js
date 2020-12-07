import React, { Component } from "react";

const classNames = require("classnames");

const defaultConfig = {
  particles: [],
  cpanel: true,
  bgColorLeft: "#57484c",
  bgColorRight: "#10101c",
  particleColors: ["#FEFFAC", "#372627", "#FFFFFF"],
  particleSpeed: 1,
  particleMax: 200,
  particleDelay: 50,
  particleSize: 7,
};

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = defaultConfig;
    this.updateAnimationState = this.updateAnimationState.bind(this);
    this.timeLast = Date.now();

    this.colorVariation = 0;
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  particleColor(color) {
    function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    }

    const rgbColor = hexToRgb(color);

    return {
      r: Math.round(
        Math.random() * this.colorVariation -
          this.colorVariation / 2 +
          rgbColor.r
      ),
      g: Math.round(
        Math.random() * this.colorVariation -
          this.colorVariation / 2 +
          rgbColor.g
      ),
      b: Math.round(
        Math.random() * this.colorVariation -
          this.colorVariation / 2 +
          rgbColor.b
      ),
      a: 0,
      m: 1,
      s: Math.random(),
    };
  }

  updateAnimationState() {
    let particlesCurrent = this.state.particles;

    if (particlesCurrent.length > 0) {
      particlesCurrent = particlesCurrent.filter((p) => {
        return (
          p.x > -10 &&
          p.x < window.innerWidth + 10 &&
          p.y > -10 &&
          p.y < window.innerHeight + 10
        );
      });
    }

    if (particlesCurrent.length < this.state.particleMax) {
      const timeCurrent = Date.now();
      if (timeCurrent - this.timeLast > this.state.particleDelay) {
        particlesCurrent.push({
          x: Math.round(Math.random() * window.innerWidth),
          y: Math.round(
            (Math.random() * window.innerHeight) / 2 + window.innerHeight / 4
          ),
          r: Math.ceil(Math.random() * this.state.particleSize),
          c: this.particleColor(
            this.state.particleColors[
              Math.floor(Math.random() * this.state.particleColors.length)
            ]
          ),
          s: Math.random() * 2,
          d: Math.round(Math.random() * 360),
        });
        this.timeLast = timeCurrent;
      }
    }

    if (particlesCurrent.length > 0) {
      particlesCurrent.map((p) => {
        const n = 180 - (p.d + 90);
        if (p.c.a > 0.9) {
          p.c.m = -1;
        } else if (p.c.a < 0.1) {
          p.c.m = 1;
        }
        p.c.a += 0.05 * p.c.m * p.c.s;

        if (p.d > 0 && p.d < 180) {
          p.x +=
            (Math.sin(p.d) / Math.sin(1)) *
            (this.state.particleSpeed * p.s) *
            0.1;
        } else {
          p.x -=
            (Math.sin(p.d) / Math.sin(1)) *
            (this.state.particleSpeed * p.s) *
            0.1;
        }
        if (p.d > 90 && p.d < 270) {
          p.y +=
            (Math.sin(n) / Math.sin(1)) *
            (this.state.particleSpeed * p.s) *
            0.1;
        } else {
          p.y -=
            (Math.sin(n) / Math.sin(1)) *
            (this.state.particleSpeed * p.s) *
            0.1;
        }
        return p;
      });
    }

    this.setState({ particles: particlesCurrent });
    this.rAF = requestAnimationFrame(this.updateAnimationState);
    // console.log("update");
  }

  handleChange(i, value) {
    let particleColors = [...this.state.particleColors];
    particleColors[i] = value;
    this.setState({ particleColors });
  }

  handleAdd() {
    let particleColors = [...this.state.particleColors];
    particleColors.push("#000000");
    this.setState({ particleColors });
  }

  handleRemove(i) {
    let particleColors = [...this.state.particleColors];
    if (particleColors.length > 1) {
      particleColors.splice(i, 1);
      this.setState({ particleColors });
    }
  }

  handleDelete() {
    this.setState({ particles: [] });
  }

  handleReset() {
    this.setState(defaultConfig);
  }

  render() {
    return (
      <>
        <CanvasItem state={this.state} />

        {this.props.settings && (
          <>
            <div
              className={classNames("ps5-cpanel", {
                active: this.state.cpanel,
              })}
            >
              <h3>Background Colors</h3>

              <div>
                <label>
                  <span>Left</span>

                  <input
                    type="color"
                    value={this.state.bgColorLeft}
                    onChange={(e) =>
                      this.setState({ bgColorLeft: e.target.value })
                    }
                  />
                </label>

                <label>
                  <span>Right</span>

                  <input
                    type="color"
                    value={this.state.bgColorRight}
                    onChange={(e) =>
                      this.setState({ bgColorRight: e.target.value })
                    }
                  />
                </label>
              </div>

              <h3>Particle Colors</h3>

              <div>
                {this.state.particleColors.map((color, i) => {
                  return (
                    <label key={i}>
                      <input
                        type="color"
                        value={color}
                        onChange={(e) => this.handleChange(i, e.target.value)}
                      />
                      <button
                        className="ps5-btn ps5-btn-mono ps5-btn-primary"
                        // disabled={this.state.particleColors.length < 2}
                        onClick={() => this.handleRemove(i)}
                      >
                        <i className="material-icons">delete</i>
                      </button>
                    </label>
                  );
                })}

                <button
                  className="ps5-btn ps5-btn-primary"
                  onClick={() => this.handleAdd()}
                >
                  Add Color
                </button>

                <button
                  className="ps5-btn ps5-btn-primary"
                  onClick={() => this.handleDelete()}
                >
                  Remove Current Particles
                </button>
              </div>

              <h3>Particle Config</h3>

              <div>
                <label>
                  <span>Speed</span>

                  <input
                    className="ps5-btn ps5-btn-primary ps5-btn-monos"
                    type="number"
                    value={this.state.particleSpeed}
                    onChange={(e) =>
                      this.setState({ particleSpeed: e.target.value })
                    }
                  />
                </label>

                <label>
                  <span>Delay</span>

                  <input
                    className="ps5-btn ps5-btn-primary ps5-btn-monos"
                    type="number"
                    value={this.state.particleDelay}
                    onChange={(e) =>
                      this.setState({ particleDelay: e.target.value })
                    }
                  />
                </label>

                <label>
                  <span>Number</span>

                  <input
                    className="ps5-btn ps5-btn-primary"
                    type="number"
                    value={this.state.particleMax}
                    onChange={(e) =>
                      this.setState({ particleMax: e.target.value })
                    }
                  />
                </label>

                <label>
                  <span>Size</span>

                  <input
                    className="ps5-btn ps5-btn-primary"
                    type="number"
                    value={this.state.particleSize}
                    onChange={(e) =>
                      this.setState({ particleSize: e.target.value })
                    }
                  />
                </label>
              </div>

              <div>

                <button
                  className="ps5-btn ps5-btn-primary"
                  onClick={() => this.handleReset()}
                >
                  Reset Settings
                </button>
              </div>
            </div>

            <a
              href="#"
              className="ps5-cpanel-btn ps5-btn ps5-btn-primary ps5-btn-mono"
              onClick={() => this.setState({ cpanel: !this.state.cpanel })}
            >
              <i className="material-icons">
                {this.state.cpanel ? "visibility_off" : "visibility"}
              </i>
            </a>
          </>
        )}
      </>
    );
  }
}

class CanvasItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    const state = this.props.state;
    const particles = state.particles;
    const colorGradientLeft = state.bgColorLeft;
    const colorGradientRight = state.bgColorRight;

    const canvas = this.canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    ctx.save();

    let gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, colorGradientLeft);
    gradient.addColorStop(1, colorGradientRight);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    particles.forEach((p) => {
      ctx.beginPath();
      ctx.fillStyle =
        "rgba(" + p.c.r + "," + p.c.g + "," + p.c.b + "," + p.c.a + ")";
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.closePath();
    });

    ctx.restore();
  }

  render() {
    return <canvas ref={this.canvasRef}></canvas>;
  }
}

export default Canvas;
