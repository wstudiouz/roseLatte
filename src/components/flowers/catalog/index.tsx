import { Stack, Typography, useMediaQuery } from "@mui/material";
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
import { COLORS } from "@/ts/Consts";
import {
  FlowerCatalogueData,
  FlowerCatalogueFlowersDataInner,
} from "@/ts/REST/api/generated";
import { useBaseUrl } from "@/ts/utils/Hooks";
import SliderControl from "@/components/customComponent/SliderControll";
import translate from "@/ts/utils/translate";
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
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  useEffect(() => {
    setCurrentSlide(flowers[0]?.id);
  }, [flowers]);
  const url = useBaseUrl();
  const { lang } = useContext(HeaderContext);
  const itemsCount: number = flowers.length;
  const xs = useMediaQuery(theme.breakpoints.between(0, 900));
  const md = useMediaQuery(theme.breakpoints.between(900, 1450));

  const generateItemsPerSlide = (): number => {
    if (itemsCount > 2) {
      return xs ? 1 : md ? 2 : 3;
    }
    return itemsCount;
  };
  const {
    carouselFragment,
    slideToPrevItem, // go back to previous slide
    slideToNextItem, // move to next slide
    useListenToCustomEvent, //custom hook to listen event when the slide changes
    // slideToItem
  } = useSpringCarousel({
    itemsPerSlide: generateItemsPerSlide(),
    withLoop: true,
    disableGestures: false,
    initialStartingPosition: generateItemsPerSlide() > 2 ? "center" : undefined,
    items: flowers.map((item) => {
      return {
        ...item,
        renderItem: (
          <SliderItem
            bgImg={`${url}${item.attributes?.img?.data?.attributes?.url}`}
            video={`${url}${item.attributes?.video?.data?.attributes?.url}`}
            title_en={item.attributes.title_en}
            title_cz={item.attributes.title_cz}
            active={currentSlide === item.id}
            setActive={
              generateItemsPerSlide() < 3 ? setCurrentSlide : undefined
            }
            itemId={item.id}
            setPopup={setPopup}
            sizes={item.attributes?.Prices}
          />
        ),
      };
    }),
  });

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
        padding: {
          xs: "30px 20px",
          sm: "40px 30px",
          md: "50px 40px",
          lg: "60px 50px",
          xl: "100px",
        },
        background: COLORS.BG,
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
        {translate("cards.catalogue", lang)}
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
        <SliderControl
          slideToNextItem={slideToNextItem}
          slideToPrevItem={slideToPrevItem}
          items={flowers}
          current={currentSlide}
        />
      </Stack>
      {popup > 0 && <Popup setPopup={setPopup} item={findCurrentItem(popup)} />}
    </Stack>
  );
}
