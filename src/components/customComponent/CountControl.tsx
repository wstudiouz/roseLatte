import { theme } from "@/config/theme";
import { Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type CounterProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

type CountProps = {
  count: number;
};
export function Decrement({ count, setCount }: CounterProps) {
  return (
    <Typography
      variant="h4"
      sx={{
        color: theme.palette.background.default,
        margin: "0 3px",
        cursor: "pointer",
      }}
      onClick={() => count > 1 && setCount((prev) => prev - 1)}
    >
      -
    </Typography>
  );
}

export function Increment({ count, setCount }: CounterProps) {
  return (
    <Typography
      variant="h4"
      sx={{
        color: theme.palette.background.default,
        margin: "0 3px",
        cursor: "pointer",
      }}
      onClick={() => count < 20 && setCount((prev) => prev + 1)}
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
