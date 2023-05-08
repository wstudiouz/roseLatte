import { theme } from "@/config/theme";
import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
// import CarouselContainer from "../customComponents/CarouselContainer";
import CustomImage from "../customComponent/CustomImage";

export default function Kitchen() {
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
      <Typography
        variant="h2"
        sx={{ textTransform: "capitalize", textAlign: "center" }}
      >
        Our kitchen
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: "45px", zIndex: 1 }}>
        <Grid item xs={8}>
          {/* <CarouselContainer
            infinite
            activeIndex={0}
            items={[
              "/images/abouthero.png",
              "/images/familyPage.jpg",
              "/images/homeflower.png",
            ]}
          /> */}
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="SmallRoboto"
            sx={{ color: theme.palette.text.primary }}
          >
            The world of plants is so unique and diverse that it can amaze even
            connoisseurs with its diversity and number of colors. Flowers occupy
            a special place in the plant kingdom. It is customary to give them
            to the hero of the occasion to express feelings of love and
            respect.Thanks to the huge assortment, each bouquet can be unique
            and have its own zest.The world of plants is so unique and diverse
            that it can amaze even connoisseurs with its diversity and number of
            colors. Flowers occupy a special place in the plant kingdom. It is
            customary to give them to the hero of the occasion to express
            feelings of love and respect.Thanks to the huge assortment, each
            bouquet can be unique and have its own zest.
          </Typography>
        </Grid>
      </Grid>

      <CustomImage
        sx={{
          width: "595px",
          height: "1030px",
          display: { xs: "none", md: "flex" },
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
        src="/images/aboutkitchenelips.png"
      />
    </Stack>
  );
}
