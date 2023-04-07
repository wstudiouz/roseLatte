import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Grid, Stack, Typography } from "@mui/material";
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
    msg: string;
    category?: string | undefined;
  };

  const inputsStyle = {
    padding: "30px",
    borderRadius: "0",
    fontFamily: "'Roboto'",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "21px",
    marginBottom: "5px",
    outline: "none",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [formData, setFormData] = useState<FormValues | null>(null);

  const onSubmit = (data: FormValues) => {
    setFormData(data);
    alert(JSON.stringify(data));
  };
  const categoryOptions = [
    "Select category",
    "wedding",
    "boxes",
    "art",
    "composition",
    "mono",
  ];
  const validateName = (value: string) =>
    value.trim().length > 2 || "Please name at least 3 letters long";

  const validatePhone = (value: string) =>
    /^\+998\d{9}$/i.test(value.trim()) ||
    "Please enter a valid phone number (+998xxxxxxxxx)";

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(value.trim()) ||
    "Please enter a valid email address";

  const validateMsg = (value: string) =>
    value.trim().split(" ").length > 2 ||
    "Please message at least 3 words long";
  const validateCategory = (value: string | undefined) =>
    (value && value.trim() !== "false") || "Please select a valid category";
  return (
    <Grid container>
      <Grid item xs={6}>
        <CustomImage src={bg} sx={{ width: "100%", height: "910px" }} />
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
          sx={{ display: "flex", flexDirection: "column", marginTop: "50px" }}
        >
          <Stack sx={{ marginBottom: "25px" }}>
            <Box
              component="input"
              placeholder="Name"
              {...register("name", { validate: validateName })}
              sx={{
                ...inputsStyle,
                border: errors?.name
                  ? "2px solid red"
                  : `2px solid ${theme.palette.text.secondary}`,
                color: errors?.name ? "red" : theme.palette.text.secondary,
                "&::placeholder": {
                  color: errors?.name ? "red" : theme.palette.text.secondary,
                },
              }}
            ></Box>
            {errors?.name ? (
              <Typography
                variant="SmallRoboto"
                sx={{ color: "red", fontWeight: "500" }}
              >
                {errors?.name?.message}
              </Typography>
            ) : (
              <></>
            )}
          </Stack>

          <Stack sx={{ marginBottom: "25px" }}>
            <Box
              component="input"
              placeholder="Phone"
              {...register("phone", { validate: validatePhone })}
              sx={{
                ...inputsStyle,
                border: errors?.phone
                  ? "2px solid red"
                  : `2px solid ${theme.palette.text.secondary}`,
                color: errors?.phone ? "red" : theme.palette.text.secondary,
                "&::placeholder": {
                  color: errors?.phone ? "red" : theme.palette.text.secondary,
                },
              }}
            ></Box>
            {errors?.phone ? (
              <Typography
                variant="SmallRoboto"
                sx={{ color: "red", fontWeight: "500" }}
              >
                {errors?.phone?.message}
              </Typography>
            ) : (
              <></>
            )}
          </Stack>

          <Stack sx={{ marginBottom: "25px" }}>
            <Box
              component="input"
              placeholder="Email"
              {...register("email", { validate: validateEmail })}
              sx={{
                ...inputsStyle,
                border: errors?.email
                  ? "2px solid red"
                  : `2px solid ${theme.palette.text.secondary}`,
                color: errors?.email ? "red" : theme.palette.text.secondary,
                "&::placeholder": {
                  color: errors?.email ? "red" : theme.palette.text.secondary,
                },
              }}
            ></Box>
            {errors?.email ? (
              <Typography
                variant="SmallRoboto"
                sx={{ color: "red", fontWeight: "500" }}
              >
                {errors?.email?.message}
              </Typography>
            ) : (
              <></>
            )}
          </Stack>

          {isFlowerShop ? (
            <>
              <Stack sx={{ marginBottom: "25px" }}>
                <Box
                  component="select"
                  {...register("category", { validate: validateCategory })}
                  sx={{
                    ...inputsStyle,
                    border: errors?.category
                      ? "2px solid red"
                      : `2px solid ${theme.palette.text.secondary}`,
                    color: errors?.category
                      ? "red"
                      : theme.palette.text.secondary,
                    paddingRight: "30px !important",
                  }}
                >
                  {categoryOptions.map((option, ind) => (
                    <Box key={ind} component="option" value={option}>
                      {option}
                    </Box>
                  ))}
                </Box>
                {errors?.category ? (
                  <Typography
                    variant="SmallRoboto"
                    sx={{ color: "red", fontWeight: "500" }}
                  >
                    {errors?.category?.message}
                  </Typography>
                ) : (
                  <></>
                )}
              </Stack>
            </>
          ) : (
            <></>
          )}

          <Stack sx={{ marginBottom: "25px" }}>
            <Box
              component="textarea"
              placeholder="Message"
              {...register("msg", { validate: validateMsg })}
              sx={{
                ...inputsStyle,
                border: errors?.msg
                  ? "2px solid red"
                  : `2px solid ${theme.palette.text.secondary}`,
                color: errors?.msg ? "red" : theme.palette.text.secondary,
                "&::placeholder": {
                  color: errors?.msg ? "red" : theme.palette.text.secondary,
                },
                resize: "none",
              }}
            ></Box>
            {errors?.msg ? (
              <Typography
                variant="SmallRoboto"
                sx={{ color: "red", fontWeight: "500" }}
              >
                {errors?.msg?.message}
              </Typography>
            ) : (
              <></>
            )}
          </Stack>

          <Box
            component="button"
            type="submit"
            sx={{
              ...inputsStyle,
              padding: "30px 45px",
              color: theme.palette.text.secondary,
              border: `2px solid ${theme.palette.text.secondary}`,
              background: "none",
              outline: "none",
              "&:hover": {
                border: `2px solid ${theme.palette.text.secondary}`,
              },
              width: "230px",
            }}
          >
            Send message
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
