import React from "react";
import type { NextPage } from "next";
import { Stack } from "@mui/system";
import TopHero from "@/components/topHero";

const CoffeePage: NextPage = () => {
  return (
    <Stack>
      <TopHero
        title="Enjoy your time in our bar"
        bgImg="/images/coffeehero.png"
        right
        desc="The 1st Floristic Cafe & Bistro in Prague"
      />
    </Stack>
  );
};

export default CoffeePage;
