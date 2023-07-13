import { Stack } from "@mui/material";
import React from "react";
import TopHero from "../topHero";
import ShoppingBag from "./ShoppingBag";
export default function Cards() {
  return (
    <Stack>
      <TopHero bgImg="/images/coffeehero.png" />
      <ShoppingBag />
    </Stack>
  );
}
