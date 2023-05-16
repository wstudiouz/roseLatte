import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Box,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  Typography,
} from "@mui/material";
import CustomImage from "./CustomImage";
import { theme } from "@/config/theme";
import { COLORS } from "@/ts/Consts";
import CustomInput from "./CustomInput";

interface ComponentProps {
  isFlowerShop?: boolean;
  title: string;
  bg: string;
}

export default function FormComponent({
  isFlowerShop,
  title,
  bg,
}: ComponentProps) {
  type FormValues = {
    name: string;
    phone: string;
    email: string;
    message: string;
    category?: string | undefined;
  };

  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    phone: yup.string().min(3).required(),
    message: yup.string().min(3).required(),
    email: yup.string().min(3).email().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const [formData, setFormData] = useState<FormValues | null>(null);

  const onSubmit = (data: FormValues) => {
    setFormData(data);
    alert(JSON.stringify(data));
  };
  const categoryOptions = ["wedding", "boxes", "art", "composition", "mono"];

  const inputStyle: SxProps = {
    "& .MuiOutlinedInput-root": {
      border: `1px solid ${COLORS.PINK}`,
      color: `${COLORS.PINK} !important`,
      borderRadius: "0",
      fontWeight: "300",
      fontSize: "18px",
      lineHeight: "21px",
      padding: "30px",
      "&:focus": {
        border: "0",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "18px",
        lineHeight: "21px",
      },
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: "16px",
        lineHeight: "26px",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "0px !important",
    },

    marginTop: { xs: "16px", md: "0" },
    width: "100%",
    color: `${COLORS.PINK} !important`,
    " input": {
      p: 0,
    },
  };
  return (
    <Grid container sx={{ background: COLORS.WHITE_BACKGROUNDW }}>
      <Grid item xs={6}>
        <CustomImage src={bg} sx={{ width: "100%", height: "100vh" }} />
      </Grid>
      <Grid item xs={6} sx={{ padding: "100px 75px" }}>
        <Typography
          variant="h2"
          sx={{
            textTransform: "capitalize",
            color: theme.palette.text.secondary,
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
            placeholder="Name"
            margin="normal"
            variant="outlined"
            sx={{
              ...inputStyle,
            }}
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            placeholder="Phone"
            variant="outlined"
            margin="normal"
            sx={{
              ...inputStyle,
            }}
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
          <TextField
            placeholder="Email"
            variant="outlined"
            margin="normal"
            sx={{
              ...inputStyle,
            }}
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            placeholder="Message"
            variant="outlined"
            margin="normal"
            sx={{
              ...inputStyle,
            }}
            {...register("message")}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
          {isFlowerShop ? (
            <>
              <InputLabel id="category-label">Category:</InputLabel>
              <Select
                {...register("category", { required: true })}
                labelId="category-label"
              >
                {categoryOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </>
          ) : (
            <></>
          )}
          <Button
            type="submit"
            variant="outlined"
            sx={{
              color: theme.palette.text.secondary,
              width: "200px",
              border: `1px solid ${theme.palette.text.secondary}`,
              borderRadius: 0,
              outline: "none",
              "&:hover": {
                border: `1px solid ${theme.palette.text.secondary}`,
              },
              marginTop: "30px",
            }}
          >
            Send message
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
