import React from "react";
import type { NextPage } from "next";
import { Stack } from "@mui/system";
import Cafe from "@/components/cafe";

const CoffeePage: NextPage = () => {
  return (
    <Stack>
      <Cafe />
    </Stack>
  );
};

export default CoffeePage;
