import { theme } from "@/config/theme";
import { Box, Grid, Stack, Typography } from "@mui/material";

export default function Footer() {
  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Athena'",
    textTransform: "capitalize",
    color: theme.palette.background.default,
    margintop: { xs: "20px", md: 0 },
    " span": {
      marginTop: "20px",
      fontFamily: "'Roboto'",
      textTransform: "none",
      fontWeight: 300,
    },
  };
  return (
    <Stack
      sx={{
        width: "100%",
        padding: { xs: "30px 15px", md: "75px 50px", background: "gray" },
      }}
    >
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
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
          <Typography variant="h4">Call us</Typography>
          <Typography variant="SmallRoboto">+ 420 987 987 433</Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
          <Typography variant="h4">Customer Care</Typography>
          <Typography variant="SmallRoboto">Order Information</Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
          <Typography variant="h4">Our company</Typography>
          <Typography variant="SmallRoboto">Find a boutique</Typography>
          <Typography variant="SmallRoboto">Careers</Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
          <Typography variant="h4">Legal area</Typography>
          <Typography variant="SmallRoboto">Terms of us</Typography>
          <Typography variant="SmallRoboto">Privacy notice</Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={gridItemStyle}>
          <Typography variant="h4">Socail media</Typography>
          <Typography variant="SmallRoboto">Instagram</Typography>
          <Typography variant="SmallRoboto">Facebook</Typography>
          <Typography variant="SmallRoboto">Twitter</Typography>
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
