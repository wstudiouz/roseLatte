import { theme } from "@/config/theme";
import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CustomImage from "../customComponents/customImage";

interface HeroProps {
  bgImg: string;
  title: string;
  desc?: string;
  right?: boolean;
}

export default function TopHero({ bgImg, title, desc, right }: HeroProps) {
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
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Grid item xs={10} sm={7} md={5}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Athena'",
              textTransform: "uppercase",
              color: theme.palette.background.default,
            }}
          >
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
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Grid item xs={3}>
              <Box
                component="hr"
                sx={{
                  width: "100%",
                  height: "2px",
                  background: theme.palette.background.default,
                }}
              ></Box>
            </Grid>
            <Grid item xs={4} sx={{ marginLeft: "50px" }}>
              <Typography
                variant="H4Roboto"
                sx={{ color: theme.palette.background.default }}
              >
                {desc}
              </Typography>
            </Grid>
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
