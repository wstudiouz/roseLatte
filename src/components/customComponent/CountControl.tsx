import { COLORS } from "@/ts/Consts";
import { Typography } from "@mui/material";

type CountProps = {
  count: number;
};
export function Decrement() {
  return (
    <Typography
      variant="h2"
      sx={{
        color: COLORS.WHITE,
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
      variant="h2"
      sx={{
        color: COLORS.WHITE,
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
      variant="h2"
      sx={{
        color: COLORS.WHITE,
        margin: "0 3px",
      }}
    >
      {count}
    </Typography>
  );
}
