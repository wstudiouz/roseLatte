import { theme } from "@/config/theme";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import CustomImage from "../customComponents/customImage";

interface HeroProps {
  title: string;
  link: string;
  imageSrc: string;
  isActive: boolean;
  first?: boolean;
}

export default function Hero({
  title,
  link,
  imageSrc,
  isActive,
  first,
}: HeroProps) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Stack
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      sx={{
        width: show ? "70vw" : "50vw",
        position: "relative",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 1.3s ease",
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
        }}
        imageStyle={{ width: "100vw" }}
        src={imageSrc}
        alt={title}
        width={700}
        height={300}
      />
      <Stack sx={{ zIndex: 1 }}>
        <Typography variant="h2">{title}</Typography>
        <Typography
          variant="H4Roboto"
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
          sx={{ position: "absolute", zIndex: 1, bottom: 20, left: 20 }}
        >
          The 1st Floristic Cafe & Bistro in Prague
        </Typography>
      ) : (
        <></>
      )}
    </Stack>
  );
}
