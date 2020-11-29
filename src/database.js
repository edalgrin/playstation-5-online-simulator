import React from "react";

import coverStore from "./assets/cover-store.png";
import coverExplore from "./assets/cover-explore.png";

import logoAstro from "./assets/logo-astro.png";
import logoSackboy from "./assets/logo-sackboy.png";
import logoDestruction from "./assets/logo-destruction.png";

export const Apps = {
  store: {
    cover: coverStore,
    label: "PlayStation Store",
    bg:
      "https://psmedia.playstation.com/is/image/psmedia/black-friday-home-hero-desktop-tablet-01-13nov20en_1605279912558?$_CM001_HomeHero_Tablet_Landscape_And_Desktop$",
    title: "Welcome to the next generation",
    text:
      "From the freshnest releases to curated collection, there's something for everyone.",
  },
  explore: {
    cover: coverExplore,
    label: "Explore",
  },
};

export const Games = {
  astro: {
    cover: "",
    label: "Astro's Playroom",
    bg: "",
    tag: "Full Game",
    price: "Free",
    logo: logoAstro,
    text:
      "Discover the future of play with intergalactic platforming hero - ASTRO!",
    purchase: "https://google.com",
    youtube: "lu5VXrEqgco",
  },
  destruction: {
    cover: "",
    label: "Destruction Allstars",
    bg: "",
    tag: "Full Game",
    price: "Purchased",
    logo: logoDestruction,
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim officiis",
    purchase: "https://google.com",
    youtube: "nNO1k5NCDOk",
  },
  sackboy: {
    cover: "",
    label: "Sackboy: A Big Adventure",
    bg: "",
    tag: "Full Game",
    price: "€ 19,99",
    logo: logoSackboy,
    text:
      "Dolores hic deleniti ut natus tempora earum, provident debitis obcaecati et est",
    purchase: "https://google.com",
    youtube: "mUwI6e-em3o",
  },
  spider: {
    cover:
      "https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg?w=620",
    label: "Marvel's Spider-Man: Miles Morales",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/spiderman-miles-morales-screenshot-03-disclaimer-en-01oct20?$2400px$",
    tag: "Full Game",
    price: "$ 49,99",
    title: "Be greater. Be yourself.",
    text:
      "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    purchase:
      "https://www.playstation.com/en-us/games/marvels-spider-man-miles-morales/",
    youtube: "NTunTURbyUU",
  },
  cod: {
    cover:
      "https://image.api.playstation.com/pr/bam-art/111/804/d68d0b1b-a89b-4439-ab93-4811c738b45b.jpg?w=780&thumb=false",
    label: "Call of Duty: Black Ops Cold War",
    keywords: "cod",
    bg:
      "https://image.api.playstation.com/vulcan/img/rnd/202011/1200/QsgOeKSwiREmIfS63uLks5kT.png?w=1920",
    tag: "Full Game",
    price: "€ 49,99",
    // logo: logoSackboy,
    title: "Super",
    text:
      "Dolores hic deleniti ut natus tempora earum, provident debitis obcaecati et est",
    purchase: "https://store.playstation.com/it-it/concept/233407",
    youtube: "NTunTURbyUU",
  },
};

export const Images = {
  astro: [
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-07-disclaimer-en-06oct20?$native--t$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-15-disclaimer-en-06oct20?$1200px$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-05-disclaimer-en-06oct20?$2400px--t$",
      price: "Screenshot",
    },
  ],
  spider: [
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/spiderman-miles-morales-screenshot-01-disclaimer-en-01oct20?$1600px--t$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/spiderman-miles-morales-screenshot-04-disclaimer-en-01oct20?$1600px--t$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/spiderman-miles-morales-screenshot-02-disclaimer-en-01oct20?$1600px--t$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/spiderman-miles-morales-screenshot-03-disclaimer-en-01oct20?$1600px--t$",
      price: "Screenshot",
    },
  ],
};

export default Games;
