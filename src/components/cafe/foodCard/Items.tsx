import { theme } from "@/config/theme";
import { List, ListItem, Stack, SxProps, Typography } from "@mui/material";
import Item from "./Item";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface ItemProps {
  title: string;
  desc: string[];
  sum: string;
  sx?: SxProps;
}

interface ComponentProps {
  title: string;
  items: Array<ItemProps>;
  active?: number;
  sx?: SxProps;
  setImg: Dispatch<SetStateAction<number>>;
}

export default function Items({
  title,
  active,
  items,
  sx,
  setImg,
}: ComponentProps) {
  return (
    <Stack
      sx={{
        padding: "25px 40px 40px 40px",
        height: "500px",
        ...sx,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.text.secondary,
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Stack sx={{ marginTop: "45px" }}>
        {items.map((e, i) => (
          <Item
            key={i}
            title={e.title}
            num={i}
            setImg={setImg}
            desc={e.desc}
            sum={e.sum}
          />
        ))}
      </Stack>
    </Stack>
  );
}
