import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import BeautifulCard from "../customComponent/BeautifulCard";
import Hero from "../topHero";
import Info from "./Info";
import Kitchen from "./Kitchen";
import { getter } from "@/ts/utils/Fetcher";
import { AboutListResponseDataItem } from "@/ts/REST/api/generated";
export default function About() {
  const [aboutPage, setAboutPage] = useState<AboutListResponseDataItem>();
  const [population] = useState<string[]>([
    "Hero",
    "HeroBottom.img1",
    "HeroBottom.img2",
    "GetIdeas.img",
    "SpecialDrinks.img",
    "Kitchen.images",
  ]);

  useEffect(() => {
    const getValues = async () => {
      const result = await getter(`about?populate=${population.join()}`);
      if (result.ok && result.data) {
        setAboutPage(result.data);
      }
    };
    getValues();
  }, [population]);

  return (
    <Stack>
      {aboutPage && aboutPage.attributes?.Hero && (
        <Hero
          bgImg="/images/abouthero.png"
          right
          data={aboutPage.attributes.Hero}
        />
      )}
      {aboutPage && aboutPage.attributes?.HeroBottom && (
        <Info data={aboutPage.attributes.HeroBottom} />
      )}
      {aboutPage && aboutPage.attributes?.GetIdeas && (
        <BeautifulCard data={aboutPage.attributes.GetIdeas} />
      )}
      {aboutPage && aboutPage.attributes?.Kitchen?.images?.data && (
        <Kitchen
          data={aboutPage.attributes.Kitchen}
          images={aboutPage.attributes.Kitchen.images.data}
        />
      )}

      {aboutPage && aboutPage.attributes?.SpecialDrinks && (
        <BeautifulCard data={aboutPage.attributes.SpecialDrinks} />
      )}
    </Stack>
  );
}
