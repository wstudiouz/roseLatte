import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ScrollParallax } from "react-just-parallax";
import CustomImage from "../customComponent/CustomImage";
import { AboutHeroBottomComponent } from "@/ts/REST/api/generated";
import { useBaseUrl } from "@/ts/utils/Hooks";
import { useContext } from "react";
import { HeaderContext } from "@/context/headerContext";

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
            {data && data?.img1?.data?.attributes?.url && (
              <CustomImage
                sx={{
                  display: { xs: "none", md: "flex" },
                  position: "absolute",
                  left: 0,
                  top: "-130px",
                  height: "400px",
                  width: "350px",
                }}
                src={`${url}${data.img1.data.attributes.url}`}
              />
            )}
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
            {data && data?.img2?.data?.attributes?.url && (
              <CustomImage
                sx={{
                  display: { xs: "none", md: "flex" },
                  position: "absolute",
                  left: 0,
                  top: "-130px",
                  width: "400",
                  height: "450px",
                }}
                src={`${url}${data.img2.data.attributes.url}`}
              />
            )}
          </ScrollParallax>
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={3.5} sx={{ marginTop: "70px" }}>
          <Typography variant="SmallRoboto">{String(text)}</Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
