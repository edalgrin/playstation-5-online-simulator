import React from "react";
import { Apps, Games, Images } from "./database.js";

const GamesAll = Object.values(Games);

export const menuPrimary = [
  {
    label: "Games",
    url: "#games",
    content: [
      {
        app: Games.spider,
        lists: [
          {
            type: "gallery",
            title: "Media",
            items: Images.spider,
          },
          {
            type: "games",
            title: "More like this",
            items: [Games.spider, Games.astro, Games.astro],
          },
        ],
      },
      {
        app: Games.astro,
        lists: [
          {
            type: "gallery",
            title: "Media",
            items: Images.astro,
          },
          {
            type: "games",
            title: "More like this",
            items: [Games.spider, Games.astro, Games.astro],
          },
        ],
      },
      {
        app: Games.destruction,
      },
      {
        app: Apps.explore,
        lists: [
          {
            type: "games",
            title: "All the games",
            items: GamesAll,
          },
        ],
      },
      { app: Games.sackboy },
    ],
  },
  {
    label: "Media",
    url: "#media",
    content: [{ app: Apps.store }, { app: Apps.explore }],
  },
];

export default menuPrimary;
