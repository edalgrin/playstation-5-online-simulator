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

const apps = {
  store: {
    url: "#playstation-store",
    cover: iconStore,
    label: "PlayStation Store",
    bg: bgRatchet,
    title: "Welcome to the next generation",
    text:
      "From the freshnest releases to curated collection, there's something for everyone.",
    lists: [
      {
        title: "Must see",
        apps: [
          "astro",
          "destruction",
          "destruction",
          "destruction",
          "destruction",
          "destruction",
          "destruction",
        ],
      },
      {
        title: "Old",
        apps: ["sackboy", "destruction"],
      },
    ],
  },
  explore: {
    url: "#explore",
    cover: iconExplore,
    label: "Explore",
    bg: bgSpider,
  },
  astro: {
    url: "#astros-playroom",
    cover: coverAstro,
    label: "Astro's Playroom",
    bg: bgAstro,
    logo: logoAstro,
    trailer: "lu5VXrEqgco",
    text:
      "Discover the future of play with intergalactic platforming hero - ASTRO!",
    tag: "Full Game",
    price: "Free",
    lists: [
      {
        shrink: true,
        title: "Media",
        apps: [
          "astro",
          "astro",
          "astro",
          "astro",
          "astro",
        ],
      },
      {
        title: "Old",
        apps: ["sackboy", "destruction"],
      },
    ],
  },
  destruction: {
    url: "#destruction-allstars",
    cover: coverDestruction,
    label: "Destruction Allstars",
    bg: bgDestruction,
    logo: logoDestruction,
    trailer: "nNO1k5NCDOk",
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim officiis",
    tag: "Full Game",
    price: "Purchased",
  },
  sackboy: {
    url: "#sackboy-a-big-adventure",
    cover: coverSackboy,
    label: "Sackboy: A Big Adventure",
    bg: bgSackboy,
    logo: logoSackboy,
    trailer: "mUwI6e-em3o",
    text:
      "Dolores hic deleniti ut natus tempora earum, provident debitis obcaecati et est",
    tag: "Full Game",
    price: "€ 19,99",
  },
};

export default apps;
