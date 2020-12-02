import coverStore from "./assets/cover-store.png";
import coverExplore from "./assets/cover-explore.png";
import coverNetflix from "./assets/cover-netflix.png";
import coverSpotify from "./assets/cover-spotify.png";
import coverDisney from "./assets/cover-disney.png";

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
    text: "Extraordinary exclusive games from PlayStation Studios",
  },
  netflix: {
    cover: coverNetflix,
    label: "Netflix",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/netflix-page-banner-desktop-02-en-10nov20?$1600px--t$",
    title: "Netflix",
    text:
      "Watch movies, TV shows and more with Netflix on PS5, streaming the latest original programming.",
    price: "Discover",
    purchase: "https://www.playstation.com/en-us/ps5/ps5-entertainment/",
  },
  spotify: {
    cover: coverSpotify,
    label: "Spotify",
    bg:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80",
    title: "Spotify",
    text:
      "Check out Spotify's audio destination curated specifically for gamers.",
    price: "Discover",
    purchase: "https://www.playstation.com/en-us/ps5/ps5-entertainment/",
  },
  disney: {
    cover: coverDisney,
    label: "Disney +",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/disney-plus-the-mandalorian-page-banner-desktop-01-en-09nov20?$1600px--t$",
    title: "Disney+",
    text:
      "Stream entertainment from Disney, Pixar, Marvel, Star Wars and National Geographic. Epic movies, series, and Originals from some of the world's best storytellers are waiting.",
    price: "Discover",
    purchase: "https://www.playstation.com/en-us/ps5/ps5-entertainment/",
  },
};

export const Games = {
  demon: {
    cover:
      "https://image.api.playstation.com/vulcan/img/rnd/202011/1717/lEQQ9AXMadW1BN8kruQbSy8S.jpg?w=620",
    label: "Demon's Souls",
    keywords: "dark, miyazaki",
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
    youtube: "gnmuEkn30ZE",
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
    purchase: "https://www.playstation.com/en-us/games/godfall/",
    youtube: "Y9M_beKzmjY",
  },
  cyberpunk: {
    cover:
      "https://image.api.playstation.com/vulcan/ap/rnd/202008/0416/6Bo40lnWU0BhgrOUm7Cb6by3.png?w=440&thumb=false",
    label: "Cyberpunk 2077",
    keywords: "ciber",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/cyberpunk-2077-screen-03-ps4-en-06jun19?$1600px--t$",
    tag: "Full Game",
    price: "Pre-order Now!",
    title: "Cyberpunk 2077",
    text:
      "Become a mercenary in the living, breathing metropolis of Night City",
    purchase: "https://www.playstation.com/en-us/games/cyberpunk-2077/",
    youtube: "rViiAA3qs50",
  },
  horizon: {
    cover: "https://i.ytimg.com/vi/Lq594XmpPBg/maxresdefault.jpg",
    label: "Horizon Forbidden West",
    keywords: "zero, dawn",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/horizon-forbidden-west-screenshot-08-disclaimer-02oct20?$1600px--t$",
    tag: "Full Game",
    price: "Pre-order Now!",
    title: "Horizon Forbidden West",
    text:
      "Join Aloy as she braves the Forbidden West – a majestic but dangerous frontier that conceals mysterious new threats.",
    purchase: "https://www.playstation.com/en-us/games/horizon-forbidden-west/",
    youtube: "Lq594XmpPBg",
  },
  ratchet: {
    cover:
      "https://gmedia.playstation.com/is/image/SIEPDC/ratchet-and-clank-rift-apart-screenshot-01-ps5-en-15jun20?$1600px--t$",
    label: "Ratchet & Clank: Rift Apart",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/ratchet-and-clank-rift-apart-screenshot-02-ps5-en-15jun20?$1600px--t$",
    tag: "Full Game",
    price: "Pre-order Now!",
    title: "Ratchet & Clank: Rift Apart",
    text: "Blast your way through an interdimensional adventure.",
    purchase:
      "https://www.playstation.com/en-us/games/ratchet-and-clank-rift-apart/",
    youtube: "ai3o0XtrnM8",
  },
  gt: {
    cover:
      "https://gmedia.playstation.com/is/image/SIEPDC/gran-turismo-7-screenshot-08-disclaimer-en-01oct20?$1600px$",
    label: "Gran Turismo™ 7",
    keywords: "gt",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/gran-turismo-7-screenshot-05-disclaimer-en-01oct20?$1600px$",
    tag: "Full Game",
    price: "Pre-order Now!",
    title: "Gran Turismo™ 7",
    text:
      "Gran Turismo 7 builds on 22 years of experience to bring you the best features from the history of the franchise.",
    purchase: "https://www.playstation.com/en-us/games/gran-turismo-7/",
    youtube: "oz-O74SmTSQ",
  },
  fifa: {
    cover:
      "https://gmedia.playstation.com/is/image/SIEPDC/fifa-21-ps4-screen-05-en-23jul20?$1600px$",
    label: "EA SPORTS™ FIFA 21",
    keywords: "pes, pro, evolution, soccer, football",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/fifa-21-ps4-screen-03-en-23jul20?$1600px$",
    tag: "Full Game",
    price: "$ 59.99",
    title: "EA SPORTS™ FIFA 21",
    text:
      "FIFA returns with new ways to play and team up with friends on the street and in the stadium.",
    purchase: "https://www.playstation.com/en-us/games/ea-sports-fifa-21/",
    youtube: "wppi4Kjzubk",
  },
  ff: {
    cover:
      "https://gmedia.playstation.com/is/image/SIEPDC/final-fantasy-xvi-logo-image-block-01-ps5-en-05oct20?$1600px--t$",
    label: "Final Fantasy XVI",
    keywords: "ff, 16",
    bg:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/0922/QIa2mMQzgdowM5XubKO69kEu.jpg?w=1920",
    tag: "Full Game",
    price: "Pre-order Now!",
    title: "Final Fantasy XVI",
    text: "The legacy of the crystals has shaped our history for long enough",
    purchase: "https://www.playstation.com/en-us/games/",
    youtube: "yr6PtdY0i7M",
  },
  watch: {
    cover:
      "https://image.api.playstation.com/vulcan/ap/rnd/202009/2223/dJs37eVfzwgRbtRQxHUyyWu4.jpg?w=620",
    label: "Watch Dogs Legion",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/watch-dogs-legion-screen-02-ps4-ps5-en-21jul20?$1600px$",
    tag: "Full Game",
    price: "$ 59.99",
    title: "Watch Dogs Legion",
    text: "Welcome to the Resistance",
    purchase: "https://www.playstation.com/en-us/games/watch-dogs-legion/",
    youtube: "YkjBbW5A-io",
  },
  fortnite: {
    cover: "https://i.ytimg.com/vi/dmi_fzJuFhU/maxresdefault.jpg",
    label: "Fortnite",
    bg:
      "https://gmedia.playstation.com/is/image/SIEPDC/fortnite-chapter-2-season-4-screen-09-ps4-en-04sep20?$1600px$",
    tag: "Full Game",
    price: "Free",
    logo:
      "https://gmedia.playstation.com/is/image/SIEPDC/fortnite-throwback-axe-logo-01-ps5-en-02nov20?$1600px--t$",
    text: "Dive into a modern gaming phenomenon",
    purchase: "https://www.playstation.com/en-us/games/fortnite/",
    youtube: "H-sFdMgJ93M",
  },
  death: {
    cover:
      "https://image.api.playstation.com/vulcan/img/rnd/202009/2921/40aD0BqRUHyHdXdC6nwtwON5.png?w=440&thumb=false",
    label: "DEATH STRANDING",
    keywords: "hideo, kojima",
    bg:
      "https://image.api.playstation.com/vulcan/img/rnd/202009/2921/8lUGKoEzuAQE7pWDsHIDqLd5.jpg?w=620",
    tag: "Full Game",
    price: "$ 19.99",
    title: "DEATH STRANDING",
    text:
      "From legendary game creator Hideo Kojima comes an all-new, genre-defying experience for the PlayStation®4 system",
    purchase:
      "https://store.playstation.com/en-us/product/UP9000-CUSA11260_00-DEATHSTRAND00001",
    youtube: "tCI396HyhbQ",
  },
  tlou: {
    cover:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png?w=440&thumb=false",
    label: "The Last of Us Part II",
    keywords: "tlou",
    bg:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/UIRjzDjQKrOD4kx6ubmlOsrA.png?w=1920",
    tag: "Full Game",
    price: "$ 59.99",
    title: "The Last of Us Part II",
    text:
      "Five years after their dangerous journey across the post-pandemic United States",
    purchase:
      "https://store.playstation.com/en-us/product/UP9000-CUSA07820_00-THELASTOFUSPART2",
    youtube: "qPNiIeKMHyg",
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

export const Activities = {
  demon: [
    {
      cover: "https://i.ytimg.com/vi/2TMs2E6cms4/maxresdefault.jpg",
      tag: "In Progress",
      label: "Path of the Hero",
      price: "57%",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/demons-souls-screenshot-15-disclaimer-en-09nov20?$1600px$",
      tag: "In Progress",
      label: "Fire Knight",
      price: "32%",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/demons-souls-screenshot-13-disclaimer-en-28oct20?$1600px$",
      tag: "In Progress",
      label: "Blood Knight",
      price: "61%",
    },
    {
      cover:
        "https://gmedia.playstation.com/is/image/SIEPDC/demons-souls-armored-spider-screenshot-ps5-en-15oct20?$1600px$",
      tag: "Locked",
      label: "Demon Slayer",
      price: "0%",
    },
  ],
};

export default Games;
