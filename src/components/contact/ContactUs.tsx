import { Grid, Typography, SxProps } from "@mui/material";
import { Stack } from "@mui/system";
import CustomImage from "../customComponent/CustomImage";
import { COLORS, FlexBox } from "@/ts/Consts";
import translate from "@/ts/utils/translate";
import { useContext } from "react";
import { HeaderContext } from "@/context/headerContext";
import {
  FooterCallUsComponent,
  FooterLegalAreaComponentItemsInner,
  FooterListResponseDataItem,
  FooterSocialMediaComponent,
} from "@/ts/REST/api/generated";
import Link from "next/link";

type Props = {
  data: FooterListResponseDataItem;
};

export default function ContactUs({ data }: Props) {
  const stackSx: SxProps = {
    margin: "25px 0",
  };
  const h4Sx: SxProps = {
    color: "#EC9FB6",
    fontFamily: "Athena",
    fontSize: "25px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textTransform: "capitalize",
  };
  const smallSx: SxProps = {
    color: "#EC9FB6",
    fontFamily: "Roboto",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
    marginTop: "20px",
  };
  const { lang } = useContext(HeaderContext);
  return (
    <Stack
      sx={{
        width: "100%",
        height: "auto",
        minHeight: { md: "750px" },
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
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <CustomImage
            src={"/images/bouquet1.png"}
            sx={{
              width: "100%",
              height: "950px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: "40px", width: "100%" }}>
          <Typography
            variant="h2"
            sx={{
              color: COLORS.SECONDARY,
              textTransform: "capitalize",
              fontSize: "80px",
              fontWeight: "400",
            }}
          >
            {translate("contact.contact", lang)}
          </Typography>
          <Stack sx={stackSx}>
            <Typography variant="h4" sx={h4Sx}>
              {translate("contact.address", lang)}
            </Typography>
            <Typography variant="SmallRoboto" sx={smallSx}>
              {translate("contact.addressText", lang)}
            </Typography>
          </Stack>

          {data && data.attributes?.CallUs && (
            <Stack sx={stackSx}>
              <Typography variant="h4" sx={h4Sx}>
                {
                  data.attributes.CallUs[
                    `title_${lang}` as keyof FooterCallUsComponent
                  ]
                }
              </Typography>
              <Typography variant="SmallRoboto" sx={smallSx}>
                {data.attributes.CallUs.phone}
              </Typography>
            </Stack>
          )}

          {data && data.attributes?.SocialMedia && (
            <Stack sx={stackSx}>
              <Typography variant="h4" sx={h4Sx}>
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
                    ...smallSx,
                    "& a": {
                      textDecoration: "none",
                      color: COLORS.PINK,
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
            </Stack>
          )}

          <Stack sx={stackSx}>
            <Typography variant="h4" sx={h4Sx}>
              {translate("contact.openingHours", lang)}
            </Typography>
            <Typography variant="h4" sx={h4Sx}>
              {translate("contact.monFri", lang)}
              <Typography
                variant="SmallRoboto"
                sx={{ ...smallSx, marginLeft: "10px" }}
              >
                {translate("contact.monFriHours", lang)}
              </Typography>
            </Typography>
            <Typography variant="h4" sx={h4Sx}>
              {translate("contact.satSun", lang)}
              <Typography
                variant="SmallRoboto"
                sx={{ ...smallSx, marginLeft: "10px" }}
              >
                {translate("contact.satSunHours", lang)}
              </Typography>
            </Typography>
          </Stack>
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
