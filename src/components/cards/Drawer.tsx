import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Drawer,
  Typography,
  Stack,
  Box,
  Button,
  TextField,
  SxProps,
} from "@mui/material";
import { getter, sendMessage } from "@/ts/utils/Fetcher";
import { useBaseUrl } from "@/ts/utils/Hooks";
import { Card, HeaderContext } from "@/context/headerContext";
import BagItem from "./BagItem";
import translate from "@/ts/utils/translate";
import { FlowerListResponseDataItem } from "@/ts/REST/api/generated";
import {
  COLORS,
  FormValues,
  formValidateSchema,
  inputStyle,
} from "@/ts/Consts";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

type Props = {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>;
};

const CardsDrawer = ({ drawerOpen, setDrawerOpen, cards, setCards }: Props) => {
  const url = useBaseUrl();
  const { lang } = useContext(HeaderContext);

  // useEffect(() => {
  //   const filteredCards = (myData: FlowerListResponseDataItem[]): Card[] => {
  //     const filteredItems = cards.filter((card: Card) => {
  //       const matchingItem = myData.find((item) => item.id === card.id);
  //       if (matchingItem) {
  //         card.title_en = matchingItem.attributes?.title_en;
  //         card.title_cz = matchingItem.attributes?.title_cz;
  //         card.img = url + matchingItem.attributes?.img.data?.attributes?.url;
  //         card.prices = matchingItem.attributes?.Prices;
  //       }
  //       return matchingItem;
  //     });

  //     return filteredItems;
  //   };

  //   const getValues = async () => {
  //     const getFlower = await getter("flowers?populate=img,Prices");
  //     if (getFlower.ok && getFlower.data) {
  //       const data = filteredCards(getFlower.data);
  //       setCards(data as Card[]);
  //     }
  //   };
  //   getValues();
  // }, [url, drawerOpen]);
  const allPrice = () => {
    let total = 0;
    cards.map((i: Card) => {
      if (i.prices?.length) {
        const findPrice = i.prices.find((item) => item.id == i.priceId);
        if (findPrice) {
          total += (findPrice.price ?? 1) * i.count;
        } else {
          total += (i.prices[0].price ?? 1) * i.count;
        }
      }
    });
    return total;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formValidateSchema(lang)),
  });

  const onSubmit = async (data: FormValues) => {
    let telegramMessage = `New client\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}\n`;
    cards.map((i) => {
      telegramMessage += `\n<b>${i.title_en} - count(${i.count}) - size(${
        i.prices?.find((e) => e.id == i.priceId)?.size
      })</b>`;
    });
    telegramMessage += `\n\nall price: ${allPrice()}$`;
    localStorage.setItem("cards", JSON.stringify([]));
    await sendMessage(telegramMessage, lang);
  };

  const drawerInputStyles: SxProps = {
    ...inputStyle,
    marginBottom: "10px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "6px",
      border: `1px solid ${COLORS.PINK}`,
      color: `${COLORS.PINK} !important`,
      padding: "5px 7px",
    },
  };

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      sx={{
        display: "block",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: { xs: "100%", md: "75%", lg: "50%" },
          padding: "20px",
        },
      }}
    >
      <Stack>
        {cards.length ? (
          cards.map((e, index) => <BagItem itemId={e.id} key={index} />)
        ) : (
          <Typography>{translate("cards.empty", lang)}</Typography>
        )}
      </Stack>
      {cards.length ? (
        <Stack
          sx={{
            width: "700",
            position: "sticky",
            bottom: 30,
            padding: "10px 15px",
            borderRadius: "6px",
            border: "1px solid var(--black-300, #CBCBCB)",
            background: "var(--white, #FFF)",
            marginTop: "40px",
          }}
        >
          <Typography variant="h6">
            {translate("cards.allprice", lang)}: ${allPrice()}
          </Typography>

          <Box
            component="form"
            sx={{ width: "100%" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              placeholder={translate("form.name", lang)}
              margin="normal"
              variant="outlined"
              sx={drawerInputStyles}
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              placeholder={translate("form.phone", lang)}
              variant="outlined"
              margin="normal"
              sx={drawerInputStyles}
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
            <TextField
              placeholder={translate("form.email", lang)}
              variant="outlined"
              margin="normal"
              sx={drawerInputStyles}
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              placeholder={translate("form.message", lang)}
              variant="outlined"
              margin="normal"
              multiline
              rows={3}
              sx={drawerInputStyles}
              {...register("message")}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
            <Box
              component="button"
              type="submit"
              sx={{
                width: "100%",
                display: "flex",
                padding: "10px 26px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                alignSelf: "stretch",
                borderRadius: "6px",
                background:
                  "linear-gradient(137.15deg, #000000 37.02%, rgba(112, 80, 88, 0.844253) 72.16%, #EC9FB6 103.65%)",
                outline: "none",
                border: "none",
                color: COLORS.WHITE,
                cursor: "pointer",
              }}
            >
              {translate("cards.buy", lang)}
            </Box>
          </Box>
        </Stack>
      ) : (
        <></>
      )}
    </Drawer>
  );
};

export default CardsDrawer;
