import { theme } from "@/config/theme";
import { Grid, Typography, useMediaQuery, SxProps } from "@mui/material";
import { Stack } from "@mui/system";
import CustomImage from "../customComponent/CustomImage";
import { AboutKitchenComponent } from "@/ts/REST/api/generated";
import { useBaseUrl } from "@/ts/utils/Hooks";
import { useContext } from "react";
import { HeaderContext } from "@/context/headerContext";
import { useSpringCarousel } from "react-spring-carousel";
import SliderControl from "../customComponent/SliderControll";
import { COLORS, FlexBox } from "@/ts/Consts";

type Props = {
  data: AboutKitchenComponent;
  images: any[];
};

export default function Kitchen({ data, images }: Props) {
  const { lang } = useContext(HeaderContext);
  const title = data && data[`title_${lang}` as keyof AboutKitchenComponent];
  const rightText =
    data && data[`rightText_${lang}` as keyof AboutKitchenComponent];
  const url = useBaseUrl();
  const xs = useMediaQuery(theme.breakpoints.between(0, 600));

  const generateItemsPerSlide = (): number => {
    return xs ? 1 : 2;
  };

  const CardStyle: SxProps = {
    width: {
      xs: "300px",
      sm: "250px",
      md: "400px",
      lg: "350px",
      xl: "400px",
    },
    height: {
      xs: "320px",
      sm: "270px",
      md: "420px",
      lg: "370px",
      xl: "420px",
    },
    margin: "0 auto",
  };
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: generateItemsPerSlide(),
      withLoop: true,
      initialStartingPosition:
        generateItemsPerSlide() > 2 ? "center" : undefined,
      items: images.map((item) => {
        return {
          ...item,
          renderItem: (
            <Stack sx={CardStyle}>
              <CustomImage
                src={`${url}${item?.attributes?.url ?? ""}`}
                sx={CardStyle}
              />
            </Stack>
          ),
        };
      }),
    });

  return (
    <Stack
      sx={{
        width: "100%",
        height: { lg: "100vh" },
        minHeight: { md: "750px" },
        padding: "50px 30px",
        background: COLORS.BG,
        position: "relative",
      }}
    >
      {data && title && (
        <Typography
          variant="h2"
          sx={{ textTransform: "capitalize", textAlign: "center" }}
        >
          {String(title)}
        </Typography>
      )}
      <Grid
        container
        spacing={3}
        sx={{
          marginTop: "45px",
          zIndex: 1,
          ...FlexBox,
        }}
      >
        <Grid item xs={12} lg={8}>
          <Stack
            sx={{
              overflowX: "clip",
              width: "100%",
              marginX: "auto",
              position: "relative",
            }}
          >
            {carouselFragment}
          </Stack>
          <SliderControl
            slideToPrevItem={slideToPrevItem}
            slideToNextItem={slideToNextItem}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          {data && rightText && (
            <Typography variant="SmallRoboto" sx={{ color: COLORS.PINK }}>
              {String(rightText)}
            </Typography>
          )}
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
