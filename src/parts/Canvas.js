import React, { Component, useEffect } from "react";

class Canvas extends Component {
  constructor(props) {
    super(props);
    const canvasRef = React.createRef();
  }

  componentDidMount() {
    let animation;
    let creation;

    // useEffect(() => {
    //   const canvas = canvasRef.current;
    //   const ctx = canvas.getContext("2d");

    //   // Set Canvas to be window size
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;

    //   // Configuration, Play with these
    //   var config = {
    //     particleNumber: 1,
    //     maxParticleSize: 5,
    //     maxSpeed: 1,
    //     colorVariation: 10,
    //     opacity: 1,
    //   };

    //   // Colors
    //   var colorPalette = {
    //     bg1: "#57484c",
    //     bg2: "#10101c",
    //     matter: [
    //       { r: 254, g: 255, b: 172 },
    //       { r: 55, g: 38, b: 39 },
    //     ],
    //   };

    //   // Some Variables hanging out
    //   var particles = [],
    //     centerX = canvas.width / 2,
    //     centerY = canvas.height / 2,
    //     drawBg,
    //     // Draws the background for the canvas, because space
    //     drawBg = function (ctx) {
    //       var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    //       grd.addColorStop(0, colorPalette.bg1);
    //       grd.addColorStop(1, colorPalette.bg2);
    //       ctx.fillStyle = grd;
    //       // ctx.fillStyle =
    //       //   "rgba(" + color.r + "," + color.g + "," + color.b + ", 1)";
    //       ctx.fillRect(0, 0, canvas.width, canvas.height);
    //     };

    //   // Particle Constructor
    //   var Particle = function (x, y) {
    //     // X Coordinate
    //     this.x = x || Math.round(Math.random() * canvas.width);
    //     // Y Coordinate
    //     this.y = y || Math.round(Math.random() * canvas.height);
    //     // Radius of the space dust
    //     this.r = Math.ceil(Math.random() * config.maxParticleSize);
    //     // Color of the rock, given some randomness
    //     this.c = colorVariation(
    //       colorPalette.matter[
    //         Math.floor(Math.random() * colorPalette.matter.length)
    //       ],
    //       true
    //     );
    //     // Speed of which the rock travels
    //     this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
    //     //   this.s = 0.0001;
    //     // Direction the Rock flies
    //     this.d = Math.round(Math.random() * 360);
    //     // this.d = 0;
    //   };

    //   // Provides some nice color variation
    //   // Accepts an rgba object
    //   // returns a modified rgba object or a rgba string if true is passed in for argument 2
    //   var colorVariation = function (color, returnString) {
    //     var r, g, b, a, variation;
    //     r = Math.round(
    //       Math.random() * config.colorVariation -
    //         config.colorVariation / 2 +
    //         color.r
    //     );
    //     g = Math.round(
    //       Math.random() * config.colorVariation -
    //         config.colorVariation / 2 +
    //         color.g
    //     );
    //     b = Math.round(
    //       Math.random() * config.colorVariation -
    //         config.colorVariation / 2 +
    //         color.b
    //     );
    //     a = config.opacity === 1 ? config.opacity : Math.random() + 0.5;
    //     if (returnString) {
    //       return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    //     } else {
    //       return { r, g, b, a };
    //     }
    //   };

    //   // Used to find the rocks next point in space, accounting for speed and direction
    //   var updateParticleModel = function (p) {
    //     var a = 180 - (p.d + 90); // find the 3rd angle
    //     p.d > 0 && p.d < 180
    //       ? (p.x += (p.s * Math.sin(p.d)) / Math.sin(p.s))
    //       : (p.x -= (p.s * Math.sin(p.d)) / Math.sin(p.s));
    //     p.d > 90 && p.d < 270
    //       ? (p.y += (p.s * Math.sin(a)) / Math.sin(p.s))
    //       : (p.y -= (p.s * Math.sin(a)) / Math.sin(p.s));
    //     // var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    //     // p.y = p.y + .1 * plusOrMinus;
    //     // p.c = "rgba(255,255,255,.5)";
    //     // console.log(p);
    //     return p;
    //   };

    //   // Just the function that physically draws the particles
    //   // Physically? sure why not, physically.
    //   var drawParticle = function (x, y, r, c) {
    //     ctx.beginPath();
    //     ctx.fillStyle = c;
    //     // console.log(c);
    //     //   ctx.opacity = config.opacity;
    //     ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    //     ctx.fill();
    //     ctx.closePath();
    //   };

    //   // Remove particles that aren't on the canvas
    //   var cleanUpArray = function () {
    //     particles = particles.filter((p) => {
    //       return p.x > -100 && p.y > -100;
    //     });
    //   };

    //   var initParticles = function (numParticles, x, y) {
    //     for (let i = 0; i < numParticles; i++) {
    //       particles.push(new Particle(x, y));
    //     }
    //     particles.forEach((p) => {
    //       drawParticle(p.x, p.y, p.r, p.c);
    //     });
    //   };

    //   // That thing
    //   window.requestAnimFrame = (function () {
    //     return (
    //       window.requestAnimationFrame ||
    //       window.webkitRequestAnimationFrame ||
    //       window.mozRequestAnimationFrame ||
    //       function (callback) {
    //         window.setTimeout(callback, 1000 / 60);
    //       }
    //     );
    //   })();

    //   // Our Frame function
    //   var frame = function () {
    //     // Draw background first
    //     drawBg(ctx);
    //     // Update Particle models to new position
    //     particles.map((p) => {
    //       return updateParticleModel(p);
    //     });
    //     // Draw em'
    //     particles.forEach((p) => {
    //       drawParticle(p.x, p.y, p.r, p.c);
    //     });
    //     // Play the same song? Ok!
    //   };

    //   // Click listener
    //   /*
    //    */
    //   // document
    //   //   .getElementById("start")
    //   //   .addEventListener("click", function (event) {
    //   //     var x = event.clientX,
    //   //       y = event.clientY;
    //   //     // cleanUpArray();
    //   //     //   initParticles(100, x, y);

    //   //     let i = 10;

    //   //     clearInterval(cycle);

    //   //     let cycleend = setInterval(function () {
    //   //       initParticles(i, x, y);
    //   //       if (i < 200) {
    //   //         i = i + 10;
    //   //         config.particleNumber = i;
    //   //         config.maxParticleSize = i / 10;
    //   //         config.maxSpeed = i / 20;
    //   //         config.opacity = 0;
    //   //         // config.colorVariation = 50 - i / 4;
    //   //       } else {
    //   //         clearInterval(cycleend);
    //   //         // colorPalette.matter = [{ r: 255, g: 255, b: 255 }];
    //   //         // config.maxParticleSize = 1000;
    //   //         // initParticles(1, x, y);
    //   //         // drawParticle(x, y, 100, 0);
    //   //         // setTimeout(function () {
    //   //         // }, 10);
    //   //       }

    //   //       cleanUpArray();
    //   //     }, 100);
    //   //   });

    //   // First Frame
    //   // let animation;
    //   // let creation;

    //   // animation = setInterval(function () {
    //   //   window.requestAnimFrame(frame);
    //   // }, 16);
    //   // creation = setInterval(function () {
    //   //   cleanUpArray();
    //   //   if (particles.length < 10) {
    //   //     initParticles(config.particleNumber);
    //   //   } else {
    //   //     // clearInterval(animation);
    //   //   }
    //   // }, 200);

    //   // if (props.canvas) {
    //   //   clearInterval(animation);
    //   //   clearInterval(creation);
    //   //   particles = [];
    //   //   setTimeout(function () {}, 1000);
    //   // }
    //   // console.log(props.canvas, animation);

    //   // props.onReady(window.requestAnimFrame(frame));

    //   // if (props.overlay) {
    //   //   setTimeout(function () {
    //   //     clearInterval(cycle);
    //   //   }, 1000);
    //   //   //   initParticles(1000);
    //   // }
    // }, [this.props.canvas]);


  }

  componentWillUnmount() {
    console.log("ok");
  }

  render() {
    return <canvas ref={this.canvasRef} {...this.props} />;
  }
}

export default Canvas;
