import { Grid, Stack, SxProps } from "@mui/material";
import Items from "./Items";
import CardImage from "./CardImage";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
interface ItemProps {
  title: string;
  desc: string[];
  sum: string;
  sx?: SxProps;
  pic: string;
  id: number;
}
interface ComponentProps {
  right?: boolean;
  items: Array<ItemProps>;
}

export default function Card({ right, items }: ComponentProps) {
  const [activeImg, setActiveImg] = useState<number>(0);

  return (
    <Grid container flexDirection={`${right ? "row-reverse" : "row"}`}>
      <Grid item xs={6}>
        <AnimatePresence mode="wait">
          <Stack
            key={items[activeImg].id}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
          >
            <CardImage src={items[activeImg].pic} />
          </Stack>
        </AnimatePresence>
      </Grid>
      <Grid item xs={6}>
        <Items
          title="Breakfast and Brunch"
          items={items}
          setImg={setActiveImg}
        />
      </Grid>
    </Grid>
  );
}
