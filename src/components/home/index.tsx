import { Stack } from "@mui/material";
import React, { useContext } from "react";
import Hero from "./Hero";
import { HeaderContext } from "@/context/headerContext";
import translate from "@/ts/utils/translate";
import { FlexBox } from "@/ts/Consts";
export default function Home() {
  const { openHeader, lang } = useContext(HeaderContext);
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
        title={translate("header.shop", lang)}
        link="flower"
        imageSrc="/images/homeflower2.jpg"
        isHeaderActive={openHeader}
        first={true}
      />

      <Hero
        title={translate("header.cafe", lang)}
        link="coffee"
        imageSrc="/images/homeCafe.jpg"
        isHeaderActive={openHeader}
      />
    </Stack>
  );
}
