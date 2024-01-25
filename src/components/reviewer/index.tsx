import { Avatar, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CustomImage from "../customComponent/CustomImage";
import { COLORS } from "@/ts/Consts";

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
        transform: active ? "scale(1)" : "scale(0.9)",
        transition: "all 0.7s ease",
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
                src="/images/star.svg"
                sx={{ width: "25px", height: "25px", margin: "0 auto" }}
              />
            </Grid>
          ))}
      </Grid>
      <Typography
        variant="SmallRoboto"
        sx={{
          color: active ? COLORS.SECONDARY : COLORS.PINK,
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
        <Avatar src={bgImg} sx={{
          width: "75px",
          height: "75px"
        }} />
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Athena'",
            textTransform: "capitalize",
            marginLeft: "20px",
            color: COLORS.WHITE,
          }}
        >
          {name}
        </Typography>
      </Stack>
    </Stack>
  );
}
