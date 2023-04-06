import CustomImage from "@/components/customComponent/CustomImage";
import { SxProps } from "@mui/material";

interface ComponentProps {
  src: string;
  sx?: SxProps;
}

export default function CardImage({ src, sx }: ComponentProps) {
  return (
    <CustomImage
      src={src}
      sx={{ width: "100%", height: "500px", transition: "all 1s ease" }}
    />
  );
}
