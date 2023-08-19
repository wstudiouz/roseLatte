import { Stack } from "@mui/material";
import CatalogItem from "./CatalogItem";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  FlowerCatalogueData,
  FlowerCatalogueDataAttributes,
} from "@/ts/REST/api/generated";
import { HeaderContext } from "@/context/headerContext";

type Props = {
  catalogues: FlowerCatalogueData[];
  activeCatalog: number;
  setActiveCatalog: Dispatch<SetStateAction<number>>;
};

export default function Catalogs({
  catalogues,
  activeCatalog,
  setActiveCatalog,
}: Props) {
  const { lang } = useContext(HeaderContext);
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: "25px",
      }}
    >
      {catalogues.map((e, ind) => {
        const title =
          e.attributes?.[
            `title_${lang}` as keyof FlowerCatalogueDataAttributes
          ] ?? "";
        return (
          <CatalogItem
            key={ind}
            title={String(title)}
            setActiveCatalog={setActiveCatalog}
            index={ind}
            active={ind === activeCatalog}
          />
        );
      })}
    </Stack>
  );
}
