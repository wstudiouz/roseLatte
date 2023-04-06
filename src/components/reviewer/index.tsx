import { theme } from "@/config/theme";
import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CustomImage from "../customComponent/CustomImage";

interface HeroProps {
  bgImg: string;
  title: string;
  name?: string;
  right?: boolean;
  stars?: number;
  active?: boolean;
}

export default function Reviewer({
  bgImg,
  title,
  name,
  right,
  stars,
  active,
}: HeroProps) {
  return (
    <Stack
      sx={{
        width: active ? "410px" : "300px",
        height: active ? "312px" : "269px",
        left: "515px",
        top: "3961px",
        border: "2px solid rgba(236, 159, 182, 0.35)",
        padding: active ? "12px 61px 35px 61px" : "12px 22px 25px 22px",
        transition: "all 1s ease",
      }}
    >
      <Grid
        container
        spacing={1}
        columns={10}
        direction="row"
        justifyContent="center"
      >
        {"1"
          .repeat(stars || 5)
          .split("")
          .map((_, ind) => (
            <Grid item xs={2} key={ind}>
              <CustomImage
                src="/stars.svg"
                sx={{ width: "25px", height: "25px" }}
              />
            </Grid>
          ))}
      </Grid>
      <Typography
        variant="SmallRoboto"
        sx={{
          color: active
            ? theme.palette.text.secondary
            : theme.palette.text.primary,
          marginTop: "20px",
        }}
      >
        {title}
      </Typography>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          flexDirection: "row",
          marginTop: active ? "35px" : "20px",
        }}
      >
        <CustomImage
          src="https://picsum.photos/75/75"
          sx={{
            width: "75px",
            height: "75px",
            "& img": { borderRadius: "50%" },
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Athena'",
            textTransform: "capitalize",
            marginLeft: "20px",
            color: theme.palette.background.default,
          }}
        >
          {name}
        </Typography>
      </Stack>
    </Stack>
  );
}
