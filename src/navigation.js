import React from "react";
import { Apps, Games, Images, Activities } from "./database.js";

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
            title: "Coming Soon",
            items: [
              Games.horizon,
              Games.cyberpunk,
              Games.gt,
              Games.ff,
              Games.ratchet,
            ],
          },
          {
            type: "games",
            title: "Popular",
            items: [
              Games.watch,
              Games.tlou,
              Games.fortnite,
              Games.death,
              Games.cod,
            ],
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
            items: [
              Games.watch,
              Games.demon,
              Games.horizon,
              Games.god,
              Games.death,
            ],
          },
        ],
      },
      {
        app: Games.demon,
        lists: [
          {
            type: "activities",
            title: "Activities",
            items: Activities.demon,
          },
          {
            type: "gallery",
            title: "Media",
            items: Images.demon,
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
    content: [
      { app: Apps.netflix },
      { app: Apps.spotify },
      { app: Apps.disney },
    ],
  },
];

export default menuPrimary;
