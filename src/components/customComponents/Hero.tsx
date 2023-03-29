import { theme } from "@/config/theme";
import { Box, Grid, Typography } from "@mui/material";
import { Stack, SxProps } from "@mui/system";
import CustomImage from "./customImage";

interface HeroProps {
  bgImg: string;
  title: string;
  desc?: string;
  right?: boolean;
}

export default function Hero({ bgImg, title, desc, right }: HeroProps) {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        minHeight: "750px",
        padding: { xs: "20px 25px", lg: "70px 75px" },
        display: "flex",
        justifyContent: { xs: "center", md: "end" },
        position: "relative",
      }}
    >
      <CustomImage
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          zIndex: -1,
        }}
        src={bgImg}
      />
      <CustomImage
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          zIndex: 0,
        }}
        src="/images/aboutheroblur.png"
      />
      <Grid
        container
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Grid item xs={10} sm={8} md={6}>
          <Typography variant="h1" sx={{ textTransform: "uppercase" }}>
            {title}
          </Typography>
        </Grid>
        {right ? (
          <Grid
            item
            xs={9}
            sm={7}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              component="hr"
              sx={{
                width: "100px",
                height: "2px",
                background: theme.palette.background.default,
              }}
            ></Box>
            <Typography variant="H4Roboto">{desc}</Typography>
          </Grid>
        ) : (
          <>
            <CustomImage
              sx={{
                display: { xs: "none", md: "flex" },
                position: "absolute",
                right: 0,
                top: "-30px",
              }}
              src="/images/aboutheroelips1.png"
            />
            <CustomImage
              sx={{
                display: { xs: "none", md: "flex" },
                position: "absolute",
                right: 0,
                top: 130,
              }}
              src="/images/aboutheroelips2.png"
            />
          </>
        )}
      </Grid>
    </Stack>
  );
}
