import { Box, Grid, Stack, Typography } from "@mui/material";
import Reviewer from "../reviewer";
import { theme } from "@/config/theme";
import { useContext, useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import { useBaseUrl } from "@/ts/utils/Hooks";
import translate from "@/ts/utils/translate";
import {
  BorderButtons,
  NextButton,
  PrevButton,
} from "../customComponent/SliderControll";
import { HeaderContext } from "@/context/headerContext";

type Props = {
  reviewer: any[];
};

export default function Reviewers({ reviewer }: Props) {
  const url = useBaseUrl();
  const { lang } = useContext(HeaderContext);
  const [currentSlide, setCurrentSlide] = useState(reviewer[0]?.id);
  const {
    carouselFragment,
    slideToPrevItem, // go back to previous slide
    slideToNextItem, // move to next slide
    useListenToCustomEvent, //custom hook to listen event when the slide changes
  } = useSpringCarousel({
    itemsPerSlide: 3, // number of slides per view
    withLoop: true, // will loop
    initialStartingPosition: "center", // the active slide will be at the center
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
        padding: "100px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          margin: "0 auto",
          textTransform: "capitalize",
          color: theme.palette.background.default,
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
        <Stack
          sx={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <PrevButton slideToPrevItem={slideToPrevItem} />
          <BorderButtons items={reviewer} current={currentSlide} />
          <NextButton slideToNextItem={slideToNextItem} />
        </Stack>
      </Stack>
    </Stack>
  );
}
