import { Grid, Stack, Typography } from "@mui/material";
import CustomImage from "../../customComponent/CustomImage";
import { theme } from "@/config/theme";
import { Dispatch, SetStateAction } from "react";

interface ComponentProps {
  bgImg: string;
  title: string;
  active?: boolean;
  setPopup: Dispatch<SetStateAction<boolean>>;
}

export default function SliderItem({
  bgImg,
  title,
  active,
  setPopup,
}: ComponentProps) {
  return (
    <Stack
      onClick={() => setPopup(true)}
      sx={{
        width: active ? "100%" : "90%",
        height: "600px",
        position: "relative",
        transition: "all 0.4 ease",
      }}
    >
      <CustomImage
        src={bgImg}
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 0,
          left: 0,
          top: 0,
        }}
      />
      <Stack
        sx={{
          zIndex: 1,
          height: "100%",
          position: "relative",
          padding: "30px",
          justifyContent: "end",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "capitalize",
            color: theme.palette.background.default,
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Stack>
  );
}
