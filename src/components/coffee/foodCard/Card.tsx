import { Grid, SxProps } from "@mui/material";
import Items from "./Items";
import CardImage from "./CardImage";
import { useState } from "react";
interface ItemProps {
  title: string;
  desc: string[];
  sum: string;
  sx?: SxProps;
  pic: string;
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
        <CardImage src={items[activeImg].pic} />
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
