import { theme } from "@/config/theme";
import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";

interface HeroProps {
  bgImg: string;
  title: string;
  name?: string;
  right?: boolean;
  stars?: number;
  active?: boolean;
}

export default function Reviewer({
  bgImg,
  title,
  name,
  right,
  stars,
  active,
}: HeroProps) {
  return (
    <Stack
      sx={{
        width: active ? "410px" : "300px",
        height: active ? "312px" : "269px",
        left: "515px",
        top: "3961px",
        border: "2px solid rgba(236, 159, 182, 0.35)",
      }}
    >
      <Typography
        variant="SmallRoboto"
        sx={{ color: theme.palette.text.primary }}
      >
        {title}
      </Typography>
      <Stack
        sx={{ display: "flex", justifyContent: "left", flexDirection: "row" }}
      >
        <Typography
          sx={{
            fontFamily: "'Athena'",
            textTransform: "capitalize",
          }}
        >
          {name}
        </Typography>
      </Stack>
    </Stack>
  );
}
