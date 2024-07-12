import { HeaderContext } from "@/context/headerContext";
import { COLORS, Z_INDEX } from "@/ts/Consts";
import translate from "@/ts/utils/translate";
import { Stack, SxProps, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useContext } from "react";
import LangSelect from "./langSelect";

interface ComponentProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderBottom({ active, setActive }: ComponentProps) {
  const NavItems: SxProps = {
    color: COLORS.BLACK,
    position: "relative",
    display: "inline-block",
    transition: `all 0.5s ease-in-out ${active ? 0.3 : 0}s`,
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
    opacity: active ? 1 : 0,
    transform: active ? "translate(0px,0px)" : "translate(0px,60px)",
    textDecoration: "none",
  };
  const router = useRouter();
  const { lang, setLang } = useContext(HeaderContext);
  const handleLanguageChange = (selectedLang: string) => {
    localStorage.setItem("lang", selectedLang);
    setLang(selectedLang);
  };
  return (
    <>
      <Stack
        sx={{
          position: "fixed",
          width: {
            md: active ? (router.pathname === "/" ? "50%" : "100%") : 0,
            xs: active ? "100%" : 0,
          },
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
              display: { md: "block", xs: "none" },
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
          width: "100vw",
          height: "100svh",
          position: "fixed",
          zIndex: Z_INDEX.botttomHeaderItem,
          top: "0",
          visibility: active ? "visible" : "hidden",
        }}
      >
        <Typography
          component={Link}
          href={"/flowers"}
          variant="h1"
          sx={NavItems}
          onClick={() => setActive(false)}
        >
          {translate("header.shop", lang)}
        </Typography>
        <Typography
          component={Link}
          onClick={() => setActive(false)}
          href={"/cafe"}
          variant="h1"
          sx={NavItems}
        >
          {translate("header.cafe", lang)}
        </Typography>
        <Typography
          component={Link}
          onClick={() => setActive(false)}
          href={"/about"}
          variant="h1"
          sx={NavItems}
        >
          {translate("header.about", lang)}
        </Typography>
        <Typography
          component={Link}
          onClick={() => setActive(false)}
          href={"/contacts"}
          variant="h1"
          sx={NavItems}
        >
          {translate("header.contact", lang)}
        </Typography>
        <Stack sx={{ display: { xs: "flex", md: "none" }, flexDirection: "row", marginTop: "10px" }}>
          <Typography
            variant="h4"
            sx={{ ...NavItems, margin: "0 5px 0 5px", fontFamily: "monospace", fontSize: 40 }}
            onClick={() => handleLanguageChange("en")}
          >
            En
          </Typography>
          <Typography
            variant="h4"
            sx={{ ...NavItems, margin: "0 5px 0 5px", fontFamily: "monospace", fontSize: 40 }}
            onClick={() => handleLanguageChange("cz")}
          >
            Cz
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
