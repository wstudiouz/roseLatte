import { COLORS } from "@/ts/Consts";
import { Stack } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Stack component={"body"} sx={{ backgroundColor: COLORS.BLACK }}>
        <Main />
        <NextScript />
      </Stack>
    </Html>
  );
}
