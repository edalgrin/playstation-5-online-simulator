import React, { Component } from "react";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      particles: [],
    };
    this.updateAnimationState = this.updateAnimationState.bind(this);
    this.timeLast = Date.now();

    this.particleMaxNumber = 200;
    this.colorVariation = 10;
    this.colorParticle = [
      { r: 254, g: 255, b: 172 },
      { r: 55, g: 38, b: 39 },
      { r: 255, g: 255, b: 255 },
    ];
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  particleColor(color) {
    return {
      r: Math.round(
        Math.random() * this.colorVariation - this.colorVariation / 2 + color.r
      ),
      g: Math.round(
        Math.random() * this.colorVariation - this.colorVariation / 2 + color.g
      ),
      b: Math.round(
        Math.random() * this.colorVariation - this.colorVariation / 2 + color.b
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

    if (particlesCurrent.length < this.particleMaxNumber) {
      const timeCurrent = Date.now();
      if (timeCurrent - this.timeLast > 50) {
        particlesCurrent.push({
          x: Math.round(Math.random() * window.innerWidth),
          y: Math.round(
            (Math.random() * window.innerHeight) / 2 + window.innerHeight / 4
          ),
          r: Math.ceil(Math.random() * 7),
          c: this.particleColor(
            this.colorParticle[
              Math.floor(Math.random() * this.colorParticle.length)
            ]
          ),
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
          p.x += (Math.sin(p.d) / Math.sin(1)) * 0.1;
        } else {
          p.x -= (Math.sin(p.d) / Math.sin(1)) * 0.1;
        }
        if (p.d > 90 && p.d < 270) {
          p.y += (Math.sin(n) / Math.sin(1)) * 0.1;
        } else {
          p.y -= (Math.sin(n) / Math.sin(1)) * 0.1;
        }
        return p;
      });
    }

    this.setState({ particles: particlesCurrent });
    this.rAF = requestAnimationFrame(this.updateAnimationState);
    // console.log("update");
  }

  render() {
    return <CanvasItem particles={this.state.particles} />;
  }
}

class CanvasItem extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    const { particles } = this.props;

    const colorGradientLeft = "#57484c";
    const colorGradientRight = "#10101c";

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

    particles.map((p) => {
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
