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
        app: Games.assassin,
        lists: [
          {
            type: "gallery",
            title: "Media",
            items: Images.assassin,
          },
          {
            type: "games",
            title: "More like this",
            items: [Games.spider, Games.astro, Games.astro],
          },
        ],
      },
      {
        app: Games.demon,
        lists: [
          {
            type: "gallery",
            title: "Media",
            items: Images.demon,
          },
          {
            type: "games",
            title: "More like this",
            items: [Games.spider, Games.astro, Games.astro],
          },
        ],
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
      {
        app: Games.god,
        lists: [
          {
            type: "gallery",
            title: "Media",
            items: Images.god,
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
        app: Games.sackboy,
        lists: [
          {
            type: "gallery",
            title: "Media",
            items: Images.sackboy,
          },
          {
            type: "games",
            title: "More like this",
            items: [Games.spider, Games.astro, Games.astro],
          },
        ],
      },
      {
        app: Apps.store,
        lists: [
          {
            type: "games",
            title: "Deals",
            items: [Games.spider],
          },
        ],
      },
    ],
  },
  {
    label: "Media",
    url: "#media",
    content: [{ app: Apps.store }, { app: Apps.explore }],
  },
];

export default menuPrimary;
