import { theme } from "@/config/theme";
import { Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface ComponentProps {
  title: string;
  active?: boolean;
  setActiveCatalog: Dispatch<SetStateAction<number>>;
  index: number;
}

export default function CatalogItem({
  title,
  active,
  setActiveCatalog,
  index,
}: ComponentProps) {
  return (
    <Typography
      onClick={() => setActiveCatalog(index)}
      variant="h4"
      sx={{
        height: "80px",
        margin: "0 37px",
        border: `2px solid ${active ? "rgba(236, 159, 182, 0.35)" : "inherit"}`,
        padding: "25px 37px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "capitalize",
        color: theme.palette.text.primary,
        cursor: "pointer",
      }}
    >
      {title}
    </Typography>
  );
}
