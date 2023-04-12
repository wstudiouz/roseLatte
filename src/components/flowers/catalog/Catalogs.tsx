import { Stack } from "@mui/material";
import CatalogItem from "./CatalogItem";
import { useState } from "react";

export default function Catalogs() {
  const catalogs = ["wedding", "boxes", "art", "composition", "mono"];
  const [activeCatalog, setActiveCatalog] = useState(0);

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        overflowX: "auto",
        marginBottom: "10px",
        "&::-webkit-scrollbar": {
          width: " 8px",
          height: "8px",
          backgroundColor: "#f5f5f5",
          paddingTop: "10px",
          borderRadius: "5px",
        },
      }}
    >
      {catalogs.map((e, ind) => (
        <CatalogItem
          key={ind}
          title={e}
          setActiveCatalog={setActiveCatalog}
          index={ind}
          active={ind === activeCatalog}
        />
      ))}
    </Stack>
  );
}
