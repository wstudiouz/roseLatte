const { Stack, Typography } = require("@mui/material");
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import Card from "../../../public/images/card.svg";
import { theme } from "@/config/theme";
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import HeaderBottom from "./HeaderBottom";
import { COLORS, Z_INDEX } from "@/ts/Consts";
import { HeaderContext } from "@/context/headerContext";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { Badge, Box, IconButton } from "@mui/material";
import translate from "@/ts/utils/translate";
import { useRouter } from "next/router";

const Header = () => {
  const { openHeader, setOpenHeader, lang, setLang, cards } =
    useContext(HeaderContext);
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
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const update = useCallback(() => {
    if (scrollY.get() > scrollY.getPrevious()) {
      setHidden(true);
    } else if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(false);
    }
  }, [scrollY]);

  useLayoutEffect(() => {
    return scrollY.onChange(() => update());
  }, [scrollY, update]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    initial: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -15 },
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    localStorage.setItem("lang", selectedValue);
    setLang(selectedValue);
  };
  const router = useRouter();
  if (isClient)
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
          initial="initial"
          animate={hidden ? "hidden" : "visible"}
          variants={variants}
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.4 }}
          component={motion.div}
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
            <Stack component={Link} href="/">
              <Image
                src={Logo}
                color="black"
                alt="logo"
                width={189}
                height={59}
              />
            </Stack>
            <Typography
              component={Link}
              variant="H4Roboto"
              sx={{
                textTransform: "uppercase",
                color: openHeader ? COLORS.BLACK : COLORS.WHITE,
                transition: "color 0.5s ease",
                cursor: "pointer",
                textDecoration: "none",
              }}
              href="/flowers"
            >
              {translate("header.flower", lang)}
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
              component={Link}
              href="/cafe"
              sx={{
                textTransform: "uppercase",
                color: openHeader ? COLORS.BLACK : COLORS.WHITE,
                transition: "color 0.5s ease",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              {translate("header.bar", lang)}
            </Typography>
            <Stack
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {lang && (
                <Box
                  component="select"
                  sx={{
                    textTransform: "uppercase",
                    border: "none",
                    outline: "none",
                    background: "none",
                    color: theme.palette.background.default,
                    fontSize: "25px",
                  }}
                  value={lang}
                  onChange={handleLanguageChange}
                  suppressHydrationWarning
                >
                  <Box component="option" value="en" sx={{ color: "black" }}>
                    En
                  </Box>
                  <Box component="option" value="cz" sx={{ color: "black" }}>
                    Cz
                  </Box>
                </Box>
              )}
              <IconButton
                aria-label="cart"
                onClick={() => router.push("/cards")}
              >
                <Badge
                  badgeContent={cards.length}
                  color="info"
                  sx={{
                    "& .MuiBadge-badge": {
                      right: -3,
                      top: 13,
                      border: (theme) =>
                        `2px solid ${theme.palette.background.paper}`,
                      padding: "0 4px",
                    },
                    zIndex: -1,
                  }}
                >
                  <Image src={Card} alt="logo" width={26} height={30} />
                </Badge>
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <HeaderBottom active={openHeader} setActive={setOpenHeader} />
      </Stack>
    );
  else return <></>;
};

export default Header;
