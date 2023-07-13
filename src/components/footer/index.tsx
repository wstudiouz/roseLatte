import { theme } from "@/config/theme";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CustomImage from "../customComponent/CustomImage";
import translate from "@/ts/utils/translate";
import { useContext } from "react";
import { HeaderContext } from "@/context/headerContext";

export default function Footer() {
  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Athena'",
    textTransform: "capitalize",
    color: theme.palette.background.default,
    marginTop: { xs: "20px", md: 0 },
    " span": {
      marginTop: "20px",
      fontFamily: "'Roboto'",
      textTransform: "none",
      fontWeight: 300,
    },
  };
  const { lang } = useContext(HeaderContext);
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
          background: theme.palette.text.primary,
        }}
      />

      <Grid
        container
        sx={{
          margin: { xs: "20px 0", md: "40px 0" },
          justifyContent: { xs: "left", md: "space-between" },
        }}
      >
        <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
          <Typography variant="h4">
            {translate("footer.callUs.title", lang)}
          </Typography>
          <Typography variant="SmallRoboto">
            {translate("footer.callUs.phoneNumber", lang)}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
          <Typography variant="h4">
            {translate("footer.customerCare.title", lang)}
          </Typography>
          <Typography variant="SmallRoboto">
            {translate("footer.customerCare.orderInformation", lang)}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
          <Typography variant="h4">
            {translate("footer.ourCompany.title", lang)}
          </Typography>
          <Typography variant="SmallRoboto">
            {translate("footer.ourCompany.findBoutique", lang)}
          </Typography>
          <Typography variant="SmallRoboto">
            {translate("footer.ourCompany.careers", lang)}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
          <Typography variant="h4">
            {translate("footer.legalArea.title", lang)}
          </Typography>
          <Typography variant="SmallRoboto">
            {translate("footer.legalArea.termsOfUse", lang)}
          </Typography>
          <Typography variant="SmallRoboto">
            {translate("footer.legalArea.privacyNotice", lang)}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
          <Typography variant="h4">
            {translate("footer.socialMedia.title", lang)}
          </Typography>
          <Typography variant="SmallRoboto">
            {translate("footer.socialMedia.instagram", lang)}
          </Typography>
          <Typography variant="SmallRoboto">
            {translate("footer.socialMedia.facebook", lang)}
          </Typography>
          <Typography variant="SmallRoboto">
            {translate("footer.socialMedia.twitter", lang)}
          </Typography>
        </Grid>
      </Grid>
      <Box
        component="hr"
        sx={{
          width: "100%",
          background: theme.palette.text.primary,
        }}
      />
    </Stack>
  );
}
