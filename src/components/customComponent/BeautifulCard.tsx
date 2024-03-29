import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CustomImage from "./CustomImage";
import { COLORS, FlexBox } from "@/ts/Consts";
import { AboutGetIdeasComponent } from "@/ts/REST/api/generated";
import { useBaseUrl } from "@/ts/utils/Hooks";
import { useContext } from "react";
import { HeaderContext } from "@/context/headerContext";

interface ComponentProps {
  bgImg?: string;
  title?: string;
  desc?: string;
  right?: boolean;
  data?: AboutGetIdeasComponent;
}

export default function BeautifulCard({ right, data }: ComponentProps) {
  const url = useBaseUrl();
  const { lang } = useContext(HeaderContext);
  const title = data && data[`title_${lang}` as keyof AboutGetIdeasComponent];
  const desc = data && data[`desc_${lang}` as keyof AboutGetIdeasComponent];
  return (
    <Stack
      sx={{
        width: "100%",
        height: "auto",
        minHeight: { md: "750px" },
        padding: { xs: "40px 25px", md: "100px 124px" },
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
        sx={{
          ...FlexBox,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid item xs={11} sm={9} md={5.6} sx={{ width: "100%", margin: { xs: "0 auto", md: "0" } }}>
          <Stack sx={{ width: "100%" }}>
            {data?.img?.data?.attributes?.url && (
              <CustomImage
                src={`${url}${data.img.data.attributes.url}`}
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            )}
          </Stack>
        </Grid>
        <Grid
          item
          xs={11}
          md={6}
          sx={{
            position: "relative",
            paddingLeft: { md: "30px" },
            margin: { xs: "30px auto 0 auto", md: "0" }
          }}
        >
          {data && title && (
            <Typography
              variant="h2"
              sx={{
                color: COLORS.SECONDARY,
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              {String(title)}
            </Typography>
          )}
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
                  color: COLORS.SECONDARY,
                }}
              >
                {String(desc)}
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
