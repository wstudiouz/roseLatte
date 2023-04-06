import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ScrollParallax } from "react-just-parallax";
import CustomImage from "../customComponent/CustomImage";

export default function Info() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: { lg: "100vh" },
        minHeight: { md: "750px" },
        padding: "50px 30px",
        background:
          "linear-gradient(137.15deg, #000000 37.02%, rgba(112, 80, 88, 0.844253) 72.16%, #EC9FB6 103.65%)",
        position: "relative",
      }}
    >
      <CustomImage
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          left: 0,
          top: "-130px",
          width: "45vw",
        }}
        src="/images/aboutinfoelips1.png"
      />
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={8} sm={6} md={5} lg={3} sx={{ marginTop: "70px" }}>
          <ScrollParallax strength={0.04}>
            <CustomImage
              src="/images/homecoffee.png"
              sx={{
                width: "100%",
                height: "auto",
                " img": { width: "100%", height: "auto" },
              }}
            />
          </ScrollParallax>
        </Grid>
        <Grid
          item
          xs={8}
          sm={6}
          md={5}
          lg={3}
          sx={{ marginTop: { xs: "50px", sm: "0" } }}
        >
          <ScrollParallax strength={0.04}>
            <CustomImage
              src="/images/homeflower.png"
              sx={{
                width: "100%",
                height: "auto",
                " img": { width: "100%", height: "auto" },
              }}
            />
          </ScrollParallax>
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={3.5} sx={{ marginTop: "70px" }}>
          <Typography variant="SmallRoboto">
            The world of plants is so unique and diverse that it can amaze even
            connoisseurs with its diversity and number of colors. Flowers occupy
            a special place in the plant kingdom. The world of plants is so
            unique and diverse that it can amaze even connoisseurs with its
            diversity and number of colors. Flowers occupy a special place in
            the plant kingdom. The world of plants is so unique and diverse that
            it can amaze even connoisseurs with its diversity and number of
            colors. Flowers occupy a special place in the plant kingdom. The
            world of plants is so unique and diverse that it can amaze even
            connoisseurs with its diversity and number of colors. Flowers occupy
            a special place in the plant kingdom. The world of plants is so
            unique and diverse that it can amaze even connoisseurs with its
            diversity and number of colors. Flowers occupy a special place in
            the plant kingdom. The world of plants is so unique and diverse that
            it can amaze even connoisseurs with its diversity and number
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
