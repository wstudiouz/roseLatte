import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Box,
  Dialog,
  DialogContent,
  Grid,
  Stack,
  SxProps,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CustomImage from "@/components/customComponent/CustomImage";
import { theme } from "@/config/theme";
import {
  FlowerCatalogueFlowersDataInner,
  FlowerCatalogueFlowersDataInnerAttributes,
} from "@/ts/REST/api/generated";
import { Card, HeaderContext } from "@/context/headerContext";
import { useBaseUrl } from "@/ts/utils/Hooks";
import {
  Decrement,
  Increment,
  ViewCount,
} from "@/components/customComponent/CountControl";
import translate from "@/ts/utils/translate";
import { COLORS } from "@/ts/Consts";

interface ComponentProps {
  setPopup: Dispatch<SetStateAction<number>>;
  item: FlowerCatalogueFlowersDataInner;
}

export default function Popup({ setPopup, item }: ComponentProps) {
  const { lang, setCards, cards } = useContext(HeaderContext);
  const url = useBaseUrl();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [currentSize, setCurrentSize] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const totalPrice = item && item.attributes?.Prices?.[currentSize]?.price;
    totalPrice && setPrice(totalPrice);
  }, [currentSize, item]);

  const handleClose = () => {
    setPopup(0);
  };

  const closeBtnSx: SxProps = {
    content: '""',
    display: "block",
    position: "absolute",
    width: "16px",
    height: "3px",
    backgroundColor: "white",
    transform: "rotate(45deg)",
    zIndex: 10,
  };

  const title =
    item &&
    item?.attributes?.[
    `title_${lang}` as keyof FlowerCatalogueFlowersDataInnerAttributes
    ];
  const desc =
    item &&
    item?.attributes?.[
    `desc_${lang}` as keyof FlowerCatalogueFlowersDataInnerAttributes
    ];

  const handleAdd = () => {
    const itemId = item && item?.id;
    if (itemId) {
      const find = cards.find((item: Card) => item.id == itemId);
      if (!find) {
        const priceId = item && item?.attributes?.Prices?.[currentSize]?.id;
        if (priceId) {
          setCards((prev) => [
            ...prev,
            {
              id: itemId,
              count: count,
              priceId,
              prices: item?.attributes?.Prices,
              img: url + item.attributes?.img?.data?.attributes?.url,
              title_en: item.attributes?.title_en,
              title_cz: item.attributes?.title_cz,
            },
          ]);
        }
      }
      setPopup(0)
    }
  };
  return (
    <Dialog
      open={Boolean(item)}
      onClose={handleClose}
      maxWidth="md"
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          background: COLORS.BG,
          padding: {
            xs: "10px",
            sm: "20px 25px",
            md: "30px 35px",
            lg: "45px 50px",
          },
          position: "relative",
        },
      }}
    >
      <DialogContent
        sx={{
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          },
        }}
      >
        <Stack
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: "1px",
            top: "1px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&::before": closeBtnSx,
            "&::after": {
              ...closeBtnSx,
              transform: "rotate(-45deg)",
            },
          }}
        ></Stack>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={12} md={5.9}>
            {item && item.attributes?.img?.data?.attributes?.url && (
              <CustomImage
                src={`${url}${item.attributes.img.data.attributes.url}`}
              />
            )}
          </Grid>
          <Grid item xs={12} md={5.9}>
            {title && (
              <Typography
                variant="h3"
                sx={{
                  color: COLORS.WHITE,
                  textTransform: "capitalize",
                }}
              >
                {String(title)}
              </Typography>
            )}
            <Stack
              sx={{
                alignItems: "center",
                flexDirection: "row",
                marginTop: "20px",
              }}
            >
              <Typography variant="h4" sx={{ color: COLORS.WHITE }}>
                {translate("cards.sizes", lang)}:
              </Typography>
              {item &&
                item.attributes?.Prices &&
                item.attributes.Prices.map((e, ind) => (
                  <Typography
                    key={ind}
                    variant="h3"
                    sx={{
                      textTransform: "uppercase",
                      margin: "0 12px",
                      cursor: "pointer",
                      color:
                        currentSize == ind ? COLORS.SECONDARY : COLORS.WHITE,
                      "&:hover": {
                        color: COLORS.SECONDARY,
                      },
                    }}
                    onClick={() => setCurrentSize(ind)}
                  >
                    {e.size}
                  </Typography>
                ))}
            </Stack>
            <Stack
              sx={{
                alignItems: "center",
                flexDirection: "row",
                marginTop: "20px",
              }}
            >
              <Stack
                sx={{
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Stack
                  onClick={() => count > 1 && setCount((prev) => prev - 1)}
                >
                  <Decrement />
                </Stack>
                <ViewCount count={count} />
                <Stack
                  onClick={() => count < 20 && setCount((prev) => prev + 1)}
                >
                  <Increment />
                </Stack>
              </Stack>
              <Typography
                variant="h4"
                sx={{
                  color: COLORS.SECONDARY,
                  marginLeft: "20px",
                }}
              >
                {price * count}$
              </Typography>
            </Stack>
            {desc && (
              <Typography
                variant="SmallRoboto"
                sx={{
                  color: COLORS.WHITE,
                  display: "block",
                  marginTop: "30px",
                }}
              >
                {String(desc)}
              </Typography>
            )}
            <Stack
              sx={{
                marginTop: "20px",
                width: "100%",
              }}
            >
              <Box
                component="button"
                sx={{
                  cursor: "pointer",
                  border: "2px solid #DC9DB3",
                  width: "150px",
                  height: "50px",
                  background: "none",
                  outline: "none",
                  margin: "auto 0 auto auto",
                }}
                onClick={handleAdd}
              >
                <Typography variant="SmallRoboto" sx={{ color: "#DC9DB3" }}>
                  {translate("cards.add", lang)}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
