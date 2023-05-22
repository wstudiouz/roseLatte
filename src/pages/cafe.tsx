import React from "react";
import type { NextPage } from "next";
import { Stack } from "@mui/system";
import TopHero from "@/components/topHero";
import Card from "@/components/cafe/foodCard/Card";

const CoffeePage: NextPage = () => {
  const items = [
    {
      id: 1,
      title: "qozon somsa",
      desc: ["yaxshi", "ajoyib"],
      sum: "100sum",
      pic: "https://picsum.photos/300",
    },
    {
      id: 2,
      title: "qozon somsa",
      desc: ["yaxshi", "ajoyib"],
      sum: "100sum",
      pic: "https://picsum.photos/301",
    },
    {
      id: 3,
      title: "qozon somsa",
      desc: ["yaxshi", "ajoyib", "very good"],
      sum: "100sum",
      pic: "https://picsum.photos/302",
    },
  ];
  const items2 = [
    {
      id: 1,
      title: "Tandir kabob",
      desc: ["yaxshi", "ajoyib"],
      sum: "100sum",
      pic: "https://picsum.photos/300",
    },
    {
      id: 2,
      title: "Tandir kabob",
      desc: ["yaxshi", "ajoyib"],
      sum: "100sum",
      pic: "https://picsum.photos/301",
    },
    {
      id: 3,
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
