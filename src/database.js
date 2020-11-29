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
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/horizon-forbidden-west-screenshot-01-disclaimer-02oct20?$1600px--t$",
    title: "The games you want",
    text:
      "Extraordinary exclusive games from PlayStation Studios",
  },
};

export const Games = {
  demon: {
    cover:
      "https://image.api.playstation.com/vulcan/img/rnd/202011/1717/lEQQ9AXMadW1BN8kruQbSy8S.jpg?w=620",
    label: "Demon's Souls",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/demons-souls-screenshot-04-disclaimer-en-30sept20?$1600px$",
    tag: "Full Game",
    price: "$ 69.99",
    logo:
      "https://gmedia.playstation.com/is/image/SIEPDC/demons-souls-sku-digital-deluxe-edition-logo-ps5-en-17aug20?$1600px--t$",
    text:
      "Entirely rebuilt from the ground up, this remake invites you to experience the unsettling story and ruthless combat of Demon’s Souls.",
    purchase: "https://www.playstation.com/en-us/games/demons-souls/",
    youtube: "2TMs2E6cms4",
  },
  astro: {
    cover:
      "https://image.api.playstation.com/vulcan/ap/rnd/202010/2012/T3h5aafdjR8k7GJAG82832De.png?w=440&thumb=false",
    label: "ASTRO's PLAYROOM",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-04-disclaimer-en-06oct20?$1600px--t$",
    tag: "Full Game",
    price: "Free",
    logo: logoAstro,
    text:
      "ASTRO and his crew take you on a magical exploration of the PS5™ console.",
    purchase: "https://www.playstation.com/en-us/games/astros-playroom/",
    youtube: "33zqCAJ-qrE",
  },
  assassin: {
    cover:
      "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8XGEPtD1xoasK0FYkYNcCn1z.png?w=440&thumb=false",
    label: "Assassin's Creed Valhalla",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-valhalla-screen-06-ps4-en-17jul20?$1600px$",
    tag: "Full Game",
    price: "$ 59.99",
    title: "Lead epic raids",
    text:
      "Raid your enemies, grow your settlement and build your political power in the next chapter of the Assassin’s Creed series.",
    purchase:
      "https://www.playstation.com/en-us/games/assassins-creed-valhalla/",
    youtube: "nNO1k5NCDOk",
  },
  sackboy: {
    cover:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/1614/TJiBEQMJ9qa93lWBu4sKScY9.png?w=440&thumb=false",
    label: "Sackboy: A Big Adventure",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps5-sackboy-video-thumb-block-06-en-110620?$1600px$",
    tag: "Full Game",
    price: "$ 59,99",
    title: "Sackboy: A Big Adventure",
    text: "Take Sackboy on an epic 3D platforming adventure with your friends.",
    purchase:
      "https://www.playstation.com/en-us/games/sackboy-a-big-adventure/",
    youtube: "ZOk3fj5ujNM",
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
      "https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-black-ops-cold-war-ultimate-edition-pack-ps4-25aug20$en?$1600px$",
    label: "Call of Duty: Black Ops Cold War",
    keywords: "cod",
    bg:
      "https://image.api.playstation.com/vulcan/img/rnd/202011/1200/QsgOeKSwiREmIfS63uLks5kT.png?w=1920",
    tag: "Full Game",
    price: "$ 69,99",
    title: "Call of Duty®: Black Ops Cold War",
    text:
      "The iconic Black Ops series is back with Call of Duty: Black Ops Cold War - the direct sequel to the fan-favorite Call of Duty: Black Ops.",
    purchase:
      "https://www.playstation.com/en-us/games/call-of-duty-black-ops-cold-war/",
    youtube: "hqLbXmcx7SI",
  },
  god: {
    cover:
      "https://image.api.playstation.com/vulcan/ap/rnd/202008/1219/RI4EFJiSo8JZF8EZNPYTDwo4.png?w=440&thumb=false",
    label: "Godfall",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/godfall-screen-05-ps5-en-01oct20?$1600px--t$",
    tag: "Full Game",
    price: "$ 69,99",
    title: "Godfall",
    text:
      "Hunt for loot and don legendary armor sets in a new looter-slasher for PlayStation 5.",
    purchase:
      "https://www.playstation.com/en-us/games/call-of-duty-black-ops-cold-war/",
    youtube: "hqLbXmcx7SI",
  },
};

export const Images = {
  astro: [
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-13-disclaimer-en-06oct20?$1600px$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-01-disclaimer-en-06oct20?$1600px--t$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-07-disclaimer-en-06oct20?$1600px--t$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-02-disclaimer-en-06oct20?$1600px--t$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/astros-playroom-screenshot-07-ps5-en-03aug20?$1600px$",
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
    {
      cover: "https://i.ytimg.com/vi/NTunTURbyUU/maxresdefault.jpg",
      price: "Screenshot",
    },
  ],
  demon: [
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/demons-souls-screenshot-05-disclaimer-en-30sept20?$1600px$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/demons-souls-screenshot-03-disclaimer-en-30sept20?$1600px$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/demons-souls-shrine-of-storms-screenshot-ps5-en-15oct20?$1600px$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/demons-souls-latria-screenshot-ps5-en-15oct20?$1600px$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/demons-souls-nexus-screenshot-ps5-en-15oct20?$1600px$",
      price: "Screenshot",
    },
  ],
  sackboy: [
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/sackboy-a-big-adventure-screenshot-05-disclaimer-en-01oct20?$1600px$",
      price: "",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/sackboy-a-big-adventure-screenshot-06-disclaimer-en-01oct20?$1600px$",
      price: "",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/sackboy-a-big-adventure-screenshot-03-disclaimer-en-01oct20?$1600px$",
      price: "",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/sackboy-a-big-adventure-screenshot-02-disclaimer-en-01oct20?$1600px$",
      price: "",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/ps5-sackboy-video-thumb-block-06-en-110620?$1600px$",
      price: "",
    },
  ],
  assassin: [
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-valhalla-screen-05-ps4-en-17jul20?$1600px$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-valhalla-male-screen-05-ps4-en-29apr20?$1600px$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-valhalla-screen-06-ps4-en-17jul20?$1600px$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-valhalla-screenshot-04-en-06jul20?$1600px$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-valhalla-screenshot-03-en-06jul20?$1600px$",
      price: "Screenshot",
    },
  ],
  god: [
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/godfall-screen-04-ps5-en-01oct20?$1600px--t$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/godfall-screen-03-ps5-en-01oct20?$1600px--t$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/godfall-screen-02-ps5-en-01oct20?$1600px--t$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/godfall-screen-02-ps5-en-01oct20?$1600px--t$",
      price: "Screenshot",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/godfall-screen-01-ps5-en-01oct20?$1600px--t$",
      price: "Screenshot",
    },
  ],
};

export default Games;
