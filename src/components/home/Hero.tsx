import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import { useContext, useMemo, useState } from "react";
import CustomImage from "../customComponent/CustomImage";
import { COLORS, Z_INDEX } from "@/ts/Consts";
import { CursorManager } from "@/ts/CursorManager";
import translate from "@/ts/utils/translate";
import { HeaderContext } from "@/context/headerContext";

interface HeroProps {
  title: string;
  link: string;
  imageSrc: string;
  isHeaderActive: boolean;
  first?: boolean;
}

export default function Hero({
  title,
  link,
  imageSrc,
  isHeaderActive,
  first,
}: HeroProps) {
  const [show, setShow] = useState<boolean>(false);
  const cursor = useMemo(() => CursorManager.instance.cursor, []);
  const { lang } = useContext(HeaderContext);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Stack
      onMouseEnter={() => {
        if (isHeaderActive == false && md) setShow(true);
        cursor?.setImg(first ? "/images/butterfly.gif" : "/images/coffee.gif");
      }}
      onMouseLeave={() => {
        setShow(false);
        cursor?.removeImg();
      }}
      sx={{
        width: { md: isHeaderActive ? "25vw" : show ? "65vw" : "50vw" },
        position: "relative",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        transition: `all 1s ease ${isHeaderActive ? 0 : 0.2}s`,
        padding: "35px",
        height: "100dvh",
      }}
    >
      <CustomImage
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: { md: Z_INDEX.homeImage },
          transform: show ? "scale(1.1)" : "scale(1)",
          transition: "transform 1s ease .2s",
        }}
        imageStyle={{ width: "100vw" }}
        src={imageSrc}
        alt={title}
        width={700}
        height={300}
      />
      <Stack
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: show ? "rgb(0 0 0 / 0%)" : "rgb(0 0 0 / 45%)",
          transition: "background 1s ease",
          zIndex: { md: Z_INDEX.homeOverlay, xs: 1 },
        }}
      ></Stack>
      <Stack sx={{ zIndex: { md: Z_INDEX.homeText, xs: 1 } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { md: isHeaderActive ? "40px" : "80px", xs: "50px" },
            transition: `font-size 1s ease ${isHeaderActive ? 0 : 0.2}s`,
            whiteSpace: "nowrap",
            cursor: "default",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="H4Roboto"
          component={Link}
          href={first ? "/flowers" : "/cafe"}
          onMouseEnter={() => {
            cursor?.removeImg();
            cursor?.setText("Learn more");
          }}
          onMouseLeave={() => {
            cursor?.removeText();
            cursor?.setImg(
              first ? "/images/butterfly.gif" : "/images/coffee.gif"
            );
          }}
          sx={{
            width: { md: "160px", xs: "120px" },
            height: { md: "80px", xs: "60px" },
            margin: "0 auto",
            border: `2px solid ${COLORS.PINK}`,
            color: COLORS.WHITE,
            cursor: "pointer",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: { xs: "20px", md: 0 },
          }}
        >
          {translate("header.more", lang)}
        </Typography>
      </Stack>
      {first && (
        <Typography
          variant="H4Roboto"
          sx={{
            position: "absolute",
            zIndex: { md: Z_INDEX.homeText, xs: 2 },
            bottom: 20,
            left: 20,
            fontSize: isHeaderActive ? "15px" : "25px",
            transition: `font-size 1s ease ${isHeaderActive ? 0 : 0.2}s`,
          }}
        >
          {translate("header.first", lang)}
        </Typography>
      )}
    </Stack>
  );
}
