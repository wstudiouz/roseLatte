import { Grid, Stack, Typography } from "@mui/material";
import CustomImage from "../customComponent/CustomImage";
import { COLORS } from "@/ts/Consts";

interface ComponentProps {
  bgImg: string;
  title: string;
  num: number;
  link?: string;
}

export default function TopFlowerCard({
  bgImg,
  title,
  num,
  link,
}: ComponentProps) {
  return (
    <Stack sx={{ width: "100%", height: "600px", position: "relative" }}>
      <CustomImage
        src={bgImg}
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 0,
          left: 0,
          top: 0,
        }}
      />
      <Stack
        sx={{
          zIndex: 1,
          height: "100%",
          position: "relative",
          padding: "30px",
          justifyContent: "end",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            position: "absolute",
            right: 20,
            top: 10,
            textTransform: "capitalize",
            color: COLORS.PINK,
          }}
        >
          /{num.toString().padStart(2, "0")}
        </Typography>
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <Typography
              variant="h4"
              sx={{
                textTransform: "capitalize",
                color: COLORS.WHITE,
              }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <CustomImage src="/images/rightarrow.png" sx={{}} />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}
