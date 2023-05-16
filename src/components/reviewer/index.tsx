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
        border: "2px solid rgba(236, 159, 182, 0.35)",
        padding: "12px 22px 25px 22px",
        transform: active ? "scale(1.135)" : undefined,
        transition: "all 1s ease",
        margin: "24px",
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
                sx={{ width: "25px", height: "25px", margin: "0 auto" }}
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
          transition: "margin 0.3s ease",
        }}
      >
        <CustomImage
          src={bgImg}
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
