import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ScrollParallax } from "react-just-parallax";
import CustomImage from "../customComponent/CustomImage";
import { AboutHeroBottomComponent } from "@/ts/REST/api/generated";
import { useBaseUrl } from "@/ts/utils/Hooks";
import { useContext } from "react";
import { HeaderContext } from "@/context/headerContext";
import { COLORS, FlexBox } from "@/ts/Consts";

type Props = {
  data: AboutHeroBottomComponent;
};

export default function Info({ data }: Props) {
  const url = useBaseUrl();
  const { lang } = useContext(HeaderContext);
  const text = data && data[`text_${lang}` as keyof AboutHeroBottomComponent];
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
        sx={{
          ...FlexBox,
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Grid item xs={12} lg={7.5} sx={FlexBox}>
          {data && data?.img1?.data?.attributes?.url && (
            <Stack sx={{ marginTop: "70px", width: "45%" }}>
              <ScrollParallax strength={0.04}>
                <CustomImage
                  sx={{
                    width: "100%",
                  }}
                  src={`${url}${data.img1.data.attributes.url}`}
                />
              </ScrollParallax>
            </Stack>
          )}
          {data && data?.img2?.data?.attributes?.url && (
            <Stack sx={{ marginTop: { xs: "50px", sm: "0" }, width: "48%" }}>
              <ScrollParallax strength={0.04}>
                <CustomImage
                  sx={{
                    width: "100%",
                  }}
                  src={`${url}${data.img2.data.attributes.url}`}
                />
              </ScrollParallax>
            </Stack>
          )}
        </Grid>
        <Grid item xs={12} lg={3.5} sx={{ marginTop: "70px" }}>
          <Typography variant="SmallRoboto" sx={{ textAlign: "justify" }}>
            {String(text)}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
