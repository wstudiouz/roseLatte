import { Stack } from "@mui/material";
import React from "react";
import BeautifulCard from "../customComponent/BeautifulCard";
import Hero from "../topHero";
import Info from "./Info";
import Kitchen from "./Kitchen";
export default function About() {
  return (
    <Stack
      sx={{
        color: "#fff",
      }}
    >
      <Hero bgImg="/images/abouthero.png" title="how we started our business" />
      <Info />
      <BeautifulCard
        bgImg="/images/aboutfirsthuman.png"
        title="Where do we get ideas"
        desc="The world of plants is so unique and diverse that it can amaze even connoisseurs with its diversity and number of colors. Flowers occupy a special place in the plant kingdom. It is customary to give them to the hero of the occasion to express feelings of love and respect.Thanks to the huge assortment, each bouquet can be unique and have its own zest.The world of plants is so unique and diverse that it can amaze even connoisseurs with its diversity and number of colors. Flowers occupy a special place in the plant kingdom. It is customary to give them to the hero of the occasion to express feelings of love and respect.Thanks to the huge assortment, each bouquet can be unique and have its own zest."
      />
      <Kitchen />
      <BeautifulCard
        bgImg="/images/aboutsecondhuman.png"
        title="Special Drinks"
        desc="The world of plants is so unique and diverse that it can amaze even connoisseurs with its diversity and number of colors. Flowers occupy a special place in the plant kingdom. It is customary to give them to the hero of the occasion to express feelings of love and respect.Thanks to the huge assortment, each bouquet can be unique and have its own zest.The world of plants is so unique and diverse that it can amaze even connoisseurs with its diversity and number of colors. Flowers occupy a special place in the plant kingdom. It is customary to give them to the hero of the occasion to express feelings of love and respect.Thanks to the huge assortment, each bouquet can be unique and have its own zest."
      />
    </Stack>
  );
}
