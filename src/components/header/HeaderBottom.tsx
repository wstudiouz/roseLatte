import { Box, Stack, Typography } from "@mui/material";

interface ComponentProps {
  active: boolean;
}

export default function HeaderBottom({ active }: ComponentProps) {
  const NavItems = {
    color: "#103a3a",
    position: "relative",
    display: "inline-block",
    WebkitTransition: "all 1s ease-in-out",
    transition: "all 1s ease-in-out",
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
    opacity: active ? 1 : 0,
    transform: active ? "translate(0px,0px)" : "translate(0px,60px)",
    zIndex: 2,
  };
  return (
    <Stack
      sx={{
        position: "fixed",
        width: active ? "100%" : 0,
        top: "0",
        left: "50%",
        bottom: "0",
        WebkitTransform: "translateX(-50%)",
        transform: "translateX(-50%)",
        backgroundColor: "#fffbf4",
        zIndex: 0,
        overflow: "hidden",
        WebkitBoxShadow: "inset .5px 0 0 0 #103a3a, inset -.5px 0 0 0 #103a3a",
        boxShadow: "inset .5px 0 0 0 #103a3a, inset -.5px 0 0 0 #103a3a",
        WebkitTransition: "all 1s ease",
        transition: "all 1s ease",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          WebkitTransform: "translate(-50%, -50%)",
          transform: "translate(-50%, -50%)",
          opacity: 0.3,
          marginTop: "2.0833333333vw",
          zIndex: 1,
        }}
      >
        <Box
          sx={{ width: "100%", zIndex: 1 }}
          component="svg"
          viewBox="0 0 1500 2200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Box
            sx={{
              fontFamily: "Oranienbaum, serif",
              strokeDasharray: "100%",
              strokeDashoffset: "100%",
              fontSize: "290px",
              lineHeight: "88%",
              letterSpacing: "-.045em",
              strokeWidth: ".5px",
              textTransform: "uppercase",
              opacity: 0.4,
            }}
            component="text"
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#000"
          >
            RoseLatte
          </Box>
        </Box>
      </Stack>
      <Stack
        sx={{
          WebkitBoxFlex: "1",
          WebkitFlex: "1 1 auto",
          msFlex: "1 1 auto",
          flex: "1 1 auto",
          WebkitBoxAlign: "center",
          WebkitAlignItems: "center",
          msFlexAlign: "center",
          alignItems: "center",
          WebkitBoxPack: "center",
          WebkitJustifyContent: "center",
          msFlexPack: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <Typography variant="h1" sx={NavItems}>
          Flower shop
        </Typography>
        <Typography variant="h1" sx={NavItems}>
          Coffee & Bistro
        </Typography>
        <Typography variant="h1" sx={NavItems}>
          ABOUT US
        </Typography>
        <Typography variant="h1" sx={NavItems}>
          Contacts
        </Typography>
      </Stack>
    </Stack>
  );
}
