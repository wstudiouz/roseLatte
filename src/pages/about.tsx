import React from "react";
import type { NextPage } from "next";
import About from "@/components/about";
import { Stack } from "@mui/system";

const AboutPage: NextPage = () => {
  return (
    <Stack>
      <About />
    </Stack>
  );
};

export default AboutPage;
