import { Card, HeaderContext } from "@/context/headerContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CustomImage from "../customComponent/CustomImage";
import {
  Decrement,
  Increment,
  ViewCount,
} from "../customComponent/CountControl";
import translate from "@/ts/utils/translate";
import { COLORS, FlexBox } from "@/ts/Consts";

type Props = {
  itemId: number;
};
export default function BagItem({ itemId }: Props) {
  const { cards, setCards, lang } = useContext(HeaderContext);
  const [card, setCard] = useState<Card>();
  useEffect(() => {
    const find = cards.find((i: Card) => i.id == itemId);
    if (find) {
      setCard(find);
    }
  }, [cards, itemId]);
  const getCurrentPrice = () => {
    const find = card?.prices?.find((i) => i.id === card.priceId);
    return find?.price;
  };

  const handleChangeCount = (num: number) => {
    const number = num < 1 ? 1 : num > 20 ? 20 : num;
    if (card && card.count > 0 && card.count < 21) {
      setCard((prevCard) => {
        if (!prevCard) return prevCard;
        return { ...prevCard, count: number };
      });
      setCards((prevCards) =>
        prevCards.map((i) => {
          if (i.id === card.id) {
            return {
              ...i,
              count: number,
            };
          }
          return i;
        })
      );
    }
  };

  const handleResize = (id: number | undefined) => {
    if (card && id) {
      setCard({ ...card, priceId: id });
      const updated = cards.map((i) => {
        if (i.id === card.id) {
          return {
            ...i,
            priceId: id,
          };
        }
        return i;
      });
      setCards(updated);
    }
  };

  const removeCard = () => {
    setCards((prevCards) => {
      const updatedCards = prevCards.filter((i) => i.id !== itemId);
      if (updatedCards.length === 0) {
        localStorage.setItem("cards", JSON.stringify([]));
      }
      return updatedCards;
    });
  };

  const title = card && card[`title_${lang}` as keyof Card];

  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "250px",
        background: COLORS.BG,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "15px 0",
        borderRadius: "10px",
      }}
    >
      <Grid item xs={4}>
        {card?.img && (
          <CustomImage
            src={card.img}
            alt="product img"
            sx={{ width: "100%", height: "100%" }}
            imageStyle={{ borderRadius: "10px 0 0 10px" }}
          />
        )}
      </Grid>
      <Grid item xs={8} sx={{ padding: { xs: "7px 10px", md: "20px 30px" } }}>
        <Typography variant="h4">{String(title)}</Typography>
        <Stack
          sx={{
            alignItems: "center",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          <Typography variant="h5">
            {translate("cards.sizes", lang)}:
          </Typography>
          {card &&
            card.prices?.map((e, ind) => (
              <Typography
                key={ind}
                variant="h3"
                sx={{
                  textTransform: "uppercase",
                  margin: "0 12px",
                  cursor: "pointer",
                  color: card.priceId == e.id ? COLORS.SECONDARY : COLORS.WHITE,
                  "&:hover": {
                    color: COLORS.SECONDARY,
                  },
                }}
                onClick={() => handleResize(e.id)}
              >
                {e.size}
              </Typography>
            ))}
        </Stack>
        <Stack
          sx={{
            ...FlexBox,
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <Stack
            sx={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Stack
              sx={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Stack onClick={() => handleChangeCount((card?.count ?? 1) - 1)}>
                <Decrement />
              </Stack>
              <ViewCount count={card?.count ?? 1} />
              <Stack onClick={() => handleChangeCount((card?.count ?? 1) + 1)}>
                <Increment />
              </Stack>
            </Stack>
            <Typography
              variant="h4"
              sx={{
                color: COLORS.SECONDARY,
                marginLeft: "20px",
              }}
            >
              {Number(getCurrentPrice()) * (card?.count ?? 1)}$
            </Typography>
          </Stack>
          <Button
            sx={{ color: "white" }}
            startIcon={<DeleteIcon />}
            onClick={removeCard}
          >
            {translate("cards.remove", lang)}
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
