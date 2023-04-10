import { Button, Stack, Typography } from "@mui/material";
import Catalogs from "./Catalogs";
import { theme } from "@/config/theme";
import SliderItem from "./SliderItem";
import { useState } from "react";
import Popup from "./Popup";
import { useSpringCarousel } from "react-spring-carousel";
export default function Catalog() {
  const [popup, setPopup] = useState<boolean>(false);
  const flowers = [
    { img: "/images/flower1.png", title: "spring bouquet", id: "item-1" },
    { img: "/images/flower1.png", title: "wedding with peony", id: "item-2" },
    { img: "/images/flower1.png", title: "wedding with peony", id: "item-3" },
    { img: "/images/flower1.png", title: "wedding with peony", id: "item-4" },
  ];
  const [currentSlide, setCurrentSlide] = useState(flowers[0].id);
  const {
    carouselFragment,
    slideToPrevItem, // go back to previous slide
    slideToNextItem, // move to next slide
    useListenToCustomEvent, //custom hook to listen event when the slide changes
  } = useSpringCarousel({
    itemsPerSlide: 3, // number of slides per view
    withLoop: true, // will loop
    initialStartingPosition: "center", // the active slide will be at the center
    items: flowers.map((item) => {
      return {
        ...item,
        renderItem: (
          <SliderItem
            bgImg={item.img}
            title={item.title}
            active={currentSlide === item.id}
            setPopup={setPopup}
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
        padding: "100px",
        background:
          "linear-gradient(137.15deg, #000000 37.02%, rgba(112, 80, 88, 0.844253) 72.16%, #EC9FB6 103.65%)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          margin: "30px auto",
          textTransform: "capitalize",
          color: theme.palette.background.default,
        }}
      >
        catalog of bouquets
      </Typography>
      <Catalogs />
      <Stack sx={{ marginTop: "50px", flexDirection: "row" }}>
        <Button onClick={slideToPrevItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Button>
        <Stack
          sx={{
            overflowX: "clip",
            width: "90%",
            marginX: "auto",
            position: "relative",
          }}
        >
          {carouselFragment}
        </Stack>
        <Button onClick={slideToNextItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      </Stack>
      {popup ? <Popup setPopup={setPopup} /> : <></>}
    </Stack>
  );
}
