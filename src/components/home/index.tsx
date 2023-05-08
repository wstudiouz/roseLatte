import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Hero from "./Hero";
import { HeaderContext } from "@/context/headerContext";
export default function Home() {
  const { openHeader } = useContext(HeaderContext);
  return (
    <Stack
      sx={{
        height: { xs: "372px", sm: "100vh" },
        display: "flex",
        color: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Hero
        title="Flower shop"
        link="flower"
        imageSrc="/images/homeflower1.avif"
        isHeaderActive={openHeader}
        first={true}
      />

      <Hero
        title="Coffee & Bistro"
        link="coffee"
        imageSrc="/images/homeCafe.jpg"
        isHeaderActive={openHeader}
      />
    </Stack>
  );
}
