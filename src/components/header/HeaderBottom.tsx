import { COLORS, Z_INDEX } from "@/ts/Consts";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

interface ComponentProps {
  active: boolean;
}

export default function HeaderBottom({ active }: ComponentProps) {
  const NavItems = {
    color: COLORS.BLACK,
    position: "relative",
    display: "inline-block",
    WebkitTransition: "all 0.5s ease-in-out",
    transition: `all 0.5s ease-in-out ${active ? 0.3 : 0}s`,
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
    opacity: active ? 1 : 0,
    transform: active ? "translate(0px,0px)" : "translate(0px,60px)",
  };
  const router = useRouter();
  return (
    <>
      <Stack
        sx={{
          position: "fixed",
          width: active ? (router.pathname === "/" ? "50%" : "100%") : 0,
          top: "0",
          left: "50%",
          bottom: "0",
          WebkitTransform: "translateX(-50%)",
          transform: "translateX(-50%)",
          backgroundColor: COLORS.WHITE_BACKGROUNDW,
          zIndex: Z_INDEX.bottomHeader,
          overflow: "hidden",
          boxShadow: "inset .5px 0 0 0 #103a3a, inset -.5px 0 0 0 #103a3a",
          transition: `width 1s ease ${active ? 0 : 0.2}s`,
        }}
      >
        <Stack
          sx={{
            width: "100vw",
            position: "fixed",
            top: "50%",
            left: "50%",
            WebkitTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            opacity: active ? 0.3 : 0,
            marginTop: "2.09vw",
            transition: "opacity 0.5s ease",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "15vw",
              strokeWidth: ".5px",
              textTransform: "uppercase",
              opacity: 0.4,
              color: COLORS.BLACK,
              width: "90%",
              margin: "0 auto",
              lineHeight: "80%",
            }}
          >
            Rose{router.pathname === "/" && <br />} Latte
          </Typography>
        </Stack>
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
          zIndex: Z_INDEX.botttomHeaderItem,
          width: "100vw",
          position: "fixed",
          top: 0,
          height: "100vh",
        }}
      >
        <Typography variant="h1" sx={NavItems}>
          Flower Shop
        </Typography>
        <Typography variant="h1" sx={NavItems}>
          Coffee & Bistro
        </Typography>
        <Typography variant="h1" sx={NavItems}>
          About Us
        </Typography>
        <Typography variant="h1" sx={NavItems}>
          Contacts
        </Typography>
      </Stack>
    </>
  );
}
