const { Stack, Typography } = require("@mui/material");
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import Card from "../../../public/images/card.svg";
import { theme } from "@/config/theme";
import { useContext } from "react";
import HeaderBottom from "./HeaderBottom";
import { COLORS, Z_INDEX } from "@/ts/Consts";
import { HeaderContext } from "@/context/headerContext";

const Header = () => {
  const { openHeader, setOpenHeader } = useContext(HeaderContext);
  const BurgerLine = {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    WebkitTransform: openHeader
      ? "translate(-50%, -50%) rotate(45deg)"
      : "translate(-50%, -50%)",
    transform: openHeader
      ? "translate(-50%, -50%) rotate(45deg)"
      : "translate(-50%, -50%)",
    width: { xs: "35px", md: "50px" },
    height: "2px",
    backgroundColor: COLORS.BLACK,
    willChange: "transform",
    WebkitTransition: "all .5s ease",
    transition: "all .5s ease",
    marginTop: openHeader ? 0 : "-5px",
  };
  return (
    <Stack>
      <Stack
        sx={{
          zIndex: Z_INDEX.topHeader,
          width: "100%",
          padding: { xs: "15px 30px", md: "25px 75px" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          flexDirection: { xs: "column-reverse", md: "row" },
          position: "fixed",
          top: 0,
        }}
      >
        <Stack
          sx={{
            width: { xs: "calc(100% - 90px)", md: "42%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image src={Logo} color="black" alt="logo" width={189} height={59} />
          <Typography
            variant="H4Roboto"
            sx={{
              textTransform: "uppercase",
              color: openHeader ? COLORS.BLACK : COLORS.WHITE,
              transition: "color 0.5s ease",
              cursor: "pointer",
            }}
          >
            Flowers
          </Typography>
        </Stack>
        <Stack
          sx={{
            position: {
              xs: "absolute",
              md: "relative",
            },
            right: { xs: 30, md: 0 },
          }}
        >
          <Stack
            onClick={() => setOpenHeader(!openHeader)}
            sx={{
              borderRadius: "50%",
              backgroundColor: "#fff",
              width: { xs: "60px", md: "90px" },
              height: { xs: "60px", md: "90px" },
              position: "relative",
              cursor: "pointer",
              WebkitTransition: "all .5s ease",
              transition: "all .5s ease",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              "&:after": BurgerLine,
              "&:before": {
                ...BurgerLine,
                marginTop: openHeader ? 0 : "5px",
                WebkitTransform: openHeader
                  ? "translate(-50%, -50%) rotate(-45deg)"
                  : "translate(-50%, -50%)",
                transform: openHeader
                  ? "translate(-50%, -50%) rotate(-45deg)"
                  : "translate(-50%, -50%)",
              },
              "&:hover": {
                transform: openHeader ? "scale(1.05)" : 0,
              },
            }}
          ></Stack>
        </Stack>
        <Stack
          sx={{
            width: { xs: "100%", md: "42%" },
            display: "flex",
            justifyContent: { xs: "space-evenly", md: "space-between" },
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="H4Roboto"
            sx={{
              textTransform: "uppercase",
              color: openHeader ? COLORS.BLACK : COLORS.WHITE,
              transition: "color 0.5s ease",
              cursor: "pointer",
            }}
          >
            Bar
          </Typography>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Typography
              variant="H4Roboto"
              sx={{
                textTransform: "uppercase",
                color: theme.palette.background.default,
              }}
            >
              En
            </Typography>
            <Image src={Card} alt="logo" width={26} height={30} />
          </Stack>
        </Stack>
      </Stack>
      <HeaderBottom active={openHeader} />
    </Stack>
  );
};

export default Header;