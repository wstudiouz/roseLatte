const { Stack, Typography } = require("@mui/material");
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import Card from "../../../public/images/card.svg";
import { theme } from "@/config/theme";
import { useState } from "react";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const BurgerLine = {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    WebkitTransform: active
      ? "translate(-50%, -50%) rotate(45deg)"
      : "translate(-50%, -50%)",
    transform: active
      ? "translate(-50%, -50%) rotate(45deg)"
      : "translate(-50%, -50%)",
    width: { xs: "35px", md: "50px" },
    height: "2px",
    backgroundColor: "#000000",
    willChange: "transform",
    WebkitTransition: "all .5s ease",
    transition: "all .5s ease",
    marginTop: active ? 0 : "-5px",
  };
  return (
    <Stack>
      <Stack
        sx={{
          zIndex: 5,
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
          <Image src={Logo} alt="logo" width={189} height={59} />
          <Typography
            variant="H4Roboto"
            sx={{
              textTransform: "uppercase",
              color: active ? "red" : theme.palette.background.default,
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
            onClick={() => setActive(!active)}
            sx={{
              borderRadius: "50%",
              backgroundColor: "#fff",
              width: { xs: "60px", md: "90px" },
              height: { xs: "60px", md: "90px" },
              position: "relative",
              cursor: "pointer",
              WebkitTransition: "all .5s ease",
              transition: "all .5s ease",
              "&:after": BurgerLine,
              "&:before": {
                ...BurgerLine,
                marginTop: active ? 0 : "5px",
                WebkitTransform: active
                  ? "translate(-50%, -50%) rotate(-45deg)"
                  : "translate(-50%, -50%)",
                transform: active
                  ? "translate(-50%, -50%) rotate(-45deg)"
                  : "translate(-50%, -50%)",
              },
              "&:hover": {
                WebkitTransform: active ? "rotate(180deg)" : 0,
                transform: active ? "rotate(180deg)" : 0,
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
              color: theme.palette.background.default,
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
      <HeaderBottom active={active} />
    </Stack>
  );
};

export default Header;
