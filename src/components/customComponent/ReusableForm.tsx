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
  Typography,
} from "@mui/material";
import CustomImage from "./CustomImage";
import { theme } from "@/config/theme";

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
  return (
    <Grid container>
      <Grid item xs={6}>
        <CustomImage src={bg} sx={{ width: "100%", height: "100vh" }} />
      </Grid>
      <Grid item xs={6} sx={{ padding: "100px 93px" }}>
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
            label="Name"
            variant="outlined"
            margin="normal"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Phone"
            variant="outlined"
            margin="normal"
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Message"
            variant="outlined"
            margin="normal"
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
