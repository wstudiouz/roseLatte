import { theme } from "@/config/theme";
import { Grid, Typography, SxProps } from "@mui/material";
import { Stack } from "@mui/system";
import CustomImage from "../customComponent/CustomImage";
import { COLORS } from "@/ts/Consts";
import translate from "@/ts/utils/translate";
import { useContext } from "react";
import { HeaderContext } from "@/context/headerContext";

export default function ContactUs() {
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
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={6}>
          <CustomImage
            src={"/images/bouquet1.png"}
            sx={{
              width: "100%",
              height: "950px",
            }}
          />
        </Grid>
        <Grid item xs={6} sx={{ padding: "40px" }}>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.secondary,
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

          <Stack sx={stackSx}>
            <Typography variant="h4" sx={h4Sx}>
              {translate("contact.call", lang)}
            </Typography>
            <Typography variant="SmallRoboto" sx={smallSx}>
              {translate("contact.callText", lang)}
            </Typography>
          </Stack>

          <Stack sx={stackSx}>
            <Typography variant="h4" sx={h4Sx}>
              {translate("contact.socialMedia", lang)}
            </Typography>
            <Typography variant="SmallRoboto" sx={smallSx}>
              {translate("contact.instagram", lang)}
            </Typography>
            <Typography variant="SmallRoboto" sx={smallSx}>
              {translate("contact.facebook", lang)}
            </Typography>
            <Typography variant="SmallRoboto" sx={smallSx}>
              {translate("contact.twitter", lang)}
            </Typography>
          </Stack>

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
