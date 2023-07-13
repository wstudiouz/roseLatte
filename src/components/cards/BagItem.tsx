import { Card, HeaderContext } from "@/context/headerContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CustomImage from "../customComponent/CustomImage";
import { theme } from "@/config/theme";
import {
  Decrement,
  Increment,
  ViewCount,
} from "../customComponent/CountControl";

type Props = {
  item: Card;
};
export default function BagItem({ item }: Props) {
  const [currentSize, setCurrentSize] = useState<number>(0);
  const [count, setCount] = useState<number>(item.count ?? 1);
  const [price, setPrice] = useState<number>(0);
  useEffect(() => {
    item.prices?.map((i, ind) => {
      const foundedItem = i.id == item.priceId;
      if (foundedItem) {
        setCurrentSize(ind);
        setPrice(i.price ?? 0);
      }
    });
  }, [item]);
  useEffect(() => {
    const totalPrice = item.prices?.[currentSize]?.price;
    totalPrice && setPrice(totalPrice);
  }, [currentSize, item]);
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "250px",
        background:
          "linear-gradient(137.15deg, #000000 37.02%, rgba(112, 80, 88, 0.844253) 72.16%, #EC9FB6 103.65%)",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "15px 0",
      }}
    >
      <Grid item xs={3}>
        {item.img && (
          <CustomImage
            src={item.img}
            alt="product img"
            sx={{ width: "100%", height: "100%" }}
          />
        )}
      </Grid>
      <Grid item xs={9} sx={{ padding: "20px 30px" }}>
        <Typography variant="h4">{item.title_en}</Typography>
        <Stack
          sx={{
            alignItems: "center",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          <Typography variant="h5">Sizes:</Typography>
          {item &&
            item.prices?.map((e, ind) => (
              <Typography
                key={ind}
                variant="h3"
                sx={{
                  textTransform: "uppercase",
                  margin: "0 12px",
                  cursor: "pointer",
                  color:
                    currentSize == ind
                      ? theme.palette.text.secondary
                      : theme.palette.background.default,
                  "&:hover": {
                    color: theme.palette.text.secondary,
                  },
                }}
                onClick={() => setCurrentSize(ind)}
              >
                {e.size}
              </Typography>
            ))}
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
              <Decrement count={count} setCount={setCount} />
              <ViewCount count={count} />
              <Increment count={count} setCount={setCount} />
            </Stack>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.text.secondary,
                marginLeft: "20px",
              }}
            >
              {price * count}$
            </Typography>
          </Stack>
          <Button sx={{ color: "white" }} startIcon={<DeleteIcon />}>
            Remove
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
