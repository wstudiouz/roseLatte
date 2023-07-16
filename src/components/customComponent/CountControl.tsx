import { theme } from "@/config/theme";
import { Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type CountProps = {
  count: number;
};
export function Decrement() {
  return (
    <Typography
      variant="h4"
      sx={{
        color: theme.palette.background.default,
        margin: "0 3px",
        cursor: "pointer",
      }}
    >
      -
    </Typography>
  );
}

export function Increment() {
  return (
    <Typography
      variant="h4"
      sx={{
        color: theme.palette.background.default,
        margin: "0 3px",
        cursor: "pointer",
      }}
    >
      +
    </Typography>
  );
}

export function ViewCount({ count }: CountProps) {
  return (
    <Typography
      variant="h4"
      sx={{
        color: theme.palette.background.default,
        margin: "0 3px",
      }}
    >
      {count}
    </Typography>
  );
}
