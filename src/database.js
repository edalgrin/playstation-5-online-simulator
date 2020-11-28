import React from "react";

import iconStore from "./assets/icon-store.png";
import iconExplore from "./assets/icon-explore.png";
import coverRatchet from "./assets/cover-ratchet.jpg";
import coverDestruction from "./assets/cover-destruction.jpg";
import coverSpider from "./assets/cover-spider.jpg";
import coverSackboy from "./assets/cover-sackboy.jpg";
import coverAstro from "./assets/cover-astro.jpg";
import bgRatchet from "./assets/bg-ratchet.jpg";
import bgDestruction from "./assets/bg-destruction.jpg";
import bgSpider from "./assets/bg-spider.jpg";
import bgSackboy from "./assets/bg-sackboy.jpg";
import bgAstro from "./assets/bg-astro.jpg";
import logoAstro from "./assets/logo-astro.png";
import logoSackboy from "./assets/logo-sackboy.png";
import logoDestruction from "./assets/logo-destruction.png";

export const Apps = {
  store: {
    url: "#app-store",
    cover: iconStore,
    label: "PlayStation Store",
    bg:
      "https://psmedia.playstation.com/is/image/psmedia/black-friday-home-hero-desktop-tablet-01-13nov20en_1605279912558?$_CM001_HomeHero_Tablet_Landscape_And_Desktop$",
    title: "Welcome to the next generation",
    text:
      "From the freshnest releases to curated collection, there's something for everyone.",
  },
  explore: {
    url: "#explore",
    cover: iconExplore,
    label: "Explore",
    bg: bgSpider,
  },
};

export const Games = {
  astro: {
    url: "#game-astro",
    cover: coverAstro,
    label: "Astro's Playroom",
    bg: bgAstro,
    tag: "Full Game",
    price: "Free",
    logo: logoAstro,
    text:
      "Discover the future of play with intergalactic platforming hero - ASTRO!",
    purchase: "https://google.com",
    modal: {
      type: "youtube",
      element: "lu5VXrEqgco",
    },
  },
  destruction: {
    url: "#game-destruction",
    cover: coverDestruction,
    label: "Destruction Allstars",
    bg: bgDestruction,
    tag: "Full Game",
    price: "Purchased",
    logo: logoDestruction,
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim officiis",
    purchase: "https://google.com",
    modal: {
      type: "youtube",
      element: "nNO1k5NCDOk",
    },
  },
  sackboy: {
    url: "#sackboy-a-big-adventure",
    cover: coverSackboy,
    label: "Sackboy: A Big Adventure",
    bg: bgSackboy,
    tag: "Full Game",
    price: "€ 19,99",
    logo: logoSackboy,
    text:
      "Dolores hic deleniti ut natus tempora earum, provident debitis obcaecati et est",
    purchase: "https://google.com",
    modal: {
      type: "youtube",
      element: "mUwI6e-em3o",
    },
  },
  spider: {
    url: "#spider-man-miles-morales",
    cover: coverSpider,
    label: "Spider-man: Miles Morales",
    bg: bgSpider,
    tag: "Full Game",
    price: "€ 49,99",
    // logo: logoSackboy,
    title: "Super",
    text:
      "Dolores hic deleniti ut natus tempora earum, provident debitis obcaecati et est",
    purchase: "https://google.com",
    modal: {
      type: "youtube",
      element: "NTunTURbyUU",
    },
  },
  cod: {
    url: "#cod",
    cover:
      "https://image.api.playstation.com/pr/bam-art/111/804/d68d0b1b-a89b-4439-ab93-4811c738b45b.jpg?w=780&thumb=false",
    label: "Call of Duty: Black Ops Cold War",
    bg: "https://image.api.playstation.com/vulcan/img/rnd/202011/1200/QsgOeKSwiREmIfS63uLks5kT.png?w=1920",
    tag: "Full Game",
    price: "€ 49,99",
    // logo: logoSackboy,
    title: "Super",
    text:
      "Dolores hic deleniti ut natus tempora earum, provident debitis obcaecati et est",
    purchase: "https://store.playstation.com/it-it/concept/233407",
    modal: {
      type: "youtube",
      element: "NTunTURbyUU",
    },
  },
};

export const Images = {
  astro1: {
    url: "#img-astro-1",
    cover:
      "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-07-disclaimer-en-06oct20?$native--t$",
    price: "Screenshot",
    modal: {
      type: "image",
      element:
        "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-15-disclaimer-en-06oct20?$1200px$",
    },
  },
  astro2: {
    url: "#img-astro-1",
    cover:
      "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-15-disclaimer-en-06oct20?$1200px$",
    price: "Screenshot",
    modal: {
      type: "image",
      element:
        "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-15-disclaimer-en-06oct20?$1200px$",
    },
  },
  astro3: {
    url: "#img-astro-3",
    cover:
      "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-05-disclaimer-en-06oct20?$2400px--t$",
    price: "Screenshot",
    modal: {
      type: "image",
      element:
        "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-15-disclaimer-en-06oct20?$1200px$",
    },
  },
};

export default Games;
