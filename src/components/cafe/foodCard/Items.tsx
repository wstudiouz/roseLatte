import { Stack, SxProps, Typography } from "@mui/material";
import Item from "./Item";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  FoodCategoryFoods,
  FoodCategoryFoodsDataInner,
  FoodCategoryFoodsDataInnerAttributes,
} from "@/ts/REST/api/generated";
import { HeaderContext } from "@/context/headerContext";
import { useSpringCarousel } from "react-spring-carousel";
import SliderControl from "@/components/customComponent/SliderControll";
import { COLORS } from "@/ts/Consts";

interface ComponentProps {
  title: string;
  items: FoodCategoryFoods;
  sx?: SxProps;
  setImg: Dispatch<SetStateAction<number>>;
}

function splitArrayIntoPairs(arr: FoodCategoryFoodsDataInner[]) {
  const pairs = [];

  for (let i = 0; i < arr.length; i += 3) {
    const pair = arr.slice(i, i + 3);
    pairs.push(pair);
  }

  return pairs;
}

export default function Items({ title, items, sx, setImg }: ComponentProps) {
  const { lang } = useContext(HeaderContext);
  const sliderItems: any = splitArrayIntoPairs(items?.data ?? []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    itemsPerSlide: 1,
    withLoop: true,
    items: sliderItems.map((item: FoodCategoryFoodsDataInner[]) => {
      return {
        ...item,
        renderItem: (
          <Stack sx={{ width: "100%" }}>
            {item.map((e, ind) => {
              const itemTitle = e.attributes
                ? e.attributes[
                    `title_${lang}` as keyof FoodCategoryFoodsDataInnerAttributes
                  ]
                : "";

              return (
                <Item
                  key={ind}
                  title={String(itemTitle)}
                  num={ind}
                  setImg={setImg}
                  desc={e.attributes?.desc ?? []}
                  sum={e.attributes?.price ?? 0}
                />
              );
            })}
          </Stack>
        ),
      };
    }),
  });
  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setCurrentSlide(event?.nextItem?.index);
    }
  });
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
          color: COLORS.SECONDARY,
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Stack
        sx={{
          overflowX: "clip",
          width: "100%",
          marginX: "auto",
          position: "relative",
          height: "450px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: COLORS.WHITE_BACKGROUNDW,
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          },
        }}
      >
        {carouselFragment}
      </Stack>
      <SliderControl
        slideToNextItem={slideToNextItem}
        slideToPrevItem={slideToPrevItem}
        items={sliderItems}
        current={currentSlide}
        withIndex={currentSlide}
      />
    </Stack>
  );
}
