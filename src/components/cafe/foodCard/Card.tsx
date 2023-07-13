import { Grid, Stack } from "@mui/material";
import Items from "./Items";
import CardImage from "./CardImage";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FoodCategoryFoods } from "@/ts/REST/api/generated";
import { useBaseUrl } from "@/ts/utils/Hooks";

interface ComponentProps {
  right?: boolean;
  items: FoodCategoryFoods;
  title: string;
}

export default function Card({ right, items, title }: ComponentProps) {
  const [activeImg, setActiveImg] = useState<number>(0);
  const url = useBaseUrl();
  console.log(items);

  return (
    <Grid container flexDirection={`${right ? "row-reverse" : "row"}`}>
      <Grid item xs={6}>
        <AnimatePresence mode="wait">
          <Stack
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
          >
            {items &&
              items.data &&
              items.data[activeImg] &&
              items.data[activeImg]?.attributes?.img?.data?.attributes?.url && (
                <CardImage
                  src={`${url}${items.data[activeImg]?.attributes?.img?.data?.attributes?.url}`}
                />
              )}
          </Stack>
        </AnimatePresence>
      </Grid>
      <Grid item xs={6}>
        <Items title={title} items={items} setImg={setActiveImg} />
      </Grid>
    </Grid>
  );
}
