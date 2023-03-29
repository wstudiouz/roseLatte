import { Stack, SxProps } from "@mui/system";
import Image from "next/image";

interface HeroProps {
  sx: SxProps;
  alt?: string;
  src: string;
  width?: number;
  height?: number;
}

export default function CustomImage({ sx, alt, src, width, height }: HeroProps) {
  return (
    <Stack sx={sx}>
      <Image src={src} alt={alt || "this is picture"} width={width || 300} height={height || 300} priority/>
    </Stack>
  );
}
