import Info from "@/components/about/Info";
import Kitchen from "@/components/about/Kitchen";
import BeautifulCard from "@/components/customComponent/BeautifulCard";
import Hero from "../components/topHero";
import { Stack } from "@mui/material";
import React from "react";
export default function About() {
  return (
    <Stack
      sx={{
        color: "#fff",
      }}
    >
      <Hero title="how we started our business" bgImg="/images/abouthero.png" />
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
