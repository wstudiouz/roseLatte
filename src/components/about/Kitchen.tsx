import { theme } from "@/config/theme";
import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CustomImage from "../customComponent/CustomImage";
import {
  AboutHeroBottomComponentImg2Data,
  AboutKitchenComponent,
} from "@/ts/REST/api/generated";
import { useBaseUrl } from "@/ts/utils/Hooks";
import { useSpringCarousel } from "react-spring-carousel";
import {
  BorderButtons,
  NextButton,
  PrevButton,
} from "../customComponent/SliderControll";
import { useContext, useState } from "react";
import { HeaderContext } from "@/context/headerContext";

type Props = {
  data: AboutKitchenComponent;
  images: any[];
};

export default function Kitchen({ data, images }: Props) {
  const [currentSlide, setCurrentSlide] = useState<number>(images[0]?.id);
  const { lang } = useContext(HeaderContext);
  const title = data && data[`title_${lang}` as keyof AboutKitchenComponent];
  const rightText =
    data && data[`rightText_${lang}` as keyof AboutKitchenComponent];
  const url = useBaseUrl();
  // const {
  //   carouselFragment,
  //   slideToPrevItem,
  //   slideToNextItem,
  //   useListenToCustomEvent,
  // } = useSpringCarousel({
  //   itemsPerSlide: 2,
  //   withLoop: true,
  //   initialStartingPosition: "center",
  //   items: images.map((item) => {
  //     return {
  //       ...item,
  //       renderItem: (
  //         <CustomImage src={`${url}${item.attributes?.url}`} sx={{}} />
  //       ),
  //     };
  //   }),
  // });
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
      {data && title && (
        <Typography
          variant="h2"
          sx={{ textTransform: "capitalize", textAlign: "center" }}
        >
          {String(title)}
        </Typography>
      )}
      <Grid container spacing={3} sx={{ marginTop: "45px", zIndex: 1 }}>
        <Grid item xs={8}>
          <Stack>{/* carousel fragment here */}</Stack>
          <Stack
            sx={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "55px",
            }}
          >
            {/* <PrevButton slideToPrevItem={slideToPrevItem} /> */}
            {/* <BorderButtons items={images} current={currentSlide} /> */}
            {/* <NextButton slideToNextItem={slideToNextItem} /> */}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          {data && rightText && (
            <Typography
              variant="SmallRoboto"
              sx={{ color: theme.palette.text.primary }}
            >
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
