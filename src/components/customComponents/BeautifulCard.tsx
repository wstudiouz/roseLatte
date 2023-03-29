import { theme } from "@/config/theme";
import { Grid, Typography } from "@mui/material";
import { Stack, SxProps } from "@mui/system";
import CustomImage from "../customComponents/customImage";

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
        padding: { xs: "30px 15px", md: "100px 20px" },
        background: theme.palette.background.default,
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
        spacing={"55px"}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={9} md={6} lg={5}>
          <CustomImage
            src={bgImg}
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6} lg={5} sx={{ position: "relative" }}>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.secondary,
              textTransform: "capitalize",
            }}
          >
            {title}
          </Typography>
          <Grid item lg={9} sx={{ marginTop: "40px" }}>
            <Typography
              variant="SmallRoboto"
              sx={{ color: theme.palette.text.secondary }}
            >
              {desc}
            </Typography>
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
