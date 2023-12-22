import { Stack, Typography, useMediaQuery } from "@mui/material";
import Reviewer from "../reviewer";
import { theme } from "@/config/theme";
import { useContext, useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import { useBaseUrl } from "@/ts/utils/Hooks";
import translate from "@/ts/utils/translate";

import { HeaderContext } from "@/context/headerContext";
import SliderControl from "../customComponent/SliderControll";
import { COLORS } from "@/ts/Consts";

type Props = {
  reviewer: any[];
};

export default function Reviewers({ reviewer }: Props) {
  const url = useBaseUrl();
  const { lang } = useContext(HeaderContext);
  const [currentSlide, setCurrentSlide] = useState(reviewer[0]?.id);
  const itemsCount: number = reviewer.length;
  const xs = useMediaQuery(theme.breakpoints.between(0, 900));
  const md = useMediaQuery(theme.breakpoints.between(900, 1200));
  const generateItemsPerSlide = (): number => {
    if (itemsCount > 2) {
      return xs ? 1 : md ? 2 : 3;
    }
    return itemsCount;
  };
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    itemsPerSlide: generateItemsPerSlide(),
    withLoop: true,
    initialStartingPosition: generateItemsPerSlide() > 2 ? "center" : undefined,
    items: reviewer.map((item) => {
      const comment = item.attributes[`comment_${lang}`];
      return {
        ...item,
        renderItem: (
          <Reviewer
            key={item.id}
            title={comment ?? ""}
            name={item.attributes?.name ?? ""}
            bgImg={`${url}${item.attributes?.img.data?.attributes?.url}`}
            active={currentSlide == String(item.id)}
          />
        ),
      };
    }),
  });
  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setCurrentSlide(event?.nextItem?.id);
    }
  });
  return (
    <Stack
      sx={{
        width: "100%",
        height: "auto",
        padding: {
          xs: "30px 20px",
          sm: "40px 30px",
          md: "50px 40px",
          lg: "60px 50px",
          xl: "100px",
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          margin: "0 auto",
          textTransform: "capitalize",
          color: COLORS.WHITE,
        }}
      >
        {translate("reviews.title", lang)}
      </Typography>
      <Stack
        sx={{
          width: "90%",
          margin: "50px auto 0 auto",
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{
            overflowX: "clip",
            width: "100%",
            marginX: "auto",
            position: "relative",
          }}
        >
          {carouselFragment}
        </Stack>
        <SliderControl
          slideToPrevItem={slideToPrevItem}
          slideToNextItem={slideToNextItem}
          items={reviewer}
          current={currentSlide}
        />
      </Stack>
    </Stack>
  );
}
