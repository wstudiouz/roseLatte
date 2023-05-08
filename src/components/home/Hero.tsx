import { theme } from "@/config/theme";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useMemo, useState } from "react";
import CustomImage from "../customComponent/CustomImage";
import { Z_INDEX } from "@/ts/Consts";
import { CursorManager } from "@/ts/CursorManager";

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
  return (
    <Stack
      onMouseEnter={() => {
        if (isHeaderActive == false) setShow(true);
        cursor?.setImg(first ? "/images/butterfly.gif" : "/images/coffee.gif");
      }}
      onMouseLeave={() => {
        setShow(false);
        cursor?.removeImg();
      }}
      sx={{
        width: isHeaderActive ? "25vw" : show ? "65vw" : "50vw",
        position: "relative",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        transition: `all 1s ease ${isHeaderActive ? 0 : 0.2}s`,
        padding: "35px",
      }}
    >
      <CustomImage
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: Z_INDEX.homeImage,
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
          background: show ? "rgb(0 0 0 / 0%)" : "rgb(0 0 0 / 40%)",
          transition: "background 1s ease",
          zIndex: Z_INDEX.homeOverlay,
        }}
      ></Stack>
      <Stack sx={{ zIndex: Z_INDEX.homeText }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: isHeaderActive ? "40px" : "80px",
            transition: `font-size 1s ease ${isHeaderActive ? 0 : 0.2}s`,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="H4Roboto"
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
            width: "160px",
            height: "80px",
            margin: "0 auto",
            border: `2px solid ${theme.palette.text.primary}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Learn more
        </Typography>
      </Stack>
      {first ? (
        <Typography
          variant="H4Roboto"
          sx={{
            position: "absolute",
            zIndex: Z_INDEX.homeText,
            bottom: 20,
            left: 20,
            fontSize: isHeaderActive ? "15px" : "25px",
            transition: `font-size 1s ease ${isHeaderActive ? 0 : 0.2}s`,
          }}
        >
          The 1st Floristic Cafe & Bistro in Prague
        </Typography>
      ) : (
        <></>
      )}
    </Stack>
  );
}
