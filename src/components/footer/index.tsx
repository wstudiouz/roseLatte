import { Box, Grid, Stack, Typography } from "@mui/material";
import CustomImage from "../customComponent/CustomImage";
import { useContext, useEffect, useState } from "react";
import { HeaderContext } from "@/context/headerContext";
import {
  FooterCallUsComponent,
  FooterLegalAreaComponent,
  FooterLegalAreaComponentItemsInner,
  FooterListResponseDataItem,
  FooterSocialMediaComponent,
} from "@/ts/REST/api/generated";
import { getter } from "@/ts/utils/Fetcher";
import Link from "next/link";
import { COLORS } from "@/ts/Consts";

export default function Footer() {
  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Athena'",
    textTransform: "capitalize",
    color: COLORS.WHITE,
    marginTop: { xs: "20px", md: 0 },
    " span": {
      marginTop: "20px",
      fontFamily: "'Roboto'",
      textTransform: "none",
      fontWeight: 300,
    },
  };
  const { lang } = useContext(HeaderContext);
  const [data, setData] = useState<FooterListResponseDataItem>();
  useEffect(() => {
    const getValues = async () => {
      const result = await getter(
        "footer?populate=SocialMedia.Items,CallUs,LegalArea.items"
      );
      if (result.ok && result.data) {
        setData(result.data);
      }
    };
    getValues();
  }, []);
  return (
    <Stack
      sx={{
        width: "100%",
        padding: { xs: "30px 15px", md: "75px 50px" },
        position: "relative",
      }}
    >
      <CustomImage
        src="/images/footerbg.png"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <CustomImage
        src="/images/footerbgrest.png"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Literata'",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "25px",
          lineHeight: "37px",
          textTransform: "lowercase",
          color: "#FFFFFF",
        }}
      >
        rose latte
      </Typography>
      <Box
        component="hr"
        sx={{
          width: "100%",
          background: COLORS.PINK,
        }}
      />

      <Grid
        container
        sx={{
          margin: { xs: "20px 0", md: "40px 0" },
          justifyContent: { xs: "left" },
        }}
      >
        {data && data.attributes?.CallUs && (
          <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
            <Typography variant="h4">
              {
                data.attributes.CallUs[
                  `title_${lang}` as keyof FooterCallUsComponent
                ]
              }
            </Typography>
            <Typography variant="SmallRoboto">
              {data.attributes.CallUs.phone}
            </Typography>
          </Grid>
        )}
        {data && data.attributes?.LegalArea && (
          <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
            <Typography variant="h4">
              {String(
                data.attributes.LegalArea[
                  `title_${lang}` as keyof FooterLegalAreaComponent
                ]
              )}
            </Typography>
            {data.attributes.LegalArea.items?.map((e, ind) => (
              <Typography
                key={ind}
                variant="SmallRoboto"
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: COLORS.WHITE,
                  },
                }}
              >
                <Link href={e.url ?? ""} passHref>
                  {
                    e[
                      `text_${lang}` as keyof FooterLegalAreaComponentItemsInner
                    ]
                  }
                </Link>
              </Typography>
            ))}
          </Grid>
        )}
        {data && data.attributes?.SocialMedia && (
          <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
            <Typography variant="h4">
              {String(
                data.attributes.SocialMedia[
                  `title_${lang}` as keyof FooterSocialMediaComponent
                ]
              )}
            </Typography>
            {data.attributes.SocialMedia.Items?.map((e, ind) => (
              <Typography
                key={ind}
                variant="SmallRoboto"
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: COLORS.WHITE,
                  },
                }}
              >
                <Link href={e.url ?? ""} passHref>
                  {
                    e[
                      `text_${lang}` as keyof FooterLegalAreaComponentItemsInner
                    ]
                  }
                </Link>
              </Typography>
            ))}
          </Grid>
        )}
      </Grid>
      <Box
        component="hr"
        sx={{
          width: "100%",
          background: COLORS.PINK,
        }}
      />
    </Stack>
  );
}
