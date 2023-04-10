import React from "react";
import type { NextPage } from "next";
import { Stack } from "@mui/system";
import TopHero from "@/components/topHero";
import TopFlowers from "@/components/flowers/TopFlowers";
import BeautifulCard from "@/components/customComponent/BeautifulCard";
import Catalog from "@/components/flowers/catalog";

const FlowersPage: NextPage = () => {
  return (
    <Stack>
      <TopHero
        title="Fresh from our Flower Shop"
        bgImg="/images/flowershero.png"
        right
        desc="The 1st Floristic Cafe & Bistro in Prague"
      />

      <TopFlowers />
      <BeautifulCard
        bgImg="/images/bouquet1.png"
        title="unique bouquets for you"
        desc="The world of plants is so unique and diverse that it can amaze even connoisseurs with its diversity and number of colors. Flowers occupy a special place in the plant kingdom. It is customary to give them to the hero of the occasion to express feelings of love and respect.Thanks to the huge assortment, each bouquet can be unique and have its own zest.The world of plants is so unique and diverse that it can amaze even connoisseurs with its diversity and number of colors. Flowers occupy a special place in the plant kingdom. It is customary to give them to the hero of the occasion to express feelings of love and respect.Thanks to the huge assortment, each bouquet can be unique and have its own zest."
        right
      />
      <Catalog />
    </Stack>
  );
};

export default FlowersPage;