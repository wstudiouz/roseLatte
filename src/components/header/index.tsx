import {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import HeaderBottom from "./HeaderBottom";
import { COLORS, FlexBox, Z_INDEX } from "@/ts/Consts";
import { HeaderContext } from "@/context/headerContext";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { Stack, Typography } from "@mui/material";
import translate from "@/ts/utils/translate";
import { ShoppingBag } from "../cards";
import LangSelect from "./langSelect";
import CardBadge from "./cardBadge";

type SvgProps = {
  active: boolean
}

const LogoSvg = ({ active }: SvgProps): ReactElement => {
  return (
    <svg
      width="186"
      height="32"
      viewBox="0 0 186 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ transition: "all 0.5s ease" }}
        d="M0.56 31V29.12L2.16 28.88C2.58667 28.8 2.86667 28.64 3 28.4C3.13333 28.1333 3.2 27.6533 3.2 26.96V15.24C3.2 14.36 3.12 13.7467 2.96 13.4C2.82667 13.0533 2.45333 12.8533 1.84 12.8L0.24 12.6L0.44 10.6L8.36 10.12L8.84 10.44L9.08 14.36H9.2C9.78667 12.92 10.6267 11.8133 11.72 11.04C12.84 10.2667 14.0533 9.88 15.36 9.88C16.8 9.88 17.9333 10.28 18.76 11.08C19.5867 11.8533 20 12.9067 20 14.24C20 15.0133 19.88 15.6933 19.64 16.28C19.4 16.8667 19.0267 17.32 18.52 17.64C18.0133 17.9333 17.3733 18.08 16.6 18.08C15.6133 18.08 14.88 17.88 14.4 17.48C13.92 17.0533 13.68 16.5333 13.68 15.92C13.68 15.6533 13.72 15.3867 13.8 15.12C13.88 14.8533 14.0133 14.5467 14.2 14.2C14.3867 13.8267 14.64 13.3733 14.96 12.84C14.3467 12.6267 13.72 12.6133 13.08 12.8C12.4667 12.96 11.88 13.2933 11.32 13.8C10.7867 14.28 10.3467 14.9067 10 15.68C9.68 16.4533 9.52 17.3333 9.52 18.32V27.04C9.52 27.68 9.58667 28.1333 9.72 28.4C9.85333 28.64 10.16 28.7733 10.64 28.8L13.4 29.12V31H0.56ZM32.2166 31.56C30.0032 31.56 28.0832 31.16 26.4566 30.36C24.8566 29.5333 23.6166 28.3467 22.7366 26.8C21.8832 25.2267 21.4566 23.3333 21.4566 21.12C21.4566 18.6667 21.9232 16.6 22.8566 14.92C23.8166 13.24 25.1499 11.9867 26.8566 11.16C28.5899 10.3067 30.6166 9.88 32.9366 9.88C35.0432 9.88 36.8832 10.2667 38.4566 11.04C40.0299 11.7867 41.2566 12.9333 42.1366 14.48C43.0432 16 43.4966 17.92 43.4966 20.24C43.4966 22.6133 43.0432 24.6533 42.1366 26.36C41.2299 28.04 39.9366 29.3333 38.2566 30.24C36.5766 31.12 34.5632 31.56 32.2166 31.56ZM32.7766 29.16C33.7099 29.16 34.4699 28.8933 35.0566 28.36C35.6432 27.8 36.0699 26.9333 36.3366 25.76C36.6032 24.56 36.7366 23 36.7366 21.08C36.7366 19.4267 36.6299 18.04 36.4166 16.92C36.2299 15.7733 35.9366 14.8667 35.5366 14.2C35.1632 13.5067 34.6966 13 34.1366 12.68C33.6032 12.36 32.9899 12.2 32.2966 12.2C31.4166 12.2 30.6699 12.4533 30.0566 12.96C29.4432 13.44 28.9766 14.24 28.6566 15.36C28.3366 16.48 28.1766 17.9867 28.1766 19.88C28.1766 22.0667 28.3499 23.8533 28.6966 25.24C29.0699 26.6 29.5899 27.6 30.2566 28.24C30.9499 28.8533 31.7899 29.16 32.7766 29.16ZM47.2184 31.6L46.6184 24.2L48.7784 24.04C49.2051 25.2933 49.7118 26.3067 50.2984 27.08C50.8851 27.8533 51.5651 28.4267 52.3384 28.8C53.1118 29.1467 53.9651 29.32 54.8984 29.32C56.0451 29.32 56.9251 29.0667 57.5384 28.56C58.1784 28.0267 58.4984 27.2667 58.4984 26.28C58.4984 25.64 58.3118 25.1467 57.9384 24.8C57.5918 24.4267 57.0718 24.1067 56.3784 23.84C55.7118 23.5733 54.8718 23.32 53.8584 23.08C52.8984 22.8133 51.9918 22.52 51.1384 22.2C50.2851 21.8533 49.5384 21.44 48.8984 20.96C48.2584 20.48 47.7518 19.88 47.3784 19.16C47.0318 18.4133 46.8584 17.5067 46.8584 16.44C46.8584 15.08 47.1784 13.9067 47.8184 12.92C48.4584 11.9333 49.3518 11.1867 50.4984 10.68C51.6718 10.1467 53.0451 9.88 54.6184 9.88C55.6851 9.88 56.6451 10.0133 57.4984 10.28C58.3518 10.5467 59.0984 10.88 59.7384 11.28L60.1384 9.88H61.8984L62.3784 16.6L60.2184 16.44C59.7118 14.8933 59.0051 13.7467 58.0984 13C57.2184 12.2267 56.1518 11.84 54.8984 11.84C53.8584 11.84 53.0451 12.0667 52.4584 12.52C51.8718 12.9467 51.5784 13.5733 51.5784 14.4C51.5784 15.0133 51.7518 15.5067 52.0984 15.88C52.4718 16.2533 53.0051 16.5733 53.6984 16.84C54.3918 17.1067 55.2318 17.3733 56.2184 17.64C57.2851 17.9333 58.2451 18.2533 59.0984 18.6C59.9518 18.9467 60.6984 19.3733 61.3384 19.88C61.9784 20.36 62.4584 20.96 62.7784 21.68C63.1251 22.4 63.2984 23.2933 63.2984 24.36C63.2984 25.8533 62.9518 27.1467 62.2584 28.24C61.5651 29.3067 60.6051 30.1333 59.3784 30.72C58.1518 31.28 56.7251 31.56 55.0984 31.56C53.9784 31.56 52.9251 31.4133 51.9384 31.12C50.9784 30.8533 50.1518 30.48 49.4584 30L48.9784 31.6H47.2184ZM76.3078 31.56C74.1211 31.56 72.2545 31.1467 70.7078 30.32C69.1611 29.4667 67.9878 28.2667 67.1878 26.72C66.3878 25.1467 65.9878 23.2933 65.9878 21.16C65.9878 18.76 66.4545 16.72 67.3878 15.04C68.3478 13.36 69.6545 12.08 71.3078 11.2C72.9611 10.32 74.8411 9.88 76.9478 9.88C78.6811 9.88 80.1878 10.1867 81.4678 10.8C82.7478 11.3867 83.7345 12.2533 84.4278 13.4C85.1478 14.5467 85.5078 15.92 85.5078 17.52C85.5078 18.0533 85.4811 18.5867 85.4278 19.12C85.4011 19.6533 85.3211 20.1867 85.1878 20.72H72.5878C72.6145 22.1333 72.8545 23.3333 73.3078 24.32C73.7611 25.28 74.4011 26.0133 75.2278 26.52C76.0545 27 77.0411 27.24 78.1878 27.24C79.3878 27.24 80.4811 27.0533 81.4678 26.68C82.4545 26.3067 83.4411 25.72 84.4278 24.92L85.7478 26.4C84.7611 27.9733 83.4545 29.2267 81.8278 30.16C80.2278 31.0933 78.3878 31.56 76.3078 31.56ZM72.5878 18.6H79.3478C79.3745 18.2533 79.4011 17.9067 79.4278 17.56C79.4545 17.1867 79.4678 16.8267 79.4678 16.48C79.4678 14.9333 79.2278 13.8 78.7478 13.08C78.2678 12.36 77.5478 12 76.5878 12C75.7878 12 75.0945 12.2267 74.5078 12.68C73.9478 13.1333 73.5078 13.8533 73.1878 14.84C72.8678 15.8 72.6678 17.0533 72.5878 18.6ZM96.4128 31V29.12L98.0928 28.88C98.5728 28.8 98.8795 28.64 99.0128 28.4C99.1461 28.16 99.2128 27.6667 99.2128 26.92V5.24C99.2128 4.36 99.1195 3.77333 98.9328 3.48C98.7461 3.16 98.3328 2.96 97.6928 2.88L96.2528 2.68L96.4128 0.679999L105.093 0.319999L105.573 0.719999V27C105.573 27.64 105.639 28.0933 105.773 28.36C105.933 28.6267 106.266 28.8 106.773 28.88L108.413 29.12V31H96.4128ZM116.872 31.56C115.005 31.56 113.538 31.08 112.472 30.12C111.432 29.1333 110.912 27.8 110.912 26.12C110.912 24.6 111.298 23.4 112.072 22.52C112.845 21.64 114.072 20.9867 115.752 20.56C117.458 20.1067 119.685 19.8267 122.432 19.72V16.04C122.432 15.0267 122.312 14.2133 122.072 13.6C121.858 12.96 121.498 12.4933 120.992 12.2C120.512 11.9067 119.832 11.76 118.952 11.76C118.312 11.76 117.632 11.8667 116.912 12.08C116.218 12.2667 115.685 12.5333 115.312 12.88C115.712 13.4133 116.018 13.88 116.232 14.28C116.472 14.6533 116.632 14.9733 116.712 15.24C116.818 15.48 116.872 15.7067 116.872 15.92C116.872 16.48 116.618 16.9733 116.112 17.4C115.632 17.8 114.925 18 113.992 18C113.058 18 112.352 17.7733 111.872 17.32C111.418 16.8667 111.192 16.2667 111.192 15.52C111.192 14.5333 111.565 13.6133 112.312 12.76C113.058 11.9067 114.098 11.2133 115.432 10.68C116.765 10.1467 118.312 9.88 120.072 9.88C122.018 9.88 123.632 10.1467 124.912 10.68C126.192 11.1867 127.152 12.0133 127.792 13.16C128.458 14.3067 128.792 15.7867 128.792 17.6V26.6C128.792 27.24 128.912 27.72 129.152 28.04C129.392 28.3333 129.765 28.48 130.272 28.48C130.565 28.48 130.845 28.4533 131.112 28.4C131.378 28.32 131.658 28.2267 131.952 28.12L132.352 29.6C131.738 30.24 130.992 30.72 130.112 31.04C129.258 31.3867 128.392 31.56 127.512 31.56C126.178 31.56 125.138 31.24 124.392 30.6C123.645 29.96 123.165 29.1067 122.952 28.04C122.605 28.76 122.152 29.3867 121.592 29.92C121.032 30.4533 120.365 30.8533 119.592 31.12C118.845 31.4133 117.938 31.56 116.872 31.56ZM119.512 28.6C120.125 28.6 120.645 28.4667 121.072 28.2C121.498 27.9067 121.832 27.52 122.072 27.04C122.312 26.5333 122.432 25.96 122.432 25.32V21.52C121.205 21.5467 120.192 21.6933 119.392 21.96C118.618 22.2267 118.058 22.64 117.712 23.2C117.365 23.76 117.192 24.5067 117.192 25.44C117.192 26.4533 117.378 27.24 117.752 27.8C118.152 28.3333 118.738 28.6 119.512 28.6ZM141.223 31.56C139.943 31.56 138.849 31.3467 137.943 30.92C137.036 30.4933 136.343 29.8267 135.863 28.92C135.409 28.0133 135.183 26.8533 135.183 25.44V12.8H132.383V10.84C133.583 10.68 134.529 10.36 135.223 9.88C135.916 9.37333 136.436 8.64 136.783 7.68C137.156 6.72 137.423 5.49333 137.583 4L140.943 3.56L141.543 3.88V10.44H147.103V12.8H141.543V24.44C141.543 25.5067 141.716 26.32 142.063 26.88C142.409 27.44 143.023 27.72 143.903 27.72C144.516 27.72 145.103 27.6133 145.663 27.4C146.249 27.16 146.809 26.84 147.343 26.44L148.263 28C147.409 29.0933 146.409 29.96 145.263 30.6C144.143 31.24 142.796 31.56 141.223 31.56ZM157.746 31.56C156.466 31.56 155.373 31.3467 154.466 30.92C153.56 30.4933 152.866 29.8267 152.386 28.92C151.933 28.0133 151.706 26.8533 151.706 25.44V12.8H148.906V10.84C150.106 10.68 151.053 10.36 151.746 9.88C152.44 9.37333 152.96 8.64 153.306 7.68C153.68 6.72 153.946 5.49333 154.106 4L157.466 3.56L158.066 3.88V10.44H163.626V12.8H158.066V24.44C158.066 25.5067 158.24 26.32 158.586 26.88C158.933 27.44 159.546 27.72 160.426 27.72C161.04 27.72 161.626 27.6133 162.186 27.4C162.773 27.16 163.333 26.84 163.866 26.44L164.786 28C163.933 29.0933 162.933 29.96 161.786 30.6C160.666 31.24 159.32 31.56 157.746 31.56ZM176.386 31.56C174.199 31.56 172.333 31.1467 170.786 30.32C169.239 29.4667 168.066 28.2667 167.266 26.72C166.466 25.1467 166.066 23.2933 166.066 21.16C166.066 18.76 166.533 16.72 167.466 15.04C168.426 13.36 169.733 12.08 171.386 11.2C173.039 10.32 174.919 9.88 177.026 9.88C178.759 9.88 180.266 10.1867 181.546 10.8C182.826 11.3867 183.813 12.2533 184.506 13.4C185.226 14.5467 185.586 15.92 185.586 17.52C185.586 18.0533 185.559 18.5867 185.506 19.12C185.479 19.6533 185.399 20.1867 185.266 20.72H172.666C172.693 22.1333 172.933 23.3333 173.386 24.32C173.839 25.28 174.479 26.0133 175.306 26.52C176.133 27 177.119 27.24 178.266 27.24C179.466 27.24 180.559 27.0533 181.546 26.68C182.533 26.3067 183.519 25.72 184.506 24.92L185.826 26.4C184.839 27.9733 183.533 29.2267 181.906 30.16C180.306 31.0933 178.466 31.56 176.386 31.56ZM172.666 18.6H179.426C179.453 18.2533 179.479 17.9067 179.506 17.56C179.533 17.1867 179.546 16.8267 179.546 16.48C179.546 14.9333 179.306 13.8 178.826 13.08C178.346 12.36 177.626 12 176.666 12C175.866 12 175.173 12.2267 174.586 12.68C174.026 13.1333 173.586 13.8533 173.266 14.84C172.946 15.8 172.746 17.0533 172.666 18.6Z"
        fill={active ? COLORS.BLACK : COLORS.WHITE}
      />
    </svg>
  );
};

const CardSvg = ({ active }: SvgProps): ReactElement => {
  return (
    <svg
      width="28"
      height="30"
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ transition: "all 0.5s ease" }}
        d="M14 1.875C15.2432 1.875 16.4355 2.36886 17.3146 3.24794C18.1936 4.12701 18.6875 5.3193 18.6875 6.5625V7.5H9.3125V6.5625C9.3125 5.3193 9.80636 4.12701 10.6854 3.24794C11.5645 2.36886 12.7568 1.875 14 1.875ZM20.5625 7.5V6.5625C20.5625 4.82202 19.8711 3.15282 18.6404 1.92211C17.4097 0.691404 15.7405 0 14 0C12.2595 0 10.5903 0.691404 9.35961 1.92211C8.1289 3.15282 7.4375 4.82202 7.4375 6.5625V7.5H0.875V26.25C0.875 27.2446 1.27009 28.1984 1.97335 28.9016C2.67661 29.6049 3.63044 30 4.625 30H23.375C24.3696 30 25.3234 29.6049 26.0266 28.9016C26.7299 28.1984 27.125 27.2446 27.125 26.25V7.5H20.5625ZM2.75 9.375H25.25V26.25C25.25 26.7473 25.0525 27.2242 24.7008 27.5758C24.3492 27.9275 23.8723 28.125 23.375 28.125H4.625C4.12772 28.125 3.65081 27.9275 3.29917 27.5758C2.94754 27.2242 2.75 26.7473 2.75 26.25V9.375Z"
        fill={active ? COLORS.BLACK : COLORS.WHITE}
      />
    </svg>
  );
};

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
  const [hidden, setHidden] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

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


  return (
    <>
      {isClient ? (
        <Stack>
          <Stack
            sx={{
              zIndex: Z_INDEX.topHeader,
              width: "100%",
              padding: { xs: "10px 20px", md: "25px 75px" },
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
                width: { xs: "calc(100% - 80px)", md: "42%" },
                height: "59px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Stack component={Link} href="/" sx={{ display: "block" }}>
                <LogoSvg active={openHeader} />
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
                  display: { md: "block", xs: "none" },
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
                flexDirection: "row-reverse",
                alignItems: "center"
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
              <CardBadge
                setDrawerOpen={setDrawerOpen}
                icon={<CardSvg active={openHeader} />}
                badgeSx={{ display: { xs: "block", md: "none" }, marginRight: "10px" }}
                position="left"
              />
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
                  display: { md: "block", xs: "none" },
                }}
              >
                {translate("header.bar", lang)}
              </Typography>
              <Stack
                sx={{
                  ...FlexBox,
                  flexDirection: "row",
                }}
              >
                {lang && (
                  <LangSelect />
                )}

                <CardBadge setDrawerOpen={setDrawerOpen} icon={<CardSvg active={openHeader} />} />
              </Stack>
            </Stack>
          </Stack>
          <HeaderBottom active={openHeader} setActive={setOpenHeader} />

          <ShoppingBag drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
