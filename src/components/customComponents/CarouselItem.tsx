import { Stack } from "@mui/system";
import Image from "next/image";
import React, { FC, ReactElement } from "react";
import CustomImage from "./customImage";

type ItemProps = {
  image: string;
  active: boolean;
  page?: number; // keyinchalik boshqa pagelarga ham shu itemni moslash uchun
};

const CarouselItem: FC<ItemProps> = ({ image, active, page }): ReactElement => {
  return (
    <Stack
      sx={{
        transition: {
          md: "transform 600ms ease-in-out, opacity 600ms ease-in-out",
        },
        opacity: active ? "1" : "0",
        width: "100%",
        transform: { md: active ? "scale(1)" : "scale(0.7)" },
      }}
    >
      <CustomImage src={image} sx={{ width: "100%", height: "300px" }} />
    </Stack>
  );
};

export default CarouselItem;
