import { COLORS } from "@/ts/Consts";
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
        height: { xs: "40px", sm: "50px", md: "60px", lg: "70px", xl: "80px" },
        margin: { xs: "0 10px", sm: "0 20px", md: "0 30px", lg: "0 40px" },
        border: `2px solid ${active ? "rgba(236, 159, 182, 0.35)" : "inherit"}`,
        padding: "25px 37px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "capitalize",
        color: COLORS.PINK,
        cursor: "pointer",
      }}
    >
      {title}
    </Typography>
  );
}
