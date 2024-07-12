import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  Drawer,
  Typography,
  Stack,
  Box,
  TextField,
  SxProps,
} from "@mui/material";
import { sendMessage } from "@/ts/utils/Fetcher";
import { Card, HeaderContext } from "@/context/headerContext";
import BagItem from "./BagItem";
import translate from "@/ts/utils/translate";
import {
  COLORS,
  FlexBox,
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
  const [formOpen, setFormOpen] = useState<boolean>();
  const { lang } = useContext(HeaderContext);
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
      telegramMessage += `\n<b>${i.title_en} - count(${i.count}) - size(${i.prices?.find((e) => e.id == i.priceId)?.size
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
      transitionDuration={600}
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
      <Stack
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {cards.length ? (
          <Stack sx={{ height: "100%" }}>
            <Stack sx={{ height: "100%" }}>
              <Typography variant="h6" onClick={() => setDrawerOpen(false)}>
                {translate("cards.close", lang)}
              </Typography>
              {cards.map((e, index) => (
                <BagItem itemId={e.id} key={index} />
              ))}
            </Stack>
            <Stack
              sx={{
                width: "100%",
                position: "sticky",
                bottom: 0,
                padding: "10px 15px",
                borderRadius: "6px",
                border: "1px solid var(--black-300, #CBCBCB)",
                background: "var(--white, #FFF)",
                marginTop: "30px",
              }}
            >
              <Stack
                sx={{
                  ...FlexBox,
                  flexDirection: "row",
                }}
              >
                <Typography variant="h6">
                  {translate("cards.allprice", lang)}: ${allPrice()}
                </Typography>
                <Typography
                  variant="h6"
                  onClick={() => setFormOpen((prev) => !prev)}
                >
                  {formOpen
                    ? translate("cards.close", lang)
                    : translate("cards.confirm", lang)}
                </Typography>
              </Stack>

              {formOpen && (
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
                      background: COLORS.BG,
                      outline: "none",
                      border: "none",
                      color: COLORS.WHITE,
                      cursor: "pointer",
                    }}
                  >
                    {translate("cards.buy", lang)}
                  </Box>
                </Box>
              )}
            </Stack>
          </Stack>
        ) : (
          <Stack
            sx={{
              ...FlexBox,
              flexDirection: "row",
            }}
          >
            <Typography>{translate("cards.empty", lang)}</Typography>
            <Typography onClick={() => setDrawerOpen(false)} sx={{ cursor: "pointer" }}>
              {translate("cards.close", lang)}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Drawer>
  );
};

export default CardsDrawer;
