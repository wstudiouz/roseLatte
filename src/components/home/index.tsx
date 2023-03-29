import { Stack, Typography } from "@mui/material";
import React from "react";
import Hero from "./Hero";
export default function Home() {
  const [active, setActive] = React.useState<boolean>(false);
  return (
    <Stack
      sx={{
        height: { xs: "372px", sm: "100vh" },
        display: "flex",
        color: "#fff",
        flexDirection: "row",
      }}
    >
      <Hero
        title="Flower shop"
        link="flower"
        imageSrc="/images/homeflower.png"
        isActive={active}
        first={true}
      />

      <Hero
        title="Coffee & Bistro"
        link="coffee"
        imageSrc="/images/homecoffee.png"
        isActive={active}
      />
      
    </Stack>
  );
}
