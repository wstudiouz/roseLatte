import React from "react";
import type { NextPage } from "next";
import { Stack } from "@mui/system";
import TopHero from "@/components/topHero";
// import TopFlowers from "@/components/flowers/TopFlowers";
import BeautifulCard from "@/components/customComponent/BeautifulCard";
import Catalog from "@/components/flowers/catalog";
import FormComponent from "@/components/customComponent/ReusableForm";
import Reviewers from "@/components/flowers/Reviewers";

const FlowersPage: NextPage = () => {
  return (
    <Stack>
      <TopHero
        title="Fresh from our Flower Shop"
        bgImg="/images/flower1.jpg"
        right
        desc="The 1st Floristic Cafe & Bistro in Prague"
      />

      <Catalog />
      {/* <TopFlowers /> */}
      <BeautifulCard
        bgImg="/images/bouquet1.png"
        title="unique bouquets for you"
        desc="The world of plants is so unique and diverse that it can amaze even connoisseurs with its diversity and number of colors. Flowers occupy a special place in the plant kingdom. It is customary to give them to the hero of the occasion to express feelings of love and respect.Thanks to the huge assortment, each bouquet can be unique and have its own zest.The world of plants is so unique and diverse that it can amaze even connoisseurs with its diversity and number of colors. Flowers occupy a special place in the plant kingdom. It is customary to give them to the hero of the occasion to express feelings of love and respect.Thanks to the huge assortment, each bouquet can be unique and have its own zest."
        right
      />
      <Reviewers />
      <FormComponent
        title="Create your own bouquets"
        bg="/images/flowersform.png"
        isFlowerShop
      />
    </Stack>
  );
};

export default FlowersPage;
