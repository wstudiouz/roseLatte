import { Grid, Stack } from "@mui/material";
import TopFlowerCard from "./TopFlowerCard";

export default function TopFlowers() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "auto",
        padding: "100px 76px",
        background:
          "linear-gradient(137.15deg, #000000 37.02%, rgba(112, 80, 88, 0.844253) 72.16%, #EC9FB6 103.65%)",
      }}
    >
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={5}>
          <TopFlowerCard
            title="wedding bouquets"
            num={1}
            bgImg="/images/flower1.png"
          />
        </Grid>
        <Grid item xs={6}>
          <TopFlowerCard
            title="wedding bouquets"
            num={2}
            bgImg="/images/flower1.png"
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
