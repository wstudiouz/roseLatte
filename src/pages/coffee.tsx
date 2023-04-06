import React from "react";
import type { NextPage } from "next";
import { Stack } from "@mui/system";
import TopHero from "@/components/topHero";
import Card from "@/components/coffee/foodCard/Card";

const CoffeePage: NextPage = () => {
  const items = [
    {
      title: "qozon somsa",
      desc: ["yaxshi", "ajoyib"],
      sum: "100sum",
      pic: "https://picsum.photos/300",
    },
    {
      title: "qozon somsa",
      desc: ["yaxshi", "ajoyib"],
      sum: "100sum",
      pic: "https://picsum.photos/301",
    },
    {
      title: "qozon somsa",
      desc: ["yaxshi", "ajoyib", "very good"],
      sum: "100sum",
      pic: "https://picsum.photos/302",
    },
  ];
  const items2 = [
    {
      title: "Tandir kabob",
      desc: ["yaxshi", "ajoyib"],
      sum: "100sum",
      pic: "https://picsum.photos/300",
    },
    {
      title: "Tandir kabob",
      desc: ["yaxshi", "ajoyib"],
      sum: "100sum",
      pic: "https://picsum.photos/301",
    },
    {
      title: "Tandir kabob",
      desc: ["yaxshi", "ajoyib", "very good"],
      sum: "100sum",
      pic: "https://picsum.photos/302",
    },
  ];
  return (
    <Stack>
      <TopHero
        title="Enjoy your time in our bar"
        bgImg="/images/coffeehero.png"
        right
        desc="The 1st Floristic Cafe & Bistro in Prague"
      />
      <Card items={items} />
      <Card items={items2} right />
      <Card items={items} />
    </Stack>
  );
};

export default CoffeePage;
