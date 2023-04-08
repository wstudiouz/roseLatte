import { Stack, Typography } from "@mui/material";
import Catalogs from "./Catalogs";
import { theme } from "@/config/theme";
import SliderItem from "./SliderItem";
import { useState } from "react";
import Popup from "./Popup";

export default function Catalog() {
  const [active, setActive] = useState<number>(0);
  const [popup, setPopup] = useState<boolean>(false);
  const flowers = [
    { img: "/images/flower1.png", title: "spring bouquet" },
    { img: "/images/flower1.png", title: "wedding with peony" },
  ];
  return (
    <Stack
      sx={{
        padding: "100px",
        background:
          "linear-gradient(137.15deg, #000000 37.02%, rgba(112, 80, 88, 0.844253) 72.16%, #EC9FB6 103.65%)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          margin: "30px auto",
          textTransform: "capitalize",
          color: theme.palette.background.default,
        }}
      >
        catalog of bouquets
      </Typography>
      <Catalogs />
      <Stack sx={{ marginTop: "50px", flexDirection: "row" }}>
        {flowers.map((e, ind) => (
          <Stack key={ind} sx={{ width: "380px", marginLeft: "10px" }}>
            <SliderItem
              bgImg={e.img}
              title={e.title}
              active={ind === active}
              setPopup={setPopup}
            />
          </Stack>
        ))}
      </Stack>
      {popup ? <Popup setPopup={setPopup} /> : <></>}
    </Stack>
  );
}
