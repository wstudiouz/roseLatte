import { Stack, SxProps } from "@mui/system";
import Image from "next/image";
import { CSSProperties } from "react";

interface HeroProps {
  sx: SxProps;
  alt?: string;
  src: string;
  width?: number;
  height?: number;
  imageStyle?: CSSProperties;
}

export default function CustomImage({
  sx,
  alt,
  src,
  width,
  height,
  imageStyle,
}: HeroProps) {
  return (
    <Stack
      sx={{
        zIndex: 0,
        ...sx,
      }}
    >
      <Image
        src={src}
        alt={alt || "this is picture"}
        width={width || 300}
        height={height || 300}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          ...imageStyle,
        }}
        priority
      />
    </Stack>
  );
}
