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
              count: 1,
              priceId,
              prices: item?.attributes?.Prices,
              img: url + item.attributes?.img?.data?.attributes?.url,
              title_en: item.attributes?.title_en,
              title_cz: item.attributes?.title_cz,
            },
          ]);
        }
      }
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
          background:
            "linear-gradient(137.15deg, #000000 37.02%, rgba(112, 80, 88, 0.844253) 72.16%, #EC9FB6 103.65%)",
          padding: "45px 50px",
          position: "relative",
        },
      }}
    >
      <DialogContent>
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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {item && item.attributes?.img?.data?.attributes?.url && (
              <CustomImage
                src={`${url}${item.attributes.img.data.attributes.url}`}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            {title && (
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.background.default,
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
              <Typography
                variant="h4"
                sx={{ color: theme.palette.background.default }}
              >
                Sizes:
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
                        currentSize == ind
                          ? theme.palette.text.secondary
                          : theme.palette.background.default,
                      "&:hover": {
                        color: theme.palette.text.secondary,
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
                <Decrement count={count} setCount={setCount} />
                <ViewCount count={count} />
                <Increment count={count} setCount={setCount} />
              </Stack>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.text.secondary,
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
                  color: theme.palette.background.default,
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
                  width: "130px",
                  height: "50px",
                  background: "none",
                  outline: "none",
                  margin: "auto 0 auto auto",
                }}
                onClick={handleAdd}
              >
                <Typography variant="SmallRoboto" sx={{ color: "#DC9DB3" }}>
                  add to cart
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
