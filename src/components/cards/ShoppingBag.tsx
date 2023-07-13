import { Card, HeaderContext } from "@/context/headerContext";
import {
  FlowerListResponse,
  FlowerListResponseDataItem,
} from "@/ts/REST/api/generated";
import { getter } from "@/ts/utils/Fetcher";
import { useBaseUrl } from "@/ts/utils/Hooks";
import { Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import BagItem from "./BagItem";
export default function ShoppingBag() {
  const { cards, setCards } = useContext(HeaderContext);
  const url = useBaseUrl();
  useEffect(() => {
    const filteredCards = (myData: FlowerListResponseDataItem[]) => {
      const filteredItems = cards.filter((card: Card) => {
        const matchingItem = myData.find((item) => item.id === card.id);
        if (matchingItem) {
          card.title_en = matchingItem.attributes?.title_en;
          card.title_cz = matchingItem.attributes?.title_cz;
          card.img = url + matchingItem.attributes?.img.data?.attributes?.url;
          card.prices = matchingItem.attributes?.Prices;
        }
        return matchingItem;
      });

      setCards(filteredItems);
    };

    const getValues = async () => {
      const getFlower = await getter("flowers?populate=img,Prices");
      if (getFlower.ok && getFlower.data) {
        filteredCards(getFlower.data);
      }
    };
    getValues();
  }, [cards, url, setCards]);

  return (
    <Stack sx={{ padding: "50px 70px", background: "white" }}>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Shopping Bag
      </Typography>
      <Stack>
        {cards.length &&
          cards.map((e, index) => <BagItem item={e} key={index} />)}
      </Stack>
    </Stack>
  );
}
