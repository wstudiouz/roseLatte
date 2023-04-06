import { theme } from "@/config/theme";
import { Box, SvgIcon } from "@mui/material";
import { Stack, SxProps } from "@mui/system";
import { useState } from "react";
import CarouselItem from "./CarouselItem";

interface ComponentProps {
  sx?: SxProps;
  items: string[];
  show?: number; //nechtadan ko'rinishi default 1ta
  infinite?: boolean; // oxiriga borganda boshiga qaytishi default false ya'ni qaytmaydi
  activeIndex?: number; //birinchi arrayni qaysi elementi active bo'lsin default 1;
}

export default function CarouselContainer({
  sx,
  items,
  activeIndex,
  show,
  infinite,
}: ComponentProps) {
  const [active, setActive] = useState<number>(activeIndex || 0);

  const ChangeActive = (type: number, num?: number) => {
    if (type === 1) {
      if (!infinite && active === 0) {
        return;
      }
      if (infinite && active === 0) {
        setActive(items.length - 1);
        return;
      }
      setActive(active - 1);
      return;
    }
    if (type === 2) {
      if (!infinite && active === items.length - 1) {
        return;
      }
      if (infinite && active === items.length - 1) {
        setActive(0);
        return;
      }
      setActive(active + 1);
      return;
    }
    setActive(num || 0);
  };
  return (
    <Stack sx={{ ...sx }}>
      <Stack
        sx={{
          width:"100%",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
        }}
      >
        {/* karousel item uchun joy */}
        {items.map((e, ind) => (
          <Stack key={ind} sx={{width:"500px"}}>
            <CarouselItem
              active={ind === active || ind === active + 1}
              image={e}
            />
          </Stack>
        ))}
      </Stack>
      <Stack
        sx={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        {/* kontrol panel uhcun joy */}
        <Stack onClick={() => ChangeActive(1)}>Oldingi</Stack>
        <Stack
          sx={{ width: "50%", flexDirection: "row", justifyContent: "center" }}
        >
          {items.map((_, ind) => (
            <Box
              component="span"
              key={ind}
              onClick={() => ChangeActive(3, ind)}
              sx={{
                margin: "0 15px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background:
                  active === ind
                    ? theme.palette.text.secondary
                    : theme.palette.background.default,
                "&:hover": {
                  background: theme.palette.text.secondary,
                },
              }}
            ></Box>
          ))}
        </Stack>
        <Stack onClick={() => ChangeActive(2)}>Keyingi</Stack>
      </Stack>
    </Stack>
  );
}
