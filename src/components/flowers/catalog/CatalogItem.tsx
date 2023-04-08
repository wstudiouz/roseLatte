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
        margin: "0 67px",
        border: active ? "2px solid rgba(236, 159, 182, 0.35)" : "none",
        padding: active ? "25px 37px" : 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "capitalize",
        color: theme.palette.text.primary,
        cursor: "pointer",
        transition: "all 0.4s ease",
      }}
    >
      {title}
    </Typography>
  );
}
