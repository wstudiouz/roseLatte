import { theme } from "@/config/theme";
import { Stack, SxProps, Typography } from "@mui/material";
import Item from "./Item";
import { Dispatch, SetStateAction, useContext } from "react";
import {
  FoodCategoryFoods,
  FoodCategoryFoodsDataInnerAttributes,
} from "@/ts/REST/api/generated";
import { HeaderContext } from "@/context/headerContext";

interface ComponentProps {
  title: string;
  items: FoodCategoryFoods;
  sx?: SxProps;
  setImg: Dispatch<SetStateAction<number>>;
}

export default function Items({ title, items, sx, setImg }: ComponentProps) {
  const { lang } = useContext(HeaderContext);
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
        {items &&
          items?.data &&
          items.data.map((e, i) => {
            const itemTitle = e.attributes
              ? e.attributes[
                  `title_${lang}` as keyof FoodCategoryFoodsDataInnerAttributes
                ]
              : "";

            return (
              <Item
                key={i}
                title={String(itemTitle)}
                num={i}
                setImg={setImg}
                desc={e.attributes?.desc ?? []}
                sum={e.attributes?.price ?? 0}
              />
            );
          })}
      </Stack>
    </Stack>
  );
}
