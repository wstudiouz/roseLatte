import { Box, Button, Stack, Typography } from "@mui/material";
import Catalogs from "./Catalogs";
import { theme } from "@/config/theme";
import SliderItem from "./SliderItem";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Popup from "./Popup";
import { useSpringCarousel } from "react-spring-carousel";
import { COLORS, Z_INDEX } from "@/ts/Consts";
import {
  FlowerCatalogueData,
  FlowerCatalogueFlowersDataInner,
} from "@/ts/REST/api/generated";
import { useBaseUrl } from "@/ts/utils/Hooks";
import {
  BorderButtons,
  NextButton,
  PrevButton,
} from "@/components/customComponent/SliderControll";
import { HeaderContext } from "@/context/headerContext";

type Props = {
  catalogues: FlowerCatalogueData[];
  flowers: any[];
  activeCatalog: number;
  setActiveCatalog: Dispatch<SetStateAction<number>>;
};

export default function Catalog({
  catalogues,
  flowers,
  activeCatalog,
  setActiveCatalog,
}: Props) {
  const [popup, setPopup] = useState<number>(0);
  const flowers2: any[] = [
    {
      title: "spring bouquet",
      id: 1,
      video: "/video/slider.mp4",
      sizes: [{ id: 1, size: "S", price: 1232 }],
    },
    {
      video: "/video/slider1.mp4",
      title: "wedding with peony",
      id: 2,
      sizes: [{ id: 1, size: "S", price: 1232 }],
    },
    {
      video: "/video/slider2.mp4",
      title: "wedding with peony",
      id: 3,
      sizes: [{ id: 1, size: "S", price: 1232 }],
    },
    {
      video: "/video/slider1.mp4",
      title: "wedding with peony",
      id: 4,
      img: "",
      sizes: [{ id: 1, size: "S", price: 1232 }],
    },
  ];
  const [currentSlide, setCurrentSlide] = useState<number>(flowers[0].id);
  const url = useBaseUrl();
  const { lang } = useContext(HeaderContext);
  const {
    carouselFragment,
    slideToPrevItem, // go back to previous slide
    slideToNextItem, // move to next slide
    useListenToCustomEvent, //custom hook to listen event when the slide changes
    slideToItem,
  } = useSpringCarousel({
    itemsPerSlide: 3, // number of slides per view
    withLoop: true, // will loop
    disableGestures: true,
    initialStartingPosition: "center", // the active slide will be at the center
    items: flowers2.map((item) => {
      return {
        ...item,
        renderItem: (
          <SliderItem
            bgImg={item.img}
            video={item.video}
            title_en={item.title}
            title_cz={item.title}
            active={currentSlide === item.id}
            setActive={currentSlide !== item.id ? setCurrentSlide : undefined}
            itemId={item.id}
            setPopup={setPopup}
            sizes={item.sizes}
          />
        ),
      };
    }),
    // items: flowers.map((item) => {
    //   return {
    //     ...item,
    //     renderItem: (
    //       <SliderItem
    //         bgImg={`${url}${item.attributes?.img?.data?.attributes?.url}`}
    //         video={`${url}${item.attributes?.video?.data?.attributes?.url}`}
    //         title_en={item.attributes.title_en}
    //         title_cz={item.attributes.title_cz}
    //         active={currentSlide === item.id}
    //         setActive={currentSlide !== item.id ? setCurrentSlide : undefined}
    //         itemId={item.id}
    //         setPopup={setPopup}
    //         sizes={item.attributes?.Prices}
    //       />
    //     ),
    //   };
    // }),
  });

  useEffect(() => {
    if (flowers.length > 1) {
      slideToItem(currentSlide);
    }
  }, [currentSlide, slideToItem, flowers]);
  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setCurrentSlide(Number(event?.nextItem?.id));
    }
  });

  const findCurrentItem = (id: number): FlowerCatalogueFlowersDataInner => {
    const find = flowers.find(
      (item: FlowerCatalogueFlowersDataInner) => item.id == id
    );
    return find;
  };
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
          textTransform: "capitalize",
          color: COLORS.WHITE,
          textAlign: "center",
        }}
      >
        Catalog of bouquets
      </Typography>
      <Catalogs
        catalogues={catalogues}
        activeCatalog={activeCatalog}
        setActiveCatalog={setActiveCatalog}
      />
      <Stack sx={{ marginTop: "75px", flexDirection: "column" }}>
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
            marginTop: "80px",
          }}
        >
          <PrevButton slideToPrevItem={slideToPrevItem} />
          <BorderButtons items={flowers} current={currentSlide} />
          <NextButton slideToNextItem={slideToNextItem} />
        </Stack>
      </Stack>
      {popup > 0 && <Popup setPopup={setPopup} item={findCurrentItem(popup)} />}
    </Stack>
  );
}
