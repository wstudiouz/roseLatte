import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Grid, Typography } from "@mui/material";
import CustomImage from "./CustomImage";
import {
  COLORS,
  FormValues,
  formValidateSchema,
  inputStyle,
} from "@/ts/Consts";
import translate from "@/ts/utils/translate";
import { HeaderContext } from "@/context/headerContext";
import { sendMessage } from "@/ts/utils/Fetcher";

interface ComponentProps {
  title: string;
  bg: string;
}

export default function FormComponent({ title, bg }: ComponentProps) {
  const { lang } = useContext(HeaderContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formValidateSchema(lang)),
  });

  const onSubmit = async (data: FormValues) => {
    let telegramMessage = `New message\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}\n`;
    await sendMessage(telegramMessage, lang);
  };

  return (
    <Grid container sx={{ background: COLORS.WHITE_BACKGROUNDW }}>
      <Grid item xs={12} md={6}>
        <CustomImage src={bg} sx={{ width: "100%", height: "100%" }} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          padding: {
            xs: "10px 20px",
            sm: "20px 30px",
            md: "30px 40px",
            lg: "100px 75px",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textTransform: "capitalize",
            color: COLORS.PINK,
            marginBottom: "20px",
          }}
        >
          {title}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            placeholder={translate("form.name", lang)}
            margin="normal"
            variant="outlined"
            sx={inputStyle}
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            placeholder={translate("form.phone", lang)}
            variant="outlined"
            margin="normal"
            sx={inputStyle}
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
          <TextField
            placeholder={translate("form.email", lang)}
            variant="outlined"
            margin="normal"
            sx={inputStyle}
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
            sx={inputStyle}
            {...register("message")}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
          <Button
            type="submit"
            variant="outlined"
            sx={{
              color: COLORS.PINK,
              border: `1px solid ${COLORS.PINK}`,
              borderRadius: 0,
              outline: "none",
              padding: {
                xs: "10px 15px",
                sm: "15px 20px",
                md: "20px 25px",
                lg: "30px 45px",
              },
              "&:hover": {
                border: `1px solid ${COLORS.PINK}`,
              },
              width: "fit-content",
            }}
          >
            {translate("form.send", lang)}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
