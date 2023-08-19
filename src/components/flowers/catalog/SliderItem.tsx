import { Box, Stack, Typography, SxProps } from "@mui/material";
import CustomImage from "../../customComponent/CustomImage";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CursorManager } from "@/ts/CursorManager";
import { COLORS } from "@/ts/Consts";
import { FlowerCatalogueDataAttributesFlowersDataInnerAttributesPricesInner } from "@/ts/REST/api/generated";
import { Card, HeaderContext } from "@/context/headerContext";
import translate from "@/ts/utils/translate";

interface ComponentProps {
  bgImg?: string;
  video?: string;
  itemId?: number;
  title_en: string;
  title_cz: string;
  active?: boolean;
  setActive?: Dispatch<SetStateAction<number>>;
  setPopup: Dispatch<SetStateAction<number>>;
  sizes: FlowerCatalogueDataAttributesFlowersDataInnerAttributesPricesInner[];
}

export default function SliderItem({
  bgImg,
  title_en,
  title_cz,
  video,
  active,
  setActive,
  setPopup,
  itemId,
  sizes,
}: ComponentProps) {
  const { cards, setCards, lang } = useContext(HeaderContext);
  const [hover, setHover] = useState<boolean>(true);
  const cursor = useMemo(() => CursorManager.instance.cursor, []);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (video) {
      if (active) videoRef.current?.play();
      else videoRef.current?.pause();
    }
  }, [active, video]);

  const handleAdd = () => {
    if (itemId) {
      const find = cards.find((item: Card) => item.id == itemId);
      if (!find) {
        const priceId = sizes[0]?.id;
        if (priceId) {
          setCards((prev) => [
            ...prev,
            {
              id: itemId,
              count: 1,
              priceId,
              prices: sizes,
              img: bgImg,
              title_en,
              title_cz,
            },
          ]);
        }
      }
    }
  };
  type TitlesType = { title_en: string; title_cz: string };
  const titles: TitlesType = { title_cz, title_en };
  const title = titles[`title_${lang}` as keyof TitlesType];
  const cardWidth: SxProps = {
    width: {
      xs: "300px",
      lg: "380px",
      xl: "400px",
    },
    height: {
      xs: "430px",
      lg: "510px",
      xl: "550px",
    },
  };
  return (
    <Stack
      ref={containerRef}
      onMouseEnter={() => {
        setHover(false);
        cursor?.setImg("/images/butterfly.gif");
      }}
      onMouseLeave={() => {
        setHover(true);
        cursor?.removeImg();
      }}
      onClick={() => {
        if (setActive && itemId) {
          setActive(itemId);
        }
      }}
      sx={{
        transform: active ? "scale(1)" : "scale(0.9)",
        ...cardWidth,
        position: "relative",
        transition: "all 0.4s ease",
        cursor: "pointer",
        overflow: "hidden",
        margin: "20px auto",
      }}
    >
      {bgImg ? (
        <CustomImage
          src={bgImg}
          sx={{
            ...cardWidth,
            position: "absolute",
            zIndex: 0,
            left: 0,
            top: 0,
          }}
        />
      ) : (
        <Box
          ref={videoRef}
          component={"video"}
          src={video}
          muted
          loop
          sx={{
            ...cardWidth,
            position: "absolute",
            zIndex: 0,
            left: 0,
            top: 0,
            objectFit: "cover",
            filter: hover ? "blur(0px)" : "blur(3px)",
            transition: "filter 0.4s linear",
          }}
        />
      )}
      <Box
        sx={{
          width: "110%",
          height: "110%",
          position: "absolute",
          zIndex: 1,
          left: 0,
          top: 0,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(255,255,255,0) 100%)",
        }}
      />
      <Stack
        sx={{
          ...cardWidth,
          zIndex: 2,
          position: "relative",
          padding: "30px",
          justifyContent: "end",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "capitalize",
            color: COLORS.WHITE,
            fontSize: active ? (hover ? "25px" : "35px") : undefined,
            transition: "all 0.5s linear",
          }}
        >
          {title}
        </Typography>
        <Stack
          sx={{
            height: active ? (hover ? "0px" : "150px") : 0,
            transition: "all 0.5s linear 0.2s",
            position: "relative",
            overflow: "hidden",
            justifyContent: "space-between",
          }}
        >
          <Stack>
            <Stack
              sx={{
                alignItems: "center",
                flexDirection: "row",
                marginTop: "20px",
                opacity: active ? (hover ? "0" : "1") : undefined,
                transition: `all 0.5s linear ${hover ? "0" : "0.5"}s`,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: COLORS.WHITE,
                }}
              >
                {translate("cards.sizes", lang)}:
              </Typography>
              {sizes &&
                sizes.map((e, ind) => (
                  <Typography
                    key={ind}
                    variant="h4"
                    sx={{
                      textTransform: "uppercase",
                      margin: "0 8px",
                      color: COLORS.WHITE,
                      "&:hover": {
                        color: COLORS.PINK,
                      },
                    }}
                  >
                    {e.size}
                  </Typography>
                ))}
            </Stack>
            <Typography
              variant="h4"
              sx={{
                textTransform: "capitalize",
                color: COLORS.WHITE,
                opacity: active ? (hover ? 0 : 1) : undefined,
                transition: `all 0.5s linear ${hover ? "0" : "0.75"}s`,
              }}
            >
              {translate("cards.price", lang)}:
              {sizes &&
                sizes.map((e, ind) => (
                  <Box
                    key={ind}
                    component="span"
                    sx={{ color: COLORS.PINK, textTransform: "uppercase" }}
                  >
                    {e.price}$,
                  </Box>
                ))}
            </Typography>
          </Stack>
          <Stack
            onMouseEnter={() => {
              cursor?.removeImg();
            }}
            onMouseLeave={() => {
              cursor?.setImg("/images/butterfly.gif");
            }}
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              opacity: active ? (hover ? 0 : 1) : undefined,
              transition: `all 0.5s linear ${hover ? "0" : "1"}s`,
            }}
          >
            <Typography
              onClick={() => setPopup(itemId ?? 0)}
              variant="SmallRoboto"
              sx={{
                width: "45%",
                padding: "10px 0",
                border: `2px solid ${COLORS.PINK}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {translate("cards.more", lang)}
            </Typography>
            <Typography
              variant="SmallRoboto"
              sx={{
                width: "45%",
                padding: "10px 0",
                border: `2px solid ${COLORS.PINK}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleAdd}
            >
              {translate("cards.add", lang)}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
