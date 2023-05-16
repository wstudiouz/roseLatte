import { theme } from "@/config/theme";
import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CustomImage from "./CustomImage";
import { COLORS } from "@/ts/Consts";

interface ComponentProps {
  bgImg: string;
  title: string;
  desc?: string;
  right?: boolean;
}

export default function BeautifulCard({
  bgImg,
  title,
  desc,
  right,
}: ComponentProps) {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "auto",
        minHeight: { md: "750px" },
        padding: { xs: "30px 15px", md: "100px 124px" },
        background: COLORS.WHITE_BACKGROUNDW,
        position: "relative",
      }}
    >
      <CustomImage
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          right: 0,
          top: "-150px",
        }}
        src="/images/beautycardelips1.png"
      />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={"55px"}
      >
        <Grid item xs={12} sm={9} md={4} lg={5}>
          <CustomImage
            src={bgImg}
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={7} sx={{ position: "relative" }}>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.secondary,
              textTransform: "capitalize",
            }}
          >
            {title}
          </Typography>
          <Grid
            item
            lg={12}
            sx={{
              marginTop: "40px",
              width: "100%",
              display: "flex",
              justifyContent: right ? "right" : "left",
            }}
          >
            <Grid item lg={9}>
              <Typography
                variant="SmallRoboto"
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                {desc}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CustomImage
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          left: 0,
          bottom: "-180px",
        }}
        src="/images/beautycardelips2.png"
      />
    </Stack>
  );
}
