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
        marginTop: "25px",
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
