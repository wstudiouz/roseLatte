import { Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getter } from "@/ts/utils/Fetcher";
import FormComponent from "../customComponent/ReusableForm";
import Reviewer from "./Reviewers";
import TopHero from "../topHero";
import {
  FlowerCatalogueData,
  FlowerCatalogueFlowersDataInner,
  FlowerPageListResponseDataItem,
} from "@/ts/REST/api/generated";
import BeautifulCard from "../customComponent/BeautifulCard";
import Catalog from "./catalog";
import translate from "@/ts/utils/translate";
import { HeaderContext } from "@/context/headerContext";
export default function Flowers() {
  const [data, setData] = useState<FlowerPageListResponseDataItem>();
  const [reviewer, setReviewer] = useState<any[]>([]);
  const [catalogues, setCatalogues] = useState<FlowerCatalogueData[]>();
  const [flowers, setFlowers] = useState<FlowerCatalogueFlowersDataInner[]>();
  const [activeCatalog, setActiveCatalog] = useState(0);

  useEffect(() => {
    const setter = (arr: FlowerCatalogueData[]) => {
      const value = arr[activeCatalog].attributes?.flowers?.data;
      if (value?.length) {
        setFlowers(value);
      }
    };
    const getValues = async () => {
      const result = await getter("reviewers?populate=img");
      if (result.ok && result.data) {
        setReviewer(result.data);
      }

      const flowersPage = await getter(
        "flower-page?populate=Hero,Bouquets.img"
      );
      if (flowersPage.ok && flowersPage.data) {
        setData(flowersPage.data);
      }
      const catalogue = await getter(
        "flower-catalogues?populate=flowers.img,flowers.video,flowers.Prices"
      );
      if (catalogue.ok && catalogue.data) {
        setter(catalogue.data);
        setCatalogues(catalogue.data);
      }
    };
    getValues();
  }, [activeCatalog]);

  const { lang } = useContext(HeaderContext);
  return (
    <Stack>
      {data && data.attributes?.Hero && (
        <TopHero
          bgImg="/images/coffeehero.png"
          right
          data={data.attributes.Hero}
        />
      )}

      {data && data.attributes?.Bouquets && (
        <BeautifulCard data={data.attributes.Bouquets} right />
      )}

      {catalogues && catalogues.length && flowers && (
        <Catalog
          catalogues={catalogues}
          flowers={flowers}
          activeCatalog={activeCatalog}
          setActiveCatalog={setActiveCatalog}
        />
      )}

      <FormComponent
        title={translate("form.flowerpage", lang)}
        bg="/images/flowersform.png"
        isFlowerShop
      />
      {reviewer && reviewer.length && <Reviewer reviewer={reviewer} />}
    </Stack>
  );
}
