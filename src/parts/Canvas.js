import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef();
  const rafRef = useRef();
  let canvas;
  let ctx;
  let x;
  let y;
  let particles = [];

  let config = {
    particleNumber: 1,
    maxParticleSize: 5,
    maxSpeed: 1,
    colorVariation: 10,
    opacity: 1,
  };

  const colorGradientLeft = "#57484c";
  const colorGradientRight = "#10101c";
  const colorParticle = [
    { r: 254, g: 255, b: 172 },
    { r: 55, g: 38, b: 39 },
  ];

  function bgDraw() {
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, colorGradientLeft);
    gradient.addColorStop(1, colorGradientRight);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function particleColor(color, returnString) {
    let r, g, b, a, variation;
    r = Math.round(
      Math.random() * config.colorVariation -
        config.colorVariation / 2 +
        color.r
    );
    g = Math.round(
      Math.random() * config.colorVariation -
        config.colorVariation / 2 +
        color.g
    );
    b = Math.round(
      Math.random() * config.colorVariation -
        config.colorVariation / 2 +
        color.b
    );
    a = Math.random() + 0.5;
    if (returnString) {
      return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    } else {
      return { r, g, b, a };
    }
  }

  function particleDefine(x, y) {
    this.x = x || Math.round(Math.random() * canvas.width);
    this.y = y || Math.round(Math.random() * canvas.height);
    this.r = Math.ceil(Math.random() * config.maxParticleSize);
    this.c = particleColor(
      colorParticle[Math.floor(Math.random() * colorParticle.length)],
      true
    );
    this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
    this.d = Math.round(Math.random() * 360);
  }

  function particleUpdate(p) {
    console.log("particleUpdate");
    var a = 180 - (p.d + 90);
    p.d > 0 && p.d < 180
      ? (p.x += (p.s * Math.sin(p.d)) / Math.sin(p.s))
      : (p.x -= (p.s * Math.sin(p.d)) / Math.sin(p.s));
    p.d > 90 && p.d < 270
      ? (p.y += (p.s * Math.sin(a)) / Math.sin(p.s))
      : (p.y -= (p.s * Math.sin(a)) / Math.sin(p.s));
    return p;
  }

  function particleCleanAll() {
    particles = particles.filter((p) => {
      return (
        p.x > -100 &&
        p.x < canvas.width + 100 &&
        p.y > -100 &&
        p.y < canvas.height + 100
      );
    });
  }

  function particleDraw(x, y, r, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
  }

  function particleAdd(n) {
    for (let i = 0; i <= n; i++) {
      particles.push(new particleDefine(x, y));
    }
  }

  function particleAnimate() {
    particleCleanAll();
    if (particles.length < 100) {
      particleAdd(1);
    }
    bgDraw();
    particles.map((p) => {
      particleUpdate(p);
      particleDraw(p.x, p.y, p.r, p.c);
    });
    rafRef.current = requestAnimationFrame(particleAnimate);
  }

  useEffect(() => {
    canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext("2d");

    rafRef.current = requestAnimationFrame(particleAnimate);

    return () => {
      if (rafRef.current && props.animationStopped) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [props.animationStopped]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
